import { randomImageFromSub } from "./randomImageFromSub";
import { randomSub } from "./randomSub";

type data = {
    sortType: string,
    postGetLimit: number,
};

export async function randomPost(data: data): Promise<string> {
    const { sortType, postGetLimit } = data;
    const reddit = randomSub();

    return await randomImageFromSub({ reddit, sortType, postGetLimit });
}
