import { randomPostFromSub } from "./randomPostFromSub";

type data = {
    reddit: string,
    sortType: string,
    postGetLimit: number,
};

export async function randomImageFromSub(data: data): Promise<string> {
    const post = await randomPostFromSub(data);
    const image = post.image;

    return image;
}
