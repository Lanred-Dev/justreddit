# justreddit

A simple no-dependency Reddit API wrapper for getting post, comment, and subreddit metadata. This package does not provide authorization functionality for the Reddit API; it simply uses public endpoints.

## Getting Started

> Current release (**5.0.0+**) requires **Node.js 21.0.0** at minimum.

First, install **justreddit** using this npm command:

```sh
npm i justreddit
```

Next, import it into your project:

```js
# CommonJS
const justreddit = require("justreddit");
# ESM
import justreddit from "justreddit";
```

And now you're ready to start using **justreddit** 😎

## Usage

#### Subreddits

Getting a subreddit's information:

```ts
# NOTE: Replace `javascript` with the name of the subreddit
justreddit.sub("javascript");
```

Or want to change it up and get a random subreddit?

```ts
justreddit.randomSub();
```

#### Posts

Getting a post's information:

```ts
# Note: Replace `javascript` with the name of the subreddit
# Note: Replace `6hz7o6` with the ID of the post
justreddit.post("javascript", "6hz7o6");
```

Don't have a post in mind? In that case, you can get a random one:

```ts
# Note: Both `subreddit` and `sortingOption` are optional parameters
# `randomPost` will get the top posts from all of Reddit if no subreddit is provided.
justreddit.randomPost(subreddit, sortingOption);
```

#### Replies

Getting a reply's information:

```ts
# Note: Replace `javascript` with the name of the subreddit
# Note: Replace `6hz7o6` with the ID of the post
# Note: Replace `dj2ky54` with the ID of the reply
justreddit.reply("javascript", "6hz7o6", "dj2ky54");
```

## License

Copyright © 2025 Landon Redmond

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
