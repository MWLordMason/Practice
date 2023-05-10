

// Practice 1:

// Problem 1: 
// create an object for your favorite pokemon
// the object should have the following properties: name, age, type (fire/water/etc), and an array of possible evolutions.
// then below your object console.log each of these properties with dot notation and bracket notation

const favoritePokemon = {
    name: "Pikachu",
    age: 5,
    type: "Electric",
    evolutions: ["Pichu", "Pikachu", "Raichu"],
    health: 50,
    defense: 20,
    greeting: function() {
        console.log("I am Pikachu")
    },
}

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


function defend(dmg) {
    if (dmg > this.defense) {
      let remainder = this.health - (dmg - this.defense)
    return remainder
    } else {
        console.log('The attack was successfully avoided!')
    }
    
}

favoritePokemon.attack = defend;

console.log(favoritePokemon.attack(40)) 