const functions = require("./functions.js")

const {returnTwo, greeting, add, subtract, multiply, divide} = functions


// returning two
it (`should return the number 2`, () => {
    expect(returnTwo()).toEqual(2)
} )


// greeting
describe(`test the greeting function`, () =>{
    it (`should return the greeting hello "name"`, () => {
        expect(greeting(`Kiara`)).toEqual(`Hello, Kiara`)
    })
    it (`should return the greeting hello "name"`, () => {
        expect(greeting(`Alex`)).toEqual(`Hello, Alex`)
    })
    it (`should return the greeting hello "name"`, () => {
        expect(greeting(`Luna`)).toEqual(`Hello, Luna`)
    })
});


// MATH
describe(`test the math function`, () => {
    it (`It should return the sum of two numbers`, () => {
        expect(add(1, 2)).toEqual(3)
    })
    it (`It should return the sum of two numbers`, () => {
        expect(add(5, 9)).toEqual(14)
    })
    it (`It should return the subtracted sum of two numbers`, () => {
        expect(subtract(9, 1)).toEqual(8)
    })
    it (`It should return the multiplied sum of two numbers`, () => {
        expect(multiply(2, 2)).toEqual(4)
    })
    it (`It should return the divided sum of two divided`, () => {
        expect(divide(4, 2)).toEqual(2)
    })
})