import "../styles/globals.css";
import { trpc } from "../utils/trpc";
import type { AppType } from "next/app";

const App: AppType = ({ Component, pageProps }) => {
	if (typeof window === "undefined") {
		return <Component {...pageProps} />;
	}

	return <Component {...pageProps} />;
};

export default trpc.withTRPC(App);
