function Skills({ skills }) {
	return (
		<>
			<h1>Skills</h1>
			<div className="aboutSkillContainer">
				{skills &&
					skills.map((skill) => (
						<div
							key={skill._id}
							className="aboutCategorySkills aboutEachContent flex-wrap"
						>
							<h3>{skill._id}</h3>
							{skill.skills.map((categorySkill) => (
								<span key={categorySkill}>{categorySkill}</span>
							))}
						</div>
					))}
			</div>
		</>
	);
}

export default Skills;
