
// Prompt #1: In the tv show, "Stranger Things", the monsters in the Upside Down regularly attack the town of Hawkins, Indiana. Only a small group of people know how to properly fight these monsters: a group of kids, a dumb sheriff, and a mom having a not very fun time. Usually, these groups are off doing things by themselves, but they tend to have the most success when all working together. 

// Write a function called joinGroups that takes in two parameters: groupOne and groupTwo, which you can expect will both be arrays of strings (where each string represents a name). 

// Your function should join the two groups together into one array and return the newly combined array. 

// For example: 

// If you were given the following argument values, 
let kidsGroup = ["Will", "Eleven", "Mike", "Lucas"] 
let adultGroup = ["Sheriff Hopper", "Joyce"] 
// joinGroups(kidsGroup, adultGroup) // would return: 
// // ["Will", "Eleven", "Mike", "Lucas", "Sheriff Hopper", "Joyce"] 

// Note: Be sure that you're not accidentally returning an array that is multidimensional! (i.e. contains nested sub-arrays)

// function joinGroups(groupOne,groupTwo) {
//     let groupTogether = groupOne.concat(groupTwo)
//     return groupTogether
// }

// console.log(joinGroups(kidsGroup,adultGroup))

// function joinGroups(groupOne,groupTwo) {
//     let newArray = []
//     for (let i = 0; i < groupOne.length; i++) {
//         let newGroupOne = groupOne[i]
//         newArray.push(newGroupOne)
//     }
//     for (let j = 0; j < groupTwo.length; j++) {
//         newArray.push(groupTwo[j])
//     }
//     return newArray
// }

// console.log(joinGroups(kidsGroup,adultGroup))

// Problem 2:

// The Dunder Mifflin paper company (you know, the one from "the Office") is undergoing some changes! They have decided to rearrange the seating assignments for their sales team in their main meeting room. You have been given the job of making these changes. In this problem, you have access to some data stored on the company HR system. 

// Here's what the data might look like: 

let officeStaff = [ "Michael Scott", "Jim Halpert", "Pam Beesly", "Dwight Schrute", "Angela Martin", "Stanley Hudson"]; 

// Write a function called fixSeating that takes in two parameters: one called seatNumber (which you can expect will be an integer value argument) and another called staffMember (which you can expect will be a string argument, representing someone's name). Your function should remove the person sitting at that seatNumber index location from the officeStaff array, and replace them with the staffMember. Your function should also move the person who was removed from the seating arrangement to the end of the officeStaff array. Lastly, your function should return the newly updated officeStaff array. 

// For example: 

// If you were provided the following, fixSeating(3, "Creed Bratton") // would return: 

/* [ "Michael Scott", "Jim Halpert", "Pam Beesly", "Creed Bratton", "Angela Martin", "Stanley Hudson", "Dwight Schrute"]; */

// function fixSeating(seatNumber,staffMember) {
//     let personToSwitch = officeStaff[seatNumber]
//     officeStaff.splice[seatNumber,1,staffMember]
//     officeStaff.push[personToSwitch]
//     return officeStaff
// }

// console.log(fixSeating(3, "Creed Bratton"))

// Problem 3:
/*
You're an up and coming developer for your company, but you've run into a little problem - you've accidentally saved all your company's data as arrays instead of objects! Now, your coworkers will not be able to know what the datasets all represent, and that could land you in huge trouble with your boss…

Wait, there might be a fix. You notice that each dataset is listed in the following order of: username, then password, then email.

For example:
let sampleDataset = ["oprah1", "yougetacar", "oprah@oprah.com"]

Write a function called labelData that takes in one parameter called companyData, which you can expect will be a multidimensional array, where each nested array contains data like the example above. Your function should, for each nested array, print to the console a string that looks like the following: 

"Username is: oprah1 Password is: yougetacar Email is: oprah@oprah.com" 

Lastly, have your function output a string value of "Data Labelling Completed". 

Test Example:
labelData([
    ["oprah1", "yougetacar", "oprah@oprah.com"], 
    ["bob123", "bob1234", "bob@gmail.com"], 
    ["beyonce", "imbeyonce", "beyonce@gmail.com"]
])

Would result in:
    "Username is: oprah1 Password is: yougetacar Email is: oprah@oprah.com"
    "Username is: bob123 Password is: bob1234 Email is: bob@gmail.com"
    "Username is: beyonce Password is: imbeyonce Email is: beyonce@gmail.com"
    "Data Labelling Completed"
*/


let arrs = [["oprah1", "yougetacar", "oprah@oprah.com"], ["bob123", "bob1234", "bob@gmail.com"], ["beyonce", "imbeyonce", "beyonce@gmail.com"]]
function labelData(companyData) {
    for (let i = 0; i < companyData.length; i++) {
        let nestedArr = companyData[i]
        console.log(`Username is ${nestedArr[0]} Password is ${nestedArr[1]} Email is ${nestedArr[2]}`)
    }
    return "Data Labeling Complete"
}

console.log(labelData(arrs))