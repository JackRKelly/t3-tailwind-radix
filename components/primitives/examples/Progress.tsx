import { useEffect, useState } from "react";
import { Progress } from "../Progress";

export const ProgressExample = () => {
	const [progress, setProgress] = useState(50);

	const getRandomArbitrary = (min: number, max: number) => {
		return Math.random() * (max - min) + min;
	};

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

	return <Progress value={progress} />;
};
