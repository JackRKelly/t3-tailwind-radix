import { tw } from "../utils/tw";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import cx from "clsx";

enum Variant {
	Circle,
	Rounded
}

const Root = tw(AvatarPrimitive.Root)`relative inline-flex h-10 w-10`;

const Image = tw(AvatarPrimitive.Image)`h-full w-full object-cover`;

const OnlineBubble = tw.span`block h-2.5 w-2.5 rounded-full bg-green-400`;

const OnlineBubbleWrapper = tw.div`absolute bottom-0 right-0 h-2 w-2`;

const Initials = tw.span`text-sm font-medium uppercase text-primitive-type transition-colors`;

const Fallback = tw(
	AvatarPrimitive.Fallback
)`flex h-full w-full items-center justify-center bg-primitive transition-colors`;

interface Props extends Pick<AvatarPrimitive.AvatarImageProps, "alt" | "src"> {
	variant?: Variant;
	renderInvalidUrls?: boolean;
	online?: boolean;
	initials?: `${string}${string}`;
	fallbackDelayMs?: number;
}

const Avatar = (props: Props) => {
	const { variant = Variant.Rounded, online, initials, src, alt, fallbackDelayMs = 600 } = props;

	return (
		<Root>
			<Image
				src={src}
				alt={alt}
				className={cx(
					{
						[Variant.Circle]: "rounded-full",
						[Variant.Rounded]: "rounded"
					}[variant]
				)}
			/>
			{online && (
				<OnlineBubbleWrapper
					className={cx(
						{
							[Variant.Circle]: "-translate-x-1/2 -translate-y-1/2",
							[Variant.Rounded]: ""
						}[variant]
					)}
				>
					<OnlineBubble />
				</OnlineBubbleWrapper>
			)}
			<Fallback
				className={cx(
					{
						[Variant.Circle]: "rounded-full",
						[Variant.Rounded]: "rounded"
					}[variant]
				)}
				delayMs={fallbackDelayMs}
			>
				<Initials>{initials}</Initials>
			</Fallback>
		</Root>
	);
};

Avatar.variant = Variant;
export { Avatar };
