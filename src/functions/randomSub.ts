import { subReddits } from "../types/options";

export default function randomSub(): string {
    return subReddits[Math.floor(Math.random() * subReddits.length)];
}
