import * as fs from 'fs';
import * as rd from 'readline'
import { Image, Layer } from './day8';

const reader = rd.createInterface(fs.createReadStream('src/inputs/input_day8.txt'));

let line: string;

reader.on("line", (l: string) => {
   line = l;
}).on("close", () => {
    const pix = [...line].map(Number);
    const img = new Image(6,25, pix);

    const l = img.layerByMostDig(0);

    const one = l.numberDigit(1);
    const two = l.numberDigit(2);

    console.log(one * two);

    let layer = new Layer();

    for (let i = 0; i < img.layers.length; i++) {
        for (let j = 0; j < img.layers[i].rows.length; j++) {
            for (let rows = 0; rows < img.layers[i].rows.length; ++rows) {
                if (typeof layer.rows[rows] === 'undefined') {
                    layer.rows.push([]);
                }
                for ( let pix = 0; pix < img.layers[i].rows[rows].length; ++pix ) {
                    if (typeof layer.rows[rows][pix] === 'undefined' ) {
                        layer.rows[rows].push(img.layers[i].rows[rows][pix]);
                    } else if (layer.rows[rows][pix] == 2) {
                        layer.rows[rows][pix] = img.layers[i].rows[rows][pix]
                    }
                }
            }
        }
    }
    for (let i = 0; i < layer.rows.length; i++){
        let row = []
        for (let j = 0; j < layer.rows[i].length; j++){
            if (layer.rows[i][j] === 0) {
                row.push(' ');
            } else {
                row.push('X');
            }
        }
        console.log(row.join(''));
    }
});




