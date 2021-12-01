# justreddit

justreddit is a simple wrapper for the reddit endpoint.

# Installation

```
npm i justreddit
```

then...

```js
const justreddit = require("justreddit");
```
```ts
import justreddit from "justreddit";
```

# Usage

## Get a random post from a subreddit
```js
async function Post() {
    const Response = await justreddit.Post("SUBREDDIT_NAME"); //default
    const Top_Response = await justreddit.Post("SUBREDDIT_NAME", "top"); //gets the top posts
    const New_Response = await justreddit.Post("SUBREDDIT_NAME", "new"); //gets the new posts
    const Top_50_Responses = await justreddit.Post("SUBREDDIT_NAME", "top", 50); //gets the top posts with a limit of 50 posts
    const New_100_Responses = await justreddit.Post("SUBREDDIT_NAME", "new", 100); //gets the new posts with a limit of 100 posts

    //Post function returns a image url, title, upvotes, author, downvotes, and text
}
```

## Get a random image from a subreddit
```js
async function Image() {
    const Response = await justreddit.Image("SUBREDDIT_NAME"); //default function
    const Top_Response = await justreddit.Image("SUBREDDIT_NAME", "top"); //gets the top images
    const New_Response = await justreddit.Image("SUBREDDIT_NAME", "new"); //gets the new images
    const Top_50_Responses = await justreddit.Image("SUBREDDIT_NAME", "top", 50); //gets the top images with a limit of 50 images
    const New_100_Responses = await justreddit.Image("SUBREDDIT_NAME", "new", 100); //gets the new images with a limit of 100 images

    //Image function returns a image url
}
```

# License

Copyright © 2021 Lanred

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.