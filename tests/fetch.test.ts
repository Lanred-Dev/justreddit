import { suite } from "node:test";
import { Post, Sub, User, post, user, sub } from "../src/index";
import { isValidPost, isValidSub, isValidUser } from "./utils";

suite("Fetch Tests", () => {
    test("Fetch Post", async () => {
        const document: Post = await post("javascript", "6hz7o6");
        expect(isValidPost(document)).toBe(true);
        expect(document.id).toBe("6hz7o6");
        expect(document.sub).toBe("javascript");
    });

    test("Fetch Sub", async () => {
        const document: Sub = await sub("javascript");
        expect(isValidSub(document)).toBe(true);
        expect(document.name).toBe("javascript");
    });

    test("Fetch User", async () => {
        const document: User = await user("spez");
        expect(isValidUser(document)).toBe(true);
        expect(document.name).toBe("spez");
    });
});
