// src/features/Posts/index.tsx
import Layout from "@/components/Layout";
import Head from "next/head";
import Date from "@/components/Elements/Date";
import utilStyles from "@/styles/utils.module.css";
import { PostData } from "./type";

export const Post = ({ postData }: { postData: PostData }) => {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingx1}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<br />
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
};