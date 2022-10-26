import { Accordion } from "../components/Accordian";
import { AspectRatio } from "../components/AspectRatio";
import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Collapsible } from "../components/Collapsible";
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
import { ContextMenuExample } from "../components/examples/ContextMenuExample";
import { DialogExample } from "../components/examples/DialogExample";
import { DropdownExample } from "../components/examples/DropdownExample";
import { HoverCardExample } from "../components/examples/HoverCardExample";
import { PopoverExample } from "../components/examples/PopoverExample";
import { RadioGroupExample } from "../components/examples/RadioGroupExample";
import { SelectExample } from "../components/examples/SelectExample";
import { ToggleGroupExample } from "../components/examples/ToggleGroupExample";
import { tw } from "../utils/tw";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import type { NextPage } from "next";
import { DetailedHTMLProps, ForwardRefExoticComponent, HTMLAttributes } from "react";

interface ComponentEntry {
	title: string;
	component: React.ReactNode;
	link: string;
	Wrapper: ForwardRefExoticComponent<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	>;
}

const buildGithubLink = (fileName: string) => {
	return `https://github.com/JackRKelly/t3-tailwind-radix/blob/master/components/${fileName}`;
};

const components: ComponentEntry[] = [
	{
		title: "Button",
		component: <Button>Button</Button>,
		Wrapper: Grid.OneSpan,
		link: buildGithubLink("Button.tsx")
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

						{components.map(({ Wrapper, component, title, link }, i) => (
							<Wrapper className="relative rounded-lg" key={`${title}-${i}`}>
								<WrapperHeader>
									<Heading size="sm" className="mr-1">
										{title}
									</Heading>
									<Tooltip
										body={
											<p>
												Checkout the code for the "
												<span className="font-semibold text-primitive-type-bold">{title}</span>"
												component on Github
											</p>
										}
									>
										<a
											className="px-2 -mx-2 group p-1 focus:outline-none focus-visible:ring focus-visible:ring-highlight rounded-md transition-button"
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
								</WrapperHeader>

								<div className="p-4 w-full h-full flex items-center justify-center">
									{component}
								</div>
							</Wrapper>
						))}

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Slider
							</Heading>
							<Slider />
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Checkbox
							</Heading>
							<Checkbox />
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Avatar
							</Heading>
							<div className="grid grid-cols-4 gap-2">
								<Avatar variant={Avatar.variant.Rounded} />
								<Avatar variant={Avatar.variant.Rounded} isOnline />
								<Avatar variant={Avatar.variant.Rounded} renderInvalidUrls />
							</div>
						</Grid.OneSpan>

						<Grid.FullSpan>
							<Heading size="sm" className="mb-2">
								Collapsible
							</Heading>
							<Collapsible />
						</Grid.FullSpan>

						<Grid.FullSpan>
							<Heading size="sm" className="mb-2">
								Aspect Ratio
							</Heading>
							<AspectRatio />
						</Grid.FullSpan>

						<Grid.FullSpan>
							<Heading size="sm" className="mb-2">
								Progress
							</Heading>
							<Progress />
						</Grid.FullSpan>

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
