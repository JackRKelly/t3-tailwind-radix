/* eslint-disable @next/next/no-sync-scripts */
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<meta name="theme-color" content="#111827" />
				</Head>
				<body className="bg-app">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
