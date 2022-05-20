"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomSub_1 = require("../functions/randomSub");
test("randomSub", () => {
    const sub = (0, randomSub_1.randomSub)();
    expect(sub).toBeDefined();
});
