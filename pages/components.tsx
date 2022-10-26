import { Heading } from "../components/Heading";
import { InnerColumn, OuterColumn, PageWrapper } from "../components/Layout";
import { Navigation } from "../components/Navigation";
import { Text } from "../components/Text";
import { ExampleComponents } from "../components/examples";
import type { NextPage } from "next";

const Components: NextPage = () => {
	return (
		<PageWrapper>
			<Navigation />

			<OuterColumn>
				<InnerColumn width="third">
					<Heading size="xxl" className="relative text-center mb-4 md:mb-8 mt-2 md:mt-4">
						Components
					</Heading>
					<Text className="mb-6">
						Checkout our collection of fully styled radix components ported from tailwindcss-radix
					</Text>

					<ExampleComponents />
				</InnerColumn>
			</OuterColumn>
		</PageWrapper>
	);
};

export default Components;
