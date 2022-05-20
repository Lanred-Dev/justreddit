"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomPost_1 = require("../functions/randomPost");
test("randomSub", async () => {
    const sub = await (0, randomPost_1.randomPost)({ sortType: "top", postGetLimit: 1 });
    expect(sub).toBeDefined();
});
