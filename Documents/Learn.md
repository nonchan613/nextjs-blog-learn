# Learn Next.js-TypeScript

## 目次
- [Learn Next.js-TypeScript](#learn-nextjs-typescript)
	- [目次](#目次)
	- [セットアップ](#セットアップ)
		- [Node.jsのインストール](#nodejsのインストール)
		- [パッケージマネージャーのインストール](#パッケージマネージャーのインストール)
	- [1 | プロジェクトの作成](#1--プロジェクトの作成)
	- [2 | プロジェクトの開発](#2--プロジェクトの開発)
	- [2.1 | ページの作成](#21--ページの作成)
	- [2.2 | リンクの作成](#22--リンクの作成)
	- [2.3 | アセット、メタデータ、CSSの追加](#23--アセットメタデータcssの追加)
		- [3 | データの取得](#3--データの取得)


## [セットアップ](#セットアップ)
まずはNext.jsを使用する環境を作成します。

プロジェクトに作成するために必要なものをインストールします。

- Node.js
- パッケージマネージャー
  - npm
  - yarn

### Node.jsのインストール
[Node.js](https://nodejs.org/)の公式サイトからインストーラーをダウンロードしてインストールします。

### パッケージマネージャーのインストール
パッケージマネージャーは、プロジェクトに必要なパッケージを管理するツールです。
これらは、コマンドからインストールすることができます。
```bash
npm install -g yarn
```

以上で、Next.jsを使用する環境が整いました。

## [1 | プロジェクトの作成](#プロジェクトの作成)

それでは、早速プロジェクトの作成に入っていきます。
通常、Next.jsのプロジェクトを作成するには、以下のコマンドで作成する必要があります。
```bash
npx create-next-app
```
しかし、今回は事前に作成しておいたテンプレートを使用してプロジェクトを作成します。

以下のコマンドで、GitHubからテンプレートをクローンすることができます。
```bash
git clone -b learn https://github.com/MiuraManato/nextjs-blog.git
```

クローンして取得したリポジトリは、Next.jsやTypeScript,ESLint,Prettierといったツールを使用するための設定がすでにされています。

## [2 | プロジェクトの開発](#プロジェクトの開発)

それでは、プロジェクトの開発に入っていきます。

今回は、公式チュートリアルを使用していきます。。。が公式チュートリアルはJavaScriptを使用しているため、読み替える必要があります。

そこで、今回はQiitaの記事を参考にしながら、公式チュートリアルをTypeScriptで実装していきます。

[【意訳】Next.jsのチュートリアルをTypeScriptでする](https://qiita.com/h-taro/items/f47bf010d07dc18d190c#navigate-between-pages)


## [2.1 | ページの作成](#ページの作成)
まずは以下のように、ディレクトリ、ファイルを作成します。
```
├── src
│   ├── pages
│   │   ├── index.tsx
│   │   ├── posts
│   │   │   └── first-post.tsx
```

```tsx
// src/pages/posts/first-post.tsx
const FirstPost = () => {
  return (
    <h1>First Post</h1>
  )
};

export default FirstPost;
```

ここではアロー関数という書き方をしています。今回は、functionは使用せず、アロー関数を使用していきます。

ここまで出来たら、以下のコマンドで開発サーバーを起動します。
```bash
npm run dev
```
[localhost:3000](http://localhost:3000/posts/first-post)

## [2.2 | リンクの作成](#リンクの作成)
次に、既存のコードを修正して画面遷移を行えるようにします。

```tsx
// src/pages/posts/first-post.tsx
import Link from "next/link";

const FirstPost = () => {
  return (
    <>
      <h1>First Post</h1>
      <Link href="/">Back to home</Link>
    </>
  )
};

export default FirstPost;
```

```tsx
// src/pages/index.tsx
import Link from "next/link"

const Home = () => {
  return (
    <h1 className="title">
      Read <Link href="/posts/first-post">this page!</Link>
    </h1>
  )
};

export default Home;
```

これらのページでは、Next.jsのLinkコンポーネントを使用しています。

Linkコンポーネントの使い方は、aタグと同じようにhref属性を指定するだけです。しかし、外部のWebページに遷移する場合は、aタグを使用してください。

hrefでの指定は、pagesディレクトリをルートとして指定します。

## [2.3 | アセット、メタデータ、CSSの追加](#アセット、メタデータ、CSSの追加)
次に、アセット、メタデータ、CSSを追加していきます。

まずは、first-post.tsxにタイトルを追加します。
```tsx
// src/pages/posts/first-post.tsx
import Link from "next/link";
import Head from "next/head";

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
};

export default FirstPost;
```

次に、複数のページで使用できる共通のレイアウトを作成します。

```tsx
// src/components/Layout/index.tsx
import { LayoutProps } from "@/types/components/Layout";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {children}
    </div>
  )
};

export default Layout;
```

```ts
// src/types/src/components/Layout/index.ts
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
};
```

ここでは、Layoutの引数として、childrenを受け取っています。
引数は型を指定する必要があるため、別の型定義ファイルを作成しています。

次に、作成したLayoutをfirst-post.tsxに適用します。

```tsx
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
}

export default FirstPost;
```

次に、CSSを追加していきます。

```css
/* src/components/Layout/index.module.css */
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.backToHome {
  margin: 3rem 0 0;
}
```

```tsx
// src/components/Layout/index.tsx
import { LayoutProps } from "@/types/components/Layout";
import styles from './index.module.css'

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.container}>
			{children}
		</div>
	)
};

export default Layout;
```

```css
/* src/globals.css */
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

* {
  box-sizing: border-box;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}
```

```css
/* src/styles/utils.module.css */
.heading2Xl {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingXl {
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingLg {
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
}

.headingMd {
  font-size: 1.2rem;
  line-height: 1.5;
}

.borderCircle {
  border-radius: 9999px;
}

.colorInherit {
  color: inherit;
}

.padding1px {
  padding-top: 1px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.listItem {
  margin: 0 0 1.25rem;
}

.lightText {
  color: #666;
}
```

ここまでの確認をします。

```tsx
├── src
│   ├── components
│   │   └── Layout
│   │       ├── index.module.css
│   │       └── index.tsx
│   ├── pages
│   │   ├── index.tsx
│   │   ├── posts
│   │   │   └── first-post.tsx
│   ├── styles
│   │   ├── utils.module.css
│   │   └── globals.css
│   └── types
│       └── src
│           └── components
│               └── Layout
│                   └── index.ts
```

次に、共通コンポーネントのLayoutを大きく編集していきます。

```tsx
// src/components/Layout/index.tsx
import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";
import utilStyles from "@/styles/utils.module.css";
import Link from "next/link";
import { LayoutProps } from "./type";

export const siteTitle = "Next.js Sample Website";

const Layout = ({ children, home }: LayoutProps) => {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle,
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src="/images/profile.jpg"
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt=""
						/>
						<h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<Image
								priority
								src="/images/profile.jpg"
								className={utilStyles.borderCircle}
								height={108}
								width={108}
								alt=""
							/>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/" className={utilStyles.colorInherit}>
								{siteTitle}
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">← Back to home</Link>
				</div>
			)}
		</div>
	);
};

export default Layout;
```

ここでは、Imageタグを使用して画像を表示しています。Imageのsrcは、publicディレクトリをルートとして指定します。

そのため、Imageタグを使用して画像を表示する場合は、publicディレクトリに画像を配置する必要があります。

今回は、/public/images/profile.jpgを指定しているため、任意の画像を配置してください。

ない場合は、以下の画像を使用してください。

![profile.jpg](https://i.imgur.com/cam3Dnx.jpg)

```tsx
// src/components/Layout/type.tsx
import { ReactNode } from "react";

export interface LayoutProps {
	children: ReactNode;
	home?: boolean;
}
```

新しいLayoutをWebサイトのルートに適用します。また、featuresディレクトリを作成し、ページの実体は以降そこに作成していきます。

```tsx
// src/features/Home/index.tsx
import Head from "next/head";
import Layout, { siteTitle } from "@/components/Layout";
import utilStyles from "@/styles/utils.module.css";

const Home = () => {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hello, World</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{" "}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
		</Layout>
	);
};
```

```tsx
// src/pages/index.tsx
import { Home } from "@/features/Home";

const HomePage = () => {
	return <Home />;
};

export default HomePage;
```

最後に、以下のコマンドを使用してください。
```bash
yarn test-all
```
これを行う事で、コードの自動フォーマットやルールに沿った書き方をしているかを確認することができます。

エラーが発生した場合は、エラー内容を確認して修正してください。

最終的なディレクトリ構成は以下のようになります。
```dir
├── public
│       └── images
│           └── profile.jpg
├── src
│   ├── components
│   │   └── Layout
│   │       ├── index.module.css
│   │       └── index.tsx
│   ├── features
│   │   └── Home
│   │       └── index.tsx
│   ├── pages
│   │   ├── index.tsx
│   │   ├── posts
│   │   │   └── first-post.tsx
│   └── styles
│       ├── utils.module.css
│       └── globals.css
```


これで一区切りです。これまでに使用した、よく使われる関数、キーワードなどを確認します。


| 関数、キーワード | 説明 | 補足 |
| --- | --- | --- |
| import | モジュールを読み込む | |
| export | モジュールをエクスポートする | つけることで、importができるようになる |
| default | モジュールのデフォルトエクスポートを指定する | 読み込まれたときに、実行される |

### [3 | データの取得](#データの取得)
次は、データの取得について学びます。

今回は、ローカルにmarkdownファイルを作成し、そのファイルを読み込んで表示するようにします。

まずは、表示するmarkdownファイルを作成します。

1つめ
```md
// src/posts/pre-rendering.md
---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
```

2つめ
```md
---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, y	ou can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
```

markdownファイルを作成したので、それを読み込んで表示するようにします。
また、必要なモジュールをインストールします。

```bash
npm install gray-matter remark remark-html
```
```tsx
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
```

このままでは、型の情報がないので型定義ファイルを作成し、それをimportします。

```ts
// src/utils/posts/type.ts
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
```

次に、このデータを使用してページを作成します。

```tsx
// src/pages/index.tsx
import { getSortedPostsData } from "@/utils/posts";
import { Home } from "@/features/Home";
import { HomeProps } from "@/features/Home/type";

const HomePage = ({ allPostsData }: HomeProps) => {
	return <Home allPostsData={allPostsData} />;
}

export async function getStaticProps() {
	const allPostsData = await getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default HomePage;	
```
ここでは、getStaticPropsを使用しています。これは、ビルド時に実行され、その結果がpropsとして渡されます。getStaticPropsは、ビルド時にしか実行されないため、リアルタイムのデータを取得することはできません。

よってあまり使いません。

allPostDataは、先ほど作成したgetSortedPostsDataを使用して取得しています。

allPostDataをpropsとして渡すことで、Homeコンポーネントで使用することができます。

↓ここのallPostsData
```tsx
// src/features/Home/index.tsx
const HomePage = ({ allPostsData }: HomeProps) => {
```

次に不足している型を作成します。

```ts
// src/features/Home/type.ts
import { PostData } from "@/utils/posts";

export interface HomeProps {
	allPostsData: PostData[];
}
```

この型はPostDataの配列、つまり、PostDataの要素を複数持つ配列であることを表しています。

```tsx
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
```

ここでは、allPostsDataを使用して、ブログの一覧を表示しています。

.mapは、配列の要素を1つずつ取り出し、配列の要素の数だけ処理を行います。


次に日付の表示を整えます。

表示を整えるには、date-fnsというライブラリを使用します。以下のコマンドでインストールしてください。

```bash
npm install date-fns
```

```tsx
// src/components/Elements/Date/index.tsx
import { DateProps } from "./type";
import { parseISO, format } from "date-fns";
import React from "react";

const Date: React.FC<DateProps> = ({ dateString }) => {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, "yyyy/MM/dd")}</time>;
};

export default Date;
```

```ts
// src/components/Elements/Date/type.ts
export interface DateProps {
	dateString: string;
}
```
これは日付の表示形式を整えるために使用します。

これで、postsディレクトリにあるmarkdownファイルを読み込み、タイトルと日付を表示することができました。

しかし、まだ記事の内容を表示することができていません。
次に、記事の内容を表示するようにします。

```tsx
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
```

ここでは、getStaticPathsとgetStaticPropsを使用しています。
getStaticPathsは、ファイル名を取得しています。この記述はダイナミックルーティングを使用する際に必要になります。

getStaticPropsは、getStaticPathsで取得したファイル名をpramasとして受け取り、そのファイル名を使用して、記事の内容を取得し、propsとしてデータを渡しています。

詳しくは、[公式ドキュメント](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths)や、[この記事](https://teno-hira.com/media/?p=1741)

```tsx
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
```

ここでは受け取ったデータを使用して、markdownファイルの内容を表示しています。

```ts
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
```

ここでは、不足している型を定義しています。

これで、記事の内容を表示することができました。

かなり省略しながらでしたが、これで公式チュートリアルの内容をTypeScriptで実装することができました。

ここからは、今回のプロジェクトで使用する技術について学んでいきます。

続きが無かったら察してください。