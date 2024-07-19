/** 1-write a closure function called Counter that have 2 behaviours and a state to check the counter and when invoked it increase or decrease the counter. 
//!! ps : the function should return an object ! 
ex : let myCount = Counter();
myCount.up() => 1 
myCount.up() => 2 
myCount.down() => 1 
myCount.counter => 1 
**/ 

let Counter = () => { 
    let myCount = {
    up: function=()=>  myCount = myCount +1,
    down : function
}
}


//2.Write a function to find the power of a number using a for loop.


function findPower(base, exponent) {
    let result = 1
    for (let i = 0; i < exponent; i++) {
        result **= base
    }
    return result
}

//3.Write a function to print all the even numbers befor the given parameter.

    function printEven(num) {
        for (let i = 0; i < num; i++) {
            if (i % 2 === 0) {
                console.log(i)
            }
        }
    }
  


/**
 *4- Title: Finding the Longest Word in a Sentence
 * 
 * Exercise Description:
 * 
 * You are developing a text analysis tool, and one of the features requested is to find the longest word in a given sentence.
 * Your goal is to write a JavaScript function that takes a string (a sentence) and returns the longest word in that string.
 * If there are multiple words with the same length, return the first one that appears.
 * 
 * Input and Output Examples:
 * 
 * Example 1:
 * Input: sentence = "The quick brown fox jumped over the lazy dog"
 * Output: "jumped"
 * Explanation: "jumped" is the longest word in the sentence.
 * 
 * Example 2:
 * Input: sentence = "May the force be with you"
 * Output: "force"
 * Explanation: "force" is the longest word in the sentence.
 * 
 * Example 3:
 * Input: sentence = "To be or not to be, that is the question"
 * Output: "question"
 * Explanation: "question" is the longest word in the sentence.
 * 
 * Example 4:
 * Input: sentence = "A journey of a thousand miles begins with a single step"
 * Output: "thousand"
 * explanation: "thousand" is the longest word in the sentence.
 */
let FindingTheLongestWord = (str) => {
    let words = str.split(" ")
    let longestWord = ""
    
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    
    return longestWord
}

/**
 * 5-Title: Sum of Array Pairs
 * 
 * Exercise Description:
 * 
 * You are developing a utility for a financial application where you need to analyze pairs of transactions. One of the features
 * requested is to find pairs of numbers in an array that add up to a specific target sum. Your goal is to write a JavaScript function
 * that takes an array of numbers and a target sum, and returns an array of all unique pairs of numbers that add up to the target sum.
 * Each pair should be represented as an array of two elements.
 * 
 * Input and Output Examples:
 * 
 * Example 1:
 * Input: arr = [1, 2, 3, 4, 5], target = 6
 * Output: [[1, 5], [2, 4]]
 * Explanation: The pairs 1+5 and 2+4 add up to the target sum of 6.
 * 
 * Example 2:
 * Input: arr = [2, 4, 3, 3, 5, 7], target = 6
 * Output: [[2, 4], [3, 3]]
 * Explanation: The pairs 2+4 and 3+3 add up to the target sum of 6.
 * 
 * Example 3:
 * Input: arr = [1, 1, 1, 1], target = 2
 * Output: [[1, 1]]
 * Explanation: The pair 1+1 adds up to the target sum of 2.
 * 
 * Example 4:
 * Input: arr = [1, 2, 3, 4, 5], target = 10
 * Output: []
 * explanation: There are no pairs that add up to the target sum of 10.
 */
let SumofArrayPairs = (arr, target) => {
    let pairs = []
    let seen = new Set()
    
    for (let num of arr) {
        let complement = target - num
        if (seen.has(complement)) {
            pairs.push([complement, num])
        }
        seen.add(num)
    }
    
    return pairs
}


/**
 * 6-Title: Palindrome Checker
 * 
 * Exercise Description:
 * 
 * You are a software engineer working on a text processing application. One of the features requested by your users
 * is the ability to check if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence
 * of characters that reads the same backward as forward (ignoring spaces, punctuation, and capitalization). Your goal is to write
 * a JavaScript function that takes a string and returns `true` if the string is a palindrome and `false` otherwise.
 * 
 * Input and Output Examples:
 * 
 * Example 1:
 * Input: str = "A man, a plan, a canal, Panama"
 * Output: true
 * Explanation: Ignoring spaces, punctuation, and capitalization, the string reads the same backward as forward.
 * 
 * Example 2:
 * Input: str = "racecar"
 * Output: true
 * Explanation: The string "racecar" reads the same backward as forward.
 * 
 * Example 3:
 * Input: str = "hello"
 * Output: false
 * Explanation: The string "hello" does not read the same backward as forward.
 * 
 * Example 4:
 * Input: str = "No 'x' in Nixon"
 * Output: true
 * explanation: Ignoring spaces, punctuation, and capitalization, the string reads the same backward as forward.

 */
let  PalindromeChecker = (str) => {}
/**
 * 7-Title: Climbing the Fibonacci Stairs
 * 
 * Exercise Description:
 * 
 * You are a software engineer tasked with creating a program to help a friendly robot named RoboClimb.
 * RoboClimb loves climbing stairs and wants to know in how many different ways it can climb a staircase
 * of a given number of steps. RoboClimb can only take one or two steps at a time. Your task is to write
 * a JavaScript function that calculates the number of distinct ways RoboClimb can reach the top of a staircase
 * with `n` steps.
 * 
 * To make things interesting, RoboClimb's journey follows the Fibonacci sequence. For example:
 * - A staircase with 2 steps can be climbed in 2 ways: (1+1) or (2).
 * - A staircase with 3 steps can be climbed in 3 ways: (1+1+1), (1+2), or (2+1).
 * - A staircase with 4 steps can be climbed in 5 ways: (1+1+1+1), (1+1+2), (1+2+1), (2+1+1), or (2+2).
 * - A staircase with 5 steps can be climbed in 8 ways.
 * 
 * Your goal is to implement a function that takes an integer `n` representing the number of steps in the staircase
 * and returns the number of distinct ways RoboClimb can reach the top.
 * 
 * Input and Output Examples:
 * 
 * Example 1:
 * Input: n = 2
 * Output: 2
 * explanation: There are 2 ways to climb 2 steps: (1+1) or (2).
 * 
 * Example 2:
 * Input: n = 3
 * Output: 3
 * explanation: There are 3 ways to climb 3 steps: (1+1+1), (1+2), or (2+1).
 * 
 * Example 3:
 * Input: n = 4
 * Output: 5
 * explanation: There are 5 ways to climb 4 steps: (1+1+1+1), (1+1+2), (1+2+1), (2+1+1), or (2+2).
 * 
 * Example 4:
 * Input: n = 5
 * Output: 8
 * explanation: There are 8 ways to climb 5 steps: (1+1+1+1+1), (1+1+1+2), (1+1+2+1), (1+2+1+1), (2+1+1+1), (2+2+1), (2+1+2), or (1+2+2).
 * 
 */
let Climbing = (n) => {
    if (n <= 1) return 1

    let a = 1, b = 1
    for (let i = 2; i <= n; i++) {
        let temp = a
        a = a + b
        b = temp
    }

    return a
}

