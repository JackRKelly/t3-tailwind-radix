import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html className="bg-app text-type">
			<Head>
				<meta name="theme-color" content="#111827" />
				<script src="/static/theme.js" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
