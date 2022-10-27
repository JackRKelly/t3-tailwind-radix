import { useState } from "react";
import { tw } from "../../../utils/tw";
import { Button } from "../Button";
import * as Toast from "../Toast";

const FlexWrapper = tw.div`flex`;

const ActionListWrapper = tw.div`flex flex-col px-3 py-2 space-y-2`;

const TextWrapper = tw.div`w-0 flex-1 flex items-center pl-5 py-4`;

const TextWrapperInner = tw.div`w-full radix`;

const ActionWrapper = tw.div`h-0 flex-1 flex`;

export const ToastExample = () => {
	const [open, setOpen] = useState(false);

	return (
		<Toast.Provider>
			<Button
				onClick={() => {
					setOpen(true);
				}}
			>
				Toast
			</Button>
			<Toast.Root open={open} onOpenChange={setOpen}>
				<FlexWrapper>
					<TextWrapper>
						<TextWrapperInner>
							<Toast.Title>Pull Request Review</Toast.Title>
							<Toast.Description>
								Someone requested your review on{" "}
								<span className="font-medium">repository/branch</span>
							</Toast.Description>
						</TextWrapperInner>
					</TextWrapper>
					<FlexWrapper>
						<ActionListWrapper>
							<ActionWrapper>
								<Toast.Action
									altText="view now"
									onClick={(e) => {
										e.preventDefault();
										window.open("https://github.com");
									}}
								>
									Review
								</Toast.Action>
							</ActionWrapper>
							<ActionWrapper>
								<Toast.Close>Dismiss</Toast.Close>
							</ActionWrapper>
						</ActionListWrapper>
					</FlexWrapper>
				</FlexWrapper>
			</Toast.Root>
		</Toast.Provider>
	);
};
