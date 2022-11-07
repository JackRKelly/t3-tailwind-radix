import { PropsWithChildren } from "react";

interface LinkProps extends PropsWithChildren {
	type: "native" | "next" | "button";
}

export const Link = (props: LinkProps) => {};
