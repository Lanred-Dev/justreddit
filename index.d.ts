export default function (Reddit: string, Sort_Type?: string): Promise<string>;
export default function (Reddit: string, Sort_Type?: string, Limit?: number): Promise<string>;
export declare type Limit = number;
export declare type Reddit = string;
export declare type Sort_Type = "top" | "new";
