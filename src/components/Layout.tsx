import { tw } from "../utils/tw";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

export const OuterColumn = tw.div`w-full max-w-[1380px] m-auto px-5`;

const innerColumnStyles = cva("w-full m-auto px-5 md:px-8 lg:px-16", {
	variants: {
		halfWidth: {
			true: "max-w-[720px]",
			false: "max-w-[1080px]"
		}
	},
	defaultVariants: {
		halfWidth: false
	}
});

interface InnerColumnProps extends VariantProps<typeof innerColumnStyles> {
	halfWidth?: boolean;
	children?: React.ReactNode;
	className?: string;
}

export const InnerColumn: React.FC<InnerColumnProps> = (props) => {
	const { children, className } = props;

	return <div className={clsx(innerColumnStyles(props), className)}>{children}</div>;
};

export const PageWrapper = tw.div`pt-[70px]`;

export const Section = tw.section`py-12`;
