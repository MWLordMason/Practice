

// Create a string for the user saying: "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

const secretMessage =  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

// Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator(+-*/). Each must equal one of the three codes in the combination.

let com1 = 2 * 5
let com2 = 10 + 30
let com3 = 40 - 1

let result = `${secretMessage} ${com1} - ${com2} - ${com3}`

console.log(result)