import fetchEndpoint from "./utils/fetchEndpoint";

interface RedditUserResponse {
    kind: "t2";
    data: {
        is_employee: boolean;
        is_friend: boolean;
        subreddit: {
            default_set: boolean;
            user_is_contributor: null;
            banner_img: string;
            allowed_media_in_comments: string[];
            user_is_banned: null;
            free_form_reports: boolean;
            community_icon: null;
            show_media: boolean;
            icon_color: string;
            user_is_muted: null;
            display_name: string;
            header_img: null;
            title: string;
            previous_names: string[];
            over_18: boolean;
            icon_size: [number, number];
            primary_color: string;
            icon_img: string;
            description: string;
            submit_link_label: string;
            header_size: null;
            restrict_posting: boolean;
            restrict_commenting: boolean;
            subscribers: number;
            submit_text_label: string;
            is_default_icon: boolean;
            link_flair_position: string;
            display_name_prefixed: string;
            key_color: string;
            name: string;
            is_default_banner: boolean;
            url: string;
            quarantine: boolean;
            banner_size: null;
            user_is_moderator: null;
            accept_followers: boolean;
            public_description: string;
            link_flair_enabled: boolean;
            disable_contributor_requests: boolean;
            subreddit_type: string;
            user_is_subscriber: null;
        };
        snoovatar_size: [number, number];
        awardee_karma: number;
        id: string;
        verified: boolean;
        is_gold: boolean;
        is_mod: boolean;
        awarder_karma: number;
        has_verified_email: boolean;
        icon_img: string;
        hide_from_robots: boolean;
        link_karma: number;
        is_blocked: boolean;
        total_karma: number;
        pref_show_snoovatar: boolean;
        name: string;
        created: number;
        created_utc: number;
        snoovatar_img: string;
        comment_karma: number;
        accept_followers: boolean;
        has_subscribed: boolean;
    };
}

export interface User {
    name: string;
    avatar: string;
    url: string;
    id: string;
    isEmployee: boolean;
    isGold: boolean;
    created: Date;
    karma: {
        total: number;
        comment: number;
        link: number;
    };
    verified: boolean;
    acceptingFollowers: boolean;
}

/**
 * Fetches detailed profile information about a Reddit user.
 *
 * @param name - The Reddit username (without the `/u/` or `/user/` prefix).
 * @returns A Promise that resolves to a {@link User} object with the user's information.
 *
 * @example
 * ```ts
 * import { user } from "justreddit";
 *
 * const profile = await user("spez");
 * console.log(profile.karma.total);
 * // → e.g., 15423
 * ```
 */
export async function user(name: string): Promise<User> {
    const response: RedditUserResponse = await fetchEndpoint(`${name}/about`, "user");
    const { is_employee, is_gold, id, created, total_karma, comment_karma, link_karma, verified, accept_followers, icon_img } = response.data;

    return {
        name,
        url: `https://reddit.com/user/${name}`,
        avatar: icon_img,
        id,
        isEmployee: is_employee,
        isGold: is_gold,
        created: new Date(created * 1000),
        karma: {
            total: total_karma,
            comment: comment_karma,
            link: link_karma,
        },
        verified,
        acceptingFollowers: accept_followers,
    };
}
