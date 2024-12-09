async function incrementScore(userId) {
	try {
		const updated = await Blog.findByIdAndUpdate(userId, {
			$inc: { likes: 1 },
		});
		console.log("Updated Blog:", updated._id);
	} catch (error) {
		console.error("Error incrementing like:", error);
	}
}

import withDatabaseConnection from "@/middleware/database";
import { Blog } from "@/models/Blog";

const handler = async (req, res) => {
	if (req.method === "POST") {
		const { id, name, comment } = req.body;

		const updatedBlog = await Blog.findByIdAndUpdate(id, {
			$push: {
				commentsList: { name, comment },
			},
		});

		res.status(200).json({ data: updatedBlog });
	}
};

export default withDatabaseConnection(handler, true);
