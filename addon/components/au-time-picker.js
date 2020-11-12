import Component from '@ember/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class AuTimePickerComponent extends Component {
  @tracked hourValue = 12;
  @tracked minuteValue = 0;
  @tracked secondValue = 0;

  @tracked keyCodes = [ 8 , 9, 13 , 33 , 34 , 37 , 39, 46 ]

  @action increment(elem){ 

    if(elem == "hourValue"){
      this[elem]++

      if(this[elem] >= 24){
        this[elem] = 24
      }
    }

    if(elem != "hourValue"){
      this[elem]++

      if(this[elem] == 61){
        this[elem] = 60
      }
    }
  }


  @action decrement(elem){

    if(elem == "hourValue"){
      this[elem]--

      if(this[elem] <= 1){
        this[elem] = 1
      }
    }

    if(elem != "hourValue"){
      this[elem]--

      if(this[elem] <= 0){
        this[elem] = 0
      }
    }
  }

  // Keyboard input

  @action setTimeValue(elem, e){

    if( e.keyCode == 38 ){
      this.increment(elem)

    } else if (e.keyCode == 40){
      this.decrement(elem)

    } else if(isNaN(parseFloat(e.key)) && this.keyCodes.indexOf(e.keyCode) == -1 ){
      e.preventDefault();

    } else if(e.target.value.length >= 2 && this.keyCodes.indexOf(e.keyCode) == -1) {
      e.preventDefault()

    } 
  }
}
