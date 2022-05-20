import { POST } from "../types/response";
import { randomPostFromSub } from "./randomPostFromSub";
import { randomSub } from "./randomSub";

type data = {
    sortType: string,
    postGetLimit: number,
};

export async function randomPost(data: data): Promise<POST> {
    const { sortType, postGetLimit } = data;
    const reddit = randomSub();

    return await randomPostFromSub({ reddit, sortType, postGetLimit });
}
