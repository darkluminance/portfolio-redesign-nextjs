import connectDb from "@/utils/connectDb";
import disconnectDb from "@/utils/disconnectDb";

export default function withDatabaseConnection(handler) {
	return async (req, res) => {
		console.log("connecting to db");
		await connectDb();

		await handler(req, res);

		// await disconnectDb();
	};
}
