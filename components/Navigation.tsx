import { tw } from "../utils/tw";
import * as NavigationPrimitive from "./primitives/Navigation";

const CardTitle = tw.span`block text-sm font-bold text-primitive-type`;

const CardBody = tw.span`block mt-1 text-sm text-primitive-type-faint`;

const LinkList = tw.div`flex w-full flex-col space-y-2`;

const LinkListContainer = tw.div`w-[16rem] p-3 lg:w-[18rem]`;

const Skeleton = tw.div`h-12 w-full rounded-md bg-primitive-faint`;

const SkeletonList = tw.div`col-span-4 flex w-full flex-col space-y-3 rounded-md bg-primitive p-4`;

const SkeletonColumn = tw.div`col-span-2 w-full rounded-md bg-primitive p-4`;

const SkeletonGrid = tw.div`grid grid-cols-6 gap-4`;

const SkeletonGridWrapper = tw.div`w-[21rem] p-3 lg:w-[23rem]`;

export const Navigation = () => {
	return (
		<NavigationPrimitive.Root>
			<NavigationPrimitive.Item>
				<NavigationPrimitive.NextLink href="/">Home</NavigationPrimitive.NextLink>
			</NavigationPrimitive.Item>
			<NavigationPrimitive.Item>
				<NavigationPrimitive.NextLink href="/components">Components</NavigationPrimitive.NextLink>
			</NavigationPrimitive.Item>
			<NavigationPrimitive.Item>
				<NavigationPrimitive.Trigger>Resources</NavigationPrimitive.Trigger>
				<NavigationPrimitive.Content>
					<LinkListContainer>
						<LinkList>
							<NavigationPrimitive.Link href="https://tailwindcss.com">
								<CardTitle>Tailwind CSS</CardTitle>
								<CardBody>
									A utility-first CSS framework for rapidly building custom user interfaces.
								</CardBody>
							</NavigationPrimitive.Link>
							<NavigationPrimitive.Link href="https://www.radix-ui.com">
								<CardTitle>Radix UI</CardTitle>
								<CardBody>
									An open-source UI component library for building high-quality, accessible design
									systems and web apps.
								</CardBody>
							</NavigationPrimitive.Link>
						</LinkList>
					</LinkListContainer>
				</NavigationPrimitive.Content>
			</NavigationPrimitive.Item>
			<NavigationPrimitive.Item>
				<NavigationPrimitive.Trigger>Overview</NavigationPrimitive.Trigger>
				<NavigationPrimitive.Content>
					<SkeletonGridWrapper>
						<SkeletonGrid>
							<SkeletonColumn />
							<SkeletonList>
								<Skeleton />
								<Skeleton />
								<Skeleton />
								<Skeleton />
							</SkeletonList>
						</SkeletonGrid>
					</SkeletonGridWrapper>
				</NavigationPrimitive.Content>
			</NavigationPrimitive.Item>
		</NavigationPrimitive.Root>
	);
};
