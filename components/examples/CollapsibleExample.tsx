import { tw } from "../../utils/tw";
import * as Collapsible from "../Collapsible";
import { PlayIcon as _PlayIcon, Share2Icon as _Share2Icon } from "@radix-ui/react-icons";

const CollapsibleItemAction = tw.div`hidden items-center space-x-3 group-hover:flex`;

const Share2Icon = tw(
	_Share2Icon
)`cursor-pointer text-primitive-type-faint hover:text-primitive-type`;
const PlayIcon = tw(_PlayIcon)`cursor-pointer text-primitive-type-faint hover:text-primitive-type`;

export const CollapsibleExample = () => (
	<Collapsible.Root trigger={"My Playlists"}>
		<Collapsible.Item>
			80s Synthwave
			<CollapsibleItemAction>
				<Share2Icon />
				<PlayIcon />
			</CollapsibleItemAction>
		</Collapsible.Item>
		<Collapsible.Item>
			高人氣金曲
			<CollapsibleItemAction>
				<Share2Icon />
				<PlayIcon />
			</CollapsibleItemAction>
		</Collapsible.Item>
		<Collapsible.Item>
			Maximale Konzentration
			<CollapsibleItemAction>
				<Share2Icon />
				<PlayIcon />
			</CollapsibleItemAction>
		</Collapsible.Item>
	</Collapsible.Root>
);
