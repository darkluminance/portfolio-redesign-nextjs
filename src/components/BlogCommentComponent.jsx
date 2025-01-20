import { fetchData } from "@/utils/globalFunctions";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function BlogCommentComponent({ onClose, isVisible, id }) {
	const [comments, setComments] = useState([]);
	const [name, setName] = useState("");
	const [comment, setComment] = useState("");
	const [isPosting, setIsPosting] = useState(false);

	const fetchComments = async () => {
		try {
			const data = await fetchData("/api/blog/comments/" + id);
			setComments(data.commentsList);
		} catch (error) {
			console.error("Error fetching comments:", error);
		}
	};

	const handlePostComment = async () => {
		if (!name || !comment) return alert("Please fill out both fields!");

		const newComment = { id: id, name: name, comment: comment };
		setIsPosting(true);

		await fetch("/api/blog/comments/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newComment),
		});

		setComments([newComment, ...comments]);
		setName("");
		setComment("");
		setIsPosting(false);
	};

	useEffect(() => {
		if (isVisible) fetchComments();
	}, [isVisible]);

	if (!isVisible) return null;

	return (
		<div className="backdrop">
			<div className="comments-panel">
				<div className="flex-space-between">
					<h2>Comments</h2>
					<button className="close-button" onClick={onClose}>
						✕
					</button>
				</div>
				<div className="comment-form">
					<input
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<textarea
						placeholder="Comment"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<button onClick={handlePostComment}>
						{isPosting ? <Spinner></Spinner> : "Post"}
					</button>
				</div>
				<div className="comments-list">
					{comments.map((c, index) => (
						<div key={index} className="comment-item">
							<div className="flex-space-between flex-center-ver">
								<span>{c.name}</span>
								<span>
									{c.postedAt
										? new Intl.DateTimeFormat("en-US", {
												year: "numeric",
												month: "short",
												day: "numeric",
												hour: "2-digit",
												minute: "2-digit",
										  }).format(new Date(c.postedAt))
										: "now"}
								</span>
							</div>
							<p>{c.comment}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default BlogCommentComponent;
