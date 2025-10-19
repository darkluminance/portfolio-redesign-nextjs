import Image from "next/image";
import Topbar from "./Topbar";
import Link from "next/link";

import { useDataContext } from "@/context/DataContext";
import { fetchImgData, getAge } from "@/utils/globalFunctions";
import { Suspense, useEffect, useState } from "react";
import Spinner from "./Spinner";

export default function HomePage() {
	return (
		<div className="homepage">
			<main>
				<Topbar></Topbar>
				<div className="homeTextcontent">
					<h1 className="homeTitle">Hi there, I'm</h1>
					<h1 className="homeTitle">Raiyan Abrar,</h1>
					<p className="homeDescriptionLong">
						I'm a {getAge()}y old{" "}
						<span className="strong">Software Engineer</span> from{" "}
						<span className="strong">Dhaka, Bangladesh</span>. I am currently
						employed at <span className="strong">Enosis Solutions.</span> My experiences include <span className="strong">UI/UX Design, Game Development,</span> and building <span className="strong">scalable web applications.</span>
					</p>
					<p className="homeDescriptionLong">
						I love to <span className="strong">travel</span>, especially to the{" "}
						<span className="strong">mountains</span>, and take photos. I often
						play video games and watch anime in my free time and am a big fan of{" "}
						<span className="strong">Attack on Titan.</span> I have a big
						love towards <span className="strong">arts and designs</span> and
						I occasionally do <span className="strong">Game Dev</span> as a hobby.
						My big dream is to someday own a{" "}
						<span className="strong">cat.</span>
					</p>
					<p className="homeDescriptionEnd"> - A Coffee Lover</p>
				</div>
				<div className="homeTextcontent">
					<MySkills></MySkills>
				</div>
				<div className="homeTextcontent">
					<FeaturedWorks></FeaturedWorks>
				</div>
			</main>
		</div>
	);
}

function MySkills() {
	return (
		<div className="homeContent">
			<h2 className="homeTitle">My Tech Stack</h2>

			<div className="aboutCategorySkills homeExtraContent">
				<span>Typescript</span>
				<span>NextJS</span>
				<span>VueJS</span>
				<span>ExpressJS</span>
				<span>Python</span>
				<span>n8n</span>
				<span>MongoDB</span>
				<span>SQL</span>
				<span>Jira</span>
			</div>
		</div>
	);
}

function FeaturedWorks() {
	const { projectData, thumbnailData, isDataLoaded } = useDataContext();
	const featuredList = ["trackgrad", "maze_generator"];
	const [featuredProjectList, setFeatureProjectData] = useState([]);
	const [projectThumbnails, setprojectThumbnails] = useState([]);

	async function getThumbnails() {
		const featuredProjects = projectData?.filter(
			(project) =>
				project.thumbnailURL === featuredList[0] ||
				project.thumbnailURL === featuredList[1]
		);
		const featuredThumnbailList = thumbnailData?.filter(
			(thumb) =>
				thumb.public_id.slice(9) === featuredList[0] ||
				thumb.public_id.slice(9) === featuredList[1]
		);

		setFeatureProjectData(featuredProjects);

		const thumbnails = await fetchImgData(featuredThumnbailList);
		setprojectThumbnails(thumbnails);
	}

	useEffect(() => {
		if (isDataLoaded) {
			getThumbnails();
		}
	}, [isDataLoaded]);

	return (
		<div className="homeContent">
			<h2 className="homeTitle">Featured Works</h2>
			{!isDataLoaded && (
				<div className="mt-1r">
					<Spinner></Spinner>
				</div>
			)}
			{isDataLoaded && featuredProjectList && (
				<div className="homeFeaturedWorksContent homeExtraContent">
					<Suspense>
						{featuredProjectList.map((project, index) => (
							<Link
								href={`/work/${encodeURIComponent(project.thumbnailURL)}`}
								key={index}
							>
								<div className="pics" onClick={() => {}}>
									<div className="featuredWorksThumbnail">
										<img
											src={projectThumbnails[project.thumbnailURL]}
											alt=""
											loading="lazy"
										/>
									</div>
									<div className="info flex flex-col flex-gap-1" key={index}>
										<h2>{project.name}</h2>
										<p>{project.description}</p>
									</div>
								</div>
							</Link>
						))}
					</Suspense>
					<Link href="/work" className="text-link">
						Check out more
					</Link>
				</div>
			)}
		</div>
	);
}
