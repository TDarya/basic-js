const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const result = [];
  let  nameTeam = '';
  if (typeof members !== 'object' || members == null || members.length === 0) {return false} else { 
    for (let i = 0; i<members.length; i++){
      if (typeof members[i] == 'string'){
        result.push(members[i].trim().toUpperCase());
      }
    }
    result.sort();
    for (let i = 0; i<result.length; i++){
      nameTeam += result[i][0];
    }
    return nameTeam;
  }
} 

module.exports = {
  createDreamTeam
};
