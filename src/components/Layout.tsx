import { tw } from "../utils/tw";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

export const OuterColumn = tw.div`w-full max-w-[1380px] m-auto px-5`;

const innerColumnStyles = cva("w-full m-auto px-5 md:px-8 lg:px-16", {
	variants: {
		width: {
			full: "max-w-[1080px]",
			third: "max-w-[900px]",
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

export const PageWrapper = tw.div`pt-[70px]`;

export const Section = tw.section`py-12`;
