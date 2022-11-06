import fetch, { Response } from "node-fetch";
import response from "../types/response";
import post from "../types/post";
import options, { sortTypes } from "../types/options";

export default async function randomPostFromSub({ subReddit, sortType, postGetLimit, excludeRaw }: options): Promise<post> {
    if (subReddit === null)
        return {
            error: "No sub reddit",
        } as post;

    if (sortTypes.includes(sortType) === false)
        return {
            error: `Invalid sort type: ${sortType}`,
        } as post;

    const redditFetch: Response = await fetch(`https://www.reddit.com/r/${subReddit}/${sortType}.json?limit=${postGetLimit}`);
    const response: response = await redditFetch.json();

    if (typeof response.error !== "undefined")
        return {
            error: `reddit error: ${response.error}`,
        } as post;

    const posts: Array<Array<{ [key: string]: string }>> = response.data.children.map((child: { data: any }) => child.data);
    const post: { [key: string]: any } | null = posts[Math.floor(Math.random() * posts.length)];

    if (post === null)
        return {
            error: "No post found",
        } as post;

    return {
        image: typeof post.url_overridden_by_dest === "string" ? post.url_overridden_by_dest : null,
        title: post.title,
        content: post.selftext,
        url: `https://www.reddit.com${post.permalink}`,
        subreddit: post.subreddit,
        author: post.author,
        upvotes: post.ups,
        downvotes: post.downs,
        upvoteRatio: post.upvote_ratio,
        nsfw: post.over_18,
        createdUTC: post.created_utc,
        category: post.category,
        thumbnail: post.thumbnail,
        pinned: post.pinned,
        archived: post.archived,
        awards: post.all_awardings,
        commentAmount: post.num_comments,
        html: post.selftext_html,
        raw: excludeRaw !== true ? post : null,
    };
}
