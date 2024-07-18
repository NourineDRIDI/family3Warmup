/**
 * 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
 * counting(5); // => '1, 2, 3, 4, 5'
 * counting(1); // => '1'
 * counting(3); // => '1, 2, 3'
 */

let counting = number => {
  let result = "";
  for (let i = 1; i <= number; i++) {
    if (i === number) {
        return (result += i);
      }
    result += i + ", ";
  }
};

/**
 * 3-write a function called (midElement) that takes an array as an argument and returns the element that is located in the middle of that array.
 * @param {Array<any>} array
 * @return {any}
 */

let midElement = array => array.at(Math.round(array.length / 2) - 1);

/**
 * 4 - write a function called (sameLength) that takes array of strings and returns an array of the strings that have the same length
 * example :  ['hi','hello','welcome','hy'] ==> ["hi","hy"]
 *
 * @param {Array<string>} array
 * @return {Array<string>}
 */

let sameLength = function(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i].length === array[j].length) {
        arr.push(array[i], array[j]);
      }
    }
  }
  return arr;
};

/**
 * 5. Given an array of integers and an integer n.
 * find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
 * If n is not in the given array, return an empty array [].
 * Assume that n and all values in the given array will always be integers.
 * Example:
 * findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
 *
 * @param {Array} array
 * @param {number} n
 * @return {Array}
 */

let findAll = function(array, n) {};

// 6. write a function that takes a string as an argument
// and returns the string reversed word by word
// Example : reverseWord("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

let reverseWord = string => {};

//7.Write a function called sumOfFirstAndLast that
//takes a number as a parameter and returns the sum of the first and last digits. Please do this without turning the number into a string.

function sumOfFirstAndLast(number) {}

/**
 * 8 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
 * objKey({name:'ahmed',age:20}) ==> ['name','age']
 *
 * @function objKey
 * @param {Object} obj
 * @return {Array}
 */

let objKey = object => {
    let keys = []
    for(let key in object){
        keys.push(key)
    }
    return keys 
};

/**
 * 9 - Write a function named objLength to get the length of a JavaScript object
 * objLength({name:'ahmed',age:20}) ==> 2
 *
 * @function objLength
 * @param {Object} obj
 * @return number
 */
let objLength = obj => {
    return Object.keys(obj).length
};
