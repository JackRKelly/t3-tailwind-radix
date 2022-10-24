import "../styles/globals.css";
import { trpc } from "../utils/trpc";
import * as ToastPrimitive from "@radix-ui/react-toast";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { AppType } from "next/app";

const App: AppType = ({ Component, pageProps }) => {
	return (
		<TooltipPrimitive.Provider>
			<ToastPrimitive.Provider>
				<Component {...pageProps} />
			</ToastPrimitive.Provider>
		</TooltipPrimitive.Provider>
	);
};

export default trpc.withTRPC(App);
