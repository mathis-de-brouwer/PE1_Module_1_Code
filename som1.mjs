import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/*
let som;
let getal1 = 51;
let getal2 = 7.5;

som = getal1 + getal2;
console.log(som);


/*let jeGetal = parseFloat(await userInput.question('Geef een getal in:'));
console.log('Je getal maal 2 is gelijk aan '+ (jeGetal + 5));
*/



let jegetal = parseFloat(await userInput.question('Geef een getal in:'));
console.log('de som van je getal en 2 is: '+ (jegetal + 2));

