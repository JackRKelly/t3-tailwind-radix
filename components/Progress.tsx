import { tw } from "../utils/tw";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import React, { useEffect } from "react";

const Root = tw(
	ProgressPrimitive.Root
)`h-3 w-full overflow-hidden rounded-full bg-primitive transition-colors max-w-xl`;

const Indicator = tw(ProgressPrimitive.Indicator)`h-full bg-primary transition-all`;

interface Props {}

const getRandomArbitrary = (min: number, max: number) => {
	return Math.random() * (max - min) + min;
};

export const Progress = (props: Props) => {
	const [progress, setProgress] = React.useState(60);

	useEffect(() => {
		let timerId: null | NodeJS.Timer = null;

		timerId = setInterval(() => {
			const p = Math.ceil(getRandomArbitrary(0, 100) / 10) * 10;
			setProgress(p);
		}, 2000);

		return () => {
			if (timerId) {
				clearInterval(timerId);
			}
		};
	}, []);

	return (
		<Root value={progress}>
			<Indicator style={{ width: `${progress}%` }} />
		</Root>
	);
};
