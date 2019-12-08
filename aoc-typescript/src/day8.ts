export class Layer {
    rows: number[][];
    constructor() {
        this.rows = [];
    }
    fillLay(h: number, w: number, d:number[]) {
        let position: number = 0;
        for ( let i = 0; i < h; i++){
            let row: number[] = []
            for ( let j = 0; j < w; j++) {
                row.push(d[position])
                position++;
            }
            this.rows.push(row);
        }
    }
    numberDigit(digit: number): number {
        let numberDigit: number = 0;
        for ( let i = 0; i < this.rows.length; i++ ) {
            for ( let j = 0; j < this.rows[i].length; j++) {
                if ( this.rows[i][j] === digit) {
                    ++numberDigit;
                }
            }
        }
        return numberDigit;
    }
}

export class Image {
    layers: Layer[]
    constructor(imageHight:number, imageWeight: number, pixels: number[]) {
        this.layers = [];
        let pixel = 0;
        while ( pixel < pixels.length) {
            const layer = new Layer()
            layer.fillLay(imageHight, imageWeight, pixels.slice(pixel, pixel + ( imageWeight * imageHight )));
            this.layers.push(layer);
            pixel = pixel + ( imageWeight * imageHight );
        }
    }
    layerByMostDig(dig: number): Layer {
        let l:Layer = this.layers[0];
        for ( let i = 0; i < this.layers.length; i++) {
            if ( this.layers[i].numberDigit(0) < l.numberDigit(0)) {
                l = this.layers[i];
            }
        }
        return l;
    }
}
