import { Avatar } from "../Avatar";

const getRandomInitials = () => {
	return Math.random()
		.toString(36)
		.replace(/[^a-z]+/g, "")
		.substring(0, 2)
		.toUpperCase();
};

let users = [
	"https://images.unsplash.com/photo-1573607217032-18299406d100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
	"https://images.unsplash.com/photo-1594089426440-ab4513b4d0d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
	"https://images.unsplash.com/photo-1549237511-6b64e006ce65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
	"https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
];

export const AvatarExample = () => {
	return (
		<div className="grid grid-cols-4 gap-2">
			{users.map((user) => {
				return <Avatar alt="Avatar" src={user} initials={getRandomInitials()} online />;
			})}
			{users.map((user) => {
				return (
					<Avatar
						variant={Avatar.variant.Circle}
						alt="Avatar"
						src={user}
						initials={getRandomInitials()}
					/>
				);
			})}
		</div>
	);
};
