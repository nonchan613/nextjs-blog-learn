// src/features/Posts/type.ts
import { PostData } from "@/utils/posts";

export interface PostProps {
	postData: PostData;
}

export interface Params {
	params: {
		id: string;
	};
}
export type { PostData };