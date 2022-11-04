import { PropsWithChildren } from "react";
import { tw } from "../../utils/tw";

const _Cell = tw.td`whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-primitive-type sm:pl-6`;

const _Header = tw.thead`bg-primitive`;

const _Body = tw.tbody`divide-y divide-primary-edge`;

const _HeaderCell = tw.th`py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-primitive-type sm:pl-6`;

const _Table = tw.table`divide-y divide-primitive-edge`;

const _TabelWrapper = tw.div`overflow-x-scroll rounded-md border border-primitive-edge bg-primitive-faint`;

interface HeaderCellProps extends PropsWithChildren {
	className?: string;
}

export const HeaderCell = (props: HeaderCellProps) => {
	const { children, className } = props;

	return (
		<_HeaderCell scope="col" {...{ className }}>
			{children}
		</_HeaderCell>
	);
};

interface BodyProps extends PropsWithChildren {
	className?: string;
}

export const Body = (props: BodyProps) => {
	const { children, className } = props;

	return <_Body {...{ className }}>{children}</_Body>;
};

interface HeaderProps extends PropsWithChildren {
	className?: string;
}

export const Header = (props: HeaderProps) => {
	const { children, className } = props;

	return <_Header {...{ className }}>{children}</_Header>;
};

interface RowProps extends PropsWithChildren {
	className?: string;
}

export const Row = (props: RowProps) => {
	const { children, className } = props;

	return <tr {...{ className }}>{children}</tr>;
};

interface CellProps extends PropsWithChildren {
	className?: string;
}

export const Cell = (props: CellProps) => {
	const { children, className } = props;

	return <_Cell {...{ className }}>{children}</_Cell>;
};

interface RootProps extends PropsWithChildren {
	className?: string;
}

export const Root = (props: RootProps) => {
	const { children, className } = props;

	return (
		<_TabelWrapper>
			<_Table {...{ className }}>{children}</_Table>
		</_TabelWrapper>
	);
};
