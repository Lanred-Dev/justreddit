
# justreddit

A simple package for getting random posts, random images, random SubReddits, and SubReddit info.


## Installation

Current release (3.0.0+) requires Node.js 12.20.0 at minimum.
```sh
npm i justreddit
```

## Requiring
CommonJS
```js
const justreddit = require("justreddit");
```

ESM
```js
import justreddit from "justreddit";
```

## Usage
#### Note: options are in dictionary form.

#### Getting a random post
```js
/*
    # Options

    subReddit: string
    The name of the SubReddit. Only allowed on "randomPostFromSub" function.

    sortType: "new", "top", "hot", "random", "controversial", "rising"
    How the posts should be sorted when searching.

    postGetLimit: number
    The amount of posts that can be chosen from.

    excludeRaw?: boolean
    Whether to exclude the raw data from the response.
*/

justreddit.randomPost({ ...options });
justreddit.randomPostFromSub({ ...options }); // with a specified SubReddit

/*
    # Returns a dictionary

    {
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
        raw: Object | null;
        error?: string;
    }
*/
```

#### Getting a random image
```js
/*
    # Options

    subReddit?: string
    The name of the SubReddit. Only allowed on "randomImageFromSub" function.

    sortType: "new", "top", "hot", "random", "controversial", "rising"
    How the posts should be sorted when searching.

    postGetLimit: number
    The amount of posts that can be chosen from.
*/

justreddit.randomImage({ ...options });
justreddit.randomImageFromSub({ ...options }); // with a specified SubReddit

//# Returns a string | null (if no image is found)
```

#### Getting a random SubReddit
```js
justreddit.randomSub();

//# Returns a string
```

#### Getting SubReddit info
```js
/*
    # Options

    subReddit: string
    The name of the SubReddit. Only allowed on "randomSubInfo" function.

    excludeRaw?: boolean
    Whether to exclude the raw data from the response.
*/

justreddit.subInfo({ ...options });
justreddit.randomSubInfo({ ...options }); // with a specified SubReddit

/*
    # Returns a dictionary

    {
        subreddit: string;
        title: string;
        description: string;
        url: string;
        primaryColor: string;
        keyColor: string;
        type: string;
        icon: string;
        userCount: number;
        activeUserCount: number;
        banner: string;
        mobileBanner: string;
        bannerColor: string;
        emojisEnabled: boolean;
        nsfw: boolean;
        createdUTC: number;
        crossPostable: boolean;
        raw?: Object | null;
        error?: string;
    }
*/
```

## License

Copyright © 2022 Lanred

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.