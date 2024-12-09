import Page from "@/components/page";
import Topnav from "@/components/Topnav";
import likeIcon from "@/assets/like.svg";
import commentIcon from "@/assets/comment.svg";
import Image from "next/image";
import { useDataContext } from "@/context/DataContext";
import { useEffect } from "react";
import Link from "next/link";
import { fetchData } from "@/utils/globalFunctions";

function Blog() {
	const { blogData, setBlog, fetchBlogContentByID, isDataLoaded } =
		useDataContext();

	const blogItemHovered = (id) => {
		if (!isDataLoaded) return;
		fetchBlogContentByID(id);
	};

	const getBlogs = async () => {
		const ret = await fetchData("/api/blog");
		setBlog(ret);
	};

	useEffect(() => {
		if (blogData.length <= 1) getBlogs();
	}, []);

	return (
		<Page>
			<Topnav></Topnav>
			<div className="page flex-center-hor">
				<div className="container">
					<h1 className="pageheader">My Blogs</h1>
					<div className="blogContainer mt-4r">
						{blogData ? (
							blogData.map((blogItem) => (
								<Link
									href={`/blog/${encodeURIComponent(blogItem.id)}`}
									key={blogItem._id}
								>
									<div
										className="blogItem"
										onMouseEnter={() => blogItemHovered(blogItem._id)}
									>
										<img src={blogItem.thumbnail}></img>
										<div className="blogTexts">
											<div className="blogMeta flex-space-between">
												<span className="blogDate">
													{new Date(blogItem.createdAt).toDateString()}
												</span>
												<div className="blogInsights flex-center-hor">
													<div className="blogLikes flex">
														<Image src={likeIcon}></Image>
														<span>{blogItem.likes}</span>
													</div>
													<div className="blogComments flex">
														<Image src={commentIcon}></Image>
														<span>{blogItem.commentsList.length}</span>
													</div>
												</div>
											</div>
											<h2 className="blogTitle mt-2r">{blogItem.title}</h2>
											<p className="blogSubtitle mt-1r">
												{blogItem.description}
											</p>
										</div>
									</div>
								</Link>
							))
						) : (
							<div>Loading...</div>
						)}
					</div>
				</div>
			</div>
		</Page>
	);
}

export default Blog;
