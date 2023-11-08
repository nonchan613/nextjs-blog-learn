// src/pages/posts/[id].tsx
import { Params, PostData } from "@/features/Posts/type";
import { getAllPostIds, getPostData } from "@/utils/posts";
import { Post } from "@/features/Posts";

export default function PostPage({ postData }: { postData: PostData }) {
	return <Post postData={postData} />;
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: Params) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}