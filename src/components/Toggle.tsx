import { tw } from "../utils/tw";
import Button from "./Button";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import React, { useState } from "react";

const Body = tw.span`ml-2 leading-5`;

interface Props {}

const Toggle = (props: Props) => {
	const [starred, setStarred] = useState(false);

	return (
		<TogglePrimitive.Root defaultPressed={starred} onPressedChange={setStarred} asChild>
			<Button>
				{starred ? <StarFilledIcon className="h-4 w-4 text-yellow-400" /> : <StarIcon />}
				<Body>{starred ? "Starred" : "Star"}</Body>
			</Button>
		</TogglePrimitive.Root>
	);
};

export default Toggle;
