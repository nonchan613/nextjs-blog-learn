// src/pages/index.tsx
import { getSortedPostsData } from "@/utils/posts";
import { Home } from "@/features/Home";
import { HomeProps } from "@/features/Home/type";

const HomePage = ({ allPostsData }: HomeProps) => {
	return <Home allPostsData={allPostsData} />;
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default HomePage;