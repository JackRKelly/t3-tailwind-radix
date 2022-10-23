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
import type { NextPage } from "next";

const Components: NextPage = () => {
	return (
		<PageWrapper>
			<Navigation />

			<OuterColumn>
				<div className="relative w-full overflow-hidden rounded-xl bg-blue-500">
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
						<div className="flex flex-col gap-6">
							<div>
								<Text>
									We are always looking for talented engineers to join our team. If you are
									interested, please reach out
								</Text>
							</div>

							<div>
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
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Switch
								</Heading>
								<Switch />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Accordian
								</Heading>
								<Accordion />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Dropdown
								</Heading>
								<Dropdown />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Toast
								</Heading>
								<Toast />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Context Menu
								</Heading>
								<ContextMenu />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Dialog
								</Heading>
								<Dialog />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Alert Dialog
								</Heading>
								<AlertDialog />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Popover
								</Heading>
								<Popover />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Hover Card
								</Heading>
								<HoverCard side="right" />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									RadioGroup
								</Heading>
								<RadioGroup />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Collapsible
								</Heading>
								<Collapsible />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Slider
								</Heading>
								<Slider />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Toggle
								</Heading>
								<Toggle />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Toggle Group
								</Heading>
								<ToggleGroup />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Toolbar
								</Heading>
								<Toolbar />
							</div>
							<div>
								<Heading size="sm" className="mb-2">
									Tabs
								</Heading>
								<Tabs />
							</div>
							<div>
								<Heading size="sm" className="mb-2">
									Avatar
								</Heading>
								<div className="flex space-x-3 flex-wrap">
									<Avatar variant={Avatar.variant.Circle} />
									<Avatar variant={Avatar.variant.Rounded} />
								</div>
							</div>
							<div>
								<Heading size="sm" className="mb-2">
									Aspect Ratio
								</Heading>
								<AspectRatio />
							</div>
							<div>
								<Heading size="sm" className="mb-2">
									Checkbox
								</Heading>
								<Checkbox />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Progress
								</Heading>
								<Progress />
							</div>
							<div>
								<Heading size="sm" className="mb-2">
									Tooltip
								</Heading>
								<Tooltip />
							</div>
						</div>
					</InnerColumn>
				</Section>
			</OuterColumn>
		</PageWrapper>
	);
};

export default Components;
