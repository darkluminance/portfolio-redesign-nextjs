import HomePage from "@/components/Home";
import Page from "@/components/page";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Raiyan Abrar's Portfolio</title>
			</Head>
			<Page>
				<HomePage></HomePage>
			</Page>
		</>
	);
}
