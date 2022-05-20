"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomImageFromSub = void 0;
const randomPostFromSub_1 = require("./randomPostFromSub");
async function randomImageFromSub(data) {
    const post = await (0, randomPostFromSub_1.randomPostFromSub)(data);
    const image = post.image;
    return image;
}
exports.randomImageFromSub = randomImageFromSub;
