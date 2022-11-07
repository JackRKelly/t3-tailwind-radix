import type { NextPage } from "next";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/primitives/Button";
import { Heading } from "../components/primitives/Heading";
import { Image } from "../components/primitives/Image";
import { InnerColumn, OuterColumn, PageWrapper, Section } from "../components/primitives/Layout";
import { Text } from "../components/primitives/Text";
import { tw } from "../utils/tw";

const Link = tw.a`text-primary-bold font-semibold`;

const Home: NextPage = () => {
	return (
		<PageWrapper>
			<Navigation />

			<OuterColumn>
				<div className="relative w-full overflow-hidden rounded-xl bg-primary-faint">
					<div className="opacity-60 absolute left-0 bottom-0 top-0">
						<Image
							src="/static/bg_curve.png"
							alt="bg doce"
							width={3176}
							priority={false}
							height={1880}
							placeholder="empty"
							className="delay-[2s] duration-[3s]"
						/>
					</div>

					<div className="absolute top-1/4 left-[-7%] -translate-y-1/2 transform">
						<Image
							src="/static/gradient_two.png"
							width={1250}
							height={1250}
							alt="gradient"
							placeholder="empty"
							className="delay-300 duration-1000"
						/>
					</div>

					<InnerColumn className="py-10 md:py-20 lg:py-40">
						<Heading className="relative !text-white text-center" size="xxl" weight="semibold">
							The future of <br />
							user interface
						</Heading>
					</InnerColumn>
				</div>

				<Section>
					<InnerColumn width="third">
						<Text>
							When starting a new project you may spend weeks creating the foundation of your
							app/design system.{" "}
							<Link href="https://create.t3.gg/" target="_blank" rel="noopener noreferrer">
								T3 Stack
							</Link>
							,{" "}
							<Link href="https://www.radix-ui.com/" target="_blank" rel="noopener noreferrer">
								Radix
							</Link>
							,{" "}
							<Link
								href="https://github.com/ecklf/tailwindcss-radix"
								target="_blank"
								rel="noopener noreferrer"
							>
								TailwindCSS-Radix
							</Link>{" "}
							all help to reduce this time but there is still a lot of work to do. This template
							provides a strong starting point with highly configurable components and a design
							system that is highly customizable.
						</Text>
						<Button type="anchor" href="https://github.com" target="_blank">
							Test Native
						</Button>

						<Button type="next-link" href="/components">
							Test Next
						</Button>

						<Button>Test Button</Button>
					</InnerColumn>
				</Section>
			</OuterColumn>
		</PageWrapper>
	);
};

export default Home;
