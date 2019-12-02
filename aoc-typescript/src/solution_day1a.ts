import { fuelForMass } from './day1'
import * as fs from 'fs';
import * as rd from 'readline'

const reader = rd.createInterface(fs.createReadStream('src/inputs/input_day1.txt'));

const arrayOfMass: Array<number> = [];

reader.on("line", (l: string) => {
    arrayOfMass.push(parseInt(l));
}).on("close", () => {
    let sumOfFuel: number = 0;

    arrayOfMass.map((mass) => {
        sumOfFuel += fuelForMass(mass);
    })
    console.log(`sum of the fuel requirements is: ${sumOfFuel}`);
});

