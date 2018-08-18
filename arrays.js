var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]


function addElementToBeginningOfArray(array,element) {
  //add element to beginning of arrau and return whole array
  //returns new array without modifying original
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  //alters the original array that's passed in
  array.unshift(element);
  return array

}

function addElementToEndOfArray(array,element){
  //doesn't alter original array
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array,element){
  //alters originalarray
  array.push(element);
  return array
}

