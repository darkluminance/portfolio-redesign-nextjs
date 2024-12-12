import { fetchData, getBaseURL } from "@/utils/globalFunctions";

const baseURL = getBaseURL();

export const getBlogByID = async (id: string, baseUrl: string) => {
	try {
		const data = await fetchData(
			`${baseUrl ? baseUrl : baseURL}/api/blog/${id}`
		);

		return data;
	} catch (error) {
		console.error(error);
	}
};

export const getBlogIDFromTextID = async (id: string, baseUrl: string) => {
	try {
		const data = await fetchData(
			`${baseUrl ? baseUrl : baseURL}/api/blog/getID/${id}`
		);

		return data;
	} catch (error) {
		console.error(error);
	}
};

export const getBlogMetadataFromTextID = async (
	id: string,
	baseUrl: string
) => {
	try {
		const data = await fetchData(`${baseUrl}/api/blog/getMetadata/${id}`);

		return data;
	} catch (error) {
		console.error(error);
	}
};
