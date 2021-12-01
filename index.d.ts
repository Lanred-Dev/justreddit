export function Post (Reddit: string, Sort_Type?: string, Limit?: number): Promise<>;
export function Image (Reddit: string, Sort_Type?: string, Limit?: number): Promise<string>;
export function SubReddit (Sort_Type, Limit): Promise<>;
export declare type Limit = number;
export declare type Reddit = string;
export declare type Sort_Type = "top" | "new";
