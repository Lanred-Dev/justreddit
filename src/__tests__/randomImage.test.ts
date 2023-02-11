import { randomImage } from "../index";

test("random image", async () => {
    const image: string = await randomImage({});
    console.log(image);
    expect(typeof image).toBe("string");
}, 10000);
