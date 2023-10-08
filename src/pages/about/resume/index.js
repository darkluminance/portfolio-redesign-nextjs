import Page from '@/components/page';
import Topnav from '@/components/Topnav';
import Link from 'next/link';

export default function Resume() {
	return (
		<Page>
			<Topnav routeLink="/about" routeName="ABOUT"></Topnav>
			<div className="page flex-center-hor">
				<div className="resumeContainer">
					<h1 className="pageHeader">Raiyan's Resume</h1>
					<ul className="resumeItems">
						<Link
							className="resumeItem flex-center-full"
							href="/about/resume/skills"
						>
							<li>Skills</li>
						</Link>
						<Link
							className="resumeItem flex-center-full"
							href="/about/resume/experience"
						>
							<li>Experience</li>
						</Link>
						<Link className="resumeItem flex-center-full" href="/work">
							<li>Projects</li>
						</Link>
						<Link
							className="resumeItem flex-center-full"
							href="/about/resume/extracurricular"
						>
							<li>Extra-Curricular</li>
						</Link>
						<Link
							className="resumeItem flex-center-full"
							href="/about/resume/achievements"
						>
							<li>Achievements</li>
						</Link>
						<Link
							className="resumeItem flex-center-full"
							href="/about/resume/hobbies"
						>
							<li>Hobbies</li>
						</Link>
					</ul>
				</div>
			</div>
		</Page>
	);
}
