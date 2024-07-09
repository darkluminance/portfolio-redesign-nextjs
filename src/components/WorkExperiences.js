import { useEffect, useState } from "react";

function Workexperiences() {
	const [workexperiences, setWorkexperiences] = useState([]);

	useEffect(() => {
		async function getWorkexperiences() {
			const ret = await fetch("/api/workexperiences");
			const res = await ret.json();
			setWorkexperiences(res.data);
		}
		getWorkexperiences();
	}, []);

	return (
		<>
			<h1>Work Experiences</h1>
			<div className="aboutWorkExperienceContainer">
				{workexperiences &&
					workexperiences.map((item, index) => (
						<div key={index} className="aboutWorkExperience aboutEachContent">
							<div>
								<div>
									{item.positions.length > 1 && (
										<div className="aboutWorkExperienceTitle">
											<h3>{item.companyName}</h3>
											<div className="aboutWorkExperiencePositionTenure">
												{item.positions[0].from} -{" "}
												{item.positions[item.positions.length - 1].to}
											</div>
										</div>
									)}

									{item.positions &&
										item.positions.map((position, index2) => (
											<div key={index2} className="aboutWorkExperiencePosition">
												{item.positions.length > 1 && (
													<div className="sameCompanyPosition"></div>
												)}
												<div className="aboutWorkExperienceTitle">
													<h3>{position.name}</h3>
													{item.positions.length == 1 && (
														<div className="aboutWorkExperienceCompany">
															{item.companyName}
														</div>
													)}
													<div className="aboutWorkExperiencePositionTenure">
														{position.from} - {position.to}
													</div>
												</div>
												<ul style={{ marginLeft: "1.5rem" }}>
													{position.tasks &&
														position.tasks.map((task, index4) => (
															<li key={index4}>{task.name}</li>
														))}
												</ul>
												<br />
												<div className="aboutWorkExperiencePositionSkills">
													{position.skills &&
														position.skills.map((skill) => (
															<span key={skill.name}>{skill.name}</span>
														))}
												</div>
											</div>
										))}
								</div>
							</div>
						</div>
					))}
			</div>
		</>
	);
}

export default Workexperiences;
