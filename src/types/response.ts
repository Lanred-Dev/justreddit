export type POST = {
    image: string,
    title: string,
    content: string,
    url: string,
    subreddit: string,
    author: string,
    upvotes: number,
    downvotes: number,
    upvoteRatio: number,
    nsfw: boolean,
    createdUTC: number,
    category: string | null,
    thumbnail: string | null,
    html: string | null,
    raw: Object,
}

export type RESPONSE = {
    error: number | null,
    data: {
        children: Array<{
            data: Array<POST>
        }>
    }
}