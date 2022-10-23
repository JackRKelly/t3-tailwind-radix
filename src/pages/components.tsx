import Accordion from "../components/Accordian";
import AlertDialog from "../components/AlertDialog";
import AspectRatio from "../components/AspectRatio";
import Avatar from "../components/Avatar";
import Checkbox from "../components/Checkbox";
import Collapsible from "../components/Collapsible";
import ContextMenu from "../components/ContextMenu";
import Dialog from "../components/Dialog";
import Dropdown from "../components/Dropdown";
import { Heading } from "../components/Heading";
import HoverCard from "../components/HoverCard";
import { Image } from "../components/Image";
import { InnerColumn, OuterColumn, PageWrapper, Section } from "../components/Layout";
import { Navigation } from "../components/Navigation";
import Popover from "../components/Popover";
import Progress from "../components/Progress";
import RadioGroup from "../components/RadioGroup";
import Select from "../components/Select";
import Slider from "../components/Slider";
import Switch from "../components/Switch";
import Tabs from "../components/Tabs";
import { Text } from "../components/Text";
import Toast from "../components/Toast";
import Toggle from "../components/Toggle";
import ToggleGroup from "../components/ToggleGroup";
import Toolbar from "../components/Toolbar";
import Tooltip from "../components/Tooltip";
import { tw } from "../utils/tw";
import type { NextPage } from "next";

const FullSpan = tw.div`col-span-4`;

const TwoSpan = tw.div`col-span-4 md:col-span-2`;

const OneSpan = tw.div`col-span-4 sm:col-span-2 lg:col-span-1`;

const Components: NextPage = () => {
	return (
		<PageWrapper>
			<Navigation />

			<OuterColumn>
				<div className="relative w-full overflow-hidden rounded-xl bg-primary-faint">
					<div className="opacity-60 absolute left-0 bottom-0 top-0">
						<Image
							src="/assets/bg_curve.png"
							layout="intrinsic"
							alt="bg curve"
							width={3176}
							height={1880}
							className="delay-[2s] duration-[3s]"
						/>
					</div>

					<div className="absolute top-1/4 left-[-7%] -translate-y-1/2 transform">
						<Image
							src="/assets/gradient_two.png"
							layout="intrinsic"
							width={1250}
							height={1250}
							alt="gradient"
							className="delay-300 duration-1000"
						/>
					</div>

					<InnerColumn className="py-6 md:py-10 lg:py-20">
						<Heading size="xxl" className="relative !text-white text-center">
							Components
						</Heading>
					</InnerColumn>
				</div>

				<Section>
					<InnerColumn width="third">
						<div className="grid grid-cols-4 gap-6 grid-flow-row-dense">
							<FullSpan>
								<Text>
									We are always looking for talented engineers to join our team. If you are
									interested, please reach out
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
									<Avatar variant={Avatar.variant.Circle} />
									<Avatar variant={Avatar.variant.Rounded} />
								</div>
							</OneSpan>

							<OneSpan>
								<Heading size="sm" className="mb-2">
									Context Menu
								</Heading>
								<ContextMenu />
							</OneSpan>

							<TwoSpan>
								<Heading size="sm" className="mb-2">
									Collapsible
								</Heading>
								<Collapsible />
							</TwoSpan>

							<TwoSpan>
								<Heading size="sm" className="mb-2">
									Slider
								</Heading>
								<Slider />
							</TwoSpan>

							<TwoSpan>
								<Heading size="sm" className="mb-2">
									Aspect Ratio
								</Heading>
								<AspectRatio />
							</TwoSpan>

							<TwoSpan>
								<Heading size="sm" className="mb-2">
									Checkbox
								</Heading>
								<Checkbox />
							</TwoSpan>

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
				</Section>
			</OuterColumn>
		</PageWrapper>
	);
};

export default Components;
