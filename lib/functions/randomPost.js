"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomPost = void 0;
const randomPostFromSub_1 = require("./randomPostFromSub");
const randomSub_1 = require("./randomSub");
async function randomPost(data) {
    const { sortType, postGetLimit } = data;
    const reddit = (0, randomSub_1.randomSub)();
    return await (0, randomPostFromSub_1.randomPostFromSub)({ reddit, sortType, postGetLimit });
}
exports.randomPost = randomPost;
