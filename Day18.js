//Write a function that takes a string as input and returns the number of
// vowels (a, e, i, o, u) in the string.
let str = "Hello"
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    console.log(count)
}
countVowels(str)


//Q2 Create a function that takes an array of numbers as input and returns the average of those numbers.

var arr = [45, 23, 20, 12, 20, 13, 21, 25]
function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum / arr.length)
}
average(arr)

// q3 Write a function that takes an array of numbers as input and returns the maximum value in the array.

var arr = [45, 35, 65, 45, 20, 13, 21, 25]
function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max)
}
max(arr)

//q4 Write a function that takes an array of numbers as input and returns the minimum value in

function min(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min)
}
min(arr)

//q5 Implement a function that takes a string as input and returns the string in reverse order.

function reverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed)
}
reverse("Hello World")


//q6. Write a function that takes an array of numbers as input and returns a new array containing only the even numbers.

var arr = [1, 2, 3, 4, 5, 6, 7, 8,]
function even(arr) {
    let evenArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }
    console.log(evenArr)
}
even(arr)


// 6. Counting Characters:
// Create a function that takes a string as input and returns an object
// containing the count of each character in the string.

// function charCount(str) {
//     let charObj = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (charObj[char]) {
//             charObj[char]++;
//         } else {
//             charObj[char] = 1;
//         }
//     }
//     console.log(charObj)
// }
// var str = "vikas"
// charCount(str)

// 7. Summing Array Elements:
// Write a function that takes an array of numbers as input and returns the
// sum of all the numbers in the array.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum)
}
sumArray([45, 35, 65, 45, 45, 50])




// Finding Longest Word:
// Implement a function that takes an array of strings as input and returns the
// longest word in the array.
function longestWord(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    console.log(longest)
}
longestWord(["vikas", "vikas123", "vikas1234", "vikas12345 "])


// Checking Palindrome:
// Create a function that takes a string as input and returns true if the string is
// a palindrome, false otherwise.


function checkingPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
        console.log(true)
    } else {
        console.log(false)
    }
}
checkingPalindrome("madam")

// q11. Combining Arrays:
// Write a function that takes two arrays as input and returns a new array
// containing all the elements from both arrays.

function combineArrays(arr1, arr2) {
    let combinedArray = [...arr1, ...arr2];
    console.log(combinedArray)
}
combineArrays([1, 2, 3], [4, 5, 6])


// . Counting Words:
// Implement a function that takes a string as input and returns the number of
// words in the string.

function CountingWord(str) {
    let words = str.split(" ");
    console.log(words.length)
}
CountingWord("Hello World this is Vikas")

// Checking Prime Number:
// Create a function that takes a number as input and returns true if the
// number is prime, false otherwise.

function checkingPrimeNumber(num) {
    if (num <= 1) {
        console.log(false)
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                console.log(false)
                return
            }
        }
        console.log(true)
    }
}
checkingPrimeNumber(7)

// sorting Array of Numbers:
// Write a function that takes an array of numbers as input and returns a new
// array containing the numbers sorted in ascending order.

function sorting(arr) {
    let sortedArray = arr.sort((a, b) => a - b)
    console.log(sortedArray)
}
sorting([5, 2, 8, 1, 4])

//     . Converting Temperature:
// Create a function that takes a temperature in Celsius as input and returns
// the temperature converted to Fahrenheit.

function convertTemperature(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32
    console.log(fahrenheit)
}
convertTemperature(30)

//     . Checking Anagrams:
// Write a function that takes two strings as input and returns true if they are
// anagrams, false otherwise.

function checkingAnagrams(str1, str2) {
    let str1Array = str1.split("").sort().join("")
    let str2Array = str2.split("").sort().join("")
    if (str1Array === str2Array) {
        console.log(true)
    } else {
        console.log(false)
    }
}
checkingAnagrams("listen", "silent")

// Calculating Factorial:
// Implement a function that takes a number as input and returns the factorial
// of that number.

function calcFactorial(num) {
    let factorial = 1
    for (let i = 1; i <= num; i++) {
        factorial *= i
    }
    console.log(factorial)
}
calcFactorial(5)

// Searching Array:
// Write a function that takes an array and a target value as input, and returns
// the index of the target value in the array if it exists, -1 otherwise.
function searchingArray(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(i)
            return
        }
    }
    console.log(i)
}
searchingArray([1, 2, 3, 4, 5], 3)

//finding Unique Elements:
// Write a function that takes an array as input and returns a new array
// containing only the unique elements from the input array.

function findingUniqueElements(arr) {
    let uniqueArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i])
        }
    }
    console.log(uniqueArr)
}
findingUniqueElements([1, 2, 2, 3, 4, 4])


// . Calculating Area:
// Implement a function that takes the radius of a circle as input and returns
// the area of the circle.


function calcArea(radius){
    let area = Math.PI * radius * radius
    console.log(area)
    }
    calcArea(5)



