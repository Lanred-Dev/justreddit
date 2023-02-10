import {imageOptions} from "../types/options";
import randomSub from "./randomSub";
import randomImageFromSub from "./randomImageFromSub";

export default async function randomImage(options: imageOptions): Promise<string> {
    if (typeof options?.subReddit === "string") options.subReddit = undefined;

    return await randomImageFromSub({ subReddit: randomSub(), ...options });
}
