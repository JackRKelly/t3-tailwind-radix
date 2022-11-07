import * as AvatarPrimitive from "@radix-ui/react-avatar";
import cx from "clsx";
import { tw } from "../../utils/tw";

export enum Variant {
	Circle,
	Rounded
}

const _Root = tw(AvatarPrimitive.Root)`relative inline-flex h-10 w-10`;

const _Image = tw(AvatarPrimitive.Image)`h-full w-full object-cover`;

const _OnlineBubble = tw.span`block h-2.5 w-2.5 rounded-full bg-green-400`;

const _OnlineBubbleWrapper = tw.div`absolute bottom-0 right-0 h-2 w-2`;

const _Initials = tw.span`text-sm font-medium uppercase text-primitive-type transition-colors`;

const _Fallback = tw(
	AvatarPrimitive.Fallback
)`flex h-full w-full items-center justify-center bg-primitive transition-colors`;

interface RootProps extends AvatarPrimitive.AvatarImageProps {
	variant?: Variant;
	renderInvalidUrls?: boolean;
	online?: boolean;
	initials?: `${string}${string}`;
	delayMs?: number;
}

const Root = (props: RootProps) => {
	const { variant = Variant.Rounded, online, initials, src, alt, delayMs = 600 } = props;

	return (
		<_Root>
			<_Image
				{...{ src, alt }}
				className={cx(
					{
						[Variant.Circle]: "rounded-full",
						[Variant.Rounded]: "rounded"
					}[variant]
				)}
			/>
			{online && (
				<_OnlineBubbleWrapper
					className={cx(
						{
							[Variant.Circle]: "-translate-x-1/2 -translate-y-1/2",
							[Variant.Rounded]: ""
						}[variant]
					)}
				>
					<_OnlineBubble />
				</_OnlineBubbleWrapper>
			)}
			<_Fallback
				className={cx(
					{
						[Variant.Circle]: "rounded-full",
						[Variant.Rounded]: "rounded"
					}[variant]
				)}
				delayMs={delayMs}
			>
				<_Initials>{initials}</_Initials>
			</_Fallback>
		</_Root>
	);
};

Root.variant = Variant;
export { Root };
