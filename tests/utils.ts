import { Post, Sub, User } from "../src";

export function isValidPost(post: Post): boolean {
    return (
        typeof post.id === "string" &&
        post.id.length > 0 &&
        typeof post.sub === "string" &&
        post.sub.length > 0 &&
        typeof post.author === "string" &&
        post.author.length > 0 &&
        typeof post.title === "string" &&
        post.title.length > 0 &&
        typeof post.body === "string" &&
        post.body.length >= 0 &&
        post.created instanceof Date
    );
}

export function isValidSub(sub: Sub): boolean {
    return (
        typeof sub.id === "string" &&
        sub.id.length > 0 &&
        typeof sub.name === "string" &&
        sub.name.length > 0 &&
        typeof sub.description === "string" &&
        sub.description.length > 0
    );
}

export function isValidUser(user: User): boolean {
    return (
        typeof user.id === "string" &&
        user.id.length > 0 &&
        typeof user.name === "string" &&
        user.name.length > 0 &&
        user.created instanceof Date &&
        typeof user.verified === "boolean"
    );
}
