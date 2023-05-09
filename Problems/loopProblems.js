

// Practice 1:
// Print all numbers down to 0
// - create a function
// - it should take one parameter, which represents a number
// - the function should print all the numbers from the parameter down to, and including 0

// function countDown(num) {
//     while(num >= 0){
//     num--;
//     console.log('Counting Down:', num)
//     }
// }

// function countDown(num) {
//     for(let i = num; i >= 0; i--){
//     console.log('Counting Down:', i)
//     }
// }

// countDown(10)


// Practice 2:
// Print all odd numbers less than 100
// - create a function
// - print all odd numbers less than 100 

// function oddNums(num) {
//     if(num % 2 ===0) {
//         num++
//     }
//     while(num < 100) {
//         console.log('Odd Numbers:', num)
//         num = num + 2
//     }
// }

// function oddNumbers(num) {
//    for(let i = num; i < 100; i += 2){ 
//     console.log('Odd Numbers:', i)
//         if(num % 2 ===0) {
//         num++
       
//         }
//     }
// }

// oddNums(2)
// oddNumbers(2)

// Practice 3:
// Multiplication tables
// - create a function
// - it should take one parameter, which represents a number
// - print the multiplication of that number from 1 to 10


// function multTables(num) {
//    let count = 10
//     while(count > 0) {
//         console.log(count * num)
//         count--
//     }
// }

// function multTables(num) {
//     for(let i = 1; i <=10; i++)
//     console.log(i * num)
// }

// multTables(2)

// Practice 4:
// - create an array
// - create a function that takes one parameter, which will be an array
// - the function should print each element of the array

// const planets = ['Earth', 'Mars', 'Venus']

// function displayArr(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// function displayArr(arr) {
//     let i = -1
//     while(i < arr.length) {
//         i++;
//         console.log(arr[i])
//     }
// }

// displayArr(planets)

// Practice 5:
// - create a function
// - it should take one parameter, which represents a number
// - return the factorial of the parameter

// function myFactorial(num) {
//     let answer = 1
//     while(num > 0) {
//         answer * num - 1 
//     }
//     return answer
// }

// myFactorial(3)


// Practice 6:
// MyPush
// - create a function
// - it should take two parameters, the first is an array and the second is an element to be added to the array
// - add the element to the end of the original array
// - return the new length of the array

const nums = [1,2,3,4]

function myPush(arr, element) {
   endOfArray = arr.length
   arr[endOfArray] = element
   return arr.length
}

console.log(myPush(nums,'test'))
console.log(nums)