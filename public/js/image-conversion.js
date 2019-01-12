/* Takes a canvas and returns a 2D array of gain values (generated from the luma
    of each pixed of the canvas), and an array of pitches in descending order.

    Each "row" in the 2D array actually corresponds to a column of the image,
    making it easier to scan the image data in columns from left to right. */
export function getGainsAndPitches(canvas, minPitch, maxPitch) {
    const imgData = make2dArray(canvas);
    const gains = imgData.map(list => {
        return list.map(e => e/255);
    });
    const pitches = getPitches(imgData, minPitch, maxPitch);

    return [gains, pitches];
}

export function make2dArray(canvas) {
    const width = canvas.width;
    const height = canvas.height;
    const ctx = canvas.getContext("2d");

    if (width*height === 1) {
        const pixel = ctx.getImageData(0, 0, 1, 1).data;
        return [[0.299*pixel[0] + 0.587*pixel[1] + 0.114*pixel[2]]];
    }
    
    let output = Array(width).fill().map(() => Array(height));
    for (let i=0; i < width; i++) {
        for (let j=0; j < height; j++) {
            const pixel = ctx.getImageData(i, j, 1, 1).data;
            // Conversion to greyscale using CCIR 601 method
            const y = 0.299*pixel[0] + 0.587*pixel[1] + 0.114*pixel[2];
            output[i][j] = y;
        }
    }
    return output;
}

/* Calculates the interval between each pitch based on the height of the image,
a minimum pitch, and a maximum pitch */
export function getBaseInterval(arr, minPitch, maxPitch) {
    const height = arr[0].length;
    const range = maxPitch / minPitch;
    if (height <= 1) {
        return 1;
    }
    
    const exp = 1 / (height - 1);
    return Math.pow(range, exp);
}

/* Returns a list of pitches in descending order from maxPitch to minPitch.
The number of pitches is based on the height of each column of the image data */
export function getPitches(arr, minPitch, maxPitch) {
    if (arr.length === 0 || arr[0].length === 0) {
        return [];
    }

    const output = Array(arr[0].length);
    const baseInterval = getBaseInterval(arr, minPitch, maxPitch);
    let freq = maxPitch;
    output[0] = freq;

    for (let i = 1; i < output.length; i++) {
        freq /= baseInterval;
        output[i] = freq;
    }

    return output;
}