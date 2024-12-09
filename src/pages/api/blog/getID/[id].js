import withDatabaseConnection from "@/middleware/database";
import { Blog } from "@/models/Blog";

const handler = async (req, res) => {
	if (req.method === "GET") {
		const id = req.query.id;

		let ret = await Blog.find({ id: id }).select("id");

		res.status(200).json({ data: ret[0]._id });
	}
};

export default withDatabaseConnection(handler, true);
