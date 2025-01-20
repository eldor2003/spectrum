import Head from "next/head";
import MainPage from "./MainPage";
import { Helmet } from "react-helmet";
export default function Home() {
	return (
		<>
			<Head>
				<meta charset='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap'
					rel='stylesheet'
				/>
				<title>Spectrum project</title>
			</Head>
			<MainPage />
		</>
	);
}
