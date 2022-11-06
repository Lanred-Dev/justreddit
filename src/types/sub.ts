export type sub = {
    subreddit: string;
    title: string;
    description: string;
    url: string;
    primaryColor: string;
    keyColor: string;
    type: string;
    icon: string;
    userCount: number;
    activeUserCount: number;
    banner: string;
    mobileBanner: string;
    bannerColor: string;
    emojisEnabled: boolean;
    nsfw: boolean;
    createdUTC: number;
    crossPostable: boolean;
    raw?: Object | null;
    error?: string;
};

export default sub;
