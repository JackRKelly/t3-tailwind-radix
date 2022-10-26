import { tw } from "../../utils/tw";
import { Button } from "../Button";
import * as Dialog from "../Dialog";
import { Input } from "../Input";
import { Label } from "../Label";
import type { NextPage } from "next";

const ActionWrapper = tw.div`mt-4 flex justify-end space-x-2`;

const Form = tw.form`mt-3 space-y-2`;

export const DialogExample = () => (
	<Dialog.Root trigger={<Button>Dialog</Button>}>
		<Dialog.Title>Title</Dialog.Title>
		<Dialog.Description>This is a dialog</Dialog.Description>

		<Form>
			<fieldset>
				<Label htmlFor="firstName">First Name</Label>
				<Input id="firstName" type="text" placeholder="Tim" autoComplete="given-name" />
			</fieldset>
			<fieldset>
				<Label htmlFor="familyName">Family Name</Label>
				<Input id="familyName" type="text" placeholder="Cook" autoComplete="family-name" />
			</fieldset>
		</Form>

		<ActionWrapper>
			<Dialog.Cancel>Cancel</Dialog.Cancel>
			<Dialog.Action>Action</Dialog.Action>
		</ActionWrapper>
	</Dialog.Root>
);
