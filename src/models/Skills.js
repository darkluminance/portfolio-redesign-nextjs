import { Schema, model, models, version } from "mongoose";

const skillSchema = new Schema(
	{
		category: String,
		name: String,
	},
	{ versionKey: false }
);

export const Skills = models.Skill || model("Skill", skillSchema);
