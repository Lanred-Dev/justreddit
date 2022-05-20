import { randomSub } from "../functions/randomSub";

test("randomSub", () => {
    const sub = randomSub();
    expect(sub).toBeDefined();
});
