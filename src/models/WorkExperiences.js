import { Schema, model, models } from "mongoose";

const workExperienceSchema = new Schema({
	companyName: String,
	positions: [
		{
			name: String,
			from: String,
			to: String,
			skills: [
				{
					name: String,
				},
			],
			tasks: [
				{
					name: String,
				},
			],
		},
	],
});

export const Workexperience =
	models.Workexperience || model("Workexperience", workExperienceSchema);
