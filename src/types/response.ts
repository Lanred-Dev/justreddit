import post from "./post";

export type response = {
    error: number | null;
    data: {
        children: Array<{
            data: Array<post>;
        }>;
    };
};

export default response;
