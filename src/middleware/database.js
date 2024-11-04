import connectDb from "@/utils/connectDb";
import disconnectDb from "@/utils/disconnectDb";

export default function withDatabaseConnection(handler) {
	return async (req, res) => {
		const startTime = Date.now();
		console.log("connecting to db");
		await connectDb();
		const endTime = Date.now();
		console.log(
			"successfully connected to db in " + (endTime - startTime) + " ms"
		);

		await handler(req, res);

		await disconnectDb();
	};
}
