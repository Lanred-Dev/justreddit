import { randomPost } from "../functions/randomPost";

test("randomSub", async () => {
    const sub = await randomPost({ sortType: "top", postGetLimit: 1 });
    expect(sub).toBeDefined();
});
