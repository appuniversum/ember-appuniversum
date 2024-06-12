import Component from '@glimmer/component';

export interface AuTooltipSignature {
  Args: {
    text: string;
    tooltipText: string;
  };
  Element: HTMLDivElement;
}

export default class AuTooltip extends Component<AuTooltipSignature> {
  <template>
    <div class="au-c-tooltip">
      <p class="au-u-h4 au-u-margin-right-tiny au-u-margin-bottom-none">
        {{@text}}
      </p>
      <span class="au-c-tooltip-text">{{@tooltipText}}
      </span>
    </div>
  </template>
}
