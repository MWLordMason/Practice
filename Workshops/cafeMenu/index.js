const coffeeMenu = require("./coffee_data.js")
// console.log(coffeeMenu)


/*Step 2*/
coffeeMenu.forEach(element => console.log(element))

/*Step 3*/
function fiveOrLess () {
    let cheapDrinks = []
    for (let i = 0; i < coffeeMenu.length; i++) {
        if (coffeeMenu[i].price <= 5) {
            cheapDrinks.push(coffeeMenu[i])
        }
    }
    return cheapDrinks
}

console.log(fiveOrLess())

/*Step 4*/
function evenOnly() {
    let evenDrinks = []
    for (let i = 0; i < coffeeMenu.length; i++) {
        if (coffeeMenu[i].price % 2 === 0) {
            evenDrinks.push(coffeeMenu[i])
        }
    }
    return evenDrinks
}

console.log(evenOnly())

/*Step 5*/
function totalSum() {
    let totalPrice = 0
    for (let i = 0; i < coffeeMenu.length; i++) {
         totalPrice += coffeeMenu[i].price
    }
    return totalPrice
}

console.log(totalSum())

/*Step 6*/
function isSeasonal() {
    let seasonal = []
    for (let i = 0; i < coffeeMenu.length; i++) {
        if (coffeeMenu[i].seasonal === true) {
            seasonal.push(coffeeMenu[i])
        }
    }
    return seasonal
}

console.log(isSeasonal())

/*Step 7*/
function beans() {
    let importBeans = isSeasonal()
    for (let i = 0; i < importBeans.length; i++) {
            console.log(`${importBeans[i].name} with imported beans`)
    }
}

beans()
