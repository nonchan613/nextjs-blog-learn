// src/pages/posts/first-post.tsx
import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/Layout";

const FirstPost = () => {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>

			<h1>First Post</h1>
			<h2>
				<Link href="/">Back to home</Link>
			</h2>
		</Layout>
	);
};

export default FirstPost;

// function Firstpost(){

// }
// ↑これと同じ
