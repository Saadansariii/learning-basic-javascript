// function sum ( a , b){
//     return a + b
// }
// num1 = sum ( 4 , 7)
// console.log(num1)

// function CalculaterFoodTotal (food , tip) {
//     tipPercentage = tip / 100
//     tipAmount = food * tipPercentage
//     total = sum(food , tipAmount)
//     return total
// }
// console.log(CalculaterFoodTotal(300 , 20))

// function sum ( a , b){
//     return a + b
// }

// function CalculaterFoodTotal (food , tip){
//     tipPercentage = tip / 100
//     tipAmount = food * tipPercentage
//     total = sum(food , tipAmount)
//     return total
// }

// // console.log(CalculaterFoodTotal(300 , 20))

// const arrow function

// const sumArrow = (a , b) => a + b

// const groceries = ['apple', 'banana', 'graph' ,'pear','kela','browney']

// console.log(groceries)
// // console.log(groceries(1))

// // how to push method 
// groceries.push ('orange')
// console.log(groceries)

// slice method divide into it

// console.log(groceries.slice(1, 3 ))
// console.log(groceries.slice(3,6))

// groceries.push('berry')
// console.log(groceries)

// console.log(groceries.slice(2,4))

// console.log(groceries.indexOf('pear'))

// console.log(groceries.length)

// learning object properties two diffrent type dot notation & bracket notation

// const person = {
//     name: "saad",
//     shirt: "black"
// }
// dot notation
// console.log(person.name)
// console.log(person.shirt)
// bracket notation
// console.log(person['name'])
// console.log(person['shirt'])

// now using ES6 arrow function 

// const introducer = (name, shirt) => {
//     const person = {
//     name: name,
//     shirt: shirt
// }

// const intro = `hey this is ${person['name']}
//  and my shirt colour is ${person['shirt']}`

//  return intro
// }

// console.log(introducer('saad','black'))

// const introducer = (name,shirt) => {
//     const person = {
//     name: name,
//     shirt: shirt,
//     asset: 100000,
//     liabilities:50000,
//     networth: function () {
//         return ('this.liability') - ('this.asset')
//     }

// }
// const intro = `hey this is ${person['name']} and my shirt colour is ${person['shirt']} and my net worth is networth ${person['networth']}`
// return intro
// }
// console.log(introducer('saad','black'))

// loops

// const fruits = ['apple', 'banana', 'graph' ,'pear','kela','browney','apple', 'banana', 'graph' ,'pear','kela','browney','apple', 'banana', 'graph' ,'pear','kela','browney','apple', 'banana', 'graph' ,'pear','kela','browney']

// for (let i=0; i < fruits.length; i++){
//     console.log(fruits)
// }

// method 1
// for (let i=0; i < fruits.length; i++){
//     console.log(fruits)
// }

// for (let i=0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// method 2

// for (const john of fruits){
//     console.log(fruits)
// }

// const numbers = ['1', '2', '3', '4', '5', '6']
// for (let i=0; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// for (const number of numbers){
//     console.log(number)

// const double = (numbers) => {
//     let result = []
//     for (const number of numbers){
//         result.push(number * 2)
//     }

//     return result
// }
// console.log(double([1,2,3,4,5,6]))

// const howmanylatter = () => {
//     const phrase = `this method call a how many letter in the fulll line and full screen`

//     for (letter in phrase) {
//         console.log(latter)
//     }
// }
// howmanylatter

// sum array 

// const sumArray = (numbers) => {
//     let result = 0; 
//     // for loop 
//     for (const number of numbers){
//         console.log(number)
//     }
//     return {result}
// }
// const nums = [1,2,3,4]
// console.log(sumArray(nums))

// const sumArray = (numbers) => {
//     let result = 0 ;

//     for(const number of numbers){
//         console.log(number)
//         result = result + number
//     }
//     return {result}
// }
// const nums = [1,2,3,4,5,6]
// console.log(sumArray(nums)) 

const max = (numbers) => {
    let result = numbers[0]

    for (const number of numbers){
        if (number > result){
            result = number
        }
    }
    return {result}
}
console.log(max([1,2,3,4,5,60]))

console.log




 






