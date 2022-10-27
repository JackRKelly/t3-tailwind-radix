import * as Tooltip from "../components/primitives/Tooltip";
import "../styles/globals.css";
import { trpc } from "../utils/trpc";
import type { AppType } from "next/app";

const App: AppType = ({ Component, pageProps }) => (
	<Tooltip.Provider>
		<Component {...pageProps} />
	</Tooltip.Provider>
);

export default trpc.withTRPC(App);
