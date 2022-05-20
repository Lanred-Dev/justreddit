"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomPostFromSub = void 0;
const node_fetch_1 = require("node-fetch");
const sort_types_1 = require("../types/sort-types");
async function randomPostFromSub(data) {
    const { reddit, sortType, postGetLimit } = data;
    if (!sort_types_1.SORT_TYPES.includes(sortType)) {
        throw new Error(`Invalid sort type: ${sortType}`);
    }
    const response = await (0, node_fetch_1.default)(`https://www.reddit.com/r/${reddit}/${sortType}.json?limit=${postGetLimit}`);
    const responseJSON = await response.json();
    if (responseJSON.error) {
        throw new Error(`Error: ${responseJSON.error}`);
    }
    const posts = responseJSON.data.children.map(child => child.data);
    const post = posts[Math.floor(Math.random() * posts.length)];
    if (post === null) {
        throw new Error("No post found");
    }
    ;
    return {
        image: post.url.replace("gifv", "gif"),
        title: post.title,
        content: post.selftext,
        upvotes: post.ups,
        downvotes: post.downs,
        upvoteRatio: post.upvote_ratio,
        nsfw: post.over_18,
        author: post.author,
        category: post.category,
        thumbnail: post.thumbnail,
        url: post.permalink ? `https://www.reddit.com/${post.permalink}` : null,
        html: post.selftext_html,
        createdUTC: post.created_utc,
        raw: post,
    };
}
exports.randomPostFromSub = randomPostFromSub;
