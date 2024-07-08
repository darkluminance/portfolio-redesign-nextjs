import { connect } from "mongoose";

export default async function connectDb() {
	const url = process.env.MONGODB_URI;
	await connect(url).catch((err) => console.log(err));
}
