import axios from "axios";
import { API_URL, API_KEY } from "../helpers/service";

export const externalApi = axios.create({
	baseURL: API_URL
	// timeout: 1000,
	// headers: { 'X-Custom-Header': 'foobar' }
});

export const getCurrentWeather = (cityName: string) => {
	const res = externalApi.get(`/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
	return res;
};

export const getWeatherHours = (lat: number, lon: number) => {
	const res = externalApi.get(`/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=8&appid=${API_KEY}`);
	return res;
};

export const getWeatherWeek = (city: string) => {
	const res = externalApi.get(`/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
	return res;
};
