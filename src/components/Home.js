import Image from "next/image";
import Topbar from "./Topbar";
import me from "@/assets/images/homeMe-2.jpg";

export default function HomePage() {
	return (
		<div className="homepage">
			<main>
				<Topbar></Topbar>
				<div className="homeTextcontent">
					<h1 className="homeTitle">Hi there, I'm</h1>
					<h1 className="homeTitle">Raiyan Abrar,</h1>
					<p className="homeDescription">
						A passionate Developer, Designer, and Art & Tech Enthusiast.
					</p>
					<p className="homeDescription">
						Currently working as a Software Engineer at{" "}
						<span className="homeDescriptionWorkplace">Enosis Solutions</span>
					</p>
				</div>
			</main>
			<HomeAbout></HomeAbout>
		</div>
	);
}

function HomeAbout() {
	const dateOfBirth = new Date(1998, 7, 23);
	const currentDate = new Date();
	const age = Math.abs(
		Math.floor(
			(currentDate.getTime() - dateOfBirth.getTime()) /
				(1000 * 3600 * 24 * 365.25)
		)
	);

	return (
		<div className="homeAbout">
			<h1 className="homeExtraTitle">About me</h1>
			<div className="homeAboutContent">
				<div>
					<p className="homeExtraDescription">
						A {age}y old Software Engineer with love for <br></br> nature and
						creativity.
					</p>
					<p className="homeExtraDescription">
						Graduated in 2023 with a Computer Science major.
					</p>
					<p className="homeExtraDescription">
						Currently working as a Software Engineer.
					</p>
				</div>
				<div className="homeAboutPic">
					<Image src={me} alt="" />
				</div>
			</div>
		</div>
	);
}
