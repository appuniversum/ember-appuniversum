import { modifier } from 'ember-modifier';
import { assert } from '@ember/debug';

import {
  autoUpdate,
  computePosition,
  flip,
  hide,
  offset,
  arrow,
} from '@floating-ui/dom';

import { merge } from 'merge-anything';

export default modifier(
  (
    floatingElement,
    [_referenceElement, _arrowElement],
    { defaultPlacement = 'bottom-start', options = {} },
  ) => {
    const referenceElement =
      typeof _referenceElement === 'string'
        ? document.querySelector(_referenceElement)
        : _referenceElement;

    const arrowElement =
      typeof _arrowElement === 'string'
        ? document.querySelector(_arrowElement)
        : _arrowElement;

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
      defaultPlacement.startsWith('bottom') ||
        defaultPlacement.startsWith('top'),
    );

    Object.assign(floatingElement.style, {
      position: 'fixed',
      top: '0',
      left: '0',
    });

    let middleware = [
      offset(options.floater.offset),
      flip(),
      hide({ strategy: 'referenceHidden' }),
      hide({ strategy: 'escaped' }),
    ];

    if (arrowElement) {
      middleware.push(
        arrow({
          element: arrowElement,
          padding: options.arrow.padding,
        }),
      );
    }

    let update = async () => {
      let { x, y, placement, middlewareData } = await computePosition(
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
        const [side, alignment] = placement.split('-');
        const isAligned = alignment != null;

        const unsetSides = {
          top: '',
          bottom: '',
          left: '',
          right: '',
        };

        const mainSide = {
          top: 'bottom',
          bottom: 'top',
        }[side];

        const rotation = {
          top: '180deg',
          bottom: '0deg',
        }[side];

        const crossSide = {
          'top-start': 'left',
          'top-end': 'right',
          'bottom-start': 'left',
          'bottom-end': 'right',
        }[placement];

        Object.assign(arrowElement.style, {
          ...unsetSides,
          transform: `rotate(${rotation})`,
        });

        if (isAligned) {
          Object.assign(arrowElement.style, {
            [crossSide]:
              typeof options.arrow.position === 'string'
                ? options.arrow.position
                : `${options.arrow.position}px`,
          });
        } else {
          Object.assign(arrowElement.style, {
            left: x != null ? `${x}px` : '',
          });
        }

        Object.assign(arrowElement.style, {
          [mainSide]: `${-options.arrow.offset}px`,
        });
      }
    };

    let cleanup = autoUpdate(referenceElement, floatingElement, update);

    return () => {
      cleanup();
    };
  },
  { eager: false },
);
