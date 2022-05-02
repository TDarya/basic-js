const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  let num = Number(sampleActivity);
  if (typeof sampleActivity !== 'string') {return false} else {
    if (isFinite(sampleActivity) === false) {return false} else {
      if (num < 0){return false} else {
       // num = Math.ceil(num);
        let years =  Math.ceil((Math.log(MODERN_ACTIVITY/num))/(Math.log(2)/HALF_LIFE_PERIOD));
        if (years == Infinity || years < 0) {return false} else {
          return years;
      }
      }
    }
  }
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
