import Page from "@/components/page";
import Topnav from "@/components/Topnav";
import Link from "next/link";
import { useState } from "react";
import * as PORTFOLIO_API from "@/utils/globalAPIs";
import { fetchData } from "@/utils/globalFunctions";

export default function CV({
	experienceData,
	skillsData,
	educationData,
	projectData,
}) {
	return (
		<Page>
			<Topnav></Topnav>
			<div className="">
				<div className="cvContainer">
					<div className="cvHeader">Raiyan Abrar</div>
					<div className="cvTitle">Software Engineer</div>
					<div className="cvContact flex-wrap">
						<Link href="http://rye013.netlify.app" target="_blank">
							<span className="contactWebsite link">• rye013.netlify.app</span>
						</Link>
						<Link href="mailto:ryeofficial13@gmail.com">
							<span className="contactEmail link">
								• ryeofficial13@gmail.com
							</span>
						</Link>
						<Link href="http://leetcode.com/rye013" target="_blank">
							<span className="contactLink link">• leetcode.com/rye013</span>
						</Link>
					</div>
					<div className="cvContents">
						<div className="cvContent">
							<h3 className="contentTitle">Work Experience</h3>

							{experienceData &&
								experienceData.map((item) => (
									<div key={item._id} className="contentItems">
										{item.positions.length > 1 && (
											<div className="">
												<h3>{item.companyName}</h3>
												<div className="">
													{item.positions[0].from} -{" "}
													{item.positions[item.positions.length - 1].to}
												</div>
											</div>
										)}

										{item.positions &&
											item.positions.map((position) => (
												<div key={position._id} className="contentItem">
													{item.positions.length > 1 && (
														<div className=""></div>
													)}
													<div className="">
														<h4>{position.name}</h4>
														{item.positions.length == 1 && (
															<div className="">{item.companyName}</div>
														)}
														<div className="">
															{position.from} - {position.to}
														</div>
													</div>
													<ul className="contentItemList">
														{position.tasks &&
															position.tasks.map((task, index4) => (
																<li key={index4}>{task.name}</li>
															))}
													</ul>
													<div className="">
														{position.skills && (
															<div>
																<span>Skills: </span>
																{position.skills.map((skill) => (
																	<span
																		className="contentItemSkill"
																		key={skill.name}
																	>
																		{skill.name}
																	</span>
																))}
															</div>
														)}
													</div>
												</div>
											))}
									</div>
								))}
						</div>

						<div className="cvContent">
							<h3 className="contentTitle">Skills</h3>

							<ul className="contentItems">
								{skillsData &&
									skillsData.map((skill) => (
										<li key={skill._id} className="contentItem">
											<div className="flex-wrap">
												<h4>{skill._id}: </h4>
												{skill.skills.map((categorySkill) => (
													<span
														className="contentItemSkill"
														key={categorySkill}
													>
														{categorySkill}
													</span>
												))}
											</div>
										</li>
									))}
							</ul>
						</div>

						<div className="cvContent">
							<h3 className="contentTitle">Projects</h3>

							{projectData &&
								projectData.map((project) => (
									<div className="contentItems">
										<div className="contentItem">
											<div className="flex-space-between">
												<h3 className="contentItemProjectTitle">
													{project.name}
												</h3>
												<span> | {project.year}</span>
											</div>

											<h4 className="contentItemProjectCategory">
												{project.category}
											</h4>
											<div className="flex-wrap">
												{project.stacks &&
													project.stacks.map((stack) => (
														<span className="contentItemSkill contentItemProjectSkill">
															{stack.stack}
														</span>
													))}
											</div>
											<div className="contentItemList">
												<p>{project.description}</p>
											</div>
										</div>
									</div>
								))}
						</div>

						<div className="cvContent">
							<h3 className="contentTitle">Education</h3>

							{educationData &&
								educationData.map((education) => (
									<div className="contentItems">
										<div className="contentItem">
											<h4>{education.degree}</h4>
											<p>{education.institution}</p>
											<p>
												{education.from} - {education.to}
											</p>
										</div>
									</div>
								))}
						</div>
					</div>
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
	const projectData = await fetchData(baseUrl + PORTFOLIO_API.PROJECTS_API);

	return { props: { experienceData, skillsData, educationData, projectData } };
}
