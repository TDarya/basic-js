const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  const seasons = {
    'winter' : [0,1,11],
    'spring' : [2,3,4],
    'summer' : [5,6,7],
    'autumn' : [8,9,10]
  };
 // if (date.getMonth() == 'undefined'){return 'Invalid date!'}
//if (typeof date !== 'object' ||) {return 'Unable to determine the time of year!'} 
if (typeof date !== 'object' || typeof date.getMonth !== 'function') {return 'Unable to determine the time of year!'} else {
  for (let month in seasons){
    for (let intMonth of seasons[month]){
      if(date.getMonth() == intMonth) {
        return month;
      }
    }
  }
}
}

module.exports = {
  getSeason
};
