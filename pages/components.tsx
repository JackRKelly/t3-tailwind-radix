import { Accordion } from "../components/Accordian";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Grid, InnerColumn, OuterColumn, PageWrapper } from "../components/Layout";
import { Navigation } from "../components/Navigation";
import { Progress } from "../components/Progress";
import { Slider } from "../components/Slider";
import { Switch } from "../components/Switch";
import { Tabs } from "../components/Tabs";
import { Text } from "../components/Text";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { Toast } from "../components/Toast";
import { Toggle } from "../components/Toggle";
import { Toolbar } from "../components/Toolbar";
import { Tooltip } from "../components/Tooltip";
import { AlertDialogExample } from "../components/examples/AlertDialogExample";
import { AspectRatioExample } from "../components/examples/AspectRatioExample";
import { AvatarExample } from "../components/examples/AvatarExample";
import { CollapsibleExample } from "../components/examples/CollapsibleExample";
import { ContextMenuExample } from "../components/examples/ContextMenuExample";
import { DialogExample } from "../components/examples/DialogExample";
import { DropdownExample } from "../components/examples/DropdownExample";
import { HoverCardExample } from "../components/examples/HoverCardExample";
import { PopoverExample } from "../components/examples/PopoverExample";
import { ProgressExample } from "../components/examples/ProgressExample";
import { RadioGroupExample } from "../components/examples/RadioGroupExample";
import { SelectExample } from "../components/examples/SelectExample";
import { ToggleGroupExample } from "../components/examples/ToggleGroupExample";
import { tw } from "../utils/tw";
import { ClipboardCopyIcon, ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import type { NextPage } from "next";
import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes } from "react";

interface ComponentEntry {
	title: string;
	component: React.ReactNode;
	link: string;
	Wrapper: ForwardRefExoticComponent<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	>;
	copyToClipboard?: () => void;
}

const buildGithubLink = (fileName: string) => {
	return `https://github.com/JackRKelly/t3-tailwind-radix/blob/master/components/${fileName}`;
};

const components: ComponentEntry[] = [
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
		component: <ThemeSwitcher />,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("ThemeSwitcher.tsx")
	},
	{
		title: "Toggle",
		component: <Toggle />,
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
		component: (
			<Tooltip body={"This is a tooltip component"}>
				<Button>Hover</Button>
			</Tooltip>
		),
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
	}
];

const WrapperHeader = tw.div`bg-primitive-faint border-b border-primitive-edge-faint rounded-t-lg w-full p-2 px-4 flex items-center justify-between`;

const Components: NextPage = () => {
	return (
		<PageWrapper>
			<Navigation />

			<OuterColumn>
				<InnerColumn width="third">
					<Grid.Wrapper>
						<Grid.FullSpanNoBackground>
							<Heading size="xxl" className="relative text-center mb-4 md:mb-8 mt-2 md:mt-4">
								Components
							</Heading>
							<Text>
								Checkout our collection of fully styled radix components ported from
								tailwindcss-radix
							</Text>
						</Grid.FullSpanNoBackground>

						{components.map(({ Wrapper, component, title, link, copyToClipboard }, i) => {
							return (
								<Wrapper className="relative rounded-lg" key={`${title}-${i}`}>
									<WrapperHeader>
										<Heading size="sm" className={clsx("mr-1 text-center w-full")}>
											{title}
										</Heading>
										<div className="flex absolute right-4">
											{copyToClipboard && (
												<Tooltip
													body={
														<p>
															Copy the code snippet for "
															<span className="font-semibold text-primitive-type-bold">
																{title}
															</span>
															"
														</p>
													}
												>
													<div className="px-2 p-1 group" onClick={copyToClipboard}>
														<div className="w-6 h-6 flex items-center justify-center">
															<ClipboardCopyIcon className="w-5 h-5 text-primitive-type-faint group-hover:text-primitive-type" />
														</div>
													</div>
												</Tooltip>
											)}

											<Tooltip
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
														<GitHubLogoIcon className="w-5 h-5 absolute opacity-100 left-0.5 scale-100 group-hover:scale-50 group-hover:-left-3 group-hover:opacity-0 transition-all duration-150 text-primitive-type-faint" />
														<ExternalLinkIcon className="w-5 h-5 absolute opacity-0 scale-50 group-hover:scale-100 group-hover:right-0.5 -right-3 group-hover:opacity-100 transition-all duration-150 text-primitive-type" />
													</div>
												</a>
											</Tooltip>
										</div>
									</WrapperHeader>

									<div className="p-4 w-full h-full flex items-center justify-center min-h-[8rem]">
										{component}
									</div>
								</Wrapper>
							);
						})}

						<Grid.FullSpan>
							<Heading size="sm" className="mb-2">
								Toolbar
							</Heading>
							<Toolbar />
						</Grid.FullSpan>

						<Grid.FullSpan>
							<Heading size="sm" className="mb-2">
								Tabs
							</Heading>
							<Tabs />
						</Grid.FullSpan>

						<Grid.FullSpan>
							<Heading size="sm" className="mb-2">
								Accordian
							</Heading>
							<Accordion />
						</Grid.FullSpan>
					</Grid.Wrapper>
				</InnerColumn>
			</OuterColumn>
		</PageWrapper>
	);
};

export default Components;
