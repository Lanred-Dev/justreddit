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

export async function user(name: string): Promise<User> {
    const response: RedditUserResponse = await fetchEndpoint(`${name}/about.json`, "user");
    const { is_employee, is_gold, id, created, total_karma, comment_karma, link_karma, verified, accept_followers, snoovatar_img } = response.data;

    return {
        name,
        avatar: snoovatar_img,
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
