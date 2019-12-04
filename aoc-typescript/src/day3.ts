export type Wire = {
    name: number;
}

export class Board {
    positions: Array<Map<String, number>>;
    constructor() {
        this.positions = [];
    }

    drawWire(wire: Wire, moves: Array<string>): void {
        let position = { 'x': 0, 'y': 0 };
        let wirePositions: Map<String, number> = new Map();
        let steps = 0;
        for (let idx in moves) {
            const direction = moves[idx].substr(0, 1);
            const distance = parseInt(moves[idx].substr(1));
            for (let step = 1; step <= distance; step++) {
                position.x += direction === 'L' ? -1 : direction === 'R' ? 1 : 0;
                position.y += direction === 'D' ? -1 : direction === 'U' ? 1 : 0;
                const posKey: string = `${position.x},${position.y}`;
                wirePositions.set(posKey, ++steps);
            }
        }
        this.positions.push(wirePositions);
    }
    getDay3a(): number {
        const wireB = this.positions[1]
        let bWirePosition = Array.from(wireB.entries());
        const wireA = this.positions[0];
        const intersections = bWirePosition.filter(([pos]) => wireA.has(pos));
        return intersections.map(([position, steps]) => position.split(',').map(Number))
            .map(([x, y]) => Math.abs(x) + Math.abs(y))
            .sort((a, b) => a - b)[0];
    }
    getDay3b(): number {
        const wireB = this.positions[1]
        let bWirePositions = Array.from(wireB.entries());
        const wireA = this.positions[0];
        const intersections = bWirePositions.filter(([pos]) => wireA.has(pos));
        return intersections.map(([position, steps]) => wireA.get(position)! + steps)
            .sort((a, b) => a - b)[0];
    }
}