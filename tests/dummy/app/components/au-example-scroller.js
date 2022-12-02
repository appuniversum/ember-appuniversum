import Component from '@glimmer/component';
import { modifier } from 'ember-modifier';

export default class AuExampleScroller extends Component {
  exampleScrollerModifier = modifier(
    (element) => {
      const child = element.children[0];

      const scrollerDimensions = {
        width: element.offsetWidth,
        height: element.offsetHeight,
      };

      const childDimensions = {
        width: child.offsetWidth,
        height: child.offsetHeight,
      };

      if (childDimensions.width > scrollerDimensions.width) {
        element.scrollLeft =
          (childDimensions.width - scrollerDimensions.width) / 2;
      }

      if (childDimensions.height > scrollerDimensions.height) {
        element.scrollTop =
          (childDimensions.height - scrollerDimensions.height) / 2;
      }
    },
    { eager: false }
  );
}
