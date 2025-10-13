import { suite } from "node:test";
import { randomPost, Post, RandomPostSortingMethod, RandomSubSortingMethod, randomSub, Sub } from "../src";
import { isValidPost, isValidSub } from "./utils";

suite("Random Tests", () => {
    test("Random Post", async () => {
        const document: Post = await randomPost();
        expect(isValidPost(document)).toBe(true);
    });

    test("Random Post with Subreddit", async () => {
        const document: Post = await randomPost("javascript");
        expect(isValidPost(document)).toBe(true);
    });

    test("Random Post with Subreddit and Method", async () => {
        const document: Post = await randomPost("javascript", RandomPostSortingMethod.new);
        expect(isValidPost(document)).toBe(true);
    });

    test("Random Post with Method", async () => {
        const document: Post = await randomPost(undefined, RandomPostSortingMethod.rising);
        expect(isValidPost(document)).toBe(true);
    });

    test("Random Sub", async () => {
        const document: Sub = await randomSub();
        expect(isValidSub(document)).toBe(true);
    });

    test("Random Sub with Method", async () => {
        const document: Sub = await randomSub(RandomSubSortingMethod.new);
        expect(isValidSub(document)).toBe(true);
    });
});
