import Image from "next/image";
import Topbar from "./Topbar";
import Link from "next/link";

import minecraft from "@/assets/game_covers/minecraft.jpg";
import totk from "@/assets/game_covers/totk.jpg";
import nier_automata from "@/assets/game_covers/nier_automata.jpg";
import legends_arceus from "@/assets/game_covers/legends_arceus.jpg";

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
						employed at <span className="strong">Enosis Solutions</span> working
						primarily on an interactive 3D application for{" "}
						<span className="strong">webVR/AR devices.</span>
					</p>
					<p className="homeDescriptionLong">
						I love to <span className="strong">travel</span>, especially to the{" "}
						<span className="strong">mountains</span>, and take photos. I often
						play video games and watch anime in my free time and am a big fan of{" "}
						<span className="strong">Attack on Titan.</span> As a coder, I'm
						mostly a <span className="strong">frontend</span> guy because my big
						love towards <span className="strong">arts and designs</span> and
						ocassionally do <span className="strong">Game Dev</span> as a hobby.
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
				<div className="homeTextcontent">
					<FavoriteGames></FavoriteGames>
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
				<span>ThreeJS</span>
				<span>NextJS</span>
				<span>VueJS</span>
				<span>ExpressJS</span>
				<span>Go</span>
				<span>MongoDB</span>
				<span>SQL</span>
				<span>Jira</span>
			</div>
		</div>
	);
}

function FavoriteGames() {
	const gameData = [
		{
			title: "Minecraft",
			image: minecraft,
		},
		{
			title: "Legend of Zelda: Tears of the Kingdom",
			image: totk,
		},
	];

	return (
		<div className="homeContent">
			<h1 className="homeTitle">Favorite Games</h1>

			<Suspense>
				<div className="homeFavoriteGamesContent homeExtraContent">
					{gameData.map((game, index) => (
						<div className="pics" key={index} onClick={() => {}}>
							<div className="gameImage">
								<Image src={game.image} alt="" loading="lazy" />
							</div>
							<div className="info flex flex-col flex-gap-1">
								<h2>{game.title}</h2>
							</div>
						</div>
					))}
				</div>
			</Suspense>
		</div>
	);
}

function FeaturedWorks() {
	const { projectData, thumbnailData, isDataLoaded } = useDataContext();
	const featuredList = ["maze_generator", "url_shortener"];
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
