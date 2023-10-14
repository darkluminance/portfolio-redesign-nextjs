import Page from '@/components/page';
import Topnav from '@/components/Topnav';
import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CV() {
	const [experience, setexperience] = useState([]);
	const [skills, setskills] = useState([]);
	const [projects, setprojects] = useState([]);
	const [achievements, setachievements] = useState([]);
	const [extracurricular, setextracurricular] = useState([]);
	const experienceDataURL =
		'https://portfolio-updated-69-default-rtdb.asia-southeast1.firebasedatabase.app/experience.json';
	const skillsDataURL =
		'https://portfolio-updated-69-default-rtdb.asia-southeast1.firebasedatabase.app/skills.json';
	const projectsDataURL =
		'https://portfolio-updated-69-default-rtdb.asia-southeast1.firebasedatabase.app/projects.json';
	const achievementsDataURL =
		'https://portfolio-updated-69-default-rtdb.asia-southeast1.firebasedatabase.app/achievements.json';
	const extracurricularDataURL =
		'https://portfolio-updated-69-default-rtdb.asia-southeast1.firebasedatabase.app/extra-curricular.json';

	const fetchData = (api) => {
		return axios.get(api).then((response) => {
			return response.data;
		});
	};

	useEffect(() => {
		async function fetchInfos() {
			const experienceData = await fetchData(experienceDataURL);
			setexperience(experienceData);
			const achievementsData = await fetchData(achievementsDataURL);
			setachievements(achievementsData);
			const extracurricularData = await fetchData(extracurricularDataURL);
			setextracurricular(extracurricularData);
			const skillData = await fetchData(skillsDataURL);
			setskills(skillData);
			const projectData = await fetchData(projectsDataURL);
			const filteredProjectData = [];
			projectData.forEach((element) => {
				if (element != null && element.feature)
					filteredProjectData.push(element);
			});
			setprojects(filteredProjectData);
		}
		fetchInfos();
	}, []);

	return (
		<Page>
			<div className="page flex-center-hor">
				<div className="cvContainer">
					<div className="cvHeader">Raiyan Abrar</div>
					<div className="cvTitle">Software Engineer</div>
					<div className="cvContact">
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
						<div className="cvContentLeft">
							<div className="cvExperience cvContent">
								<div className="contentTitle flex-row flex-center-ver">
									<span>Experience</span>
								</div>
								<div className="contentItems">
									{experience &&
										Object.values(experience).map((item, index) => {
											return (
												<div key={index} className="contentItem experience">
													<div className="experiencePlace itemPlace">
														{item.place}
													</div>
													<div className="experienceTitle flex-row">
														<span>{item.position}</span>{' '}
														<span>
															({item.joined} - {item.left})
														</span>
													</div>
													<div className="experienceProjects">
														{Object.values(item.projects).map((project, j) => {
															return (
																<div
																	key={project.name}
																	className="experienceProject"
																>
																	<div className="projectName">
																		{project.name}
																	</div>
																	<ul className="projectTasks">
																		{Object.values(project.tasks).map(
																			(task, i) => {
																				return (
																					<li
																						key={task}
																						className="projectTask"
																					>
																						{task}
																					</li>
																				);
																			}
																		)}
																	</ul>
																</div>
															);
														})}
													</div>
												</div>
											);
										})}
								</div>
							</div>

							<div className="cvSkills cvContent">
								<div className="contentTitle flex-row flex-center-ver">
									<span>Skills</span>
								</div>
								<div className="contentItems">
									{skills &&
										Object.keys(skills).map((item, index) => {
											return (
												<div key={index} className="contentItem">
													<div className="skillType">{item}</div>
													<div className="skillItems flex-row">
														{Object.values(skills[item]).map((skill, i) => {
															return (
																<span key={skill} className="skillItem">
																	{skill}
																</span>
															);
														})}
													</div>
												</div>
											);
										})}
								</div>
							</div>
							<div className="cvEducation cvContent">
								<div className="contentTitle flex-row flex-center-ver">
									<span>Education</span>
								</div>
								<div className="contentItems">
									<div className="contentItem">
										<div className=" itemPlace">
											Military Institute of Science and Technology
										</div>
										<div className="experienceTitle">
											Computer Science and Engineering (2019 - 2023)
										</div>
									</div>
									<div className="contentItem">
										<div className=" itemPlace">Rajuk Uttara Model College</div>
										<div className="experienceTitle">
											Higher Secondary, Faculty of Sciences (2016 - 2018)
										</div>
									</div>
									<div className="contentItem">
										<div className=" itemPlace">Rajuk Uttara Model College</div>
										<div className="experienceTitle">
											Secondary School, Faculty of Sciences (2014 - 2016)
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="cvContentRight">
							<div className="cvProjects cvContent">
								<div className="contentTitle flex-row flex-center-ver">
									<span>Projects</span>
								</div>
								<div className="contentItems">
									{projects &&
										Object.values(projects).map((item, index) => {
											return (
												<div key={index} className="contentItem projectitem">
													<div className="projecttitle flex-row">
														<span>{item.title}</span>
														<span>- {item.year}</span>
													</div>
													<div className="projectstacks flex-row">
														{Object.values(item.stack).map((stack, i) => {
															return (
																<span key={stack} className="stackItem">
																	{stack}
																</span>
															);
														})}
													</div>
													<div className="projectdescription">
														{item.description}
													</div>
												</div>
											);
										})}
								</div>
							</div>
							<div className="cvExtraCurriculars cvContent mt-4r">
								<div className="contentTitle flex-row flex-center-ver">
									<span>Extra-Curricular</span>
								</div>
								<div className="contentItems">
									{extracurricular &&
										Object.values(extracurricular).map((item) => {
											return (
												<div className="contentItem">
													<div>
														<div className="projecttitle flex-row">
															<span>{item.place}</span>
															<span>- {item.year}</span>
														</div>
														<ul className="mt-1r">
															{Object.values(item.points).map(function (point) {
																return <li>{point}</li>;
															})}
														</ul>
													</div>
												</div>
											);
										})}
								</div>
							</div>
							<div className="cvAchievements cvContent">
								<div className="contentTitle flex-row flex-center-ver">
									<span>Achievements</span>
								</div>
								<div className="contentItems">
									<div className="contentItem">
										<ul>
											{achievements &&
												Object.values(achievements).map((achievement) => {
													if (achievement.type == 'contest') {
														return (
															<li>
																<span className="fw-700">
																	{achievement.place} place
																</span>
																: {achievement.competition}{' '}
																<span className="fw-500">
																	-{achievement.year}
																</span>
															</li>
														);
													} else {
														return (
															<li>
																Solved{' '}
																<span className="fw-700">
																	{achievement.count}+
																</span>{' '}
																problems in {achievement.platform}
															</li>
														);
													}
												})}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
}
