

const prompts = {
    mult: (a, b) => {
        console.log(a*b)
        return a * b;
    },
    concatOdds: (a,b) => {
       const newArr = [];
       const newB = b.filter(number => number !== 1);
        for (let i = 0; i < a.length; i++) {
            if (a[i] % 2 === 0) {
            } else {
                newB.unshift(a[i]);
            }
        }
        for(let j = 0; j < newB.length; j++) {
            if (newB[j] % 2 === 0) {
            } else {
                newArr.unshift(newB[j]);

            }
        }
        newArr.sort();
        return newArr
    }
}
// console.log(prompts.concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]))

module.exports = prompts;