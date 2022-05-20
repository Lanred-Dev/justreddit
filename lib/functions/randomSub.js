"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomSub = void 0;
const subs_1 = require("../types/subs");
function randomSub() {
    const reddit = subs_1.SUBS[Math.floor(Math.random() * subs_1.SUBS.length)];
    return reddit;
}
exports.randomSub = randomSub;
