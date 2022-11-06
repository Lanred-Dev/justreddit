import { randomImage } from "../index";

test("random image", async () => {
    const image: string | null = await randomImage({ sortType: "top", postGetLimit: 1, maxTries: 15 });
    console.log(image);
    expect(typeof image).toBe("string");
});
