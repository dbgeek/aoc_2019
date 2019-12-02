export const day2a = (intCode: string): string => {
    return runProgram(stringToIntArray(intCode)).join(',')
}

export const day2b = (intCode: Array<number>): Array<number> => {
    return runProgram(intCode)
}

export const runProgram = (intCode: Array<number>): Array<number> => {
    let opCode: number = intCode[0]
    let execPosition: number = 0;

    while (opCode != 99) {
        let posVal1: number = intCode[execPosition + 1];
        let posVal2: number = intCode[execPosition + 2];
        let dest: number = intCode[execPosition + 3];
        switch(opCode) {
            case 1:
                intCode[dest] = add(intCode, posVal1, posVal2)
                break;
            case 2:
                intCode[dest] = multiply(intCode, posVal1, posVal2)
                break;
        }
        execPosition += 4
        opCode = intCode[execPosition]
    }

    return intCode;
}

export const add = (intCode: Array<number>, val1: number, val2: number): number => {

    return  intCode[val1]+intCode[val2];

}

export const multiply = (intCode: Array<number>, val1: number, val2: number): number => {

    return  (intCode[val1]*intCode[val2]);

}

export const stringToIntArray = (str: string): Array<number> => {

    return str.split(',').map(Number);

}