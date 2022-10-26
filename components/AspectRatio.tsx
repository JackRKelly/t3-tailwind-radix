import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import cx from "clsx";
import React, { Fragment } from "react";

interface Props {}

export const AspectRatio = (props: Props) => {
	return (
		<div className="w-full max-w-xl">
			<AspectRatioPrimitive.Root
				ratio={16 / 9}
				className="group relative h-full w-full overflow-hidden rounded-lg shadow-md"
			>
				<div className="absolute inset-0 z-10 flex items-center justify-center">
					<h3 className="select-none bg-gradient-to-r from-white to-primary-faint bg-clip-text text-3xl font-bold uppercase text-transparent duration-300 ease-in-out group-hover:opacity-0 sm:text-4xl">
						Vancouver
					</h3>
				</div>
				<div
					className={cx(
						"absolute inset-0 bg-gray-800 object-cover group-hover:bg-gray-500",
						"transition-colors duration-300 ease-in-out"
					)}
				>
					<img
						src="https://images.unsplash.com/photo-1609825488888-3a766db05542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
						alt="Vancouver by Matt Wang"
						className="h-full w-full mix-blend-overlay"
					/>
				</div>
			</AspectRatioPrimitive.Root>
		</div>
	);
};
