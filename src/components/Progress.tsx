import { tw } from "../utils/tw";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import React, { useEffect } from "react";

const Root = tw(ProgressPrimitive.Root)`h-3 w-full overflow-hidden rounded-full bg-primitive`;

const Indicator = tw(ProgressPrimitive.Indicator)`h-full bg-primary duration-300 ease-in-out`;

interface Props {}

const getRandomArbitrary = (min: number, max: number) => {
	return Math.random() * (max - min) + min;
};

const Progress = (props: Props) => {
	const [progress, setProgress] = React.useState(60);

	useEffect(() => {
		let timerId: null | NodeJS.Timer = null;

		timerId = setInterval(() => {
			const p = Math.ceil(getRandomArbitrary(0, 100) / 10) * 10;
			setProgress(p);
		}, 3000);

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

export default Progress;
