import { hash } from '@ember/helper';
import { on } from '@ember/modifier';
import { isTesting } from '@embroider/macros';
import {
  autoUpdate,
  computePosition,
  flip,
  hide,
  offset,
  type Placement,
} from '@floating-ui/dom';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { ModifierLike, WithBoundArgs } from '@glint/template';
import { modifier } from 'ember-modifier';

// We use a small delay when opening and closing the tooltip for a couple of reasons:
// - When opening this ensures that users intentionally open the tooltip instead of just shortly moving their mouse over the target
// - When closing it allows users to move their mouse to the tooltip contents without closing the tooltip
const TOOLTIP_DELAY = isTesting() ? 0 : 300;

export interface AuTooltipSignature {
  Args: {
    placement?: 'top' | 'right' | 'bottom' | 'left';
  };
  Blocks: {
    default: [
      {
        Content: WithBoundArgs<
          typeof TooltipContent,
          | 'targetElement'
          | 'isShown'
          | 'placement'
          | 'show'
          | 'hide'
          | 'hideInstantly'
        >;
        isShown: boolean;
        target: ModifierLike<{ Element: HTMLElement }>;
      },
    ];
  };
}

export default class AuTooltip extends Component<AuTooltipSignature> {
  // We use declare here, so TS doesn't consider `undefined` as part of the type since the initialisation happens after the constructor.
  @tracked declare targetElement: HTMLElement;
  @tracked isShown: boolean = false;
  delayTimeoutId?: number;

  get placement() {
    return this.args.placement || 'top';
  }

  show = () => {
    this.clearDelayTimer();
    this.delayTimeoutId = setTimeout(() => {
      this.isShown = true;
      this.clearDelayTimer();
    }, TOOLTIP_DELAY);
  };

  hide = () => {
    this.clearDelayTimer();
    this.delayTimeoutId = setTimeout(() => {
      this.isShown = false;
      this.clearDelayTimer();
    }, TOOLTIP_DELAY);
  };

  hideInstantly = () => {
    this.isShown = false;
    this.clearDelayTimer();
  };

  clearDelayTimer() {
    if (this.delayTimeoutId) {
      clearTimeout(this.delayTimeoutId);
      this.delayTimeoutId = undefined;
    }
  }

  target = modifier((element: HTMLElement) => {
    this.targetElement = element;

    element.addEventListener('mouseenter', this.show);
    element.addEventListener('focus', this.show);
    element.addEventListener('mouseleave', this.hide);
    element.addEventListener('blur', this.hide);

    return () => {
      element.removeEventListener('mouseenter', this.show);
      element.removeEventListener('focus', this.show);
      element.removeEventListener('mouseleave', this.hide);
      element.removeEventListener('blur', this.hide);
    };
  });

  <template>
    {{yield
      (hash
        Content=(component
          TooltipContent
          targetElement=this.targetElement
          placement=this.placement
          isShown=this.isShown
          show=this.show
          hide=this.hide
          hideInstantly=this.hideInstantly
        )
        isShown=this.isShown
        target=this.target
      )
    }}
  </template>
}

interface TooltipContentSignature {
  Args: {
    targetElement: HTMLElement;
    isShown: boolean;
    placement: NonNullable<AuTooltipSignature['Args']['placement']>;
    show: () => void;
    hide: () => void;
    hideInstantly: () => void;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

class TooltipContent extends Component<TooltipContentSignature> {
  closeOnEscapePress = modifier(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.args.hideInstantly();
      }
    };

    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  });

  <template>
    {{#if @isShown}}
      <div
        class="au-c-tooltip"
        role="tooltip"
        ...attributes
        {{floatingUi @targetElement defaultPlacement=@placement}}
        {{on "mouseenter" @show}}
        {{on "mouseleave" @hide}}
        {{this.closeOnEscapePress}}
        {{maybeLargeTooltip}}
      >
        <div class="au-c-tooltip__arrow"></div>
        <div class="au-c-tooltip__content">{{yield}}</div>
      </div>
    {{/if}}
  </template>
}

type TearDown = () => unknown;

interface NamedArgs {
  defaultPlacement: Placement;
}

const floatingUi = modifier(function floatingUi(
  tooltipElement: HTMLElement,
  positional: [HTMLElement],
  { defaultPlacement }: NamedArgs,
): TearDown {
  const [referenceElement] = positional;

  Object.assign(tooltipElement.style, {
    position: 'fixed',
    top: '0',
    left: '0',
  });

  const middleware = [
    offset(6),
    flip(),
    hide({ strategy: 'referenceHidden' }),
    hide({ strategy: 'escaped' }),
  ];

  const update = async () => {
    const { x, y, placement, middlewareData } = await computePosition(
      referenceElement,
      tooltipElement,
      {
        middleware,
        placement: defaultPlacement,
      },
    );

    Object.assign(tooltipElement.style, {
      transform: `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`,
      visibility: middlewareData.hide?.referenceHidden ? 'hidden' : 'visible',
    });

    tooltipElement.setAttribute('data-tooltip-placement', placement);
  };

  const cleanup = autoUpdate(
    referenceElement,
    tooltipElement,
    () => void update(),
  );

  return () => {
    cleanup();
  };
});

// The Webuniversum tooltip has some logic to switch to the "large" styling if there are more than 80 characters.
const LARGE_TOOLTIP_BREAKPOINT = 80;
const maybeLargeTooltip = modifier(function (tooltipElement: HTMLElement) {
  const contentElement = tooltipElement.querySelector<HTMLElement>(
    '.au-c-tooltip__content',
  );
  if (contentElement?.innerText?.length ?? 0 > LARGE_TOOLTIP_BREAKPOINT) {
    tooltipElement.classList.add('au-c-tooltip--large');
  }
});
