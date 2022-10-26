import { tw } from "../../utils/tw";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Heading } from "../Heading";
import { Grid } from "../Layout";
import { Slider } from "../Slider";
import { Switch } from "../Switch";
import { Toast } from "../Toast";
import * as Tooltip from "../Tooltip";
import { AccordianExample } from "./AccordianExample";
import { AlertDialogExample } from "./AlertDialogExample";
import { AspectRatioExample } from "./AspectRatioExample";
import { AvatarExample } from "./AvatarExample";
import { CollapsibleExample } from "./CollapsibleExample";
import { ContextMenuExample } from "./ContextMenuExample";
import { DialogExample } from "./DialogExample";
import { DropdownExample } from "./DropdownExample";
import { HoverCardExample } from "./HoverCardExample";
import { PopoverExample } from "./PopoverExample";
import { ProgressExample } from "./ProgressExample";
import { RadioGroupExample } from "./RadioGroupExample";
import { SelectExample } from "./SelectExample";
import { TabsExample } from "./TabsExample";
import { ThemeSwitcherExample } from "./ThemeSwitcherExample";
import { ToggleExample } from "./ToggleExample";
import { ToggleGroupExample } from "./ToggleGroupExample";
import { ToolbarExample } from "./ToolbarExample";
import { TooltipExample } from "./TooltipExample";
import {
	ClipboardCopyIcon,
	CodeIcon,
	ExternalLinkIcon,
	GitHubLogoIcon
} from "@radix-ui/react-icons";
import clsx from "clsx";
import link from "next/link";
import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes } from "react";

interface ComponentEntry {
	title: string;
	component: React.ReactNode;
	link?: string;
	Wrapper: ForwardRefExoticComponent<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	>;
	copyToClipboard?: () => void;
}

const buildGithubLink = (fileName: string) => {
	return `https://github.com/JackRKelly/t3-tailwind-radix/blob/master/components/${fileName}`;
};

export const exampleComponents: ComponentEntry[] = [
	{
		title: "Button",
		component: <Button>Button</Button>,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("Button.tsx"),
		copyToClipboard: () => {
			navigator.clipboard.writeText(`<Button>Button</Button>`);
		}
	},
	{
		title: "Dropdown",
		component: <DropdownExample />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("Dropdown.tsx")
	},
	{
		title: "Select",
		component: <SelectExample />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("Select.tsx")
	},
	{
		title: "Theme Switcher",
		component: <ThemeSwitcherExample />,
		Wrapper: Grid.OneSpan
	},
	{
		title: "Toggle",
		component: <ToggleExample />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("Toggle.tsx")
	},
	{
		title: "Toast",
		component: <Toast />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("Toast.tsx")
	},
	{
		title: "Dialog",
		component: <DialogExample />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("Dialog.tsx")
	},
	{
		title: "Alert Dialog",
		component: <AlertDialogExample />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("AlertDialog.tsx")
	},
	{
		title: "Popover",
		component: <PopoverExample />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("Popover.tsx")
	},
	{
		title: "Tooltip",
		component: <TooltipExample />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("Tooltip.tsx")
	},
	{
		title: "Hover Card",
		component: <HoverCardExample />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("HoverCard.tsx")
	},
	{
		title: "Radio Group",
		component: <RadioGroupExample />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("RadioGroup.tsx")
	},
	{
		title: "Toggle Group",
		component: <ToggleGroupExample />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("ToggleGroup.tsx")
	},
	{
		title: "Switch",
		component: <Switch />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("Switch.tsx")
	},
	{
		title: "Context Menu",
		component: <ContextMenuExample />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("ContextMenu.tsx")
	},
	{
		title: "Slider",
		component: <Slider />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("Slider.tsx")
	},
	{
		title: "Checkbox",
		component: (
			<Checkbox label="Accept terms and conditions" id="terms-and-conditions" defaultChecked />
		),
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("Checkbox.tsx")
	},
	{
		title: "Avatar",
		component: <AvatarExample />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("Avatar.tsx")
	},
	{
		title: "Collapsible",
		component: <CollapsibleExample />,
		Wrapper: Grid.FullSpan,
		link: buildGithubLink("Collapsible.tsx")
	},
	{
		title: "Aspect Ratio",
		component: <AspectRatioExample />,
		Wrapper: Grid.FullSpan,
		link: buildGithubLink("AspectRatio.tsx")
	},
	{
		title: "Progress",
		component: <ProgressExample />,
		Wrapper: Grid.FullSpan,
		link: buildGithubLink("Progress.tsx")
	},
	{
		title: "Toolbar",
		component: <ToolbarExample />,
		Wrapper: Grid.FullSpan,
		link: buildGithubLink("Toolbar.tsx")
	},
	{
		title: "Tabs",
		component: <TabsExample />,
		Wrapper: Grid.FullSpan,
		link: buildGithubLink("Tabs.tsx")
	},
	{
		title: "Accordian",
		component: <AccordianExample />,
		Wrapper: Grid.FullSpan,
		link: buildGithubLink("Accordian.tsx")
	}
];

const WrapperHeader = tw.div`bg-primitive-faint border-b border-primitive-edge-faint rounded-t-lg w-full p-2 px-4 flex items-center justify-between`;

export const ExampleComponents = () => {
	return (
		<Grid.Wrapper>
			{exampleComponents.map(({ Wrapper, component, title, link, copyToClipboard }, i) => {
				return (
					<Wrapper className="relative rounded-lg" key={`${title}-${i}`}>
						<WrapperHeader>
							<Heading size="sm" className={clsx("mr-1 text-center w-full")}>
								{title}
							</Heading>
							<div className="flex absolute right-4">
								{copyToClipboard && (
									<Tooltip.Root
										body={
											<p>
												Copy the example code snippet for "
												<span className="font-semibold text-primitive-type-bold">{title}</span>"
											</p>
										}
									>
										<div className="px-2 p-1 group cursor-pointer" onClick={copyToClipboard}>
											<div className="w-6 h-6 flex items-center justify-center">
												<ClipboardCopyIcon className="w-5 h-5 text-primitive-type-faint group-hover:text-primitive-type" />
											</div>
										</div>
									</Tooltip.Root>
								)}

								{link && (
									<Tooltip.Root
										body={
											<p>
												Checkout the source code for the "
												<span className="font-semibold text-primitive-type-bold">{title}</span>"
												component on Github
											</p>
										}
									>
										<a
											className="px-2 -mr-2 group p-1 focus:outline-none focus-visible:ring focus-visible:ring-highlight rounded-md transition-button"
											href={link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<div className="w-6 h-6 relative flex items-center justify-center ">
												<CodeIcon className="w-5 h-5 absolute opacity-100 left-0.5 scale-100 group-hover:scale-50 group-hover:-left-3 group-hover:opacity-0 transition-all duration-150 text-primitive-type-faint" />
												<ExternalLinkIcon className="w-5 h-5 absolute opacity-0 scale-50 group-hover:scale-100 group-hover:right-0.5 -right-3 group-hover:opacity-100 transition-all duration-150 text-primitive-type" />
											</div>
										</a>
									</Tooltip.Root>
								)}
							</div>
						</WrapperHeader>

						<div className="p-4 w-full h-full flex items-center justify-center min-h-[8rem]">
							{component}
						</div>
					</Wrapper>
				);
			})}
		</Grid.Wrapper>
	);
};
