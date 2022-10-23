import { tw } from "../utils/tw";
import * as SliderPrimitive from "@radix-ui/react-slider";
import React from "react";

const Root = tw(SliderPrimitive.Root)`relative flex h-5 w-64 touch-none items-center`;

const Track = tw(SliderPrimitive.Track)`relative h-1 w-full grow rounded-full bg-primitive`;

const Range = tw(SliderPrimitive.Range)`absolute h-full rounded-full bg-primary`;

const Thumb = tw(
	SliderPrimitive.Thumb
)`block h-5 w-5 rounded-full bg-primary focus:outline-none focus-visible:ring focus-visible:ring-highlight`;

interface Props {}

const Slider = (props: Props) => {
	return (
		<Root defaultValue={[50]} max={100} step={1} aria-label="value">
			<Track>
				<Range />
			</Track>
			<Thumb />
		</Root>
	);
};

export default Slider;
