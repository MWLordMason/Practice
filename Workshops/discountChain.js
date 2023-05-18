

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}


function discountChain(driver) {
    let totalCost = driver.pricePerRefill * driver.refills
    if (driver.subscription === true && driver.coupon === true) {
        let withSubAndDiscount = (totalCost * 0.75) - 10
        return `Your grand total is ${withSubAndDiscount}.`
    } else if (driver.subscription === true && driver.coupon === false) {
        let withSubNoDiscount = totalCost * 0.75
        return `Your grand total is ${withSubNoDiscount}.`
    } else if (driver.subscription === false && driver.coupon === true) {
        let noSubWithDiscount = totalCost - 10
        return `Your grand total is ${noSubWithDiscount}.`
    }
}

// console.log(discountChain(timmy))
// console.log(discountChain(sarah))
// console.log(discountChain(rocky))


function totalAmount(driver) {
    let totalCost = driver.pricePerRefill * driver.refills
    return totalCost
}

function subscription(driver) {
    if (driver.subscription === true) {
        let withSub = (totalAmount(driver) * 0.75)
        return withSub
    } else {
        return totalAmount(driver)
    }
}

function discount(driver) {
    if (driver.coupon === true && driver.subscription === true) {
        let withDiscount = subscription(driver) - 10
        return withDiscount
    } else if (driver.coupon === false && driver.subscription === true) {
        return subscription(driver)
    } else if (driver.coupon === true && driver.subscription === false) {
        return totalAmount(driver) - 10
    }
}


console.log(discount(timmy))
console.log(discount(sarah))
console.log(discount(rocky))