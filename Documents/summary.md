---
title: "Next.jsチュートリアル 簡易まとめ"
date: "2023-09-29"
---

# Next.jsチュートリアル 簡易まとめ  [Next.js](https://nextjs.org/learn/foundations/about-nextjs)

## 目次
- [0 | はじめに](#0--はじめに)
  - [0-1 | Next.jsとは](#0-1--nextjsとは)
  - [0-2 | 環境構築](#0-2--環境構築)
- [1 | Next.jsアプリを作成する](#1--nextjsアプリを作成する)
  - [1-1 | セットアップ](#1-1--セットアップ)
  - [1-2 | ページを編集する](#1-2--ページを編集する)
- [2 | ページ間の移動・パス](#2--ページ間の移動・パス)
  - [2-1 | ページ間を移動する](#2-1--ページ間を移動する)
  - [2-2 | ページを移動する](#2-2--ページを移動する)
- [3 | アセット、メタデータ、css](#3--アセットメタデータcss)
  - [3-1 | アセット](#3-1--アセット)
  - [3-2 | メタデータ](#3-2--メタデータ)
  - [3-3 | サードパーティーJavaScript](#3-3--サードパーティーjavascript)
  - [3-4 | CSS](#3-4--css)
  - [3-5 | Layoutを進化させる](#3-5--layoutを進化させる)
- [4 | プリレンダリング・データフェッチ](#4--プリレンダリング・データフェッチ)
  - [4-1 | プリレンダリング](#4-1--プリレンダリング)
  - [4-2 | データあり、無しの静的生成](#4-2--データあり無しの静的生成)
- [5 | 動的ルーティング](#5--動的ルーティング)
  - [5-1 | 外部データに依存するパス](#5-1--外部データに依存するパス)
  - [5-2 | マークダウンのレンダリング](#5-2--マークダウンのレンダリング)
  - [5-3 | ページの仕上げ](#5-3--ページの仕上げ)
- [6 | APIルート](#6--apiルート)
  - [6-1 | APIルートの作成・使用](#6-1--apiルートの作成・使用)

- [その他](#その他)
  - [ESLint・Prettier](#eslint・prettier)

# [0 | はじめに](#)
## [0-1 | Next.jsとは](#)
Next.js は、高速Web アプリケーションを作成するための構成要素を提供する柔軟なReact フレームワークです。

## [0-2 | 環境構築](#)
Next.jsはReactのライブラリです。
そのため、Next.jsを利用するためにReactを利用する環境が必要です。

Reactを利用するためには、Node.jsのバージョン18以降が必要になります。
Node.jsの環境構築はPDFがあるため、そちらを参照してください。

# [1 | Next.jsアプリを作成する](#)
## [1-1 | セットアップ](https://nextjs.org/learn/basics/create-nextjs-app/setup)
まずはNext.jsのアプリケーションを作成します。今回はexampleという用意されたものを使用します。

まずはコマンドプロンプトを起動し、アプリケーションを作成したいディレクトリまで移動してください。

次に、以下のコマンドを打ち込みます。
```cmd
npx create-next-app@latest nextjs-blog-learning --use-npm --example "https://github.com/vercel/next-learn/tree/main/basics/learn-starter"
```
このコマンドを使用すると、Nextのテンプレートアプリケーションがダウンロードされます。

次に開発サーバーを実行します。以下のコマンドを実行してください。
```cmd
cd nextjs-blog-learning
npm run dev
```

実行したコマンドを簡単に解説します。

cd - カレントディレクトリを変更します。ここでは、ダウンロードしたnextjs-blog-learningというディレクトリに移動しています。

npm run dev - Next.jsの開発サーバーをポート3000で起動しています。詳しくは後述します。

npm run devで開発サーバーを立ち上げたのでアクセスしてみましょう。
[ここを押してアクセス](http://localhost:3000/)

開発サーバーはコードが変更されると即時に処理が更新されます。
そのため、開発中にサーバーを再起動する必要があまりなく、開発効率が上がります。

これまでで、Webサイトを作成するための準備が整いました。次はページの編集を行っていきます。

## [1-2 | ページを編集する](https://nextjs.org/learn/basics/create-nextjs-app/editing-the-page)
次はnextjs-blog-learning配下のpagesディレクトリにあるindex.jsを編集していきます。

まずはpages/index.jsを開いてください。

index.jsの中から、以下のような\<h1>タグの部分を探してください。

```html
<h1 className={styles.title}>
  Welcome to <a href="https://nextjs.org">Next.js!</a>
</h1>
```

この部分を以下のように変更してください。

```html
<h1 className={styles.title}>
  Learn <a href="https://nextjs.org">Next.js!</a>
</h1>
```
ここでは、Welcome toをLearnに変更しています。

変更が完了したら、ブラウザ開きリロードしてください。文章が変更されているのを確認できます。

# [2 | ページ間の移動・パス](#)
## [2-1 | ページを作成する](https://nextjs.org/learn/basics/navigate-between-pages/pages-in-nextjs)
次はページ間を移動する方法を学びます。

まず、pagesディレクトリにpostsディレクトリを作成してください。

postsディレクトリにfirst-post.jsを作成してください。

ディレクト構成は以下のようになります。
```
pages/posts/first-post.js
```

first-post.jsの中身は以下のようにしてください。

```js
export default function FirstPost() {
  return <h1>First Post</h1>;
}
```

保存したら、このページにアクセスしてみましょう！
[ここを押してアクセス](http://localhost:3000/posts/first-post)

URLを見ると、http://localhost:3000/posts/first-postとなっています。

Next.jsでは、pagesディレクトリにあるファイルは、URLのパスとして認識されます。

このようにして簡単にページを作成することができます。

次にコードの説明をします。

```js
export default function FirstPost()
```
export defaultは、このファイルを他のファイルからimportする際に、この関数をデフォルトで使用することを意味します。つまり、ページが開かれた際に、この関数が実行されます。

```js
return <h1>First Post</h1>;
```
上のコードでexport defaultが起動したときに、returnでHTMLのコードが返却されます。

HTMLをJavaScriptで先に読み込んで置くことで、ページの読み込みを高速化しています。


## [2-2 | ページを移動する](https://nextjs.org/learn/basics/navigate-between-pages/client-side)
次はページを移動する方法を学びます。

Next.jsではページを移動する際に、HTMLの\<a>タグではなく、Next.jsが提供するLinkコンポーネントを使用します。

\<a>タグとLinkコンポーネントの違いは、\<a>タグはページを移動する際に、ページをリロードしますが、Linkコンポーネントはページを移動する際に、ページをリロードしません。

なぜ再読み込みしないかというと、Next.jsではページを事前に読み込んでおくことで、ページの移動を高速化しているためです。詳しくは[公式ドキュメント(ENG)](https://nextjs.org/learn/basics/navigate-between-pages/client-side)を参照してください

### しかし、外部のページに移動する際にはLinkコンポーネントではなく、\<a>タグを使用する必要があるので注意してください。

実際にLinkコンポーネントを使用してみましょう。

まずは、pages/index.jsを開いてください。

一番上の行に以下のようなimport文を追加してください。

```js
import Link from "next/link";
```
これは、Linkコンポーネントを使用するために必要なimport文です。

次に、index.jsの中から、以下のような\<h1>タグの部分を探してください。

```html
<h1 className={styles.title}>
  Learn <a href="https://nextjs.org">Next.js!</a>
</h1>
```
この部分を以下のように変更してください。
```html
<h1 className={styles.title}>
  Read <Link href="/posts/first-post">this page!</Link>
</h1>
```

変更が完了したら、[http://localhost:3000](http://localhost:3000)にアクセスしてください。

ページの一番上にあるthis page!という文字をクリックすると、/posts/first-postのリンクに飛べるはずです。

次に、pages/posts/first-post.jsを開いてください。

first-post.jsを以下のように変更してください。

```js
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
```

変更が完了したら、[http://localhost:3000/posts/first-post](http://localhost:3000/posts/first-post)にアクセスしてください。

ページの一番上にあるBack to homeという文字をクリックすると、/のリンクに飛べるはずです。

これで、ページ間を相互に移動できるようになりました。Webサイトではこの機能を使用してページ間を移動していきます。必ず使うのでしっかり覚えておきましょう！

次にコードの解説をします。
```js
return(
  <>
    // any code
  </>
);
```
以前のコードでは、returnの中に\<h1>タグのみがありましたが、今回は\<h1>タグと\<h2>タグがあります。
このようにreturnに複数行記述する場合は、return()の中に\<>と\</>で囲んでから記述します。

こうすることで、return()の中に複数行記述することができます。

# [3 | アセット、メタデータ、css](https://nextjs.org/learn/basics/assets-metadata-css/assets)
## [3-1 | アセット](https://nextjs.org/learn/basics/assets-metadata-css/assets)

まずは[このリンクにアクセス](https://github.com/vercel/next-learn/blob/main/basics/basics-final/public/images/profile.jpg)してprofile.jpgをダウンロードし、/public/images/にprofile.jpgを配置してください。

次に、pages/index.jsを開いてください。

index.jsの中から<footer>を探し、以下のように変更してください。

```html
<img src="/images/profile.jpg" alt="Vercel" className={styles.logo} />
```
このようにすることで静的ファイルを読み込むことができます。(ただし、これは最適化されていないので、後ほど最適化する方法を学びます。)

変更が完了したら、[http://localhost:3000](http://localhost:3000)にアクセスしてください。

ページの一番下にあるVercelのロゴが変更されているはずです。

## [3-2 | メタデータ](https://nextjs.org/learn/basics/assets-metadata-css/metadata)
次はメタデータを変更していきます。

まずはpages/index.jsを開いてください。

index.jsの中の\<Head>タグを探してください。これがメタデータを設定するためのタグです。
\<Head>タグを使うためには、import文を追加する必要があります。

**HTMLにある\<head>タグとNext.jsで使用される\<Head>は別のものです。*H*の大文字と小文字に注意しましょう！**

以下がその例です。

```js
import Head from "next/head";
```
```html
<Head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
```
ここでは、タイトルをCreate Next Appに設定し、アイコンをfavicon.icoに設定しています。

実際にメタデータを設定してみましょう。

まずは、pages/posts/first-post.jsを開いてください。

メタデータを設定するための\<Head>タグを使用するには、import文を追加する必要があります。追加しましょう。
```js
import Head from "next/head";
```

次にメタデータを設定していきます。
```html
<Head>
  <title>First Post</title>
</Head>
```

変更が完了したら、[http://localhost:3000/posts/first-post](http://localhost:3000/posts/first-post)にアクセスしてください。

ページのタイトルが変更されているのを確認できます。

## [3-3 | サードパーティーJavaScript](https://nextjs.org/learn/basics/assets-metadata-css/third-party-javascript)

通常のアプリケーションでは以下のように\<head>タグの中に記述して外部Scriptを読み込みます。
```html
<head>
  <script src="https://www.sample.api/"></script>
</head>
```

Next.jsでは、タイトルなどと同様に\<Head>タグを使用して外部Scriptを読み込みむことができます。
```html
<!-- 非推奨 -->
<Head>
  <script src="https://www.sample.api/"></script>
</Head>
```
しかし、この方法では、外部Scriptが読み込まれるまでページが表示されないため、パフォーマンスが低下します。

したがって、\<Head>タグにScriptを記述することは<u>**推奨されていません。**</u>

そこで、Next.jsでは\<Script>タグというものが用意されています。

First-post.jsを編集してみましょう。

\<Script>タグを使用するにはimportをする必要があります。まずはimport文を追加しましょう。
```js
import Script from "next/script";
```

次に\<Script>タグを使用して外部Scriptを読み込んでみましょう。
ここでは、FacebookのSDKを読み込んでみます。

```js
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Fist Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
```

\<Script>タグとそのプロパティについて解説します。詳しく知りたい方は[公式ドキュメント](https://nextjs.org/docs/pages/api-reference/components/script)を参照してください。

### src(必須)
読み込む外部ScriptのURLを指定します。

### strategy(任意)
srcで指定した外部Scriptを読み込むタイミングを指定します。
ここではよく使用される2つを紹介します。

**・ afterInteractive(デフォルト)** - ページが開かれ、ある程度ページが読み込まれた後に。

**・ lazyOnload** - ページが読み込まれた後に読み込みます。

### onLoad(任意)
外部Scriptの読み込みが完了した際に実行する関数を指定します。

今回は"script loaded correctly, window.FB has been populated"というメッセージをコンソールに表示し、外部Scriptの読み込みが完了したことを確認できるようにしています。


変更が完了したらコードを保存し、[http://localhost:3000/posts/first-post](http://localhost:3000/posts/first-post)にアクセスしてください。

開発者コンソールを開き、consoleにメッセージが表示されているのを確認できます。

## [3-4 | CSS](https://nextjs.org/learn/basics/assets-metadata-css/css-styling)
Next.jsでは通常の.cssファイルの他、cssモジュールやTailwand CSSのようなライブラリを使用することができます。


### コンポーネントにCSSを適用する
First-post.jsにcssを適用させてみます。

まずは以下のフォルダとファイルを作成してください。
```
/components/layout.js
/components/layout.module.css
```

layout.js
```js
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
```

layout.module.css
```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
```
/pages/posts/first-post.js
```js
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout"; // 相対パスでlayout.jsをimportする

export default function FirstPost() {
  return (
    <Layout> <!-- <>から<Layout>に変更 -->
    <Head>
      <title>Fist Post</title>
    </Head>
    <Script
      src="https://connect.facebook.net/en_US/sdk.js"
      strategy="lazyOnload"
      onLoad={() =>
        console.log(`script loaded correctly, window.FB has been populated`)
      }
    />
    <h1>First Post</h1>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
    </Layout> <!-- <>から変更 -->
  );
}
```

変更が完了したらコードを保存し、[http://localhost:3000/posts/first-post](http://localhost:3000/posts/first-post)にアクセスしてください。

ここではどのような動作をしているかを説明します。

まず、layout.jsをimportしています。これは、\<Layout>タグを使用するために必要なimport文です。

次に、\<Layout>で囲んだ理由を説明します。

\<Layout>タグで囲うと、layout.jsで指定されたlayout.module.cssの.containerのスタイルが適用されます。

この方法はコンポーネントごとにcssを適用するのに役立ちます

### グローバルCSSを作成する
グローバルCSSを作成するには、pages/_app.jsを作成します。
```
pages/_app.js
```
_app.jsには、以下のように記述してください。
```js
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```
次にここでimportしているglobal.cssを作成します。最初からあるglobals.cssでは無いので注意してください。
```css
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

**[重要]**
_app.jsは、pagesディレクトリにある全てのページで使用されるコンポーネントです。このファイルを作成したときには、Ctrl + cを押してサーバーを停止し、再度サーバーを起動してください。

グローバルCSSは全てのファイルに影響を及ぼします。そのため、外にimport出来ません。そのため、グローバルCSSを作成するには、pagesディレクトリにある_app.jsを使用します。


ここまで出来たら、サーバーを再起動し、[http://localhost:3000/posts/first-post](http://localhost:3000/posts/first-post)にアクセスしてください。

## [3-5 | Layoutを進化させる](https://nextjs.org/learn/basics/assets-metadata-css/polishing-layout)
これまでは最小限のReactとCSSのコードでした。次のステップに進む前にページを少し改善します。それぞれのファイルを以下のものに書き換えてください。

components/layout.module.css
```css
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
次に新しいファイルを作成します。stylesにutils.module.cssというファイルを作成し、以下のように記述してください。

styles/utils.module.css
```css
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

components/layout.js
```js
import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Your Name"; // ここに自分の名前を入れてください
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
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
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
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
            {name}
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
}
```
それぞれの変更点などを説明します。

### components/layout.module.css
ここでは後ほど使用するheaderとbackToHomeのスタイルを定義しています。
cssの内容については省略します。

### styles/utils.module.css
utils.module.cssはglobalを含む全てのファイルから再利用できるスタイルを定義しています。

### components/layout.js
ここではheaderや戻るボタンなどのコンポーネントを定義しています。

詳しく説明します。

```js
const name = "Manato Miura";
export const siteTitle = "Next.js Sample Website";
```
ここでは、サイトのタイトルと名前を定義しています。

exportが付かない場合は、このファイル内でしか使用できませんが、exportを付けることで、他のファイルから使用することができます。

次に\<header>タグの記述について説明します。
```js
export default function Layout({ children, home }) {
  // ...省略
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
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
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
          {name}
        </Link>
      </h2>
      </>
    )}
  </header>
}
```

ここでは、homeかどうかを判断して表示を変えています。
```js
{home ? (
  // homeが開かれているときの処理
) : (
  // home以外が開かれているときの処理
)}
```

\<main>タグの中にchildrenを表示しています。childrenは、呼び出し元のコンポーネントの中身を表示するためのものです。

```js
<main>{children}</main>
```

ここでは、home以外のページが開かれている時に表示する戻るボタンを定義しています。
```js
{!home && (
  <div className={styles.backToHome}>
    <Link href="/">← Back to home</Link>
  </div>
)}
```

これらのものを簡潔にまとめると、\<header>、\<main>(呼び出し元)、戻るボタンを表示できます。

これらを使用することでheaderやfooter、など複数の場所で使用することができるコンポーネントを作成、使用することができます。

# [4 | プリレンダリング・データフェッチ](https://nextjs.org/learn/basics/data-fetching)

## [4-1 | プリレンダリング](https://nextjs.org/learn/basics/data-fetching/pre-rendering)

Next.jsでは、ページをプリレンダリング(事前にHTMLを生成)することができます。

日本語で詳しく解説しているものがあるので[こちら](https://zenn.dev/luvmini511/articles/1523113e0dec58)をご覧ください。

簡単にまとめると、ページごとにSSRとSSGの2つを使い分けて高速化しよう！ということです。

## [4-2 | データあり、無しの静的生成](https://nextjs.org/learn/basics/data-fetching/with-data)
ここからは実際のアプリケーションのようにデータを取得していきます。

まずは、mdファイルの解析で使う**gray-matter**というライブラリをインストールします。

../nextjs-blog>まで移動して以下のコマンドを実行してください。
```cmd
npm install gray-matter
```
これでgray-matterがインストールされました。

他のライブラリのインストールも同じ方法で行います。

次に、ルートディレクトリにpostsというディレクトリを作成してください。(/pages/postsとは別です)

次に以下2つのファイルを作成してください。
```cmd
/posts/pre-rendering.md
/posts/ssg-ssr.md
```

それぞれ以下のように記述してください。

pre-rendering.md
```md
---
title: "Two Forms of Pre-rendering"
date: "2020-01-01"
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
```

ssg-ssr.md
```md
---
title: "When to Use Static Generation v.s. Server-side Rendering"
date: "2020-01-02"
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user"s request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user"s request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
```

これらのmarkdownファイルは、ブログの記事としています。

実際のアプリケーションでは、これらがデータベースなどから取得したデータになります。

次に、ルートディレクトリにlibディレクトリ、その下にposts.jsを作成してください。

posts.jsには以下のように記述してください。
```js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
```

posts.jsのフローを説明します。

```js
const postsDirectory = path.join(process.cwd(), "posts");
```
process.cwd()は現在のディレクトリを取得する関数です。ここでは、/nextjs-blogを取得しています。

path.join()は、引数に指定した文字列を結合する関数です。ここでは、/nextjs-blog/postsを取得しています。

```js
const fileNames = fs.readdirSync(postsDirectory);
```
上記で取得したパス(/nextjs-blog/posts/)にあるファイル名を配列で取得しています。

ここでは、pre-rendering.mdとssg-ssr.mdを取得しています。

```js
const allPostsData = fileNames.map((fileName) => {
  // Remove ".md" from file name to get id
  const id = fileName.replace(/\.md$/, "");

  // Read markdown file as string
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
  }}
);
```
map()は、配列の要素を順番に処理する関数です。ここではfileNamesの要素を順番に処理しています。

mapでは以下のことをしています。

1. ファイル名から.mdを削除
2. これまでのパスとファイル名を結合しフルパスを取得
3. フルパスからファイルの中身を取得
4. gray-matterを使用してファイルのメタデータを取得
5. idをファイル名、メタデータをデータとし、一つのオブジェクトとして返す

これらのことを全てのファイル(ここではpre-rendering.mdとssg-ssr.md)に対して行っています。

最後に、日付順に並び替えて呼び出し元に値を返却しています。

今回のシステムではファイルからデータを取得していますが、実際のアプリケーションではデータベースからデータを取得します。その際にはこのファイルにデータベースからデータを取得する処理を記述することができます。

posts.jsの解説は以上です。


次に、pages/index.jsを編集していきます。
```js
import Head from "next/head";
import Layout, { name, siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Blog - {name}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
```

更新されたindex.jsのフローを説明します。

```js
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
```
ここで先ほど作成したposts.jsを使用します。

getStaticProps()は、ページをプリレンダリングするために使用される関数です。

このgetStaticProps()は、同じファイル内の使用するコンポーネントより上に記述する必要があります。

この関数が行っている処理は単純です。

先ほど作成したposts.jsのgetSortedPostsData()を呼び出し、その値をpropsとして返却しています。



```js
export default function Home({ allPostsData }) {
```
ここでpropsから受け取る値を指定しています。

```js
{allPostsData.map(({ id, date, title }) => (
  <li className={utilStyles.listItem} key={id}>
    {title}
    <br />
    {id}
    <br />
    {date}
  </li>
))}
```
ここでは、allPostsDataの要素を順番に処理しています。

idをkeyとして、title、id、dateを表示しています。

変更が完了したら、サーバーを再起動し、[http://localhost:3000](http://localhost:3000)にアクセスしてください。

# [5 | 動的ルーティング](https://nextjs.org/learn/basics/dynamic-routes)

## [5-1 | 外部データに依存するパス](https://nextjs.org/learn/basics/dynamic-routes/page-path-external-data)
ここからは、動的ルーティングを使用していきます。

### そもそも動的ルーティングとは？
動的ルーティングとは、URLのパスを動的に変更することです。

例えば、とあるブログサイトで、記事のURLが以下のようになっているとします。
```
https://example.com/posts/first-post
```
このURLのfirst-postの部分をプログラムに書いておくのではなく、記事のタイトルなどを使用して自動的にパスにすることを動的ルーティングと言います。Next.jsでは、"["で始まり、"]"で終わるものが動的ルートとなります。

では、実際に動的ルーティングを使用していきます。

これまでのアプリケーションでは、ルートにアクセスすると、全ての記事のタイトルが表示されていました。

今回は、記事のタイトルをクリックすると、その記事の内容が表示されるようにします。

まずは、pages/posts/の配下に[id].jsを作成してください。(ファイル名に[]が含まれているので違和感があるかもしれませんが慣れてください)
```
pages/posts/[id].js
```
[id].js
```js
import Layout from "../../components/layout";

export default function Post() {
  return <Layout>...</Layout>;
}
```
今は\<Layout>の中身が空ですが、後ほど変更します。

[id].jsの下に以下のコードを追加してください。
```js
export async function getStaticPaths() {
  // Return a list of possible value for id
}
```
このgetStaticPathsという関数では、idに指定できる値のリストを返す必要があります。

さらに下に追加していきます。
```js
export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
```
次に、getStaticPropsという関数を作成しています。詳しくは後ほど解説しますが、この関数では、getStaticPathsで返した値を使用して、記事の内容を取得します。

次に、getStaticPathsを実装していきます。コードを以下のように変更してください。
```js
import { getAllPostIds } from "../../lib/posts";
```
```js
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
```
getStaticPathsの中身を説明します。
```js
const paths = getAllPostIds();
```
ここでは、getAllPostIds()という関数を呼び出しています。この関数は、先ほど作成したposts.jsに記述しています。(後ほど作成します)

```js
return {
  paths,
  fallback: false,
};
```
returnで返している値について説明します。
pathsは、先ほど作成したgetAllPostIds()の返り値を指定しています。つまり、idのリストを返却しています。

fallbackは、falseを指定しています。これは、getStaticPathsで指定したid以外のパスにアクセスした場合、404ページを表示するという意味です。

次に、getStaticPathsの中で使用しているgetAllPostIds()を作成します。

lib/posts.jsに記述してください
```js
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
```
この関数では以下のことをしています。

1. mdファイルがあるディレクトリのファイル名をリストで取得
2. mapを使い、リストの要素を順番に処理
3. ファイル名から拡張子(.md)を削除し、idとして返却

結果の例を以下に示します。
```js
  // getAllPostIdsの返却値は以下のようになります
  // [
  //   {
  //     params: {
  //       id: "ssg-ssr"
  //     }
  //   },
  //   {
  //     params: {
  //       id: "pre-rendering"
  //     }
  //   }
  // ]
```

次に、getStaticPropsを実装します。以下のように記述してください。
```js
// import { getAllPostIds } from "../../lib/posts";
// 編集 ↓
import { getAllPostIds, getPostData } from "../../lib/posts";
```
```js
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
```
getStaticProps()という関数ではpostDataという値を返却しています。

postDataはgetPostData()という関数を使用して取得しています。lib/posts.jsに記述してください。
```js
export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}
```
getPostData()の流れを解説します。

1. id(ファイル)を使用してファイルのフルパスを取得
2. フルパスからファイルの中身を取得
3. gray-matterを使用してファイルのメタデータを取得
4. idをファイル名、メタデータをデータとし、一つのオブジェクトとして返す

getStaticPropsはここで返却された値をpropsとして返却します。

最後に、[id].jsの中身を作成します。

[id].jsのPost関数を以下のように編集してください。
```js
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}
```

ここではPropsから受け取ったpostDataを表示しています。

変更が完了したら、サーバーを再起動し以下のURLにアクセスしてみてください。
1. [http://localhost:3000/posts/ssg-ssr](http://localhost:3000/posts/ssg-ssr)
2. [http://localhost:3000/posts/pre-rendering](http://localhost:3000/posts/pre-rendering)

それぞれアクセスできるようになっていると思います。

## [5-2 | マークダウンのレンダリング](https://nextjs.org/learn/basics/dynamic-routes/render-markdown)

これまでのアプリケーションでは、記事のタイトルや日付を表示することができました。

次は、記事の内容を表示していきます。

mdの内容を表示するにはライブラリを使用するのでインストールします。
```cmd
npm install remark remark-html
```
ここでは、remark,remark-htmlという2つのライブラリをインストールしています。

remarkというライブラリでは、mdファイルを解析することができ、remark-htmlというライブラリでは、解析したmdファイルをHTMLに変換することができます。

次に、lib/posts.jsを編集します。importを追加してください。
```js
import { remark } from "remark";
import html from "remark-html";
```

次に、lib/posts.js内のgetPostData()を以下のように編集してください。
```js
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
```
追加されたのは以下の部分です。
```js
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id, // Not changed
    contentHtml,
    ...matterResult.data, // Not changed
  };
```

ここでは、remarkを使用してmdファイルを解析し、HTMLに変換しています。
更新部分の流れを簡単に説明します。
1. await remark()でmdファイルを解析するための関数を呼び出しインスタンスを作成ています。
2. .use(html)は、remark-htmlのプラグインで、mdファイルをHTMLに変換するために使用します。
3. .process(matterResult.content)は、mdファイルを解析するための関数にmdファイルの内容を渡しています。
4. processedContent.toString()は、解析されたHTMLを文字列に変換しています。

また、1.で使用されているawaitは、非同期処理を行うものです。awaitを使用することで、非同期処理が完了するまで次の処理に移らないようにすることができます。

次に受け取り部分を編集します。

pages/posts/[id].jsのgetStaticPropsを以下のように編集してください。
```js
export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
```
一見変更点がないように見えますが、getPostData()の前にawaitを追加しています。

先ほど編集したgetPostData()は処理の中でawaitを使用しています。処理内でawaitを使用している場合、呼び出し元の関数にもawaitを追加する必要があります。

ここまでの変更で、コンテンツを含む記事を取得することが出来ました。

次は表示される部分を編集します。
```js
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
```
以下の関数ではReactでHTMLをレンダリングしています。
```js
<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
```

変更が完了したら、サーバーを再起動し以下のURLに再度アクセスしてみてください。
1. [http://localhost:3000/posts/ssg-ssr](http://localhost:3000/posts/ssg-ssr)
2. [http://localhost:3000/posts/pre-rendering](http://localhost:3000/posts/pre-rendering)

ここまでで、記事の内容を表示することができました。次はページを仕上げていきます。

## [5-3 | ページの仕上げ](https://nextjs.org/learn/basics/dynamic-routes/polishing-post-page)
まずは、それぞれの投稿ページを編集していきます。

pages/posts/[id].js
```js
import Head from "next/head";
```
```js
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      {/* これまでのコード */}
    </Layout>
  );
}
```
タイトルタグを追加しています。

次に日付の表示を変更します。

日付の変更はライブラリを使用します。インストールしてください
```cmd
npm install date-fns
```

インストールが完了したら、components/date.jsを作成し、以下のようにしてください。
```js
import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
```
この関数では、日付を文字列で受け取り、parseISO()で日付型に変換しています。

このcomponentを作成することで、\<Date dateString="日付" />で呼び出すことにより日付を表示することができます。

早速使用します。日付を表示している部分を変更します。

pages/posts/[id].js
```js
// {postData.date}　置き換え
<Date dateString={postData.date} />
```

次にCSSを追加します。utilをインポートしてください。
```js
import utilStyles from "../../styles/utils.module.css";
```
Layoutの中身を編集してください。
```js
<Layout>
  <Head>
    <title>{postData.title}</title>
  </Head>
  <article>
    <h1 className={utilStyles.headingXl}>{postData.title}</h1>
    <div className={utilStyles.lightText}>
      <Date dateString={postData.date} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </article>
</Layout>
```

次に一覧ページを編集します。これまでは、全ての記事のタイトル、日付が表示されていました。

タイトルをクリックすることで記事の詳細が見れるようにします。

まずは必要なものをインポートします。

pages/index.js
```js
import Link from "next/link";
import Date from "../components/date";
```
リストの部分を以下のように編集してください。
```js
<li className={utilStyles.listItem} key={id}>
  <Link href={`/posts/${id}`}>{title}</Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
</li>
```

これにて、動的ルーティングの説明は終了です。

# [6 | APIルート](https://nextjs.org/learn/basics/api-routes)

## [6-1 | APIルートの作成・使用](https://nextjs.org/learn/basics/api-routes/creating-api-routes)

ここからは、APIルートを作成していきます。APIに関しては、公式のチュートリアルには詳しく乗っていなかったので自作で作成したフォームをサンプルとして作成します。

まずは、公式チュートリアルに載っているAPIルートを作成していきます。

pages/api/hello.jsを作成してください。

hello.js
```js
export default function handler(req, res) {
  res.status(200).json({ text: "Hello" })
}
```
この関数は、/api/helloにアクセスすると、{ text: "Hello" }を返却します。

今回作成したAPIルートは、サーバーサイドで実行される関数です。

reqは、HTTPのリクエストオブジェクトで、resは、HTTPのレスポンスオブジェクトです。

この関数は、サーバーサイドで実行されるため、クライアント側からはアクセスできません。したがって、APIルートは、DBへのアクセスや、認証などの処理を行うのに適しています。

試しに、サーバーを再起動し、[http://localhost:3000/api/hello](http://localhost:3000/api/hello)にアクセスしてみてください。

### ここからは、自作のAPIルートを作成していきます。
今回作成するのは、フォームに入力した値をサーバーに送信し、サーバー側で受け取った値を表示するというものです。

まずは情報を入力するためのフォームを作成します。

pages/apiForms.jsを作成してください。

apiForms.js
```js
import Head from "next/head";
import Layout from "../components/layout";

export default function apiForms() {
  const data = {
    name: "",
    email: "",
  };

  async function sendApi() {
    const response = await fetch(`api/api-forms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    alert(JSON.stringify(responseData));
  }

  return (
    <Layout>
      <Head>
        <title>API Forms</title>
      </Head>
      <section>
        <form>
          <label htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            onChange={(e) => (data.name = e.target.value)}
          />
          <label>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            onChange={(e) => (data.email = e.target.value)}
          />
          <button type="button" onClick={sendApi}>
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}
```
コードを分割して説明します。
```js
export default function apiForms() {
  const data = {
    name: "",
    email: "",
  };
  // ...
}
```
ここでは、フォームに入力された値を格納するためのオブジェクトを作成しています。
今回は、nameとemailの2つを定義しています。

```js
<form>
  <label htmlFor="name">
    Name
  </label>
  <input
    id="name"
    name="name"
    type="text"
    autoComplete="name"
    required
    onChange={(e) => (data.name = e.target.value)}
  />
  <label>
    Email
  </label>
  <input
    id="email"
    name="email"
    type="email"
    autoComplete="email"
    required
    onChange={(e) => (data.email = e.target.value)}
  />
  <button type="button" onClick={sendApi}>
    Submit
  </button>
</form>
```
ここではフォームを作成しています。(フォームで送っているわけではないのでformタグを使う必要はないけど)

labelではhtmlForを使用しています。htmlForをつけることで、idで紐づけられたinputタグなどにフォーカスを当てることができます。

inputタグでは、onChangeを使用しています。onChangeは、入力された値が変更された時に呼び出される関数です。ここでは、入力された値をdataに格納しています。

ここでは処理をしていませんが、バリデーションチェックなどをしたいときは以下のようにすることで、入力された値をチェックすることができます。
```js
onChange={(e) => {
  const email = e.target.value;
  if (email === "") {
    // 空欄のときの処理
  } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    // メールアドレスの形式が正しいときの処理
  } else {
    // メールアドレスの形式が正しくないときの処理
  }
}}
```
このようにして、値ごとの入力に対した処理を行うことができます。

```js
async function sendApi() {
  const response = await fetch(`api/api-forms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  alert(JSON.stringify(responseData));
}
```

ここではfetchを使用しています。fetchは、サーバーにリクエストを送信するための関数です。

fetchの第一引数には、リクエストを送信するURLを指定します。ここでは、pages/api/api-forms.jsにリクエストを送信するので、api/api-formsを指定しています。


次にpages/api/api-forms.jsを作成してください。

api-forms.js
```js
export default function handler(req, res) {
  const userName = req.body.name;
  const userEmail = req.body.email;
  console.log(userName, userEmail);
  res.status(200).json({ name: userName, email: userEmail })
}
```
ここでは、値をreq.bodyから名前、Eメールを取得しています。

次にconsole.logを使用し、コンソールに値を表示しています。apiはサーバーサイドで実行されるため、ユーザー側のコンソールには表示されず、サーバー側のコンソールに表示されます。

最後に、ステータスコードと値をjsonで返却しています。

データベースなどへ値を保存する場合は、ここに処理を記述することで、値を保存することができます。

ここまで出来たら、コードを保存し、[http://localhost:3000/apiForms](http://localhost:3000/apiForms)にアクセスしてみてください。

名前とEメールを入力し、Submitボタンを押すと、コンソール(サーバー側)に値が表示されます。

### 画面の仕上げ
最後にCSSを追加します。

styles/utils.module.css
```css
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.label {
  margin-bottom: 0.5rem;
}

.input {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 20rem;
}

.button {
  padding: 0.5rem 1rem;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.button:hover {
  background-color: #0060df;
}
```

作成したCSSを使用して、フォームを仕上げます。

pages/apiForms.js
```js
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/utils.module.css";

export default function apiForms() {
  const data = {
    name: "",
    email: "",
  };

  async function sendApi() {
    const response = await fetch(`api/api-forms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    alert(JSON.stringify(responseData));
  }

  return (
    <Layout>
      <Head>
        <title>API Forms</title>
      </Head>
      <section className={styles.section}>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            onChange={(e) => (data.name = e.target.value)}
          />
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            onChange={(e) => (data.email = e.target.value)}
          />
          <button className={styles.button} type="button" onClick={sendApi}>
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}
```

これでフォームは完成です。



# [その他](#)

## yarnのインストール
今回はformatを使用するためにyarnを使用します。
以下のコマンドを打ってください。
```cmd
npm install -g yarn
```