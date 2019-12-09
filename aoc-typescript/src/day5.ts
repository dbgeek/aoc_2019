export const adds = (parameter1: number, parameter2: number, destitionAdress: number, memory: number[]): void => {
    memory[destitionAdress] = parameter1 + parameter2;
}
export const multiplies = (parameter1: number, parameter2: number, destitionAdress: number, memory: number[]): void => {
    memory[destitionAdress] = parameter1 * parameter2;
}
export const inPut = (input: number, destitionAdress: number, memory: number[]): void => {
    memory[destitionAdress] = input;
}
export const lessThan = (parameter1: number, parameter2: number, destitionAdress: number, memory: number[]): void => {
    memory[destitionAdress] = parameter1 < parameter2 ? 1 : 0;
}
export const equals = (parameter1: number, parameter2: number, destitionAdress: number, memory: number[]): void => {
    memory[destitionAdress] = parameter1 === parameter2 ? 1 : 0;
}


export const day5a = (rawInstruction:string, input:number = 1): number => {
    let memory = rawInstruction.split(',').map(Number);
    let memoryAdress = 0;
    let output = 0;
    while (memory[memoryAdress] !== 99) {
        const instruction = getInstruction(memory[memoryAdress]);
        const opcode = instruction.slice(3).join('');
        const param1Mode = instruction[2];
        const param2Mode = instruction[1];
        switch(opcode) {
            case '01':
                let parameter1 = getParameterByMode(param1Mode, memory, memoryAdress + 1);
                let parameter2 = getParameterByMode(param2Mode, memory, memoryAdress + 2);
                let parameter3 = memory[memoryAdress + 3];
                adds(parameter1, parameter2, parameter3, memory);
                memoryAdress += 4;
                break;
            case '02':
                parameter1 = getParameterByMode(param1Mode, memory, memoryAdress + 1);
                parameter2 = getParameterByMode(param2Mode, memory, memoryAdress + 2);
                parameter3 = memory[memoryAdress + 3];
                multiplies(parameter1, parameter2, parameter3, memory);
                memoryAdress += 4;
                break;
            case '03':
                parameter1 = memory[memoryAdress + 1];
                inPut(input, parameter1, memory)
                memoryAdress += 2;
                break;
            case '04':
                parameter1 = memory[memoryAdress + 1];
                output = getParameterByMode(param1Mode, memory, memoryAdress + 1);
                memoryAdress += 2;
                break;
            default:
        }
    }
    return output;
};

export const getParameterByMode = (mode:number, memory: number[], memoryAdress: number): number => {
    return mode === 0 ? memory[memory[memoryAdress]] : memory[memoryAdress];
}

export const getInstruction = (ins:number): number[] => {
    return [...ins.toString().padStart(5,'0')].map(Number)
}

export const day5b = (rawInstruction:string, input:number = 5): number => {
    let memory = rawInstruction.split(',').map(Number);
    let memoryAdress = 0;
    let output = 0;
    while (memory[memoryAdress] !== 99) {
        const instruction = getInstruction(memory[memoryAdress]);
        const opcode = instruction.slice(3).join('');
        const param1Mode = instruction[2];
        const param2Mode = instruction[1];
        switch(opcode) {
            case '01':
                let parameter1 = getParameterByMode(param1Mode, memory, memoryAdress + 1);
                let parameter2 = getParameterByMode(param2Mode, memory, memoryAdress + 2);
                let parameter3 = memory[memoryAdress + 3];
                adds(parameter1, parameter2, parameter3, memory);
                memoryAdress += 4;
                break;
            case '02':
                parameter1 = getParameterByMode(param1Mode, memory, memoryAdress + 1);
                parameter2 = getParameterByMode(param2Mode, memory, memoryAdress + 2);
                parameter3 = memory[memoryAdress + 3];
                multiplies(parameter1, parameter2, parameter3, memory);
                memoryAdress += 4;
                break;
            case '03':
                parameter1 = memory[memoryAdress + 1];
                inPut(input, parameter1, memory)
                memoryAdress += 2;
                break;
            case '04':
                parameter1 = memory[memoryAdress + 1];
                output = getParameterByMode(param1Mode, memory, memoryAdress + 1);
                memoryAdress += 2;
                break;
            case '05':
                parameter1 = getParameterByMode(param1Mode, memory, memoryAdress + 1);
                parameter2 = getParameterByMode(param2Mode, memory, memoryAdress + 2);
                if (parameter1 !== 0){
                    memoryAdress = parameter2;
                } else {
                    memoryAdress += 3;
                }
                break;
            case '06':
                parameter1 = getParameterByMode(param1Mode, memory, memoryAdress + 1);
                parameter2 = getParameterByMode(param2Mode, memory, memoryAdress + 2);
                if (parameter1 === 0){
                    memoryAdress = parameter2;
                } else {
                    memoryAdress += 3;
                }
                break;
            case '07':
                parameter1 = getParameterByMode(param1Mode, memory, memoryAdress + 1);
                parameter2 = getParameterByMode(param2Mode, memory, memoryAdress + 2);
                parameter3 = memory[memoryAdress + 3];
                lessThan(parameter1, parameter2, parameter3, memory);

                memoryAdress += 4;
                break;
            case '08':
                parameter1 = getParameterByMode(param1Mode, memory, memoryAdress + 1);
                parameter2 = getParameterByMode(param2Mode, memory, memoryAdress + 2);
                parameter3 = memory[memoryAdress + 3];

                memory[parameter3] = parameter1 === parameter2 ? 1 : 0;

                memoryAdress += 4;

                break;
            default:
        }
    }
    return output;
};