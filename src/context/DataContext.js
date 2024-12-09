// context/DataContext.js
import { fetchData, mergeListsById } from "@/utils/globalFunctions";
import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [experienceData, setExperienceData] = useState([]);
	const [skillsData, setSkillsData] = useState([]);
	const [educationData, setEducationData] = useState([]);
	const [projectData, setProjectData] = useState([]);
	const [blogData, setBlogData] = useState([]);
	const [thumbnailData, setThumbnailData] = useState([]);
	const [isDataLoaded, setIsDataLoaded] = useState(false);

	let isBlogContentFetching = false;

	useEffect(() => {
		fetch();
	}, []);

	const fetch = async () => {
		let baseUrl = "";
		const thumbnailDataURL = process.env.NEXT_PUBLIC_THUMBNAIL_DATA_URL;

		if (typeof window === "undefined") {
			baseUrl = `${process.env.NEXT_PUBLIC_PROTOCOL || "http"}://${
				process.env.NEXT_PUBLIC_HOST
			}`;
		} else {
			baseUrl = "";
		}

		try {
			const data = await fetchData(`${baseUrl}/api/portfolio`);
			const thumbnailList = await fetchData(thumbnailDataURL);

			// Set data in state and save to localStorage
			setExperienceData(data.experiences);
			setSkillsData(data.skills);
			setEducationData(data.education);
			setProjectData(data.projects);
			setBlogData(data.blog);
			setThumbnailData(thumbnailList.resources);
			setIsDataLoaded(true);
		} catch (error) {
			console.error("Failed to fetch data:", error);
		}
	};

	const fetchBlogByID = async (id) => {
		let baseUrl = "";

		if (typeof window === "undefined") {
			baseUrl = `${process.env.NEXT_PUBLIC_PROTOCOL || "http"}://${
				process.env.NEXT_PUBLIC_HOST
			}`;
		} else {
			baseUrl = "";
		}

		try {
			const data = await fetchData(`${baseUrl}/api/blog/${id}`);

			return data;
		} catch (error) {
			console.error(error);
		}
	};

	const fetchBlogContentByID = async (id, update = true) => {
		const blog = blogData.filter((item) => item._id === id)[0];
		if (blog?.content || isBlogContentFetching) return;

		let baseUrl = "";

		if (typeof window === "undefined") {
			baseUrl = `${process.env.NEXT_PUBLIC_PROTOCOL || "http"}://${
				process.env.NEXT_PUBLIC_HOST
			}`;
		} else {
			baseUrl = "";
		}

		try {
			isBlogContentFetching = true;
			const data = await fetchData(`${baseUrl}/api/blog/content/${id}`);
			blog.content = data.content;
			isBlogContentFetching = false;

			if (update) {
				const mergedData = mergeListsById(blogData, [blog]);
				setBlogData(mergedData);
			}

			return data.content;
		} catch (error) {
			isBlogContentFetching = false;
			console.error(error);
		}
	};

	const setBlog = (data) => {
		setBlogData(data);
	};

	return (
		<DataContext.Provider
			value={{
				experienceData,
				skillsData,
				educationData,
				projectData,
				blogData,
				thumbnailData,
				isDataLoaded,
				fetchBlogContentByID,
				fetchBlogByID,
				setBlog,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export const useDataContext = () => useContext(DataContext);
