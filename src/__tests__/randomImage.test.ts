import { randomImage } from "../index";

test("random image", async () => {
    const image: string = await randomImage({ postGetLimit: 5, maxTries: 15 });
    console.log(image);
    expect(typeof image).toBe("string");
}, 10000);
