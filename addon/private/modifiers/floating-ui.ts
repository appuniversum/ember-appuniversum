import { assert } from '@ember/debug';
import {
  autoUpdate,
  computePosition,
  flip,
  hide,
  offset,
  arrow,
} from '@floating-ui/dom';
import { modifier } from 'ember-modifier';
import { merge } from 'merge-anything';

type FloatingUiElement = HTMLElement | string;
type TearDown = () => unknown;

type PositionalArgs =
  | [FloatingUiElement]
  | [FloatingUiElement, FloatingUiElement];

interface NamedArgs {
  // These aren't all the options, but the only ones we are using right now
  defaultPlacement?: 'bottom' | 'bottom-start' | 'bottom-end';
  options?: {
    arrow?: {
      offset?: number;
      padding?: number;
      position?: string | number;
    };
    floater?: {
      offset?: number;
    };
  };
}

export default modifier(floatingUi);

function floatingUi(
  floatingElement: HTMLElement,
  positional: PositionalArgs,
  { defaultPlacement = 'bottom-start', options = {} }: NamedArgs,
): TearDown {
  const [maybeReferenceElement, maybeArrowElement] = positional;
  const referenceElement =
    typeof maybeReferenceElement === 'string'
      ? document.querySelector<HTMLElement>(maybeReferenceElement)
      : maybeReferenceElement;

  const arrowElement =
    typeof maybeArrowElement === 'string'
      ? document.querySelector<HTMLElement>(maybeArrowElement)
      : maybeArrowElement;

  const defaultOptions = {
    floater: {
      offset: 6,
    },
    arrow: {
      offset: 4,
      padding: 3,
      position: 'min(15%, 12px)',
    },
  };
  options = merge(defaultOptions, options);

  assert(
    `FloatingUI (modifier): No reference element was defined.`,
    referenceElement instanceof HTMLElement,
  );

  assert(
    `FloatingUI (modifier): The reference and floating elements cannot be the same element.`,
    floatingElement !== referenceElement,
  );

  assert(
    `FloatingUI (modifier): @placement must start with either 'bottom' or 'top'.`,
    defaultPlacement.startsWith('bottom') || defaultPlacement.startsWith('top'),
  );

  Object.assign(floatingElement.style, {
    position: 'fixed',
    top: '0',
    left: '0',
  });

  const middleware = [
    offset(options.floater?.offset),
    flip(),
    hide({ strategy: 'referenceHidden' }),
    hide({ strategy: 'escaped' }),
  ];

  if (arrowElement) {
    middleware.push(
      arrow({
        element: arrowElement,
        padding: options.arrow?.padding,
      }),
    );
  }

  const update = async () => {
    const { x, y, placement, middlewareData } = await computePosition(
      referenceElement,
      floatingElement,
      {
        middleware,
        placement: defaultPlacement,
      },
    );

    Object.assign(floatingElement.style, {
      transform: `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`,
      visibility: middlewareData.hide?.referenceHidden ? 'hidden' : 'visible',
    });

    if (middlewareData.arrow) {
      const { x } = middlewareData.arrow;
      const [side, alignment] = placement.split('-') as [
        'top' | 'bottom',
        'string' | undefined,
      ];
      const isAligned = alignment != null;

      const unsetSides = {
        top: '',
        bottom: '',
        left: '',
        right: '',
      };

      const rotation = {
        top: '180deg',
        bottom: '0deg',
      }[side];

      Object.assign(arrowElement!.style, {
        ...unsetSides,
        transform: `rotate(${rotation})`,
      });

      if (isAligned) {
        const crossSide = {
          'top-start': 'left',
          'top-end': 'right',
          'bottom-start': 'left',
          'bottom-end': 'right',
        }[placement as 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'];

        Object.assign(arrowElement!.style, {
          [crossSide]:
            typeof options.arrow?.position === 'string'
              ? options.arrow.position
              : `${options.arrow?.position}px`,
        });
      } else {
        Object.assign(arrowElement!.style, {
          left: x != null ? `${x}px` : '',
        });
      }

      const mainSide = {
        top: 'bottom',
        bottom: 'top',
      }[side];

      if (options.arrow?.offset) {
        Object.assign(arrowElement!.style, {
          [mainSide]: `${-options.arrow?.offset}px`,
        });
      }
    }
  };

  const cleanup = autoUpdate(referenceElement, floatingElement, update);

  return () => {
    cleanup();
  };
}
