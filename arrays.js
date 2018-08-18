var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]


function addElementToBeginningOfArray(array,element) {
  //add element to beginning of array 
  //return array without modifying original
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  //alters the original array that's passed in
  //modifies original array
  array.unshift(element);
  return array

}

function addElementToEndOfArray(array,element){
  //doesn't alter original array
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array,element){
  //alters original array
  array.push(element);
  return array
}

function accessElementInArray(array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  //removes first element and returns mutated array
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array.slice[1]
  return array
}