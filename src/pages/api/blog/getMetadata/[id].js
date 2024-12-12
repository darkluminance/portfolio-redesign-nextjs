import withDatabaseConnection from "@/middleware/database";
import { Blog } from "@/models/Blog";

const handler = async (req, res) => {
	if (req.method === "GET") {
		const id = req.query.id;
		console.log(id);

		let ret = await Blog.find({ id: id }).select("title thumbnail");

		res.status(200).json({ data: ret[0] });
	}
};

export default withDatabaseConnection(handler, true);
