import { Schema, model, models } from "mongoose";

const blogSchema = new Schema({
	title: String,
	description: String,
	id: String,
	thumbnail: String,
	createdAt: Date,
	content: String,
	likes: Number,
	comments: Number,
	commentsList: [
		{
			name: String,
			comment: String,
			postedAt: { type: Date, default: Date.now },
		},
	],
});

export const Blog = models.Blog || model("Blog", blogSchema);
