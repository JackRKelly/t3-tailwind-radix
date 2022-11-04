import * as Table from "../Table";

export const TableExample = () => {
	return (
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Name</Table.HeaderCell>
					<Table.HeaderCell>Title</Table.HeaderCell>
					<Table.HeaderCell>Email</Table.HeaderCell>
					<Table.HeaderCell>Role</Table.HeaderCell>
					<Table.HeaderCell>Status</Table.HeaderCell>
					<Table.HeaderCell>Assigned</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>Leslie Alexander</Table.Cell>
					<Table.Cell>Software Engineer</Table.Cell>
					<Table.Cell>lexie@software.com</Table.Cell>
					<Table.Cell>Admin</Table.Cell>
					<Table.Cell>Active</Table.Cell>
					<Table.Cell>Yes</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	);
};
