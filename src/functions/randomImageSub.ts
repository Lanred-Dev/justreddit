import { imageSubReddits } from "../types/options";

export default function randomImageSub(): string {
    return imageSubReddits[Math.floor(Math.random() * imageSubReddits.length)];
}
