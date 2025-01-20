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
import { getBlogByID, getBlogIDFromTextID } from "@/services/BlogService";
import Spinner from "@/components/Spinner";

function Paaage({ blog }) {
	const router = useRouter();
	const { blogContents, fetchBlogContentByID } = useDataContext();
	const [blogItem, setBlogItem] = useState();
	const [isBlogLiked, setIsBlogLiked] = useState(false);
	const [showCommentComponent, setShowCommentComponent] = useState(false);

	const blogContentRef = useRef();

	const setBlog = async () => {
		if (localStorage.getItem("isBlogLiked#" + blog._id))
			setIsBlogLiked(
				localStorage.getItem("isBlogLiked#" + blog._id) === "true"
					? true
					: false
			);

		setBlogItem(blog);
	};

	const fetchBlogContent = async () => {
		if (blogContents[blog._id]) {
			injectBlogContent(blogContents[blog._id]);
			return;
		}

		const fetched = await fetchBlogContentByID(blog._id, false);
		injectBlogContent(fetched);
	};

	const injectBlogContent = (content) => {
		if (content) {
			setBlogItem((prevState) => ({ ...prevState, content: content }));
			blogContentRef.current.innerHTML = content;
		}
	};

	const toggleLike = async () => {
		const isLiked = !isBlogLiked;
		setIsBlogLiked(isLiked);
		localStorage.setItem("isBlogLiked#" + blog._id, isLiked);

		const ret = isLiked
			? await fetchData(`/api/blog/like/add/${blog._id}`)
			: await fetchData(`/api/blog/like/remove/${blog._id}`);

		const fetched = await getBlogByID(blog._id);
		setBlogItem(fetched);
	};

	useEffect(() => {
		let timer = setTimeout(() => {
			if (blogContentRef.current) {
				fetchBlogContent();
				clearTimeout(timer);
			}
		}, 10);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (router.isReady) {
			setBlog();
		}
	}, [router.isReady]);

	return (
		<Page>
			<Head>
				<title>{blog.title}</title>
				<meta property="og:image" content={blog.thumbnail} />
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
					{!blog && (
						<div>
							<Spinner></Spinner>
						</div>
					)}
				</div>
			</div>
		</Page>
	);
}

export async function getServerSideProps(context) {
	const { id } = context.params;
	const { req } = context;

	const protocol = req.headers["x-forwarded-proto"] || "http";
	const host = req.headers.host;

	const baseUrl = `${protocol}://${host}`;

	const _id = await getBlogIDFromTextID(id, baseUrl);
	const blog = await getBlogByID(_id, baseUrl);

	return { props: { blog: blog } };
}

export default Paaage;
