import { tw } from "../utils/tw";
import Button from "./Button";
import * as ToastPrimitive from "@radix-ui/react-toast";
import React from "react";

const Root = tw(
	ToastPrimitive.Root
)`z-50 fixed bottom-3 inset-x-4 w-auto md:top-2 md:right-2 md:left-auto md:bottom-auto md:w-full md:max-w-sm rounded-lg bg-primitive-faint border border-primitive-edge radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right radix-state-closed:animate-toast-hide radix-swipe-end:animate-toast-swipe-out translate-x-radix-toast-swipe-move-x radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease] focus:outline-none focus-visible:ring focus-visible:ring-highlight`;

const Title = tw(ToastPrimitive.Title)`text-base font-semibold text-primitive-type-bold`;

const Description = tw(ToastPrimitive.Description)`mt-1 text-sm text-primitive-type`;

const FlexWrapper = tw.div`flex`;

const ActionListWrapper = tw.div`flex flex-col px-3 py-2 space-y-2`;

const TextWrapper = tw.div`w-0 flex-1 flex items-center pl-5 py-4`;

const TextWrapperInner = tw.div`w-full radix`;

const ActionWrapper = tw.div`h-0 flex-1 flex`;

const Action = tw(
	ToastPrimitive.Action
)`w-full rounded-lg px-4 py-2 flex items-center justify-center text-sm font-medium bg-primary text-white hover:bg-primary-bold focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

const Close = tw(
	ToastPrimitive.Close
)`w-full border border-primitive-edge focus-visible:border-transparent rounded-lg px-4 py-2 flex items-center justify-center text-sm font-medium text-primitive-type hover:bg-primitive focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

const Toast = () => {
	const [open, setOpen] = React.useState(false);

	return (
		<ToastPrimitive.Provider>
			<Button
				onClick={() => {
					if (open) {
						setOpen(false);
						setTimeout(() => {
							setOpen(true);
						}, 400);
					} else {
						setOpen(true);
					}
				}}
			>
				Click
			</Button>
			<Root open={open} onOpenChange={setOpen}>
				<FlexWrapper>
					<TextWrapper>
						<TextWrapperInner>
							<Title>Pull Request Review</Title>
							<Description>
								Someone requested your review on{" "}
								<span className="font-medium">repository/branch</span>
							</Description>
						</TextWrapperInner>
					</TextWrapper>
					<FlexWrapper>
						<ActionListWrapper>
							<ActionWrapper>
								<Action
									altText="view now"
									onClick={(e) => {
										e.preventDefault();
										window.open("https://github.com");
									}}
								>
									Review
								</Action>
							</ActionWrapper>
							<ActionWrapper>
								<Close>Dismiss</Close>
							</ActionWrapper>
						</ActionListWrapper>
					</FlexWrapper>
				</FlexWrapper>
			</Root>

			<ToastPrimitive.Viewport />
		</ToastPrimitive.Provider>
	);
};

export default Toast;
