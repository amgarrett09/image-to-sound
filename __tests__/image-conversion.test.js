import { createGains } from "../public/js/image-conversion.js";
const { createCanvas, loadImage } = require("canvas");

test("test createGains function", async () => {
    const canvas = createCanvas(8, 8);
    const ctx = canvas.getContext("2d");
    const image = await loadImage("public/images/demo/building.png");
    ctx.drawImage(image, 0, 0);

    expect(createGains(canvas)).toEqual([
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.9725490196078431,
        0.9725490196078431,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.9725490196078431,
        0.9725490196078431,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.9725490196078431,
        0.9725490196078431,
        0.9725490196078431,
        0.9725490196078431,
        0.9725490196078431,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.9725490196078431,
        0.9725490196078431,
        0.9725490196078431,
        0.9725490196078431,
        0.9725490196078431,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.9725490196078431,
        0.9725490196078431,
        0.9725490196078431,
        0.9725490196078431,
        0.9725490196078431,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.9725490196078431,
        0.9725490196078431,
        0.9725490196078431,
        0.9725490196078431,
        0.9725490196078431,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294,
        0.9725490196078431,
        0.9725490196078431,
        0.9725490196078431,
        0.9725490196078431,
        0.9725490196078431,
        0.976470588235294,
        0.976470588235294,
        0.976470588235294
    ]);
});
