import { tw } from "../utils/tw";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

export const OuterColumn = tw.div`w-full max-w-[1380px] m-auto px-5`;

const innerColumnStyles = cva("w-full m-auto px-5 md:px-8 lg:px-16", {
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
	children?: React.ReactNode;
	className?: string;
}

export const InnerColumn: React.FC<InnerColumnProps> = (props) => {
	const { children, className } = props;

	return <div className={clsx(innerColumnStyles(props), className)}>{children}</div>;
};

interface PageWrapperProps {
	children?: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = (props) => {
	const { children } = props;

	return (
		<div className="mt-[70px]">
			{children}
			<div className="fixed top-0 bottom-0 left-0 h-full w-full -z-10">
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

export const Section = tw.section`py-12`;
