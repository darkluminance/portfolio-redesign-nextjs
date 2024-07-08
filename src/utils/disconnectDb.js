import { disconnect } from "mongoose";

export default async function connectDb() {
	await disconnect();
}
