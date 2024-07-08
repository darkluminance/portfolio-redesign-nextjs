import Image from "next/image";
import Topbar from "./Topbar";
import me from "@/assets/images/homeMe-2.jpg";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="homepage">
			<main>
				<Topbar></Topbar>
				<div className="homeTextcontent">
					<h1 className="homeTitle">Hi there, I'm</h1>
					<h1 className="homeTitle">Raiyan Abrar,</h1>
					<p className="homeDescription">
						A passionate Developer, Designer, and Art Enthusiast.
					</p>
					<p className="homeDescription">
						Currently working as a Software Engineer at{" "}
						<span className="homeDescriptionWorkplace">Enosis Solutions</span>
					</p>
				</div>
			</main>
			<HomeAbout></HomeAbout>
			<HomeWorkSkills></HomeWorkSkills>
			<HomeInterests></HomeInterests>
			{/* <FeaturedWorks></FeaturedWorks> */}
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
		<div className="homeAbout homeContent">
			<h1 className="homeExtraTitle">About me</h1>
			<div className="homeAboutContent homeExtraContent">
				<div className="homeAboutDescriptions">
					<p className="homeExtraDescription">
						A {age}y old Software Engineer with love for nature and creativity.
					</p>
					<p className="homeExtraDescription">
						Graduated in 2023 with a Computer Science major.
					</p>
					<p className="homeExtraDescription">
						Currently working as a Software Engineer.
					</p>
					<br></br>
					<Link
						href="/about"
						className="text-link italic"
						style={{
							textDecoration: "underline",
							display: "inline-block",
						}}
					>
						<p className="homeExtraDescription">Learn more</p>
					</Link>
				</div>
				<div className="homeAboutPic">
					<Image src={me} alt="" />
				</div>
			</div>
		</div>
	);
}

function HomeWorkSkills() {
	return (
		<div className="homeContent">
			<h1 className="homeExtraTitle">What I can do</h1>
			<div className="homeWorkSkillsContent homeExtraContent">
				<ul>
					<li>Web Development</li>
					<li>Game Development</li>
					<li>App Development</li>
					<li>UI/UX Design</li>
					<li>Digital Art</li>
				</ul>
			</div>
		</div>
	);
}

function HomeInterests() {
	return (
		<div className="homeContent">
			<h1 className="homeExtraTitle">What I love to do</h1>
			<div className="homeInterestsContent homeExtraContent">
				<ul>
					<li>Travelling</li>
					<li>Photography</li>
					<li>Cinematic Filmmaking</li>
					<li>Anime</li>
					<li>Coding</li>
					<li>Making new things</li>
				</ul>
			</div>
		</div>
	);
}

function FeaturedWorks() {
	return (
		<div className="homeContent">
			<h1 className="homeExtraTitle">Featured Works</h1>
			<div className="homeFeaturedWorksContent homeExtraContent">
				<div>Featured Work 1</div>
				<div>Featured Work 2</div>
				<div>Featured Work 3</div>
			</div>
		</div>
	);
}
