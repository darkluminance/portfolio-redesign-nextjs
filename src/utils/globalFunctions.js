export const parseDateString = (dateString) => {
	const [month, year] = dateString.split(", ");
	return new Date(`${month} 1, ${year}`);
};
