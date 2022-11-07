import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import _NextLink from "next/link";
import { PropsWithChildren } from "react";
import { tw } from "../../utils/tw";

const _Root = tw(NavigationMenuPrimitive.Root)`relative`;

const _List = tw(
	NavigationMenuPrimitive.List
)`border border-primitive-edge flex flex-row space-x-2 rounded-lg bg-primitive-faint p-2 backdrop-blur bg-opacity-[85%]`;

const _Viewport = tw(
	NavigationMenuPrimitive.Viewport
)`relative mt-2 overflow-hidden rounded-md bg-primitive-faint border border-primitive-edge w-radix-navigation-menu-viewport h-radix-navigation-menu-viewport origin-[top_center] transition-[width_height] duration-300 ease-[ease] radix-state-open:animate-scale-in-content radix-state-closed:animate-scale-out-content`;

const _ViewportPerspective = tw.div`absolute flex justify-center left-[-20%] top-[100%] w-[140%]`;

const _Indicator = tw(
	NavigationMenuPrimitive.Indicator
)`z-10 top-[100%] flex h-2 items-end justify-center overflow-hidden transition-[width_transform] duration-[250ms] ease-[ease] radix-state-visible:animate-fade-in radix-state-hidden:animate-fade-out`;

const _IndicatorInner = tw.div`relative top-1 h-2 w-2 rotate-45 bg-primitive-edge-faint`;

export const Trigger = tw(
	NavigationMenuPrimitive.Trigger
)`rounded-md px-3 py-2 hover:bg-primitive text-sm font-medium text-primitive-type focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-link`;

export const Content = tw(
	NavigationMenuPrimitive.Content
)`absolute top-0 left-0 w-auto bg-primitive-faint rounded-lg radix-motion-from-start:animate-enter-from-left radix-motion-from-end:animate-enter-from-right radix-motion-to-start:animate-exit-to-left radix-motion-to-end:animate-exit-to-right`;

export const NextLink = tw(
	_NextLink
)`cursor-pointer rounded-md px-3 py-2 hover:bg-primitive text-sm font-medium text-primitive-type focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-link block`;

export const Link = tw(
	NavigationMenuPrimitive.Link
)`cursor-pointer rounded-md px-3 py-2 hover:bg-primitive text-sm font-medium text-primitive-type focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-link block`;

interface ItemProps extends PropsWithChildren, NavigationMenuPrimitive.NavigationMenuItemProps {}

export const Item = (props: ItemProps) => {
	const { children, ...rest } = props;

	return <NavigationMenuPrimitive.Item {...rest}>{children}</NavigationMenuPrimitive.Item>;
};

interface RootProps extends PropsWithChildren {
	className?: string;
}

export const Root = (props: RootProps) => {
	const { children, className } = props;

	return (
		<_Root className={className}>
			<_List>
				{children}

				<_Indicator>
					<_IndicatorInner />
				</_Indicator>
			</_List>
			<_ViewportPerspective
				style={{
					perspective: "2000px"
				}}
			>
				<_Viewport />
			</_ViewportPerspective>
		</_Root>
	);
};
