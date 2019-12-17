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
const getAddress = (parameterMode: number, position: number, memory: number[], relativeBase: number): number => {
    if (parameterMode === 0) {
      return memory[position];
    } else if (parameterMode === 2) {
      return memory[position] + relativeBase;
    }
    return -1
  };

export const getParameterByMode = (mode:number, memory: number[], memoryAdress: number, relativeBase: number): number => {
    switch (mode){
        case 0:
            return memory[memory[memoryAdress]]
        case 1:
            return memory[memoryAdress]
        case 2:
            return memory[memory[memoryAdress] + relativeBase];
        default:
            return -1;
    }
}

export const getInstruction = (ins:number): number[] => {
    return [...ins.toString().padStart(5,'0')].map(Number)
}

export const day9 = (rawInstruction:string, input:number = 5): number => {
    let initialMemory = rawInstruction.split(',').map(Number);
    const memory = [...initialMemory].concat(Array.from({ length: 1024}).map(() => 0));
    let memoryAdress = 0;
    let output: number = 0;
    let relativeBase = 0;
    while (memory[memoryAdress] !== 99) {
        const instruction = getInstruction(memory[memoryAdress]);
        const opcode = instruction.slice(3).join('');
        const param1Mode = instruction[2];
        const param2Mode = instruction[1];
        const param3Mode = instruction[0];
        switch(opcode) {
            case '01':
                let parameter1 = getParameterByMode(param1Mode, memory, memoryAdress + 1, relativeBase);
                let parameter2 = getParameterByMode(param2Mode, memory, memoryAdress + 2, relativeBase);
                let parameter3 = getAddress(param3Mode, memoryAdress + 3, memory, relativeBase);;
                adds(parameter1, parameter2, parameter3, memory);
                memoryAdress += 4;
                break;
            case '02':
                parameter1 = getParameterByMode(param1Mode, memory, memoryAdress + 1, relativeBase);
                parameter2 = getParameterByMode(param2Mode, memory, memoryAdress + 2, relativeBase);
                parameter3 = getAddress(param3Mode, memoryAdress + 3, memory, relativeBase);
                multiplies(parameter1, parameter2, parameter3, memory);
                memoryAdress += 4;
                break;
            case '03':
                parameter1 = getAddress(param1Mode, memoryAdress + 1, memory, relativeBase);
                inPut(input, parameter1, memory)
                memoryAdress += 2;
                break;
            case '04':
                output = getParameterByMode(param1Mode, memory, memoryAdress + 1, relativeBase);
                memoryAdress += 2;
                break;
            case '05':
                parameter1 = getParameterByMode(param1Mode, memory, memoryAdress + 1, relativeBase);
                parameter2 = getParameterByMode(param2Mode, memory, memoryAdress + 2, relativeBase);
                if (parameter1 !== 0){
                    memoryAdress = parameter2;
                } else {
                    memoryAdress += 3;
                }
                break;
            case '06':
                parameter1 = getParameterByMode(param1Mode, memory, memoryAdress + 1, relativeBase);
                parameter2 = getParameterByMode(param2Mode, memory, memoryAdress + 2, relativeBase);
                if (parameter1 === 0){
                    memoryAdress = parameter2;
                } else {
                    memoryAdress += 3;
                }
                break;
            case '07':
                parameter1 = getParameterByMode(param1Mode, memory, memoryAdress + 1, relativeBase);
                parameter2 = getParameterByMode(param2Mode, memory, memoryAdress + 2, relativeBase);
                parameter3 = getAddress(param3Mode, memoryAdress + 3, memory, relativeBase);
                lessThan(parameter1, parameter2, parameter3, memory);
                memoryAdress += 4;
                break;
            case '08':
                parameter1 = getParameterByMode(param1Mode, memory, memoryAdress + 1, relativeBase);
                parameter2 = getParameterByMode(param2Mode, memory, memoryAdress + 2, relativeBase);
                parameter3 = getAddress(param3Mode, memoryAdress + 3, memory, relativeBase);
                memory[parameter3] = parameter1 === parameter2 ? 1 : 0;
                memoryAdress += 4;
                break;
            case '09':
                parameter1 = getParameterByMode(param1Mode, memory, memoryAdress + 1, relativeBase);
                relativeBase += parameter1;
                memoryAdress += 2;
                break;
            default:
        }
    }
    return output;
};