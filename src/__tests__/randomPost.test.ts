import { randomPost } from "../index";
import post from "../types/post";

test("random post", async () => {
    const post: post = await randomPost({});
    console.log(post);
    expect(post).toBeTruthy();
    expect(typeof post).toBe("object");
});

test("random post - random sort", async () => {
    const post: post = await randomPost({ sortType: "random" });
    console.log(post);
    expect(post).toBeTruthy();
    expect(typeof post).toBe("object");
});
