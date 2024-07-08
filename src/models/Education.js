import { Schema, model, models } from "mongoose";

const educationSchema = new Schema({
	degree: String,
	institution: String,
	from: String,
	to: String,
	result: String,
});

export const Education =
	models.Education || model("Education", educationSchema);
