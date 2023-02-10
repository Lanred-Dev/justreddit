import { imageOptions } from "../types/options";
import post from "../types/post";
import randomPostFromSub from "./randomPostFromSub";

function getImageFromGalleryPost(post: post) {
    const images: Array<any> = Object.values(post.raw?.media_metadata).filter((image: any) => image.status === "valid");

    return images[Math.floor(Math.random() * images.length)]?.s.u.replace(/&amp;/g, "&");
}

export default async function randomImageFromSub({ subReddit, sortType = "top", maxTries = 15 }: imageOptions): Promise<string> {
    let post: post | null = null;
    let tries: number = 0;

    while (typeof post !== null && tries <= maxTries) {
        const randomPost: post = await randomPostFromSub({ subReddit, sortType, postGetLimit: 10, excludeRaw: false });

        if (typeof randomPost.raw.url === "string" && randomPost.raw.url.length > 0 && /\.(jpe?g|png|gif|bmp)$/i.test(randomPost.raw.url) === true) {
            post = randomPost;
            break;
        }

        tries++;
    }

    if (post?.raw.is_gallery) {
        return getImageFromGalleryPost(post);
    }

    return post?.raw.url.replace("gifv", "gif") as string;
}
