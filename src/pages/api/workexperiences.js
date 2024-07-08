import withDatabaseConnection from "@/middleware/database";
import { Workexperience } from "@/models/WorkExperiences";
import { parseDateString } from "@/utils/globalFunctions";

const handler = async (req, res) => {
	if (req.method === "GET") {
		let ret = await Workexperience.find();
		ret = ret.slice(1);

		ret.forEach((element) => {
			element.positions.sort(
				(a, b) => parseDateString(b.from) - parseDateString(a.from)
			);
		});
		ret.sort(
			(a, b) =>
				parseDateString(b.positions[0].from) -
				parseDateString(a.positions[0].from)
		);

		res.status(200).json({ data: ret });
	}
};

export default withDatabaseConnection(handler);
