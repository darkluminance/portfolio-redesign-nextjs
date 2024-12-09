import Topnav from "@/components/Topnav";
import Page from "@/components/page";
import likeIcon from "@/assets/like.svg";
import likeSelectedIcon from "@/assets/like-selected.svg";
import commentIcon from "@/assets/comment.svg";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDataContext } from "@/context/DataContext";
import { useRouter } from "next/router";
import { fetchData } from "@/utils/globalFunctions";
import Head from "next/head";
import BlogCommentComponent from "@/components/BlogCommentComponent";

function Paaage() {
	const router = useRouter();
	const { blogData, fetchBlogContentByID, fetchBlogByID } = useDataContext();
	const [blogItem, setBlogItem] = useState();
	const [isBlogLiked, setIsBlogLiked] = useState(false);
	const [showCommentComponent, setShowCommentComponent] = useState(false);

	const blogContentRef = useRef();

	const setBlogData = async () => {
		let blog = blogData.filter((item) => item.id === router.query.id)[0];
		let blog_id = blog?._id;

		if (!blog) {
			blog_id = await fetchData("/api/blog/getID/" + router.query.id);

			if (!blog_id) return;

			blog = await fetchBlogByID(blog_id);
		}

		if (localStorage.getItem("isBlogLiked"))
			setIsBlogLiked(
				localStorage.getItem("isBlogLiked") === "true" ? true : false
			);

		setBlogItem(blog);
	};

	const setBlogContent = async (id) => {
		const fetchedBlogContent = await fetchBlogContentByID(id, false);
		setBlogItem((prevState) => ({ ...prevState, content: fetchedBlogContent }));
	};

	const toggleLike = async () => {
		const isLiked = !isBlogLiked;
		setIsBlogLiked(isLiked);
		localStorage.setItem("isBlogLiked", isLiked);

		const ret = isLiked
			? await fetchData(`/api/blog/like/add/${blogItem._id}`)
			: await fetchData(`/api/blog/like/remove/${blogItem._id}`);

		const blog = await fetchBlogByID(blogItem._id);
		setBlogItem(blog);
	};

	useEffect(() => {
		if (router.isReady && blogData) setBlogData();
	}, [router.isReady]);

	useEffect(() => {
		if (blogItem && router.isReady && !blogItem.content) {
			setBlogContent(blogItem._id);
		}
	}, [blogItem]);

	useEffect(() => {
		if (blogItem?.content) {
			blogContentRef.current.innerHTML = blogItem.content;
		}
	}, [blogItem?.content]);

	return (
		<Page>
			<Head>
				<title>{router.query.id}</title>
			</Head>
			<Topnav routeLink="/blog" routeName="BLOG"></Topnav>
			{blogItem && (
				<BlogCommentComponent
					isVisible={showCommentComponent}
					onClose={() => setShowCommentComponent(false)}
					id={blogItem._id}
				></BlogCommentComponent>
			)}
			<div className="page flex-center-hor">
				<div className="container">
					{blogItem && (
						<div className="blogItemContainer">
							<h1 className="blogItemTitle">{blogItem.title}</h1>
							<h3 className="blogItemDescription">{blogItem.description}</h3>
							<p className="blogItemDate">
								{new Date(blogItem.createdAt).toDateString()}
							</p>
							<div className="blogItemMeta">
								<div
									className="blogLikes blogMeta flex"
									onClick={toggleLike}
									title="Like"
								>
									{isBlogLiked ? (
										<Image src={likeSelectedIcon}></Image>
									) : (
										<Image src={likeIcon}></Image>
									)}
									<span>{blogItem.likes}</span>
								</div>
								<div
									className="blogComments blogMeta flex"
									title="Comment"
									onClick={() => setShowCommentComponent(true)}
								>
									<Image src={commentIcon}></Image>
									<span>{blogItem.commentsList.length}</span>
								</div>
							</div>
							<div className="blogItemContent">
								<div className="blogItemThumbnail">
									<img src={blogItem.thumbnail} />
								</div>
								<div id="blogContent" ref={blogContentRef}></div>
								<br />
								<br />
								<div>Raiyan Abrar,</div>
								<a className="" href="mailto:ryeofficial13@gmail.com">
									ryeofficial13@gmail.com
								</a>
							</div>
						</div>
					)}
					{!blogItem && <div>Loading...</div>}
				</div>
			</div>
		</Page>
	);
}

export default Paaage;
