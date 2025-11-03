import { assert } from '@ember/debug';
import {
  autoUpdate,
  computePosition,
  flip,
  hide,
  offset,
  arrow,
  shift,
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
  defaultPlacement?: 'top' | 'right' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left';
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
  { defaultPlacement = 'bottom', options = {} }: NamedArgs,
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
      offset: 0,
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
    `FloatingUI (modifier): @placement must start with either 'top', 'right', 'bottom' or 'left'.`,
    defaultPlacement.startsWith('top') || defaultPlacement.startsWith('right') || defaultPlacement.startsWith('bottom') || defaultPlacement.startsWith('left'),
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
    shift(),
  ];

  if (arrowElement) {
    middleware.push(
      arrow({
        element: arrowElement,
        padding: options.arrow?.padding,
      }),
    );
  }

  const update = () => {
    void computePosition(referenceElement, floatingElement, {
      middleware,
      placement: defaultPlacement,
    }).then(({ x, y, placement, middlewareData }) => {

      Object.assign(floatingElement.style, {
        transform: `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`,
        visibility: middlewareData.hide?.referenceHidden ? 'hidden' : 'visible',
      });

      if (middlewareData.arrow) {
        const { x, y } = middlewareData.arrow;
        const [side, alignment] = placement.split('-') as [
          'top' | 'right' | 'bottom' | 'left',
          'start' | 'end' | undefined,
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
          right: '270deg',
          bottom: '0deg',
          left: '90deg'
        }[side];

        Object.assign(arrowElement!.style, {
          ...unsetSides,
          transform: `rotate(${rotation})`,
        });

        if (isAligned) {
          const crossSide = {
            'top-start': 'left',
            'top-end': 'right',
            'right-start': 'top',
            'right-end': 'bottom',
            'bottom-start': 'left',
            'bottom-end': 'right',
            'left-start': 'top',
            'left-end': 'bottom',
          }[
            placement as 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end'
          ];

          Object.assign(arrowElement!.style, {
            [crossSide]:
              typeof options.arrow?.position === 'string'
                ? options.arrow.position
                : `${options.arrow?.position}px`,
          });
        } else {
          Object.assign(arrowElement!.style, {
            left: x != null ? `${x}px` : '',
            top: y != null ? `${y}px` : '',
          });
        }

        const mainSide = {
          top: 'bottom',
          right: 'left',
          bottom: 'top',
          left: 'right',
        }[side];

        if (typeof options.arrow?.offset !== 'undefined') {
          Object.assign(arrowElement!.style, {
            [mainSide]: `${-options.arrow?.offset}px`,
          });
        }
      }
    });
  };

  const cleanup = autoUpdate(referenceElement, floatingElement, update);

  return () => {
    cleanup();
  };
}
