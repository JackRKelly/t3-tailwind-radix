import { tw } from "../utils/tw";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { PropsWithChildren } from "react";

export const OuterColumn = tw.div`w-full max-w-[1380px] m-auto px-3 md:px-6 lg:px-9`;

const innerColumnStyles = cva("w-full m-auto px-2", {
	variants: {
		width: {
			full: "max-w-[1150px]",
			third: "max-w-[950px]",
			half: "max-w-[720px]",
			quarter: "max-w-[560px]"
		}
	},
	defaultVariants: {
		width: "full"
	}
});

interface InnerColumnProps extends VariantProps<typeof innerColumnStyles> {
	className?: string;
}

export const InnerColumn = (props: PropsWithChildren<InnerColumnProps>) => {
	const { children, className } = props;

	return <div className={clsx(innerColumnStyles(props), className)}>{children}</div>;
};

export const PageWrapper = (props: PropsWithChildren) => {
	const { children } = props;

	return (
		<div className="py-[70px] relative">
			{children}
			<div className="absolute top-0 bottom-0 left-0 right-0 -z-10">
				<svg className="w-full h-full opacity-5">
					<defs>
						<pattern
							id="grid"
							x="0"
							y="0"
							width="32"
							height="32"
							patternUnits="userSpaceOnUse"
							className="fill-none stroke-primitive-edge-bold"
						>
							<path d="M0 .5H31.5V32" />
						</pattern>
					</defs>

					<rect x="0" y="0" className="w-full h-full" fill="url(#grid)"></rect>
				</svg>
			</div>
		</div>
	);
};

export const Section = tw.section`py-4 md:py-8 lg:py-12`;

export const Grid = {
	FullSpanNoBackground: tw.div`col-span-12`,
	FullSpan: tw.div`col-span-12 bg-app flex flex-col border-primitive-edge-faint border items-center justify-center`,
	OneSpan: tw.div`col-span-12 md:col-span-6 lg:col-span-4 bg-app flex flex-col border-primitive-edge-faint border items-center justify-start`,
	Wrapper: tw.div`grid grid-cols-12 gap-6 grid-flow-row-dense`
};
