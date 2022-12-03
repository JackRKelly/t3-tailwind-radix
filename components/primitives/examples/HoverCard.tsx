import { tw } from "../../../utils/tw";
import { Heading } from "../Heading";
import * as HoverCard from "../HoverCard";

const TailwindLogo = () => (
	<svg
		className="h-7 w-7 shrink-0"
		viewBox="0 0 99 59"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M49.388 0c-13.171 0-21.4 6.546-24.695 19.637 4.94-6.545 10.701-9 17.286-7.364 3.757.933 6.443 3.643 9.414 6.643C56.236 23.8 61.84 29.454 74.08 29.454c13.169 0 21.4-6.546 24.693-19.635-4.938 6.545-10.7 9-17.284 7.362-3.759-.933-6.445-3.642-9.416-6.64C67.23 5.65 61.627 0 49.387 0ZM24.693 29.454C11.523 29.454 3.293 36 0 49.092c4.94-6.546 10.701-9 17.284-7.365 3.759.933 6.445 3.643 9.416 6.643 4.843 4.885 10.446 10.538 22.688 10.538 13.169 0 21.4-6.544 24.693-19.635-4.94 6.546-10.702 9-17.286 7.364-3.757-.934-6.443-3.644-9.414-6.642-4.843-4.885-10.448-10.54-22.688-10.54Z"
			fill="#38BDF8"
		/>
	</svg>
);

const TriggerWrapper = tw.div`inline-flex h-12 w-12 items-center justify-center rounded-full bg-primitive-faint p-2.5 transition-colors`;

const Body = tw.p`mt-1 text-sm font-normal text-primitive-type`;

const ContentWrapper = tw.div`flex h-full w-full space-x-4 items-center`;

export const HoverCardExample = () => (
	<HoverCard.Root
		trigger={
			<TriggerWrapper className="border-primitive-edge border">
				<TailwindLogo />
			</TriggerWrapper>
		}
	>
		<ContentWrapper>
			<TriggerWrapper>
				<TailwindLogo />
			</TriggerWrapper>

			<div>
				<Heading size="xs" as="span">
					Tailwind CSS
				</Heading>
				<Body>A utility-first CSS framework for rapidly building custom user interfaces.</Body>
			</div>
		</ContentWrapper>
	</HoverCard.Root>
);
