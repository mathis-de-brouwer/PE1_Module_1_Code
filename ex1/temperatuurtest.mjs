import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});

let tempC = parseFloat(await userInput.question('Wat is de temperatuur in °C vandaag? '));

let tempF = (tempC * 9 / 5) + 32 ;

console.log('Vandaag is het ' + tempF + ' °F');

//alert('Vandaag is het ' + tempF + ' °F')

process.exit();
