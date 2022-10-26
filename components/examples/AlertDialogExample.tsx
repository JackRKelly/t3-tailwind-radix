import { tw } from "../../utils/tw";
import * as AlertDialog from "../AlertDialog";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";
import type { NextPage } from "next";

const ActionWrapper = tw.div`mt-4 flex justify-end space-x-2`;

export const AlertDialogExample: NextPage = () => {
	return (
		<AlertDialog.Root trigger={<Button>Alert Dialog</Button>}>
			<AlertDialog.Title>Title</AlertDialog.Title>
			<AlertDialog.Description>This is an alert dialog</AlertDialog.Description>

			<ActionWrapper>
				<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
				<AlertDialog.Action>Action</AlertDialog.Action>
			</ActionWrapper>
		</AlertDialog.Root>
	);
};
