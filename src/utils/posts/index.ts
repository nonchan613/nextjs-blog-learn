// src/utils/posts/index.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { PostData } from "./type";
export type { PostData };

const postsDirectory = path.join(process.cwd(), "src", "posts");

export function getSortedPostsData(): PostData[] {
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, "");
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const matterResult = matter(fileContents);
		return {
			id,
			...matterResult.data,
		} as PostData;
	});
	return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostIds(): { params: { id: string } }[] {
	const fileNames = fs.readdirSync(postsDirectory);
	return fileNames.map((fileName) => ({
		params: {
			id: fileName.replace(/\.md$/, ""),
		},
	}));
}

export async function getPostData(id: string): Promise<PostData> {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const matterResult = matter(fileContents);
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();
	return {
		id,
		contentHtml,
		...matterResult.data,
	} as PostData;
}