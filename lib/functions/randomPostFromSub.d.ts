import { POST } from "../types/response";
declare type data = {
    reddit: string;
    sortType: string;
    postGetLimit: number;
};
export declare function randomPostFromSub(data: data): Promise<POST>;
export {};
