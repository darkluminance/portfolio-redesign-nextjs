import Topnav from "@/components/Topnav";
import me from "../../assets/images/me.jpg";
import Link from "next/link";
import Image from "next/image";
import Page from "@/components/page";
import Skills from "@/components/Skills";
import Workexperiences from "@/components/WorkExperiences";
import Educations from "@/components/Educations";
import * as PORTFOLIO_API from "@/utils/globalAPIs";
import { fetchData } from "@/utils/globalFunctions";

export default function About({ experienceData, skillsData, educationData }) {
	return (
		<Page>
			<Topnav></Topnav>
			<div className="page aboutPage flex-center-hor flex-wrap">
				<div className="aboutContainer aboutContent">
					<div className="aboutTextContent">
						{/* <h1 className="pageHeader">About Me</h1> */}
						<p id="p1">
							I’m Raiyan Abrar. A Programmer, a Designer, a Creative Person, and
							a Cat Lover.
						</p>
						<p id="p2">
							I started my career in 2023 after graduating from Military
							Institute of Science and Technology (MIST) as a Computer Science
							major and am currently working as a Software Engineer at Enosis
							Solutions.
						</p>
						<p id="p3">
							Born on August 23rd in Dhaka, Bangladesh, I have a passion for
							creating new things and sharing them through social media. I am a
							tech enthusiast, and also love to explore new places and capture
							moments through photography. I often create cinematic videos of my
							travels and produce digital art.
						</p>
						<div className="aboutMyPhotographyBtn">
							{/* <NavLink to="/resume">
									</NavLink> */}
							<Link
								href="/about/photography"
								className="text-link italic"
								style={{ textDecoration: "underline" }}
							>
								<span>Check out my clicks</span>
							</Link>
						</div>
						<p id="p4">
							I also make games as a hobby and am particularly proud of my
							achievement in releasing one of the first indie fan-made Pokémon
							games in Bangladesh at the age of 19.
						</p>
						<div id="p6">
							<h4>My hobbies</h4>
							<ul className="aboutHobbyList flex-wrap">
								<li>Photography</li>
								<li>Cinematography</li>
								<li>Anime</li>
								<li>Gaming</li>
								<li>Traveling</li>
								<li>Reading</li>
								<li>Coding</li>
								<li>Designing</li>
								<li>Drawing</li>
							</ul>
						</div>
					</div>
					<div className="aboutSideContent">
						<div className="aboutMyPic">
							<Image src={me} alt="" />
						</div>
					</div>
				</div>
				<div className="aboutContent">
					<Workexperiences workexperiences={experienceData}></Workexperiences>
				</div>
				<div className="aboutContent">
					<Skills skills={skillsData}></Skills>

					<div className="aboutResume">
						<Link href="/about/cv" target="_blank">
							<div className="aboutResumeBtn flex-center-full">
								Check out my Resume
							</div>
						</Link>
					</div>
				</div>
				<div className="aboutContent">
					<Educations educations={educationData}></Educations>
				</div>
			</div>
		</Page>
	);
}

export async function getServerSideProps(context) {
	const { req } = context;

	const baseUrl = req
		? `${
				req.protocol
					? req.protocol
					: req.headers["x-forwarded-proto"]
					? req.headers["x-forwarded-proto"]
					: "http"
		  }://${req.headers.host}`
		: "";

	const experienceData = await fetchData(
		baseUrl + PORTFOLIO_API.EXPERIENCES_API
	);
	const skillsData = await fetchData(baseUrl + PORTFOLIO_API.SKILLS_API);
	const educationData = await fetchData(baseUrl + PORTFOLIO_API.EDUCATION_API);

	return { props: { experienceData, skillsData, educationData } };
}
