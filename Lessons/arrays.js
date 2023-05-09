



// Practice 1
// function testArray(param) {
//     if (Array.isArray(param)){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(testArray("test"))
// console.log(testArray([1, 2, 3, 4]))


// Practice 2
// function  findElem (arr, idx) {
//     return arr[idx]
// }

// console.log(findElem([1,2,3], 2))


// Practice 3
// function sum(arr) {
//     return arr[0] + arr[arr.length-1]
// }

// console.log(sum([1,3,3,10]))


// Practice 4
// const myArr = [1,3,5,7]
// function findLength(arr, num) {
//     if (arr.length === num) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(findLength(myArr, 4))
// console.log(findLength(myArr, 5))

// Practice 5
// function infinityWar(listofSuperHeroes) {
//     let numOfHeroes = listofSuperHeroes.length
//     let howMuchIsHalf = numOfHeroes / 2
//     let halfOfHeroesWholeNumber = Math.floor(howMuchIsHalf)
//     let newPieceOfPaper = listofSuperHeroes.slice(0, halfOfHeroesWholeNumber)
//     return newPieceOfPaper
// }

// console.log(infinityWar(["Iron Man", "Captain America", "Thor", "Dr. Strange", "Spiderman", "Groot"]))

// Practice 6
// function team(arr, pkmn) {
//     if (arr.length < 6) {
//         let addPkmn = arr.push(pkmn)
//         return addPkmn, arr
//     } else {
//         let newTeam = arr.pop(arr.length -1)
//         let addPkmn = arr.push(pkmn)
//         return newTeam, addPkmn, arr
//     }
// }

// console.log(team(['Pikachu', 'Eevee', 'Charizard', 'Snorlax', 'Garchomp'], 'Piplup'))