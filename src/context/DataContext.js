import { getBlogContentByID } from "@/services/BlogService";
import { fetchData, getBaseURL } from "@/utils/globalFunctions";
import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [experienceData, setExperienceData] = useState([]);
	const [skillsData, setSkillsData] = useState([]);
	const [educationData, setEducationData] = useState([]);
	const [projectData, setProjectData] = useState([]);
	const [blogContents, setBlogContents] = useState({});
	const [thumbnailData, setThumbnailData] = useState([]);
	const [isDataLoaded, setIsDataLoaded] = useState(false);

	const [baseURL, setBaseURL] = useState("");

	let isBlogContentFetching = false;

	useEffect(() => {
		setBaseURL(getBaseURL());
		fetch();
	}, []);

	const fetch = async () => {
		const thumbnailDataURL = process.env.NEXT_PUBLIC_THUMBNAIL_DATA_URL;

		try {
			const data = await fetchData(`${baseURL}/api/portfolio`);
			const thumbnailList = await fetchData(thumbnailDataURL);

			// Set data in state and save to localStorage
			setExperienceData(data.experiences);
			setSkillsData(data.skills);
			setEducationData(data.education);
			setProjectData(data.projects);
			setThumbnailData(thumbnailList.resources);
			setIsDataLoaded(true);
		} catch (error) {
			console.error("Failed to fetch data:", error);
		}
	};

	const fetchBlogContentByID = async (id, update = true) => {
		if (blogContents[id] || isBlogContentFetching) return;

		isBlogContentFetching = true;

		const data = await getBlogContentByID(id, baseURL);
		const contentObject = {
			[id]: data.content,
		};

		setBlogContents({ ...blogContents, ...contentObject });

		isBlogContentFetching = false;

		return data.content;
	};

	return (
		<DataContext.Provider
			value={{
				experienceData,
				skillsData,
				educationData,
				projectData,
				blogContents,
				thumbnailData,
				isDataLoaded,
				fetchBlogContentByID,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export const useDataContext = () => useContext(DataContext);
