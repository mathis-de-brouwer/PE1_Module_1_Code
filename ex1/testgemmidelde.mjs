import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});

let gemiddelde;
let getal1;

getal1 = parseFloat(await userInput.question('Voer het eerste getal in: '));
getal1 += parseFloat(await userInput.question("Voer het tweede getal in: "));
getal1 += parseFloat(await userInput.question("Voer het derde getal in: "));
getal1 += parseFloat(await userInput.question("Voer het vierde getal in: "));


gemiddelde = getal1 / 4;

console.log(gemiddelde);

process.exit();