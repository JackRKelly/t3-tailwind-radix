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
import type { NextPage } from "next";

const Components: NextPage = () => {
	return (
		<PageWrapper>
			<Navigation />

			<OuterColumn>
				<div className="relative w-full overflow-hidden rounded-xl bg-blue-500">
					<div className="opacity-4 60 absolute left-0 bottom-0 top-0">
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
										{ value: "grapes", textValue: "Grapes", disabled: true },
										{ value: "apples", textValue: "Apples", disabled: false },
										{ value: "oranges", textValue: "Oranges", disabled: false },
										{ value: "pears", textValue: "Pears", disabled: true }
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
									Toast (WIP)
								</Heading>
								<Toast />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Context Menu (WIP)
								</Heading>
								<ContextMenu />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Dialog (WIP)
								</Heading>
								<Dialog />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Alert Dialog (WIP)
								</Heading>
								<AlertDialog />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Popover (WIP)
								</Heading>
								<Popover />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Hover Card (WIP)
								</Heading>
								<HoverCard />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									RadioGroup (WIP)
								</Heading>
								<RadioGroup />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Collapsible (WIP)
								</Heading>
								<Collapsible />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Slider (WIP)
								</Heading>
								<Slider />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Toggle (WIP)
								</Heading>
								<Toggle />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Toggle Group (WIP)
								</Heading>
								<ToggleGroup />
							</div>

							<div>
								<Heading size="sm" className="mb-2">
									Toolbar (WIP)
								</Heading>
								<Toolbar />
							</div>
							<div>
								<Heading size="sm" className="mb-2">
									Tabs (WIP)
								</Heading>
								<Tabs />
							</div>
							<div>
								<Heading size="sm" className="mb-2">
									Avatar (WIP)
								</Heading>
								<div className="flex space-x-3 flex-wrap">
									<Avatar variant={Avatar.variant.Circle} />
									<Avatar variant={Avatar.variant.Rounded} />
								</div>
							</div>
							<div>
								<Heading size="sm" className="mb-2">
									Aspect Ratio (WIP)
								</Heading>
								<AspectRatio />
							</div>
							<div>
								<Heading size="sm" className="mb-2">
									Checkbox (WIP)
								</Heading>
								<Checkbox />
							</div>
							<div>
								<Heading size="sm" className="mb-2">
									Checkbox (WIP)
								</Heading>
								<Checkbox />
							</div>
						</div>
					</InnerColumn>
				</Section>
			</OuterColumn>
		</PageWrapper>
	);
};

export default Components;
