import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { PlayIcon, Share2Icon, TriangleRightIcon } from "@radix-ui/react-icons";
import cx from "clsx";
import React from "react";

interface Props {}

const Collapsible = (props: Props) => {
	const [isOpen, setIsOpen] = React.useState(true);

	return (
		<CollapsiblePrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
			<CollapsiblePrimitive.Trigger
				className={cx(
					"group flex w-full select-none items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium bg-primitive-faint hover:bg-primitive border border-primitive-edge text-primitive-type-bold focus:outline-none focus-visible:ring focus-visible:ring-highlight focus-visible:ring-opacity-75"
				)}
			>
				<div>My Playlists</div>
				<TriangleRightIcon className="transform duration-200 ease-in-out group-radix-state-open:rotate-90 text-primitive-type-faint" />
			</CollapsiblePrimitive.Trigger>
			<CollapsiblePrimitive.Content className="mt-4 flex flex-col space-y-4">
				{["80s Synthwave", "Maximale Konzentration", "高人氣金曲"].map((title, i) => (
					<div
						key={`collapsible-${title}-${i}`}
						className={cx(
							"group ml-12 flex select-none items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium bg-primitive-faint text-primitive-type-bold hover:bg-primitive border border-primitive-edge"
						)}
					>
						{title}
						<div className="hidden items-center space-x-3 group-hover:flex">
							<Share2Icon className="cursor-pointer text-gray-500 hover:text-primitive-type dark:text-gray-400 dark:hover:text-gray-200" />
							<PlayIcon className="cursor-pointer text-gray-500 hover:text-primitive-type dark:text-gray-400 dark:hover:text-gray-200" />
						</div>
					</div>
				))}
			</CollapsiblePrimitive.Content>
		</CollapsiblePrimitive.Root>
	);
};

export default Collapsible;
