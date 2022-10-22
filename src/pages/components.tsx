import Accordion from "../components/Accordian";
import Dropdown from "../components/Dropdown";
import { Heading } from "../components/Heading";
import { Image } from "../components/Image";
import { InnerColumn, OuterColumn, PageWrapper, Section } from "../components/Layout";
import { Navigation } from "../components/Navigation";
import Select from "../components/Select";
import Switch from "../components/Switch";
import { Text } from "../components/Text";
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
						<Heading size="xl" className="relative !text-white text-center">
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
									Dropdown
								</Heading>
								<Select
									ariaLabel="Fruit"
									options={[
										{ value: "grapes", textValue: "Grapes", disabled: true },
										{ value: "apples", textValue: "Apples", disabled: true },
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
						</div>
					</InnerColumn>
				</Section>
			</OuterColumn>
		</PageWrapper>
	);
};

export default Components;
