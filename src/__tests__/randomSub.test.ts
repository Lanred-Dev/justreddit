import { randomSub } from "../index";

test("random sub", () => {
    const subReddit: string = randomSub();
    console.log(subReddit);
    expect(subReddit).toBeDefined();
    expect(typeof subReddit).toBe("string");
});
