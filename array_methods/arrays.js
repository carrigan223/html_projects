// Instructions
// - Given the following 6 empty functions, add the right return statement to each of them to complete the activity
// Please do not change any of the function names

//This is your starting array
const array = [10, 10, 16, 12];

function returnFirst(arrPassedIn) {
  // return the first item from the array
  return arrPassedIn[0];

}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers(numbers), Increment all items in the array by
  return arr.map(x => x + 1);
  // return the array
}

function addItemToArray(arr, item) {
  // add the parameter item to the end of the array arr
  // return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the parameter item to the front of the array arr
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item)
  return arr
}

//uncomment these lines to check results in browser console
console.log("returnFirst result:" + returnFirst(tester))
console.log("returnLast result:" + returnLast(arr))
console.log("getArrayLength result:" + getArrayLength(arr))
console.log("incrementByOne result:" + incrementByOne(arr))
console.log("addItemToArray result:" + addItemToArray(arr, 10))
console.log("addItemToFront result:" + addItemToFront(arr, 10))

//////////////////////////////////
//don't change this line
if (typeof module !== 'undefined') {
  module.exports = {
    returnFirst,
    returnLast,
    getArrayLength,
    incrementByOne,
    addItemToArray,
    addItemToFront,
  };
}
Hi Arpita,

The error you are running into is due to the the data type you are returning from the function. 

Given the function getProduct, return an object with the following key: value properties

This line in the error message is telling you what it is expecting, you had done it right but you went a step to far.

return "id:" + objProd.id +" Serial:" + objProd.serialNumber + " price:" + objProd.price;

With the above line; as opposed to returning an Object you are taking the values of the keys in objProd and inserting them into a string,  What  the test is expecting is a data type of object not string.

If you try the return statement below i think it passed successfully for me.

return objProd;


Hope this helps.

Best Regards,
Andrew 