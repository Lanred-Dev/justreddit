import randomSub from "./randomSub";
import subInfo from "./subInfo";
import sub from "../types/sub";
import { subOptions } from "../types/options";

export default async function randomSubInfo(options?: subOptions): Promise<sub> {
    if (typeof options?.subReddit === "string") options.subReddit = undefined;

    return await subInfo({ subReddit: randomSub(), ...options });
}
