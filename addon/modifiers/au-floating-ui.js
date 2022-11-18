import Modifier from 'ember-modifier';
import { assert } from '@ember/debug';
import { registerDestructor } from '@ember/destroyable';

import {
  autoUpdate,
  computePosition,
  flip,
  hide,
  offset,
  arrow,
} from '@floating-ui/dom';

import { merge } from 'merge-anything';

export default class AuFloatingUiModifier extends Modifier {
  modify(
    floatingElement,
    [_referenceElement, _arrowElement],
    { defaultPlacement = 'bottom-start', options = {}, middleware = [] }
  ) {
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
      `AuFloatingUI (modifier): No reference element was defined.`,
      referenceElement instanceof HTMLElement
    );

    assert(
      `AuFloatingUI (modifier): No floating element was defined.`,
      floatingElement instanceof HTMLElement
    );

    assert(
      `AuFloatingUI (modifier): The reference and floating elements cannot be the same element.`,
      floatingElement !== _referenceElement
    );

    assert(
      `AuFloatingUI (modifier): @placement must start with either 'bottom' or 'top'.`,
      defaultPlacement.startsWith('bottom') ||
        defaultPlacement.startsWith('top')
    );

    assert(
      `AuFloatingUI (modifier): @middleware must be an array of one or more objects.`,
      Array.isArray(middleware)
    );

    Object.assign(floatingElement.style, {
      position: 'fixed',
      top: '0',
      left: '0',
    });

    let update = async () => {
      let { x, y, placement, middlewareData } = await computePosition(
        referenceElement,
        floatingElement,
        {
          middleware: [
            offset(options.floater.offset),
            flip(),
            arrow({
              element: arrowElement,
              padding: options.arrow.padding,
            }),
            ...middleware,
            hide({ strategy: 'referenceHidden' }),
            hide({ strategy: 'escaped' }),
          ],
          placement: defaultPlacement,
        }
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
          [mainSide]: `-${options.arrow.offset}px`,
        });
      }
    };

    let cleanup = autoUpdate(referenceElement, floatingElement, update);

    registerDestructor(this, cleanup);
  }
}
