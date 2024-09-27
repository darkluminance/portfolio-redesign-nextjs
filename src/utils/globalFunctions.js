export const parseDateString = (dateString) => {
	const [month, year] = dateString.split(", ");
	return new Date(`${month} 1, ${year}`);
};

export const fetchData = async (url) => {
	const ret = await fetch(url);
	const res = await ret.json();
	return res.data;
};
