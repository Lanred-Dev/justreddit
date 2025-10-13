import { RedditPost } from "./Post";
import fetchEndpoint from "./utils/fetchEndpoint";

interface RedditReply {
    kind: "t1";
    data: {
        subreddit_id: string;
        approved_at_utc: number | null;
        author_is_blocked: boolean;
        comment_type: string | null;
        awarders: any[];
        mod_reason_by: string | null;
        banned_by: string | null;
        author_flair_type: string;
        total_awards_received: number;
        subreddit: string;
        author_flair_template_id: string | null;
        likes: boolean | null;
        user_reports: any[];
        saved: boolean;
        id: string;
        banned_at_utc: number | null;
        mod_reason_title: string | null;
        gilded: number;
        archived: boolean;
        collapsed_reason_code: string | null;
        no_follow: boolean;
        author: string;
        can_mod_post: boolean;
        created_utc: number;
        send_replies: boolean;
        parent_id: string;
        score: number;
        author_fullname: string;
        approved_by: string | null;
        mod_note: string | null;
        all_awardings: any[];
        collapsed: boolean;
        body: string;
        edited: boolean;
        top_awarded_type: string | null;
        author_flair_css_class: string | null;
        name: string;
        is_submitter: boolean;
        downs: number;
        author_flair_richtext: any[];
        author_patreon_flair: boolean;
        body_html: string;
        removal_reason: string | null;
        collapsed_reason: string | null;
        distinguished: string | null;
        associated_award: any | null;
        stickied: boolean;
        author_premium: boolean;
        can_gild: boolean;
        gildings: Record<string, number>;
        unrepliable_reason: string | null;
        author_flair_text_color: string | null;
        score_hidden: boolean;
        permalink: string;
        subreddit_type: string;
        locked: boolean;
        report_reasons: string[] | null;
        created: number;
        author_flair_text: string | null;
        treatment_tags: string[];
        link_id: string;
        subreddit_name_prefixed: string;
        controversiality: number;
        depth: number;
        author_flair_background_color: string | null;
        collapsed_because_crowd_control: boolean | null;
        mod_reports: any[];
        num_reports: number | null;
        ups: number;
        replies: {
            kind: "Listing";
            data: {
                after: null;
                dist: number;
                modhash: string;
                geo_filter: string;
                children: RedditReply[];
            };
        };
    };
}

interface RedditResponse {
    kind: string;
    data: {
        after: null;
        dist: number;
        modhash: string;
        geo_filter: string;
        children: (RedditPost | RedditReply)[];
    };
}

export interface Reply {
    sub: string;
    post: string;
    id: string;
    author: string;
    created: Date;
    body: string;
    isPostAuthor: boolean;
    likes: number;
    dislikes: number;
    archived: boolean;
}

/**
 * Fetches information about a specific reply (comment) on a Reddit post.
 *
 * @param sub - The subreddit name (without the `r/` prefix).
 * @param post - The post ID or identifier.
 * @param reply - The reply (comment) ID to fetch.
 * @returns A Promise that resolves to a {@link Reply} object with the reply's details.
 *
 * @example
 * ```ts
 * import { reply } from "justreddit";
 *
 * const comment = await reply("javascript", "abc123", "def456");
 * console.log(comment.body);
 * // → "I totally agree with this!"
 * ```
 */
export async function reply(sub: string, post: string, reply: string): Promise<Reply> {
    const response: RedditResponse[] = await fetchEndpoint(`${sub}/comments/${post}/comments/${reply}`, "r");
    const { author, created, body, is_submitter, ups, downs, archived } = (response[1].data.children[0] as RedditReply).data;

    return {
        sub,
        post,
        id: reply,
        author,
        created: new Date(created * 1000),
        body,
        isPostAuthor: is_submitter,
        likes: ups,
        dislikes: downs,
        archived,
    };
}
