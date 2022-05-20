import { POST } from "../types/response";
declare type data = {
    sortType: string;
    postGetLimit: number;
};
export declare function randomPost(data: data): Promise<POST>;
export {};
