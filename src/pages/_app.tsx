import { useEffect } from "react";
import "@/styles/global.css";
import { AppProps } from "next/app";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import Header from "@/components/Header";

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 });

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	if (typeof window !== "undefined") {
		nprogress.start();
	}

	useEffect(() => {
		nprogress.done();
	});
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
};

export default App;
