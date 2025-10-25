/**
 * A simple fetch utility to get data from Reddit's API
 *
 * @param path
 * @param prefix
 * @returns The data from the endpoint
 */
export default async function fetchEndpoint(
    path: string,
    prefix: "user" | "r" | null
): Promise<any> {
    // The Reddit API uses .json at the end of paths to return JSON data
    path = `${prefix ? `${prefix}/` : ""}${path}.json`;

    // reddit.com redirects to www.reddit.com, so just use that directly
    const response: Response = await fetch(`https://www.reddit.com/${path}`);

    if (!response.ok || response.status !== 200)
        throw new Error(
            `Could not fetch data from '${path}' with status ${response.status} ${response.statusText}`
        );

    const body = await response.json();

    if ("error" in body && "message" in body)
        throw new Error(
            `Could not fetch data from '${path}' with status ${body.error} ${body.message}`
        );

    return body;
}
