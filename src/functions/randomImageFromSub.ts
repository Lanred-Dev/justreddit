import { imageOptions } from "../types/options";
import post from "../types/post";
import randomPostFromSub from "./randomPostFromSub";

export default async function randomImageFromSub({ subReddit, sortType, postGetLimit, maxTries }: imageOptions): Promise<string | null> {
    let randomImage: string | null = null;
    let tries: number = 0;

    while (typeof randomImage !== "string" && tries <= maxTries) {
        const { image }: post = await randomPostFromSub({ subReddit, sortType, postGetLimit });

        if (typeof image === "string" && image.length > 0) {
            randomImage = image;
            break;
        }

        tries++;
    }
    
    return randomImage;
}
