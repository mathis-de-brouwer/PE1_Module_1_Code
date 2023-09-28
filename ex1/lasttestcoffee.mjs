import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});


let coffee = parseFloat(await userInput.question('Hoeveel koppen coffie drink je elke dag? '));

let realcoffee = coffee * 365;
console.log('Je drinkt dus ' + realcoffee + ' koffie kopjes per jaar');

process.exit();