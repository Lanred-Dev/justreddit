import fetchEndpoint from "./utils/fetchEndpoint";
import validateOption from "./utils/validateOption";

export interface RedditPost {
  kind: "t1" | "t3";
  data: {
    approved_at_utc: number | null;
    subreddit: string;
    selftext: string;
    user_reports: any[];
    saved: boolean;
    mod_reason_title: string | null;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: { e: string; t: string }[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: string;
    downs: number;
    thumbnail_height: number | null;
    top_awarded_type: string | null;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color: string | null;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: Record<string, any>;
    thumbnail_width: number | null;
    author_flair_template_id: string | null;
    is_original_content: boolean;
    author_fullname: string;
    secure_media: any | null;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category: string | null;
    secure_media_embed: Record<string, any>;
    link_flair_text: string;
    can_mod_post: boolean;
    score: number;
    approved_by: string | null;
    is_created_from_ads_ui: boolean;
    author_premium: boolean;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class: string | null;
    author_flair_richtext: any[];
    gildings: Record<string, number>;
    content_categories: string[] | null;
    is_self: boolean;
    mod_note: string | null;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category: string | null;
    banned_by: string | null;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html: string;
    likes: boolean | null;
    suggested_sort: string | null;
    banned_at_utc: number | null;
    view_count: number | null;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    all_awardings: any[];
    awarders: any[];
    media_only: boolean;
    link_flair_template_id: string;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text: string | null;
    treatment_tags: string[];
    visited: boolean;
    removed_by: string | null;
    num_reports: number | null;
    distinguished: string | null;
    subreddit_id: string;
    author_is_blocked: boolean;
    mod_reason_by: string | null;
    removal_reason: string | null;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    num_duplicates: number;
    report_reasons: string[] | null;
    author: string;
    discussion_type: string | null;
    num_comments: number;
    send_replies: boolean;
    media: any | null;
    contest_mode: boolean;
    author_patreon_flair: boolean;
    author_flair_text_color: string | null;
    permalink: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    mod_reports: any[];
    is_video: boolean;
  };
}

interface RedditPostResponse {
  kind: "Listing";
  data: {
    after: null;
    dist: number;
    modhash: string;
    geo_filter: string;
    children: RedditPost[];
  };
}

interface RedditPostsResponse {
  kind: "Listing";
  data: {
    after: null;
    dist: number;
    modhash: string;
    geo_filter: string;
    children: RedditPost[];
  };
}

export interface Post {
  url: string;
  sub: string;
  id: string;
  author: string;
  title: string;
  body: string;
  image: string | null;
  created: Date;
  likes: number;
  dislikes: number;
  over18: boolean;
  mediaOnly: boolean;
  pinned: boolean;
  locked: boolean;
  archived: boolean;
  edited: boolean;
  isOriginalContent: boolean;
}

const IMAGE_EXTENSIONS: string[] = ["jpg", "jpeg", "png", "gif", "webp"];

function parsePost({
  subreddit,
  over_18,
  locked,
  media_only,
  pinned,
  author,
  id,
  archived,
  edited,
  ups,
  is_original_content,
  downs,
  selftext,
  title,
  created,
  url,
}: RedditPost["data"]): Post {
  return {
    url: `https://reddit.com/r/${subreddit}/comments/${id}`,
    sub: subreddit,
    id,
    author,
    title,
    body: selftext,
    image: IMAGE_EXTENSIONS.some((extension) =>
      url.toLowerCase().endsWith(`.${extension}`)
    )
      ? url
      : null,
    created: new Date(created * 1000),
    likes: ups,
    dislikes: downs,
    over18: over_18,
    mediaOnly: media_only,
    pinned,
    locked,
    archived,
    edited,
    isOriginalContent: is_original_content,
  };
}

/**
 * Fetches information about a Reddit post.
 *
 * @param sub - The subreddit name (without the `r/` prefix).
 * @param postID - The ID of the post to fetch.
 * @returns A Promise that resolves to a {@link Post} object with the post's details.
 *
 * @example
 * ```ts
 * import { post } from "justreddit";
 *
 * const p = await post("javascript", "abc123");
 * console.log(p.title);
 * // → "Check out this cool JS trick!"
 * ```
 */
export async function post(sub: string, postID: string): Promise<Post> {
  const response: RedditPostResponse[] = await fetchEndpoint(
    `${sub}/comments/${postID}`,
    "r"
  );
  return parsePost((response[0].data.children[0] as RedditPost).data);
}

/**
 * Sorting methods for fetching random posts.
 */
export enum RandomPostSortingMethod {
  popular = "hot",
  new = "new",
  top = "top",
  rising = "rising",
}

/**
 * Fetches a random Reddit post, optionally from a specific subreddit.
 *
 * @param sub - (Optional) The subreddit name to fetch a post from.
 * @param method - The sorting method to use when selecting a random post.
 * @returns A Promise that resolves to a randomly selected {@link Post}.
 *
 * @example
 * ```ts
 * import { randomPost, RandomPostSortingMethod } from "justreddit";
 *
 * const random = await randomPost("javascript", RandomPostSortingMethod.rising);
 * console.log(random.title);
 * // → "New trick in JS you should see!"
 * ```
 */
export async function randomPost(
  sub?: string,
  method: RandomPostSortingMethod = RandomPostSortingMethod.top
): Promise<Post> {
  validateOption(method, RandomPostSortingMethod, "sorting option");

  const response: RedditPostsResponse = await fetchEndpoint(
    sub ? `${sub}/${method}` : `best`,
    "r"
  );
  const posts: RedditPost[] = response.data.children.filter(
    (post) => post.kind === "t3"
  );
  return parsePost(posts[Math.floor(Math.random() * posts.length)].data);
}
