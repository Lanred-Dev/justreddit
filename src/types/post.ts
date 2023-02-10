export type post = {
    image: string | null;
    title: string;
    content: string;
    url: string;
    subreddit: string;
    author: string;
    upvotes: number;
    downvotes: number;
    upvoteRatio: number;
    nsfw: boolean;
    createdUTC: number;
    category: string | null;
    thumbnail: string | null;
    pinned: boolean;
    archived: boolean;
    awards: Array<any>;
    commentAmount: number;
    html: string | null;
    raw: any | null;
    error?: string;
};

export default post;
