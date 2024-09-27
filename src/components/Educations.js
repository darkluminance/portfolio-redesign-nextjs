function Educations({ educations }) {
	return (
		<>
			<h1>Education</h1>
			<div className="aboutEducationContainer">
				{educations &&
					educations.map((education) => (
						<div
							key={education._id}
							className="aboutCategoryEducations aboutEachContent"
						>
							<h3>{education.degree}</h3>
							<p>{education.institution}</p>
							<p>
								{education.from} - {education.to}
							</p>
							<p>CGPA: {education.result}</p>
						</div>
					))}
			</div>
		</>
	);
}

export default Educations;
