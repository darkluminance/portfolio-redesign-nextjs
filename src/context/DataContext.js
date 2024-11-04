// context/DataContext.js
import { fetchData } from "@/utils/globalFunctions";
import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [experienceData, setExperienceData] = useState([]);
	const [skillsData, setSkillsData] = useState([]);
	const [educationData, setEducationData] = useState([]);
	const [projectData, setProjectData] = useState([]);
	const [thumbnailData, setThumbnailData] = useState([]);
	const [isDataLoaded, setIsDataLoaded] = useState(false);

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
			setThumbnailData(thumbnailList.resources);
			setIsDataLoaded(true);
		} catch (error) {
			console.error("Failed to fetch data:", error);
		}
	};

	return (
		<DataContext.Provider
			value={{
				experienceData,
				skillsData,
				educationData,
				projectData,
				thumbnailData,
				isDataLoaded,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export const useDataContext = () => useContext(DataContext);
