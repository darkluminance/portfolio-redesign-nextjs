import { Schema, model, models } from "mongoose";

const projectSchema = new Schema({
	name: String,
	category: String,
	year: Number,
	description: String,
	githubURL: String,
	demoURL: String,
	thumbnailURL: String,
	stacks: [{ stack: String }],
});

export const Project = models.Project || model("Project", projectSchema);
