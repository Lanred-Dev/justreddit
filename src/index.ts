import {get as subreddit} from "./Subreddit";
import { get as post } from "./Post";
import { get as reply } from "./Reply";
import {get as user} from "./User";

export { subreddit, post, reply, user };

export type { Subreddit } from "./Subreddit";
export type { Post } from "./Post";
export type { Reply } from "./Reply";
export type { User } from "./User";