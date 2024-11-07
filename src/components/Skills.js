function Skills({ skills }) {
	return (
		<>
			<h2 className="homeTitle">Tech Stack</h2>
			<div className="aboutSkillContainer">
				{/* {skills &&
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
					))} */}
				<div className="aboutCategorySkills homeExtraContent">
					<span>Typescript</span>
					<span>NextJS</span>
					<span>VueJS</span>
					<span>ThreeJS</span>
					<span>MongoDB</span>
					<span>ExpressJS</span>
				</div>
			</div>
		</>
	);
}

export default Skills;
