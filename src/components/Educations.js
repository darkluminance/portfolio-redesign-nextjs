import { useEffect, useState } from "react";

function Educations() {
	const [educations, setEducations] = useState([]);

	useEffect(() => {
		async function getEducations() {
			const ret = await fetch("/api/education");
			const res = await ret.json();
			setEducations(res.data);
		}
		getEducations();
	}, []);

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
