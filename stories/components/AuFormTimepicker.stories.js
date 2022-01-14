import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuTimepicker',
  argTypes: {
    hoursLabel: { control: 'text', description:'Hours label' },
    minutesLabel: {control: 'text', description:'Minutes label'},
    secondsLabel: {control: 'text', description:'Seconds label'},
    nowLabel: {control: 'text', description:'Current time button label'},
    hours: {control: 'string', description:'Sets the hour value'},
    minutes: {control: 'string', description:'Sets the minutes value'},
    seconds: {control: 'string', description:' Sets the seconds value'},
    showSeconds: {control: 'boolean', description:'Wether the seconds input is shown'},
    showNow: {control: 'boolean', description:'Wether the now button is shown'},
    onChange: {control: 'object', description:'Gets called when a time value changes. Returns an object with all time values in an object'}
  },
};

const Template = (args) => ({
  template: hbs`
  <AuTimePicker
    @hoursLabel={{this.hoursLabel}}
    @minutesLabel={{this.minutesLabel}}
    @secondsLabel={{this.secondsLabel}}
    @nowLabel={{this.nowLabel}}
    @hours={{this.hours}}
    @minutes={{this.minutes}}
    @seconds={{this.seconds}}
    @showSeconds={{this.showSeconds}}
    @showNow={{this.showNow}}
    @onChange={{this.onChange}}
  />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  hoursLabel: "Uren",
  minutesLabel: "Minuten",
  secondsLabel: "Seconden",
  nowLabel: "Nu",
  hours: "",
  minutes: "",
  seconds: "",
  showSeconds: true,
  showNow: true,
  onChange: ""
};
