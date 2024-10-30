import Image from "next/image";
import Topbar from "./Topbar";
import me from "@/assets/images/homeMe-2.jpg";
import Link from "next/link";

import webdev from "@/assets/homeicons/webdev.svg";
import game from "@/assets/homeicons/game.svg";
import ui from "@/assets/homeicons/ui.svg";
import graphics from "@/assets/homeicons/graphics.svg";
import art from "@/assets/homeicons/art.svg";
import video from "@/assets/homeicons/video.svg";
import phone from "@/assets/homeicons/phone.svg";

import location from "@/assets/homeicons/location.svg";
import job from "@/assets/homeicons/job.svg";

import coding from "@/assets/homeicons/coding.png";
import travel from "@/assets/homeicons/travel.png";
import camera from "@/assets/homeicons/camera.png";
import film from "@/assets/homeicons/film.png";
import tv from "@/assets/homeicons/tv.png";
import tools from "@/assets/homeicons/tools.png";

export default function HomePage() {
	return (
		<div className="homepage">
			<main>
				<Topbar></Topbar>
				<div className="homeTextcontent">
					<h1 className="homeTitle">Hi there, I'm</h1>
					<h1 className="homeTitle">Raiyan Abrar,</h1>
					<p className="homeDescription homeTopDescription">
						A Developer, Designer, and Art Enthusiast.
					</p>
					<p className="homeDescription homeDescriptionSmall flex flex-down-ver">
						<Image src={location} />
						Dhaka, Bangladesh
					</p>
					<p className="homeDescription homeDescriptionSmall flex flex-down-ver">
						<Image src={job} />
						Software Engineer at&nbsp;
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
			<h1 className="homeExtraTitle">Who am I</h1>
			<div className="homeAboutContent homeExtraContent">
				<div className="homeAboutDescriptions">
					<p className="homeExtraDescription">
						A {age}y old with love for nature and creativity.
					</p>
					<p className="homeExtraDescription">
						Graduated in 2023 with a Computer Science major.
					</p>
					<p className="homeExtraDescription">
						Currently working as a Software Engineer.
					</p>
					<p className="homeExtraDescription">
						Mostly a fan of JS frameworks and 3D environments.
					</p>
					<br></br>
					<Link
						href="/about"
						target="__blank"
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
					<li className="flex flex-row flex-space-between flex-center-ver flex-gap-2">
						<div className="flex flex-col">
							<div className="workSkillsContentTitle">Web Development</div>
							{/* <div className="workSkillsContentDescription">
								Crafting modern and appealing websites that visitors remember
							</div> */}
						</div>
						<Image src={webdev} />
					</li>
					<li className="flex flex-row flex-space-between flex-center-ver flex-gap-2">
						<div className="flex flex-col">
							<div className="workSkillsContentTitle">Game Development</div>
							{/* <div className="workSkillsContentDescription">
								Designing and Creating interesting games out of passion
							</div> */}
						</div>
						<Image src={game} />
					</li>
					<li className="flex flex-row flex-space-between flex-center-ver flex-gap-2">
						<div className="flex flex-col">
							<div className="workSkillsContentTitle">App Development</div>
							{/* <div className="workSkillsContentDescription">
								Coding intuitive and function applications for the mobile
							</div> */}
						</div>
						<Image src={phone} />
					</li>
					<li className="flex flex-row flex-space-between flex-center-ver flex-gap-2">
						<div className="flex flex-col">
							<div className="workSkillsContentTitle">Video Editing</div>
							{/* <div className="workSkillsContentDescription">
								Bringing stories to life through cinematic and motion videos
							</div> */}
						</div>
						<Image src={video} />
					</li>
					<li className="flex flex-row flex-space-between flex-center-ver flex-gap-2">
						<div className="flex flex-col">
							<div className="workSkillsContentTitle">UI/UX Design</div>
							{/* <div className="workSkillsContentDescription">
								Developing intuitive visually appealing interfaces for the user
							</div> */}
						</div>
						<Image src={ui} />
					</li>
					<li className="flex flex-row flex-space-between flex-center-ver flex-gap-2">
						<div className="flex flex-col">
							<div className="workSkillsContentTitle">Graphics Design</div>
							{/* <div className="workSkillsContentDescription">
								Making stunning visual assets and designs
							</div> */}
						</div>
						<Image src={graphics} />
					</li>
					<li className="flex flex-row flex-space-between flex-center-ver flex-gap-2">
						<div className="flex flex-col">
							<div className="workSkillsContentTitle">Digital Art</div>
							{/* <div className="workSkillsContentDescription">
								Bringing imaginations to life through digital canvas
							</div> */}
						</div>
						<Image src={art} />
					</li>
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
					<li className="flex flex-col flex-center-hor flex-center-hor ">
						<div>
							<Image src={travel} />
						</div>
						<div className="workInterestsContentTitle">Travelling</div>
						{/* <div className="workInterestsContentDescription">
							Exploring new places, especially mountains
						</div> */}
					</li>
					<li className="flex flex-col flex-center-hor flex-center-hor ">
						<div>
							<Image src={camera} />
						</div>
						<div className="workInterestsContentTitle">Photography</div>
						{/* <div className="workInterestsContentDescription">
							Capturing the mesmurizing beauty of the world
						</div> */}
					</li>
					<li className="flex flex-col flex-center-hor flex-center-hor ">
						<div>
							<Image src={film} />
						</div>
						<div className="workInterestsContentTitle">Film-making</div>
						{/* <div className="workInterestsContentDescription">
							Bringing my travel stories to life through cinema
						</div> */}
					</li>
					<li className="flex flex-col flex-center-hor flex-center-ver ">
						<div>
							<Image src={tv} />
						</div>
						<div className="workInterestsContentTitle">Anime & TV shows</div>
						{/* <div className="workInterestsContentDescription">
							Enjoying wide varieties of stories for time-pass
						</div> */}
					</li>
					<li className="flex flex-col flex-center-hor flex-center-ver ">
						<div>
							<Image src={coding} />
						</div>
						<div className="workInterestsContentTitle">Coding</div>
						{/* <div className="workInterestsContentDescription">
							Wracking up my brains through programming
						</div> */}
					</li>
					<li className="flex flex-col flex-center-hor flex-center-ver ">
						<div>
							<Image src={tools} />
						</div>
						<div className="workInterestsContentTitle">Making new things</div>
						{/* <div className="workInterestsContentDescription">
							Materializing ideas through innovative projects
						</div> */}
					</li>
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
