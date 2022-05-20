import { SUBS } from "../types/subs";

export function randomSub(): string {
    const reddit = SUBS[Math.floor(Math.random() * SUBS.length)];
    return reddit;
}
