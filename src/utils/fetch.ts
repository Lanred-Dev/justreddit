interface RedditError {
    message: string;
    error: string;
}

export default async function fetch(path: string): Promise<any> {
    const response: Response = await fetch(`https://www.reddit.com/r/${path}.json`);

    if (!response.ok || response.status !== 200) throw new Error(`Could not fetch data from path (${path}): ${response.statusText}`);

    const body: RedditError | any = await response.json();

    if ("error" in body && "message" in body) throw new Error(`Could not fetch data from path (${path}) with '${body.message}' and error '${body.error}'`);

    return body;
}