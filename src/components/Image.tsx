import { cva } from "class-variance-authority";
import clsx from "clsx";
import { ImageProps } from "next/image";
import NextImage from "next/image";
import { useState } from "react";

const styles = cva("transition-opacity", {
	variants: {
		ready: {
			true: "opacity-100",
			false: "opacity-0"
		}
	}
});

export const Image = (props: ImageProps & { className?: string }) => {
	const [ready, setReady] = useState(false);

	const { alt, className, ...rest } = props;

	return (
		<div className={clsx(styles({ ready }), className)}>
			<NextImage
				{...rest}
				alt={alt}
				onLoadingComplete={() => {
					setReady(true);
				}}
			/>
		</div>
	);
};
