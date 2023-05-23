
const prompts = require('./calculator');

describe("Prompts:", () => {
    test("multiplication(2,3): multiplying 2*3 should return 6", () => {
        expect(prompts.mult(2,3)).toBe(6);
    });
    test("multiplication(2,3): multiplying 2*3 should return a number", () => {
        expect(typeof prompts.mult(2,3)).toBe("number");
    });
    test("multiplication('string',3): multiplying 'string'*3 should be NaN", () => {
        expect(prompts.mult('string',3)).toBe(NaN)
    });
    test("prompts.concatOdds([3, 2, 1],[9, 1, 1, 1, 4, 15, -1]): combining, filtering only odds, and sorting a,b should be [-1, 1, 15, 3, 9]", () => {
        expect(prompts.concatOdds([3, 2, 1],[9, 1, 1, 1, 4, 15, -1])).toStrictEqual([-1, 1, 15, 3, 9])
    });
    test("prompts.concatOdds([3, 2, 1],[9, 1, 1, 1, 4, 15, -1]): should be an object", () => {
        expect(typeof prompts.concatOdds([3, 2, 1],[9, 1, 1, 1, 4, 15, -1])).toBe("object")
    });
    test("prompts.concatOdds(0,0): shouldnt be an array", () => {
        expect(typeof prompts.concatOdds(0,[])).toBe(!"object")
    });
});