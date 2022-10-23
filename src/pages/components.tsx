import {
	Accordion,
	AlertDialog,
	AspectRatio,
	Avatar,
	Checkbox,
	Collapsible,
	ContextMenu,
	Dialog,
	Dropdown,
	Heading,
	HoverCard,
	InnerColumn,
	Navigation,
	OuterColumn,
	PageWrapper,
	Popover,
	Progress,
	RadioGroup,
	Select,
	Slider,
	Switch,
	Tabs,
	Text,
	Toast,
	Toggle,
	ToggleGroup,
	Toolbar,
	Tooltip
} from "../components";
import { tw } from "../utils";
import type { NextPage } from "next";

const FullSpan = tw.div`col-span-3`;

const TwoSpan = tw.div`col-span-3 md:col-span-2`;

const OneSpan = tw.div`col-span-3 sm:col-span-2 lg:col-span-1`;

const Components: NextPage = () => {
	return (
		<PageWrapper>
			<Navigation />

			<OuterColumn>
				<InnerColumn width="third">
					<div className="grid grid-cols-3 gap-6 grid-flow-row-dense">
						<FullSpan>
							<Heading size="xxl" className="relative text-center mb-4 md:mb-8 mt-2 md:mt-4">
								Components
							</Heading>
							<Text>
								Checkout our collection of fully styled radix components ported from
								tailwindcss-radix
							</Text>
						</FullSpan>

						<OneSpan>
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
						</OneSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Toggle
							</Heading>
							<Toggle />
						</OneSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Dropdown
							</Heading>
							<Dropdown />
						</OneSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Toast
							</Heading>
							<Toast />
						</OneSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Dialog
							</Heading>
							<Dialog />
						</OneSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Alert Dialog
							</Heading>
							<AlertDialog />
						</OneSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Popover
							</Heading>
							<Popover />
						</OneSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Tooltip
							</Heading>
							<Tooltip />
						</OneSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Hover Card
							</Heading>
							<HoverCard side="right" />
						</OneSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Radio Group
							</Heading>
							<RadioGroup />
						</OneSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Toggle Group
							</Heading>
							<ToggleGroup />
						</OneSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Switch
							</Heading>
							<Switch />
						</OneSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Avatar
							</Heading>
							<div className="grid grid-cols-4 gap-2">
								<Avatar variant={Avatar.variant.Rounded} />
								<Avatar variant={Avatar.variant.Rounded} isOnline />
								<Avatar variant={Avatar.variant.Rounded} renderInvalidUrls />
							</div>
						</OneSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Context Menu
							</Heading>
							<ContextMenu />
						</OneSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Slider
							</Heading>
							<Slider />
						</OneSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Collapsible
							</Heading>
							<Collapsible />
						</OneSpan>

						<TwoSpan>
							<Heading size="sm" className="mb-2">
								Aspect Ratio
							</Heading>
							<AspectRatio />
						</TwoSpan>

						<OneSpan>
							<Heading size="sm" className="mb-2">
								Checkbox
							</Heading>
							<Checkbox />
						</OneSpan>

						<TwoSpan>
							<Heading size="sm" className="mb-2">
								Progress
							</Heading>
							<Progress />
						</TwoSpan>

						<FullSpan>
							<Heading size="sm" className="mb-2">
								Toolbar
							</Heading>
							<Toolbar />
						</FullSpan>

						<FullSpan>
							<Heading size="sm" className="mb-2">
								Tabs
							</Heading>
							<Tabs />
						</FullSpan>

						<FullSpan>
							<Heading size="sm" className="mb-2">
								Accordian
							</Heading>
							<Accordion />
						</FullSpan>
					</div>
				</InnerColumn>
			</OuterColumn>
		</PageWrapper>
	);
};

export default Components;
