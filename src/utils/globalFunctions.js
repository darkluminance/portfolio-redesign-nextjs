export const parseDateString = (dateString) => {
	const [month, year] = dateString.split(", ");
	return new Date(`${month} 1, ${year}`);
};

export const fetchData = async (url) => {
	const ret = await fetch(url);
	const res = await ret.json();
	return res.data ? res.data : res;
};

export const fetchImgData = async (data) => {
	let thumbnailUrl = {};
	const deviceWidth = window.innerWidth;
	const projectThumbnailSize = Math.floor(deviceWidth / 2);

	data.forEach((element) => {
		const key = element.public_id.slice(9);

		thumbnailUrl[key] =
			"https://res.cloudinary.com/dwyosqxlr/image/upload/c_thumb,w_" +
			projectThumbnailSize +
			"/v" +
			element.version +
			"/" +
			element.public_id +
			"." +
			element.format;
	});

	return thumbnailUrl;
};
