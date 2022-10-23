import { Heading } from "../components/Heading";
import { Image } from "../components/Image";
import { InnerColumn, OuterColumn, PageWrapper, Section } from "../components/Layout";
import { Navigation } from "../components/Navigation";
import { Text } from "../components/Text";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<PageWrapper>
			<Navigation />

			<OuterColumn>
				<div className="relative w-full overflow-hidden rounded-xl bg-primary">
					<div className="opacity-60 absolute left-0 bottom-0 top-0">
						<Image
							src="/assets/bg_curve.png"
							layout="intrinsic"
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
							src="/assets/gradient_two.png"
							layout="intrinsic"
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis
							voluptatibus fugiat praesentium unde totam accusantium labore, explicabo id hic quos
							illum accusamus deleniti ut dignissimos, cupiditate exercitationem error commodi?
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem expedita
							laudantium libero eius fugiat quibusdam, beatae ipsam, dicta minus fugit rem eligendi
							doloremque! Fuga sit provident laborum dolor pariatur!
						</Text>
					</InnerColumn>
				</Section>
			</OuterColumn>
		</PageWrapper>
	);
};

export default Home;
