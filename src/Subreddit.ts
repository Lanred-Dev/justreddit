import fetch from "./utils/fetch";

interface RedditSubreddit {
    kind: "t5";
    data: {
        user_flair_background_color: string | null;
        submit_text_html: string;
        restrict_posting: boolean;
        user_is_banned: boolean | null;
        free_form_reports: boolean;
        wiki_enabled: boolean;
        user_is_muted: boolean | null;
        user_can_flair_in_sr: boolean | null;
        display_name: string;
        header_img: string | null;
        title: string;
        allow_galleries: boolean;
        icon_size: [number, number] | null;
        primary_color: string;
        active_user_count: number;
        icon_img: string;
        display_name_prefixed: string;
        accounts_active: number;
        public_traffic: boolean;
        subscribers: number;
        user_flair_richtext: unknown[];
        name: string;
        quarantine: boolean;
        hide_ads: boolean;
        prediction_leaderboard_entry_type: number;
        emojis_enabled: boolean;
        advertiser_category: string;
        public_description: string;
        comment_score_hide_mins: number;
        allow_predictions: boolean;
        user_has_favorited: boolean | null;
        user_flair_template_id: string | null;
        community_icon: string;
        banner_background_image: string;
        original_content_tag_enabled: boolean;
        community_reviewed: boolean;
        submit_text: string;
        description_html: string;
        spoilers_enabled: boolean;
        comment_contribution_settings: {
            allowed_media_types: string[] | null;
        };
        allow_talks: boolean;
        header_size: [number, number] | null;
        user_flair_position: "left" | "right";
        all_original_content: boolean;
        has_menu_widget: boolean;
        is_enrolled_in_new_modmail: boolean | null;
        key_color: string;
        can_assign_user_flair: boolean;
        created: number;
        wls: number;
        show_media_preview: boolean;
        submission_type: string;
        user_is_subscriber: boolean | null;
        allowed_media_in_comments: string[];
        allow_videogifs: boolean;
        should_archive_posts: boolean;
        user_flair_type: string;
        allow_polls: boolean;
        collapse_deleted_comments: boolean;
        emojis_custom_size: [number, number] | null;
        public_description_html: string;
        allow_videos: boolean;
        is_crosspostable_subreddit: boolean;
        notification_level: string | null;
        should_show_media_in_comments_setting: boolean;
        can_assign_link_flair: boolean;
        accounts_active_is_fuzzed: boolean;
        allow_prediction_contributors: boolean;
        submit_text_label: string;
        link_flair_position: "left" | "right";
        user_sr_flair_enabled: boolean | null;
        user_flair_enabled_in_sr: boolean;
        allow_discovery: boolean;
        accept_followers: boolean;
        user_sr_theme_enabled: boolean;
        link_flair_enabled: boolean;
        disable_contributor_requests: boolean;
        subreddit_type: string;
        suggested_comment_sort: string | null;
        banner_img: string;
        user_flair_text: string | null;
        banner_background_color: string;
        show_media: boolean;
        id: string;
        user_is_moderator: boolean | null;
        over18: boolean;
        header_title: string;
        description: string;
        submit_link_label: string;
        user_flair_text_color: string | null;
        restrict_commenting: boolean;
        user_flair_css_class: string | null;
        allow_images: boolean;
        lang: string;
        url: string;
        created_utc: number;
        banner_size: [number, number] | null;
        mobile_banner_image: string;
        user_is_contributor: boolean | null;
        allow_predictions_tournament: boolean;
    };
}

interface RedditPopularSubredditsResponse {
    kind: "Listing";
    data: {
        after: string | null;
        dist: number;
        modhash: string | null;
        geo_filter: string | null;
        children: RedditSubreddit[];
    };
}

export interface Subreddit {
    id: string;
    url: string;
    language: string;
    name: string;
    description: string;
    nsfw: boolean;
    subscribers: number;
    created: Date;
    usersOnline: number;
    communityReviewed: boolean;
    allOriginalContent: boolean;
    colors: {
        primary: string;
        key: string;
    };
    banners: {
        desktop: string;
        mobile: string;
    };
    allows: {
        posting: boolean;
        emojis: boolean;
        images: boolean;
        videos: boolean;
        polls: boolean;
        videogifs: boolean;
        discovery: boolean;
        galleries: boolean;
        mediaInComments: boolean;
        predictions: boolean;
        talks: boolean;
        followers: boolean;
    };
}

function parseSubreddit({ id, url, display_name, description, over18, lang, active_user_count, allow_images, allow_videos, allow_polls, allow_videogifs, allow_discovery, allow_galleries, should_show_media_in_comments_setting, allow_predictions, allow_talks, accept_followers, subscribers, community_reviewed, emojis_enabled, restrict_posting, all_original_content, created, banner_background_image, mobile_banner_image, primary_color, key_color }: RedditSubreddit["data"]): Subreddit {
    return {
        id,
        url: `https://www.reddit.com/${url}`,
        language: lang,
        name: display_name,
        description,
        nsfw: over18,
        subscribers,
        created: new Date(created * 1000),
        usersOnline: active_user_count,
        communityReviewed: community_reviewed,
        allOriginalContent: all_original_content,
        colors: {
            primary: primary_color,
            key: key_color,
        },
        banners: {
            desktop: banner_background_image,
            mobile: mobile_banner_image,
        },
        allows: {
            posting: !restrict_posting,
            emojis: emojis_enabled,
            images: allow_images,
            videos: allow_videos,
            polls: allow_polls,
            videogifs: allow_videogifs,
            discovery: allow_discovery,
            galleries: allow_galleries,
            mediaInComments: should_show_media_in_comments_setting,
            predictions: allow_predictions,
            talks: allow_talks,
            followers: accept_followers,
        },
    };
}

export async function subreddit(subreddit: string): Promise<Subreddit> {
    const response: RedditSubreddit = await fetch(subreddit);
    return parseSubreddit(response.data);
}

export async function randomSubreddit(): Promise<Subreddit> {
    const response: RedditPopularSubredditsResponse = await fetch("subreddits/popular");
    const subreddits: RedditSubreddit[] = response.data.children.filter((subreddit) => subreddit.kind === "t5");
    return parseSubreddit(subreddits[Math.floor(Math.random() * subreddits.length)].data);
}
