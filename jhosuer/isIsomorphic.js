function isIsomorphic(firstStr, secondStr) {
  //write your solution here
  let result = '';
  let newString = firstStr.toLowerCase().split(''), secondnewString = secondStr.toLowerCase().split('');
  let newObj = {}, secondNewObject = {};
  for (let index = 0; index < newString.length; index++) {
    if(newString[index] in newObj) {
      newObj[newString[index]] = newObj[newString[index]] + 1;
    }
    else {
      newObj[newString[index]] = 1;
    }
  }
  for (let secondIndex = 0; secondIndex < secondnewString.length; secondIndex++) {
    if(secondnewString[secondIndex] in secondNewObject) {
      secondNewObject[secondnewString[secondIndex]] = secondNewObject[secondnewString[secondIndex]] + 1;
    }
    else {
      secondNewObject[secondnewString[secondIndex]] = 1;
    }
  }
  let newObjTwo = Object.values(newObj);
  let secondNewObjectTwo = Object.values(secondNewObject);
  let truthyValue = [], falsyValue = [];
  for(let z = 0; z < newObjTwo.length; z++) {
    if(newObjTwo[z] == secondNewObjectTwo[z]) {
      truthyValue.push(newObjTwo)
    }
    else {
      falsyValue.push(-1);
    }
  }
  return !falsyValue.includes(-1);
}
module.exports = isIsomorphic;