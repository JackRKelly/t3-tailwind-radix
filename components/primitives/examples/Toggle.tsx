import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { tw } from "../../../utils/tw";
import { Button } from "../Button";
import * as Toggle from "../Toggle";

const Body = tw.span`ml-2 leading-5`;

export const ToggleExample = () => {
	const [starred, setStarred] = useState(false);

	return (
		<Toggle.Root pressed={starred} onPressedChange={setStarred}>
			<Button type="button">
				{starred ? <StarFilledIcon className="h-4 w-4 text-yellow-400" /> : <StarIcon />}
				<Body>{starred ? "Starred" : "Star"}</Body>
			</Button>
		</Toggle.Root>
	);
};
