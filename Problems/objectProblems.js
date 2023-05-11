

// Practice 1:

// Problem 1: 
// create an object for your favorite pokemon
// the object should have the following properties: name, age, type (fire/water/etc), and an array of possible evolutions.
// then below your object console.log each of these properties with dot notation and bracket notation

// const favoritePokemon = {
//     name: "Pikachu",
//     age: 5,
//     type: "Electric",
//     evolutions: ["Pichu", "Pikachu", "Raichu"],
//     health: 50,
//     defense: 20,
//     greeting: function() {
//         console.log("I am Pikachu")
//     },
// }

// console.log(favoritePokemon.name)
// console.log(favoritePokemon.age)
// console.log(favoritePokemon.type)
// console.log(favoritePokemon.evolutions)

// console.log(favoritePokemon['name'])
// console.log(favoritePokemon['age'])
// console.log(favoritePokemon['type'])
// console.log(favoritePokemon['evolutions'])


// Problem 2:

// create a function that will console.log the sentence: 
// "I am <insert pokemon name>"
// then add the function to your object as a method
// then invoke the function so that you see the console.log in the terminal

// function greeting(){
//     console.log("I am " + favoritePokemon.name)
// }

// favoritePokemon.greeting = greeting

// console.log(favoritePokemon.greeting())

// Problem 3: 

// create a function that will increase the age of our pokemon by 1 year: 
// then add the function to your object as a method
// then invoke the function so that you increase the age of your pokemon and then console.log the age (after you have invoked the function)

// function growUp() {
//    newAge = this.age + 1
//     return newAge
// }

// favoritePokemon.growUp = growUp

// console.log(favoritePokemon.growUp())

// Problem 4:
// It is time for our pokemon to start dueling, but first they need health and defense stats
// add a health property to our pokemon and set it equal to 50
// add a defense property to our pokemon and set it equal to 20
// next, create a function called 'defend' that will take a single parameter, which is a number. 
// the function will compare the parameter to the defense property of our pokemon.  If the parameter is higher than, or equal to our defense then we will take damage.  Subtract from our health stat the difference between the parameter and our defense stat. (for example if the parameter was 30, we would subtract 10 from our health points. )
// if the parameter was lower than our defense, console.log the following sentence:  'The attack was successfully avoided!'
// then add the function to your object as a method
// then invoke the function, passing in the number 10 and then console.log the health property (after you have invoked the function)


// function defend(dmg) {
//     if (dmg > this.defense) {
//       let remainder = this.health - (dmg - this.defense)
//     return remainder
//     } else {
//         console.log('The attack was successfully avoided!')
//     }
    
// }

// favoritePokemon.attack = defend;

// console.log(favoritePokemon.attack(40)) 


/* Review Problems */

// PROMPT #1: 

// In the tv show "Game of Thrones", many of the main characters fight for control of "the Iron Throne". In all the fighting, kings and queens are regularly deposed, and replaced by a new ruler. Write a function that replicates this. 

// Your function should accept two parameters: 1. An array of strings called currentRulers, where each string represents the royal lineage of the current Iron Thrones ruler. The string at index position 0 represents the current ruler, the string at index position 1 represents the next immediate in line for the throne, the string at index position 2 represents the 2nd in line for the throne, and so on. 2. A string called newRuler that represents the name of a new Iron Throne ruler. 

// Your function should remove the current ruler from the beginning of the currentRulers array argument and replace it with the name of the newRuler string argument. 

// Your function should return the newly updated currentRulers array. 

// For example, if you were given the following parameters: replaceTheRuler(["Cersei Lannister", "Tommen Lannister"], "Daenerys Targaryen) Your function should return: ["Daenerys Targaryen", "Tommen Lannister"]



// function gameOfThrones(currentRulers, newRuler) {
//    currentRulers.shift()
//    currentRulers.unshift(newRuler)
//     return currentRulers
// }


// console.log(gameOfThrones(["Cersei Lannister", "Tommen Lannister"], "Daenerys Targaryen"))


/*
 Prompt #2: 
Prompt: Each person in this pairing should create an object that describes the main character of that person's favorite tv show or movie. Each object should contain at least 5 key-value pairs (although please feel free to include more if you like.) Those key-value pairs should have keys called:
    - name (which you can expect will be given a string value)
    - age (which you can expect will be given an integer value)
    - occupations (which you can expect will be given an array of strings, where each string represents an occupation)
    - isHero (which you can expect will be a boolean) 

Lastly, you should write 8 console.log statements. The first 4 should console.log each individual key-value pair using bracket notation, and the latter 4 should console.log each key-value pair using dot notation. 

At the end of this exercise, each of you should have 2 objects, one for each of you. */

// const anakinSkywalker = {
//     name: "Anakin Skywalker",
//     age: 25,
//     occupations: ['Jedi Knight', 'Chosen One'],
//     isHero: true,
//     sayCatchPhrase: function() {
//         console.log("I don't like sand.")
//     },
    
// }

// console.log(anakinSkywalker["name"])
// console.log(anakinSkywalker["age"])
// console.log(anakinSkywalker["occupations"])
// console.log(anakinSkywalker["isHero"])

// console.log(anakinSkywalker.name)
// console.log(anakinSkywalker.age)
// console.log(anakinSkywalker.occupations)
// console.log(anakinSkywalker.isHero)


/*
#3:
Prompt: Using the tv show/movie object you made in the previous problem, add a new key-value pair to each of your objects. That key-value pair should have a key called "sayCatchphrase". The value of that new key should be a function that, when invoked, outputs a string that matches that character's defining catchphrase. 

If the character you chose doesn't really have a catchphrase, just have the function return something that your character might say. 

Once you finish, you should test your function twice, once using dot notation, and again using bracket notation.  
*/



// const anakinSkywalker = {
//     name: "Anakin Skywalker",
//     age: 25,
//     occupations: ['Jedi Knight', 'Chosen One'],
//     isHero: true,
//     sayCatchPhrase: function() {
//         console.log("I don't like sand.")
//     },
    
// }

// anakinSkywalker.sayCatchPhrase()
// anakinSkywalker["sayCatchPhrase"]()


/*
#4: 
Prompt: 
/*
It's been a few years since the world ended, and over all that time you've found better ways to improve your JARVIS bot. Now he's able to make longer journeys, sometimes ones that even last a few days. You're about to finish a new program that can send your JARVIS bot out on multi-day trips and report back not only all the supplies it has found, but also categorize them for you. 

Write a function called multiDayTripProgram that takes in 2 parameters: The first parameter should be called baggy, which you can expect will always be an array argument value and which will always be first given to you as an empty array. (You'll store all the good supplies you've found in this "bag".) 

The second parameter should be called logOfDailyTrips, which you can expect will always be an array argument value, and where each element in that array is ALSO an array. Each "nested" array will represent a given day. The elements in those nested arrays will be strings representing the supplies found on a day's journey. 
 
Note: You can also expect that sometimes "zombie" or "raider" strings will appear as targets on JARVIS's journey. 

Your function should do 3 things:
First, your function should add each "good" food or supply (i.e. anything that isn't a zombie or a raider) to the baggy argument value. (for safekeeping!!)
Second, your function should alert you by logging to the console whenever it has found supplies or a dangerous target (the same string format from the previous problem apply.)
Lastly, your function should return the baggy argument value, all filled up with the fruits of JARVIS's labor.

For example, consider the following argument value:
multiDayTripProgram(
    [], [["fresh fruit", "raider"], ["zombie", "morphine"], ["bandages", "painkillers"]]
    // Note that the first argument value above is an empty array. That's your baggy argument value! 
    // The second argument value above is your array of arrays, where each nested array represents a day's journey. 
)

After running the above function, the following should happen: 
    "JARVIS has found some fresh fruit!"
    "JARVIS has found a raider! ENGAGING AVOIDANCE ACTION PLAN!!"
    "JARVIS has found a zombie! ENGAGING AVOIDANCE ACTION PLAN!!"
    "JARVIS has found some morphine!"
    "JARVIS has found some bandages!"
    "JARVIS has found some painkillers!"
    ["fresh fruit", "morphine", "bandages", "painkillers"]
*/

function multiDayTripProgram(baggy, logOfDailyTrips) {
    for (i = 0; i < logOfDailyTrips.length; i++) {
        let currentDay = logOfDailyTrips[i]
        // console.log(currentDay)
        for (let nestedI = 0; nestedI < currentDay.length; nestedI++) {
            let currentItem = currentDay[nestedI]
            if (currentItem === "zombie" || currentItem === "raider") {
                console.log("JARVIS has found a " + currentItem + "! ENGAGING AVOIDANCE ACTION PLAN!!")
            } else {
                console.log("JARVIS has found a " + currentItem + ".")
                baggy.push(currentItem)
            }
        }
    }
    return baggy
}

console.log(multiDayTripProgram([], [["fresh fruit", "raider"], ["zombie", "morphine"], ["bandages", "painkillers"]]))

