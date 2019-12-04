import { validPassword } from './day4';

let nrValidPasswords = 0;
for (let i = 273025; i <= 767253; i++) {
    if (validPassword(i.toString())) {
        nrValidPasswords += 1
    }
}

console.log(`reslut of dat4a: ${nrValidPasswords}`);

console.log(validPassword('123A66'));