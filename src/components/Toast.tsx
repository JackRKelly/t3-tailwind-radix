import Button from "./Button";
import * as ToastPrimitive from "@radix-ui/react-toast";
import cx from "clsx";
import React from "react";

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
			<ToastPrimitive.Root
				open={open}
				onOpenChange={setOpen}
				className={cx(
					"z-50 fixed bottom-4 inset-x-4 w-auto md:top-4 md:right-4 md:left-auto md:bottom-auto md:w-full md:max-w-sm shadow-lg rounded-lg",
					"bg-primitive border border-primitive-edge",
					"radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right",
					"radix-state-closed:animate-toast-hide",
					"radix-swipe-end:animate-toast-swipe-out",
					"translate-x-radix-toast-swipe-move-x",
					"radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]",
					"focus:outline-none focus-visible:ring focus-visible:ring-highlight focus-visible:ring-opacity-75"
				)}
			>
				<div className="flex">
					<div className="w-0 flex-1 flex items-center pl-5 py-4">
						<div className="w-full radix">
							<ToastPrimitive.Title className="text-sm font-medium text-primitive-type-bold dark:text-gray-100">
								Pull Request Review
							</ToastPrimitive.Title>
							<ToastPrimitive.Description className="mt-1 text-sm text-primitive-type dark:text-gray-400">
								Someone requested your review on{" "}
								<span className="font-medium">repository/branch</span>
							</ToastPrimitive.Description>
						</div>
					</div>
					<div className="flex">
						<div className="flex flex-col px-3 py-2 space-y-1">
							<div className="h-0 flex-1 flex">
								<ToastPrimitive.Action
									altText="view now"
									className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-primary dark:text-primary hover:bg-primitive-faint dark:hover:bg-gray-900 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-highlight focus-visible:ring-opacity-75"
									onClick={(e) => {
										e.preventDefault();
										window.open("https://github.com");
									}}
								>
									Review
								</ToastPrimitive.Action>
							</div>
							<div className="h-0 flex-1 flex">
								<ToastPrimitive.Close className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-primitive-type dark:text-gray-100 hover:bg-primitive-faint dark:hover:bg-gray-900 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-highlight focus-visible:ring-opacity-75">
									Dismiss
								</ToastPrimitive.Close>
							</div>
						</div>
					</div>
				</div>
			</ToastPrimitive.Root>

			<ToastPrimitive.Viewport />
		</ToastPrimitive.Provider>
	);
};

export default Toast;
