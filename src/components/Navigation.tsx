import { tw } from "../utils/tw";
import { Switch } from "./Switch";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

const Trigger = tw(
	NavigationMenuPrimitive.Trigger
)`rounded-md px-3 py-2 hover:bg-primitive text-sm font-medium text-primitive-type focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-link`;

const Content = tw(
	NavigationMenuPrimitive.Content
)`absolute top-0 left-0 w-auto bg-primitive-faint rounded-lg radix-motion-from-start:animate-enter-from-left radix-motion-from-end:animate-enter-from-right radix-motion-to-start:animate-exit-to-left radix-motion-to-end:animate-exit-to-right`;

const Root = tw(NavigationMenuPrimitive.Root)`relative`;

const List = tw(
	NavigationMenuPrimitive.List
)`pointer-events-auto border border-primitive-edge-faint flex flex-row space-x-2 rounded-lg bg-primitive-faint p-2 backdrop-blur bg-opacity-[85%]`;

const Viewport = tw(
	NavigationMenuPrimitive.Viewport
)`relative mt-2 overflow-hidden rounded-md bg-primitive-faint border border-primitive-edge-faint w-radix-navigation-menu-viewport h-radix-navigation-menu-viewport origin-[top_center] transition-[width_height] duration-300 ease-[ease] radix-state-open:animate-scale-in-content radix-state-closed:animate-scale-out-content`;

const ViewportPerspective = tw.div`absolute flex justify-center left-[-20%] top-[100%] w-[140%]`;

const Indicator = tw(
	NavigationMenuPrimitive.Indicator
)`z-10 top-[100%] flex h-2 items-end justify-center overflow-hidden transition-[width_transform] duration-[250ms] ease-[ease]`;

const IndicatorInner = tw.div`relative top-1 h-2 w-2 rotate-45 bg-primitive-edge-faint`;

const Link = tw(
	NavigationMenuPrimitive.Link
)`cursor-pointer rounded-md px-3 py-2 hover:bg-primitive text-sm font-medium text-primitive-type focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-link`;

const Skeleton = tw.div`h-12 w-full rounded-md bg-primitive-faint`;

const SkeletonList = tw.div`col-span-4 flex w-full flex-col space-y-3 rounded-md bg-primitive p-4`;

const SkeletonColumn = tw.div`col-span-2 w-full rounded-md bg-primitive p-4`;

const SkeletonGrid = tw.div`grid grid-cols-6 gap-4`;

const SkeletonGridWrapper = tw.div`w-[21rem] p-3 lg:w-[23rem]`;

const NavigationWrapper = tw.div`pointer-events-none fixed top-2 left-1/2 -translate-x-1/2 z-20 w-full flex items-center justify-center`;

const CardTitle = tw.span`block text-sm font-bold text-primitive-type`;

const CardBody = tw.span`block mt-1 text-sm text-primitive-type-faint`;

const LinkList = tw.div`flex w-full flex-col space-y-2`;

const LinkListContainer = tw.div`w-[16rem] p-3 lg:w-[18rem]`;

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

					<NavigationMenuPrimitive.Item asChild>
						<NextLink href="/components">
							<Link href="/components">Components</Link>
						</NextLink>
					</NavigationMenuPrimitive.Item>

					<NavigationMenuPrimitive.Item asChild>
						<NavigationMenuPrimitive.Link
							className="flex items-center justify-center"
							href="https://github.com/JackRKelly/t3-tailwind-radix"
						>
							<GitHubLogoIcon className="w-6 h-6 text-primitive-type transition-colors" />
						</NavigationMenuPrimitive.Link>
					</NavigationMenuPrimitive.Item>

					<NavigationMenuPrimitive.Item>
						<Trigger>Resources</Trigger>
						<Content>
							<LinkListContainer>
								<LinkList>
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
								</LinkList>
							</LinkListContainer>
						</Content>
					</NavigationMenuPrimitive.Item>

					<NavigationMenuPrimitive.Item>
						<Trigger>Overview</Trigger>
						<Content>
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
						</Content>
					</NavigationMenuPrimitive.Item>

					<Indicator>
						<IndicatorInner />
					</Indicator>
				</List>
				<ViewportPerspective
					style={{
						perspective: "2000px"
					}}
				>
					<Viewport />
				</ViewportPerspective>
			</Root>
		</NavigationWrapper>
	);
};
