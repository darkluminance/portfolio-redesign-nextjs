import Topnav from '@/components/Topnav';
import '../about.css';
import me from '../../assets/images/me.jpg';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
	return (
		<>
			<Topnav></Topnav>
			<div className="page aboutPage flex-center-hor">
				<div className="aboutContainer">
					<div className="aboutTextContent">
						<h1 className="pageHeader">About Me</h1>
						<p id="p1">
							I’m Raiyan Abrar. A Programmer, a Designer, a Problem solver, a
							Creative Person, and a Cat Lover.
						</p>
						<p id="p2">
							I have completed my B.Sc. in Computer Science and Engineering in
							2023 from Dhaka and am currently working as a Software Developer
							at RedDot Digital Limited.
						</p>
						<p id="p3">
							Born on August 23rd in Dhaka, Bangladesh, I have a passion for
							creating new things and sharing them with the world through social
							media. I am a tech enthusiast, and also love to explore new places
							and capture moments through photography. I often create cinematic
							videos of my travels and produce digital art.
						</p>
						<p id="p4">
							With a strong background in programming and design, I have both
							personal and academic projects under my belt ranging from software
							development to game design. I am particularly proud of my
							achievement in releasing one of the first indie fan-made Pokémon
							games in Bangladesh at the age of 19.
						</p>
					</div>
					<div className="aboutSideContent">
						<div className="aboutMyPic">
							<Image src={me} alt="" />
						</div>
						<div className="aboutResume flex-center-hor">
							{/* <NavLink to="/resume">
									</NavLink> */}
							<Link
								// href="https://drive.google.com/file/d/1VN5PZaeya5kDyGRc_yTqUnxKGyiMlMcI/view?usp=sharing"
								href="/about/resume"
								target="_blank"
								// rel="noreferrer"
							>
								<div className="aboutResumeBtn">Check out my Resume</div>
							</Link>
						</div>
						<div className="aboutResume">
							<div className="aboutMyPhotographyBtn">
								{/* <NavLink to="/resume">
									</NavLink> */}
								<Link
									href="/about/photography"
									className="text-link"
									style={{ textDecoration: 'underline' }}
								>
									<span>Check out my Photographs</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
