import fetch, { Response } from "node-fetch";
import response from "../types/response";
import sub from "../types/sub";
import { subOptions } from "../types/options";

export default async function subInfo({ subReddit, excludeRaw = true }: subOptions): Promise<sub> {
    if (subReddit === null)
        return {
            error: "no subreddit",
        } as sub;

    const redditFetch: Response = await fetch(`https://www.reddit.com/r/${subReddit}/about.json`);
    const response: response = await redditFetch.json();

    if (typeof response.error !== "undefined")
        return {
            error: `reddit error: ${response.error}`,
        } as sub;

    const redditInfo: { [key: string]: any } | null = response.data;

    if (redditInfo === null)
        return {
            error: "no subreddit found",
        } as sub;

    return {
        subreddit: redditInfo.display_name,
        title: redditInfo.title,
        description: redditInfo.public_description,
        url: `https://www.reddit.com${redditInfo.url}`,
        primaryColor: redditInfo.primary_color,
        keyColor: redditInfo.key_color,
        type: redditInfo.subreddit_type,
        icon: redditInfo.community_icon,
        userCount: redditInfo.subscribers,
        activeUserCount: redditInfo.active_user_count,
        banner: redditInfo.banner_background_image,
        mobileBanner: redditInfo.mobile_banner_image,
        bannerColor: redditInfo.banner_background_color,
        emojisEnabled: redditInfo.emojis_enabled,
        nsfw: redditInfo.over_18,
        createdUTC: redditInfo.created_utc,
        crossPostable: redditInfo.is_crosspostable_subreddit,
        raw: excludeRaw !== true ? redditInfo : null,
    };
}
