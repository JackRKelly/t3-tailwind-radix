import type { AppType } from "next/app";
import * as Tooltip from "../components/primitives/Tooltip";
import "../styles/globals.css";
import { trpc } from "../utils/trpc";

const App: AppType = ({ Component, pageProps }) => (
	<Tooltip.Provider>
		<Component {...pageProps} />
	</Tooltip.Provider>
);

export default trpc.withTRPC(App);
