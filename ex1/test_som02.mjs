import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef je eerste getal in:'));
let getal2 = parseFloat(await userInput.question('Geef je tweede getal in:'));
console.log('Je getallen waren ' + getal1 + ' en ' + getal2) 
console.log('De som is: '+ (getal1 + getal2));
console.log('Het verschil is: '+ (getal1 - getal2));
console.log('Het product is: '+ (getal1 * getal2));
console.log('De deling is: '+ (getal1 / getal2)); 


process.exit();
