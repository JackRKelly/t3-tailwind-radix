import { tw } from "../utils/tw";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { PlayIcon, Share2Icon, TriangleRightIcon } from "@radix-ui/react-icons";
import React from "react";

interface Props {}

const Trigger = tw(
	CollapsiblePrimitive.Trigger
)`group flex w-full select-none items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium bg-primitive-faint hover:bg-primitive border border-primitive-edge text-primitive-type-bold focus:outline-none focus-visible:ring focus-visible:ring-highlight focus-visible:ring-opacity-50`;

const Content = tw(CollapsiblePrimitive.Content)`mt-4 flex flex-col space-y-4`;

const CollapsibleItem = tw.div`group ml-12 flex select-none items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium bg-primitive-faint text-primitive-type-bold hover:bg-primitive border border-primitive-edge`;

const CollapsibleItemAction = tw.div`hidden items-center space-x-3 group-hover:flex`;

const Collapsible = (props: Props) => {
	const [isOpen, setIsOpen] = React.useState(true);

	return (
		<CollapsiblePrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
			<Trigger>
				<div>My Playlists</div>
				<TriangleRightIcon className="transform duration-200 ease-in-out group-radix-state-open:rotate-90 text-primitive-type-faint" />
			</Trigger>
			<Content>
				{["80s Synthwave", "Maximale Konzentration", "高人氣金曲"].map((title, i) => (
					<CollapsibleItem key={`collapsible-${title}-${i}`}>
						{title}
						<CollapsibleItemAction>
							<Share2Icon className="cursor-pointer text-gray-500 hover:text-primitive-type" />
							<PlayIcon className="cursor-pointer text-gray-500 hover:text-primitive-type" />
						</CollapsibleItemAction>
					</CollapsibleItem>
				))}
			</Content>
		</CollapsiblePrimitive.Root>
	);
};

export default Collapsible;
