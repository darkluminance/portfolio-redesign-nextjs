import withDatabaseConnection from "@/middleware/database";
import { Skills } from "@/models/Skills";
import { Workexperience } from "@/models/WorkExperiences";
import { parseDateString } from "@/utils/globalFunctions";
import { Education } from "@/models/Education";
import { Project } from "@/models/Projects";
import { Blog } from "@/models/Blog";

const handler = async (req, res) => {
	if (req.method === "GET") {
		// skills
		let skillsRet = await Skills.aggregate([
			{
				$group: {
					_id: "$category",
					skills: { $push: "$name" },
				},
			},
		]);
		skillsRet = skillsRet.filter((category) => category._id !== "");

		// education
		let educationRet = await Education.find();

		// Blog
		let blogRet = await Blog.find().select(
			"title description id thumbnail createdAt likes commentsList"
		);

		// experiences
		let experiencesRet = await Workexperience.find();
		experiencesRet = experiencesRet.slice(1);

		experiencesRet.forEach((element) => {
			element.positions.sort(
				(a, b) => parseDateString(b.from) - parseDateString(a.from)
			);
		});
		experiencesRet.sort(
			(a, b) =>
				parseDateString(b.positions[0].from) -
				parseDateString(a.positions[0].from)
		);

		//projects
		let projectsRet = await Project.find().sort({ year: -1 });

		res.status(200).json({
			data: {
				skills: skillsRet,
				education: educationRet.slice(1),
				experiences: experiencesRet,
				projects: projectsRet.slice(0, -1),
				blog: blogRet,
			},
		});
	}
};

export default withDatabaseConnection(handler);
