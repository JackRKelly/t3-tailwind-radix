import { Accordion } from "../components/Accordian";
import { AlertDialog } from "../components/AlertDialog";
import { AspectRatio } from "../components/AspectRatio";
import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Collapsible } from "../components/Collapsible";
import { ContextMenu } from "../components/ContextMenu";
import { Dialog } from "../components/Dialog";
import { Heading } from "../components/Heading";
import { HoverCard } from "../components/HoverCard";
import { Grid, InnerColumn, OuterColumn, PageWrapper } from "../components/Layout";
import { Navigation } from "../components/Navigation";
import { Popover } from "../components/Popover";
import { Progress } from "../components/Progress";
import { RadioGroup } from "../components/RadioGroup";
import { Select } from "../components/Select";
import { Slider } from "../components/Slider";
import { Switch } from "../components/Switch";
import { Tabs } from "../components/Tabs";
import { Text } from "../components/Text";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { Toast } from "../components/Toast";
import { Toggle } from "../components/Toggle";
import { ToggleGroup } from "../components/ToggleGroup";
import { Toolbar } from "../components/Toolbar";
import { Tooltip } from "../components/Tooltip";
import { DropdownExample } from "../components/examples/DropdownExample";
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

const components: ComponentEntry[] = [
	{
		title: "Button",
		component: <Button>Button</Button>,
		Wrapper: Grid.OneSpan,
		link: "https://github.com/JackRKelly/t3-tailwind-radix/blob/master/components/Button.tsx"
	},
	{
		title: "Dropdown",
		component: <DropdownExample />,
		Wrapper: Grid.OneSpan,
		link: "https://github.com/JackRKelly/t3-tailwind-radix/blob/master/components/Dropdown.tsx"
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

						{components.map(({ Wrapper, component, title }) => (
							<Wrapper className="relative rounded-lg">
								<WrapperHeader>
									<Heading size="sm" className="mr-1">
										{title}
									</Heading>
									<a
										className="relative flex items-center justify-center p-1 group w-6 h-6 focus:outline-none focus-visible:ring focus-visible:ring-highlight rounded-md transition-button"
										href="https://github.com/JackRKelly/t3-tailwind-radix"
										target="_blank"
										rel="noopener noreferrer"
									>
										<GitHubLogoIcon className="w-5 h-5 absolute opacity-100 left-1 scale-100 group-hover:scale-50 group-hover:-left-3 group-hover:opacity-0 transition-all duration-150" />
										<ExternalLinkIcon className="w-5 h-5 absolute opacity-0 scale-50 group-hover:scale-100 group-hover:right-1 -right-3 group-hover:opacity-100 transition-all duration-150" />
									</a>
								</WrapperHeader>

								<div className="p-4">{component}</div>
							</Wrapper>
						))}

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Button
							</Heading>
							<Button>Click</Button>
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Theme Switcher
							</Heading>
							<ThemeSwitcher />
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Select
							</Heading>
							<Select
								ariaLabel="Fruit"
								options={[
									{ value: "grape", textValue: "Grape", disabled: true },
									{ value: "apple", textValue: "Apple", disabled: false },
									{ value: "orange", textValue: "Orange", disabled: false },
									{ value: "pear", textValue: "Pear", disabled: true }
								]}
							/>
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Toggle
							</Heading>
							<Toggle />
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Dropdown
							</Heading>
							<DropdownExample />
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Toast
							</Heading>
							<Toast />
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Dialog
							</Heading>
							<Dialog />
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Alert Dialog
							</Heading>
							<AlertDialog />
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Popover
							</Heading>
							<Popover />
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Tooltip
							</Heading>
							<Tooltip trigger={<Button>Hover</Button>}>This is a tooltip component</Tooltip>
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Hover Card
							</Heading>
							<HoverCard side="right" />
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Radio Group
							</Heading>
							<RadioGroup />
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Toggle Group
							</Heading>
							<ToggleGroup />
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Switch
							</Heading>
							<Switch />
						</Grid.OneSpan>

						<Grid.OneSpan>
							<Heading size="sm" className="mb-2">
								Context Menu
							</Heading>
							<ContextMenu />
						</Grid.OneSpan>

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
