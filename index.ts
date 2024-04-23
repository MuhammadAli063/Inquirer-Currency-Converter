#! /usr/bin/env node

import inquirer from "inquirer"

const currency:any = {
    USD : 1 , // Base currency 
    EUR : 0.92 ,  
    GBP : 0.79 ,  
    INR : 83.30 ,  
    PKR : 277.54 ,  
} 

let answer = await inquirer.prompt([
    {
        name : 'fromCurrency',       
        type : 'list',
        message : 'Select Currency from you want to convert : ',
        choices : ['USD','EUR','GBP','INR','PKR']       
    },
    {
        name : 'toCurrency',       
        type : 'list',
        message : 'Select Currency to you want to convert : ',
        choices : ['USD','EUR','GBP','INR','PKR']       
    },
    {
        name : 'amount',
        type : 'input',
        message : 'Enter Amount you want to convert',
    }
])

let fromCurrencyValue = currency[answer.fromCurrency];
let toCurrencyValue = currency[answer.toCurrency];
let userAmount = answer.amount;

let convertToDollar = userAmount / fromCurrencyValue; 
let convertedAmount = convertToDollar * toCurrencyValue;

console.log(convertedAmount)
// console.log(fromCurrencyValue)
// console.log(toCurrencyValue)
// console.log(userAmount)
// console.log(convertToDollar)