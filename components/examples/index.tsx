import { tw } from "../../utils/tw";
import { Checkbox } from "../Checkbox";
import { Heading } from "../Heading";
import { Grid } from "../Layout";
import { Slider } from "../Slider";
import { Switch } from "../Switch";
import { Toast } from "../Toast";
import * as Tooltip from "../Tooltip";
import { AccordianExample } from "./Accordian";
import { AlertDialogExample } from "./AlertDialog";
import { AspectRatioExample } from "./AspectRatio";
import { AvatarExample } from "./Avatar";
import { ButtonExample } from "./Button";
import { CollapsibleExample } from "./Collapsible";
import { ContextMenuExample } from "./ContextMenu";
import { DialogExample } from "./Dialog";
import { DropdownExample } from "./Dropdown";
import { HoverCardExample } from "./HoverCard";
import { PopoverExample } from "./Popover";
import { ProgressExample } from "./Progress";
import { RadioGroupExample } from "./RadioGroup";
import { SelectExample } from "./Select";
import { TabsExample } from "./Tabs";
import { ThemeSwitcherExample } from "./ThemeSwitcher";
import { ToggleExample } from "./Toggle";
import { ToggleGroupExample } from "./ToggleGroup";
import { ToolbarExample } from "./Toolbar";
import { TooltipExample } from "./Tooltip";
import { CodeIcon, ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes } from "react";

interface ComponentEntry {
	title: string;
	component: React.ReactNode;
	sourceLink?: string;
	Wrapper: ForwardRefExoticComponent<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	>;
	exampleLink?: string;
}

const buildGithubLink = (fileName: string) => {
	return `https://github.com/JackRKelly/t3-tailwind-radix/blob/master/components/${fileName}`;
};

export const exampleComponents: ComponentEntry[] = [
	{
		title: "Button",
		component: <ButtonExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("Button.tsx"),
		exampleLink: buildGithubLink("examples/Button.tsx")
	},
	{
		title: "Dropdown",
		component: <DropdownExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("Dropdown.tsx"),
		exampleLink: buildGithubLink("examples/Dropdown.tsx")
	},
	{
		title: "Select",
		component: <SelectExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("Select.tsx")
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
		sourceLink: buildGithubLink("Toggle.tsx")
	},
	{
		title: "Toast",
		component: <Toast />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("Toast.tsx")
	},
	{
		title: "Dialog",
		component: <DialogExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("Dialog.tsx")
	},
	{
		title: "Alert Dialog",
		component: <AlertDialogExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("AlertDialog.tsx")
	},
	{
		title: "Popover",
		component: <PopoverExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("Popover.tsx")
	},
	{
		title: "Tooltip",
		component: <TooltipExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("Tooltip.tsx")
	},
	{
		title: "Hover Card",
		component: <HoverCardExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("HoverCard.tsx")
	},
	{
		title: "Radio Group",
		component: <RadioGroupExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("RadioGroup.tsx")
	},
	{
		title: "Toggle Group",
		component: <ToggleGroupExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("ToggleGroup.tsx")
	},
	{
		title: "Switch",
		component: <Switch />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("Switch.tsx")
	},
	{
		title: "Context Menu",
		component: <ContextMenuExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("ContextMenu.tsx")
	},
	{
		title: "Slider",
		component: <Slider />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("Slider.tsx")
	},
	{
		title: "Checkbox",
		component: (
			<Checkbox label="Accept terms and conditions" id="terms-and-conditions" defaultChecked />
		),
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("Checkbox.tsx")
	},
	{
		title: "Avatar",
		component: <AvatarExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("Avatar.tsx")
	},
	{
		title: "Collapsible",
		component: <CollapsibleExample />,
		Wrapper: Grid.FullSpan,
		sourceLink: buildGithubLink("Collapsible.tsx")
	},
	{
		title: "Aspect Ratio",
		component: <AspectRatioExample />,
		Wrapper: Grid.FullSpan,
		sourceLink: buildGithubLink("AspectRatio.tsx")
	},
	{
		title: "Progress",
		component: <ProgressExample />,
		Wrapper: Grid.FullSpan,
		sourceLink: buildGithubLink("Progress.tsx")
	},
	{
		title: "Toolbar",
		component: <ToolbarExample />,
		Wrapper: Grid.FullSpan,
		sourceLink: buildGithubLink("Toolbar.tsx")
	},
	{
		title: "Tabs",
		component: <TabsExample />,
		Wrapper: Grid.FullSpan,
		sourceLink: buildGithubLink("Tabs.tsx")
	},
	{
		title: "Accordian",
		component: <AccordianExample />,
		Wrapper: Grid.FullSpan,
		sourceLink: buildGithubLink("Accordian.tsx")
	}
];

const WrapperHeader = tw.div`bg-primitive-faint border-b border-primitive-edge-faint rounded-t-lg w-full p-2 px-4 flex items-center justify-between`;

export const ExampleComponents = () => {
	return (
		<Grid.Wrapper>
			{exampleComponents.map(({ Wrapper, component, title, sourceLink, exampleLink }, i) => (
				<Wrapper className="relative rounded-lg" key={`${title}-${i}`}>
					<WrapperHeader>
						<Heading size="sm" className={clsx("mr-1 text-center w-full")}>
							{title}
						</Heading>

						<div className="flex absolute left-4">
							{exampleLink && (
								<Tooltip.Root
									sideOffset={-4}
									body={
										<p>
											View the example syntax for the "
											<span className="font-semibold text-primitive-type-bold">{title}</span>"
											component
										</p>
									}
								>
									<a
										className="p-2 -mr-2 group focus:outline-none focus-visible:ring focus-visible:ring-highlight rounded-md transition-button"
										href={exampleLink}
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

						<div className="flex absolute right-4">
							{sourceLink && (
								<Tooltip.Root
									sideOffset={-4}
									body={
										<p>
											View the source code for the "
											<span className="font-semibold text-primitive-type-bold">{title}</span>"
											component
										</p>
									}
								>
									<a
										className="p-2 -mr-2 group focus:outline-none focus-visible:ring focus-visible:ring-highlight rounded-md transition-button"
										href={sourceLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										<div className="w-6 h-6 relative flex items-center justify-center ">
											<GitHubLogoIcon className="w-5 h-5 absolute opacity-100 left-0.5 scale-100 group-hover:scale-50 group-hover:-left-3 group-hover:opacity-0 transition-all duration-150 text-primitive-type-faint" />
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
			))}
		</Grid.Wrapper>
	);
};
