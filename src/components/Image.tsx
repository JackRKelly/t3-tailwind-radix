import cx from "classnames";
import { ImageProps } from "next/image";
import NextImage from "next/image";
import { useState } from "react";
import { TwStyle } from "twin.macro";

export const Image = (props: ImageProps & { wrapperClass?: TwStyle }) => {
	const [isReady, setIsReady] = useState(false);

	const { alt, wrapperClass, ...rest } = props;

	return (
		<div
			css={[wrapperClass]}
			className={cx(["transition-opacity", isReady ? "opacity-100" : "opacity-0"])}
		>
			<NextImage
				{...rest}
				alt={alt}
				onLoadingComplete={() => {
					setIsReady(true);
					console.log("loaded");
				}}
			/>
		</div>
	);
};
