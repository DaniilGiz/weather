export const getCurrentDate = (sec: number | undefined) => {
	if (!sec) {
		return new Date();
	}

	return new Date(sec * 1000);
};

export const getCurrentDay = (day: number) => {
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return days[day];
};

export const getCurrentMonth = (month: number) => {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"];

	return months[month];
};

export const getCurrentTime = (sec: number) => {
	const currentDate = getCurrentDate(sec);
	const hours = currentDate.getHours();
	const minutes = currentDate.getMinutes();
	const time = (hours < 10 ? `0${hours}` : hours) + ":" + (minutes < 10 ? `0${minutes}` : minutes);
	return time;
};

export const getCurrentStringDate = () => {
	const newDate = new Date();
	const date = newDate.getDate();
	const month = getCurrentMonth(newDate.getMonth());
	const year = newDate.getFullYear();
	const day = getCurrentDay(newDate.getDay());

	return `${day}, ${date} ${month} ${year}`;
};
