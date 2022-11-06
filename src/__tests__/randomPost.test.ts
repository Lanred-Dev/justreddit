import { randomPost } from "../index";
import post from "../types/post";

test("random post", async () => {
    const post: post = await randomPost({ sortType: "top", postGetLimit: 1, excludeRaw: true });
    console.log(post)
    expect(post).toBeTruthy();
    expect(typeof post).toBe("object");
});
