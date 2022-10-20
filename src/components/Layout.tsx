import tw from "twin.macro";

export const OuterColumn = tw.div`w-full max-w-[1380px] m-auto px-5`;

export const InnerColumn: React.FC<{
	halfWidth?: boolean;
	children?: React.ReactNode;
	className?: string;
}> = ({ halfWidth = false, children, className }) => (
	<div
		css={[
			tw`w-full m-auto px-5 md:px-8 lg:px-16`,
			halfWidth ? tw`max-w-[720px]` : tw`max-w-[1080px]`
		]}
		className={className}
	>
		{children}
	</div>
);

export const PageWrapper = tw.div`pt-[70px]`;

export const Section = tw.section`py-12`;
