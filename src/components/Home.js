import Topbar from "./Topbar";

export default function HomePage() {
	return (
		<div className="homepage">
			<main>
				<Topbar></Topbar>
				<div className="homeTextcontent">
					<h1 className="homeTitle">I’m Raiyan Abrar,</h1>
					<p className="homeDescription">
						A Designer and Developer from Dhaka, Bangladesh.
					</p>
				</div>
			</main>
		</div>
	);
}
