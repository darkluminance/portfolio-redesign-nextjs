import Topnav from "@/components/Topnav";
import Page from "@/components/page";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PROJECTS_API } from "@/utils/globalAPIs";

export default function Paage() {
	const router = useRouter();
	const [project, setproject] = useState([]);

	const fetchData = async () => {
		return fetch(PROJECTS_API + "/" + router.query.id).then(
			async (response) => {
				const res = await response.json();
				setproject(res.data);
			}
		);
	};

	useEffect(() => {
		if (router.isReady) fetchData();
	}, [router.isReady]);

	return (
		<Page>
			<Topnav routeLink="/work" routeName="WORK"></Topnav>
			<div className="page flex-center-hor">
				{project && (
					<div className="container flex-center-hor">
						{project.stacks && (
							<div className="projectItemContainer">
								<div className="projectTitle flex-center-full">
									<span>{project.name}</span>
								</div>
								<div className="projectContent">
									<div className="projectDescription">
										"{project.description}"
									</div>

									<div className="projectInfos">
										<div>
											<div className="projectYearTitle">Year:</div>{" "}
											<span className="projectYear">{project.year}</span>
										</div>
										<div>
											<div className="projectYearTitle">Stack:</div>{" "}
											<span className="projectStack">
												{project.stacks.map((item, index) => (
													<span key={index}>
														{item.stack}
														{index !== project.stacks.length - 1 ? ", " : ""}
													</span>
												))}
											</span>
										</div>
										<div>
											<div className="projectYearTitle">Github:</div>{" "}
											{project.githubURL && (
												<span className="projectYear">
													<a
														href={project.githubURL}
														target="_blank"
														rel="noreferrer"
														className="text-link italic"
													>
														{project.githubURL}
													</a>
												</span>
											)}
											{!project.githubURL && <span>N/A</span>}
										</div>
									</div>
									<div className="projectInfos" style={{ marginTop: "3rem" }}>
										<div>
											{project.demoURL && (
												<div>
													<span className="projectYear">
														<a
															href={project.demoURL}
															target="_blank"
															rel="noreferrer"
															className="text-link italic"
														>
															Click to view Demo
														</a>
													</span>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</Page>
	);
}
