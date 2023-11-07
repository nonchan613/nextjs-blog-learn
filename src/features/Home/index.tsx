// src/features/Home/index.tsx
import Head from "next/head";
import Layout from "@/components/Layout/";
import utilStyles from "@/styles/utils.module.css";
import Link from "next/link";
import Date from "@/components/Elements/Date";
import { HomeProps } from "./type";
import { siteTitle } from "@/components/Layout";

export const Home = ({ allPostsData }: HomeProps) => {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>{title}</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
};