async function decrementScore(userId) {
	try {
		const updated = await Blog.findByIdAndUpdate(userId, {
			$inc: { likes: -1 },
		});
		console.log("Updated Blog:", updated._id);
	} catch (error) {
		console.error("Error decrementing like:", error);
	}
}

import withDatabaseConnection from "@/middleware/database";
import { Blog } from "@/models/Blog";

const handler = async (req, res) => {
	if (req.method === "GET") {
		const id = req.query.id;

		let ret = await decrementScore(id);

		res.status(200).json({ data: ret });
	}
};

export default withDatabaseConnection(handler, true);
