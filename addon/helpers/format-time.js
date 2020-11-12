import { helper } from '@ember/component/helper';

export default helper(function formatTime([digit]) {
  if(!isNaN(digit)){
    if(digit.toString().length <= 1){
      return `0${digit}`
    } else {
      return digit
    }
  } else {
    return "00"
  }
});