//module import
const fs = require('fs')
fs.copyFileSync("file1.txt", "file1Copy.txt"); //function to copy file1 to new file file1Copy

const myModule = require('./myModule');

let evenNumbers = myModule.getAllEvenNumbers(10);
console.log(evenNumbers);

let oddNumbers = myModule.getAllOddNumbers(10);
console.log(oddNumbers);