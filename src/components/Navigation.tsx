import { tw } from "../utils/tw";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import NextLink from "next/link";
import React from "react";

const Trigger = tw(
	NavigationMenuPrimitive.Trigger
)`rounded-md px-3 py-2 hover:bg-navigation-faint text-sm font-medium text-navigation-type focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75`;

const Content = tw(
	NavigationMenuPrimitive.Content
)`absolute top-0 left-0 w-auto bg-navigation rounded-lg radix-motion-from-start:animate-enter-from-left radix-motion-from-end:animate-enter-from-right radix-motion-to-start:animate-exit-to-left radix-motion-to-end:animate-exit-to-right`;

const Root = tw(NavigationMenuPrimitive.Root)`relative`;

const List = tw(NavigationMenuPrimitive.List)`flex flex-row space-x-2 rounded-lg bg-navigation p-2`;

const Viewport = tw(
	NavigationMenuPrimitive.Viewport
)`relative mt-2 overflow-hidden rounded-md bg-navigation shadow-lg w-radix-navigation-menu-viewport h-radix-navigation-menu-viewport origin-[top_center] transition-[width_height] duration-300 ease-[ease] radix-state-open:animate-scale-in-content radix-state-closed:animate-scale-out-content`;

const Indicator = tw(
	NavigationMenuPrimitive.Indicator
)`z-10 top-[100%] flex h-2 items-end justify-center overflow-hidden transition-[width_transform] duration-[250ms] ease-[ease]`;

const IndicatorInner = tw.div`relative top-1 h-2 w-2 rotate-45 bg-navigation`;

const Link = tw(
	NavigationMenuPrimitive.Link
)`cursor-pointer rounded-md px-3 py-2 hover:bg-navigation-faint text-sm font-medium text-navigation-type`;

const Skeleton = tw.div`h-12 w-full rounded-md bg-navigation-faint dark:bg-gray-700`;

const SkeletonWrapper = tw.div`col-span-4 flex w-full flex-col space-y-3 rounded-md bg-navigation p-4`;

const SkeletonColumn = tw.div`col-span-2 w-full rounded-md bg-navigation-faint p-4`;

const NavigationWrapper = tw.div`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-full flex items-center justify-center`;

const SubText = tw.span`absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-lg text-xs p-1 font-bold text-[#F68E9D]`;

const CardTitle = tw.span`block text-sm font-bold text-navigation-type`;

const CardBody = tw.span`block mt-1 text-sm text-navigation-type`;

export const Navigation = () => {
	return (
		<NavigationWrapper>
			<Root>
				<List>
					<NavigationMenuPrimitive.Item asChild>
						<NextLink href="/">
							<Link className="relative" href="/">
								Home
							</Link>
						</NextLink>
					</NavigationMenuPrimitive.Item>

					<NavigationMenuPrimitive.Item>
						<Trigger>Overview</Trigger>
						<Content>
							<div className="w-[21rem] p-3 lg:w-[23rem]">
								<div className="grid grid-cols-6 gap-4">
									<SkeletonColumn />
									<SkeletonWrapper>
										<Skeleton />
										<Skeleton />
										<Skeleton />
										<Skeleton />
									</SkeletonWrapper>
								</div>
							</div>
						</Content>
					</NavigationMenuPrimitive.Item>

					<NavigationMenuPrimitive.Item>
						<Trigger>Resources</Trigger>
						<Content>
							<div className="w-[16rem] p-3 lg:w-[18rem]">
								<div className="flex w-full flex-col space-y-2">
									<Link href="https://tailwindcss.com">
										<CardTitle>Tailwind CSS</CardTitle>
										<CardBody>
											A utility-first CSS framework for rapidly building custom user interfaces.
										</CardBody>
									</Link>
									<Link href="https://www.radix-ui.com">
										<CardTitle>Radix UI</CardTitle>
										<CardBody>
											An open-source UI component library for building high-quality, accessible
											design systems and web apps.
										</CardBody>
									</Link>
								</div>
							</div>
						</Content>
					</NavigationMenuPrimitive.Item>

					<NavigationMenuPrimitive.Item asChild>
						<NextLink href="/careers">
							<Link className="relative" href="/careers">
								Careers
								<SubText>3</SubText>
							</Link>
						</NextLink>
					</NavigationMenuPrimitive.Item>
					<Indicator>
						<IndicatorInner />
					</Indicator>
				</List>
				<div
					className="absolute flex justify-center left-[-20%] top-[100%] w-[140%]"
					style={{
						perspective: "2000px"
					}}
				>
					<Viewport />
				</div>
			</Root>
		</NavigationWrapper>
	);
};
