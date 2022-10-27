import * as TabsPrimitive from "@radix-ui/react-tabs";
import { PropsWithChildren } from "react";
import { tw } from "../../utils/tw";

const _Root = tw(TabsPrimitive.Root)`border border-primitive-edge rounded-lg w-full max-w-xl`;

const _List = tw(TabsPrimitive.List)`flex w-full rounded-t-lg bg-primitive-faint`;

const _Trigger = tw(
	TabsPrimitive.Trigger
)`group first:rounded-tl-lg last:rounded-tr-lg border-b first:border-r last:border-l border-primitive-edge radix-state-active:bg-primitive-bold focus-visible:radix-state-active:border-b-transparent radix-state-inactive:hover:bg-primitive radix-state-inactive:bg-primitive-faint flex-1 px-3 py-2.5 focus:outline-none focus-visible:ring focus-visible:ring-highlight focus:z-10 focus-visible:border-transparent transition-button`;

const TriggerInner = tw.span`text-sm font-medium text-primitive-type`;

const _Content = tw(
	TabsPrimitive.Content
)`relative rounded-b-lg bg-primitive-faint px-6 py-4 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-colors`;

const _ContentInner = tw.span`text-sm text-primitive-type transition-colors`;

interface ContentProps extends PropsWithChildren, Pick<TabsPrimitive.TabsTriggerProps, "value"> {}

export const Content = (props: ContentProps) => {
	const { children, value } = props;

	return (
		<_Content {...{ value }}>
			<_ContentInner>{children}</_ContentInner>
		</_Content>
	);
};

interface TriggerProps extends PropsWithChildren, Pick<TabsPrimitive.TabsTriggerProps, "value"> {}

export const Trigger = (props: TriggerProps) => {
	const { children, value } = props;

	return (
		<_Trigger {...{ value }}>
			<TriggerInner>{children}</TriggerInner>
		</_Trigger>
	);
};

interface ListProps extends PropsWithChildren {}

export const List = (props: ListProps) => {
	const { children } = props;

	return <_List>{children}</_List>;
};

interface RootProps
	extends PropsWithChildren,
		Pick<TabsPrimitive.TabsProps, "onValueChange" | "value" | "defaultValue"> {}

export const Root = (props: RootProps) => {
	const { children, defaultValue, onValueChange, value } = props;

	return <_Root {...{ defaultValue, onValueChange, value }}>{children}</_Root>;
};
