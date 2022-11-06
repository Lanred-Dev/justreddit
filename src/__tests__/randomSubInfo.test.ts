import { randomSubInfo } from "../index";
import sub from "../types/sub";

test("random sub", async () => {
    const sub: sub = await randomSubInfo({ excludeRaw: true });
    console.log(sub);
    expect(sub).toBeTruthy();
    expect(typeof sub).toBe("object");
});
