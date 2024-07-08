import Page from "@/components/page";
import Topnav from "@/components/Topnav";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CV() {
	const [workexperience, setexperience] = useState([]);
	const [skills, setskills] = useState([]);
	const [education, seteducation] = useState([]);
	const [projects, setprojects] = useState([]);
	const [achievements, setachievements] = useState([]);
	const [extracurricular, setextracurricular] = useState([]);
	const experienceDataURL = "/api/workexperiences";
	const skillsDataURL = "/api/skills";
	const educationDataURL = "/api/education";
	const projectsDataURL =
		"https://portfolio-updated-69-default-rtdb.asia-southeast1.firebasedatabase.app/projects.json";
	const achievementsDataURL =
		"https://portfolio-updated-69-default-rtdb.asia-southeast1.firebasedatabase.app/achievements.json";
	const extracurricularDataURL =
		"https://portfolio-updated-69-default-rtdb.asia-southeast1.firebasedatabase.app/extra-curricular.json";

	const fetchData = async (url) => {
		const ret = await fetch(url);
		const res = await ret.json();
		return res.data;
	};

	useEffect(() => {
		async function fetchInfos() {
			const experienceData = await fetchData(experienceDataURL);
			setexperience(experienceData);

			const skillData = await fetchData(skillsDataURL);
			setskills(skillData);

			const educationData = await fetchData(educationDataURL);
			seteducation(educationData);
			/* const achievementsData = await fetchData(achievementsDataURL);
			setachievements(achievementsData);
			const extracurricularData = await fetchData(extracurricularDataURL);
			setextracurricular(extracurricularData);
			const projectData = await fetchData(projectsDataURL);
			const filteredProjectData = [];
			projectData.forEach((element) => {
				if (element != null && element.feature)
					filteredProjectData.push(element);
			});
			setprojects(filteredProjectData); */
		}
		fetchInfos();
	}, []);

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

							{workexperience &&
								workexperience.map((item) => (
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
								{skills &&
									skills.map((skill) => (
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
							<h3 className="contentTitle">Education</h3>

							{education &&
								education.map((education) => (
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
