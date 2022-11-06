import post from "../types/post";
import options from "../types/options";
import randomPostFromSub from "./randomPostFromSub";
import randomSub from "./randomSub";

export default async function randomPost(options: options): Promise<post> {
    if (typeof options.subReddit === "string") options.subReddit = undefined;

    return await randomPostFromSub({ subReddit: randomSub(), ...options });
}
