import { tw } from "../../../utils/tw";
import { Heading } from "../Heading";
import { Grid } from "../Layout";
import * as Tooltip from "../Tooltip";
import { AccordianExample } from "./Accordian";
import { AlertDialogExample } from "./AlertDialog";
import { AspectRatioExample } from "./AspectRatio";
import { AvatarExample } from "./Avatar";
import { CheckboxExample } from "./Checkbox";
import { CollapsibleExample } from "./Collapsible";
import { ContextMenuExample } from "./ContextMenu";
import { DialogExample } from "./Dialog";
import { DropdownExample } from "./Dropdown";
import { HoverCardExample } from "./HoverCard";
import { NavigationExample } from "./Navigation";
import { PopoverExample } from "./Popover";
import { ProgressExample } from "./Progress";
import { RadioGroupExample } from "./RadioGroup";
import { SelectExample } from "./Select";
import { SliderExample } from "./Slider";
import { SwitchExample } from "./Switch";
import { TabsExample } from "./Tabs";
import { ThemeSwitcherExample } from "./ThemeSwitcher";
import { ToastExample } from "./Toast";
import { ToggleExample } from "./Toggle";
import { ToggleGroupExample } from "./ToggleGroup";
import { ToolbarExample } from "./Toolbar";
import { TooltipExample } from "./Tooltip";
import { CodeIcon, ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
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
		title: "Dropdown",
		component: <DropdownExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/Dropdown.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Dropdown.tsx")
	},
	{
		title: "Select",
		component: <SelectExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/Select.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Select.tsx")
	},
	{
		title: "Theme Switcher",
		component: <ThemeSwitcherExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("ThemeSwitcher.tsx")
	},
	{
		title: "Toggle",
		component: <ToggleExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/Toggle.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Toggle.tsx")
	},
	{
		title: "Toast",
		component: <ToastExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/Toast.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Toast.tsx")
	},
	{
		title: "Dialog",
		component: <DialogExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/Dialog.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Dialog.tsx")
	},
	{
		title: "Alert Dialog",
		component: <AlertDialogExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/AlertDialog.tsx"),
		exampleLink: buildGithubLink("primitives/examples/AlertDialog.tsx")
	},
	{
		title: "Popover",
		component: <PopoverExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/Popover.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Popover.tsx")
	},
	{
		title: "Tooltip",
		component: <TooltipExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/Tooltip.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Tooltip.tsx")
	},
	{
		title: "Hover Card",
		component: <HoverCardExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/HoverCard.tsx"),
		exampleLink: buildGithubLink("primitives/examples/HoverCard.tsx")
	},
	{
		title: "Radio Group",
		component: <RadioGroupExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/RadioGroup.tsx"),
		exampleLink: buildGithubLink("primitives/examples/RadioGroup.tsx")
	},
	{
		title: "Toggle Group",
		component: <ToggleGroupExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/ToggleGroup.tsx"),
		exampleLink: buildGithubLink("primitives/examples/ToggleGroup.tsx")
	},
	{
		title: "Switch",
		component: <SwitchExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/Switch.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Switch.tsx")
	},
	{
		title: "Context Menu",
		component: <ContextMenuExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/ContextMenu.tsx"),
		exampleLink: buildGithubLink("primitives/examples/ContextMenu.tsx")
	},
	{
		title: "Slider",
		component: <SliderExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/Slider.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Slider.tsx")
	},
	{
		title: "Checkbox",
		component: <CheckboxExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/Checkbox.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Checkbox.tsx")
	},
	{
		title: "Avatar",
		component: <AvatarExample />,
		Wrapper: Grid.OneSpan,
		sourceLink: buildGithubLink("primitives/Avatar.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Avatar.tsx")
	},
	{
		title: "Collapsible",
		component: <CollapsibleExample />,
		Wrapper: Grid.FullSpan,
		sourceLink: buildGithubLink("primitives/Collapsible.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Collapsible.tsx")
	},
	{
		title: "Aspect Ratio",
		component: <AspectRatioExample />,
		Wrapper: Grid.FullSpan,
		sourceLink: buildGithubLink("primitives/AspectRatio.tsx"),
		exampleLink: buildGithubLink("primitives/examples/AspectRatio.tsx")
	},
	{
		title: "Progress",
		component: <ProgressExample />,
		Wrapper: Grid.FullSpan,
		sourceLink: buildGithubLink("primitives/Progress.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Progress.tsx")
	},
	{
		title: "Navigation",
		component: <NavigationExample />,
		Wrapper: Grid.FullSpan,
		sourceLink: buildGithubLink("primitives/Navigation.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Navigation.tsx")
	},
	{
		title: "Toolbar",
		component: <ToolbarExample />,
		Wrapper: Grid.FullSpan,
		sourceLink: buildGithubLink("primitives/Toolbar.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Toolbar.tsx")
	},
	{
		title: "Tabs",
		component: <TabsExample />,
		Wrapper: Grid.FullSpan,
		sourceLink: buildGithubLink("primitives/Tabs.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Tabs.tsx")
	},
	{
		title: "Accordian",
		component: <AccordianExample />,
		Wrapper: Grid.FullSpan,
		sourceLink: buildGithubLink("primitives/Accordian.tsx"),
		exampleLink: buildGithubLink("primitives/examples/Accordian.tsx")
	}
];

const WrapperHeader = tw.div`bg-primitive-faint border-b border-primitive-edge-faint rounded-t-lg w-full flex items-center justify-center`;

const WrapperHeaderColumn = tw.div`p-2 px-4 max-w-md flex items-center justify-center w-full relative`;

export const ExampleComponents = () => {
	return (
		<Grid.Wrapper>
			{exampleComponents.map(({ Wrapper, component, title, sourceLink, exampleLink }, i) => (
				<Wrapper className="relative rounded-lg" key={`${title}-${i}`}>
					<WrapperHeader>
						<WrapperHeaderColumn>
							<div className="flex">
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
											className="p-2 -ml-2 -my-2 group focus:outline-none focus-visible:ring focus-visible:ring-highlight rounded-md transition-button"
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
							<Heading size="sm" className="mx-2">
								{title}
							</Heading>

							<div className="flex">
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
											className="p-2 -mr-2 -my-2 group focus:outline-none focus-visible:ring focus-visible:ring-highlight rounded-md transition-button"
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
						</WrapperHeaderColumn>
					</WrapperHeader>

					<div className="p-4 w-full h-full flex items-center justify-center min-h-[8rem]">
						{component}
					</div>
				</Wrapper>
			))}
		</Grid.Wrapper>
	);
};
