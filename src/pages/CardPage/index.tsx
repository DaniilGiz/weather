import React, { FC, useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

import { getWeatherWeek } from "../../Api/externalApi";
import { useAppDispatch, useAppSelector, useQuery } from "../../hooks/index";

import { cardState, getCard } from "../../redux/weatherDetailInfo";
import { cardPageWrapper, loadingStyles } from "./cardPage.styles";
import { WeatherCard, WeatherInfo } from "./weatherCard/weatherCard";
import { useParams, useSearchParams } from "react-router-dom";

const CardPage: FC = () => {
	const dispatch = useAppDispatch();
	const dataCard = useAppSelector(cardState);
	const [searchParam] = useSearchParams();
	const city = searchParam.get("city");

	const [forecast, setForecast] = useState<WeatherInfo[]>([]);

	useEffect(() => {
		if (city) {
			dispatch(getCard(city));
		}
	}, [city]);

	useEffect(() => {
		if (dataCard) {
			getWeatherWeek(dataCard.name)
				.then((res) => {
					const forecast = res.data.list.map((item: any) => ({
						date: new Date(item.dt_txt).getDay(),
						temperature: item.main.temp,
						description: item.weather[0].description,
						icon: item.weather[0].icon
					})).filter((item: WeatherInfo, index: number) => index % 8 === 0);

					setForecast(forecast);
				})
				.catch((err) => console.log(err));
		}
	}, [dataCard]);

	return (
		<Box sx={cardPageWrapper}>
			{!dataCard && !forecast.length ?
				(
					<Box sx={loadingStyles}>
						<CircularProgress/>
					</Box>
				) :
				(
					<>
						{forecast.map((item: WeatherInfo, index: number) => (
							<WeatherCard key={index} {...item}/>
						))}
					</>
				)
			}
		</Box>
	);
};

export default CardPage;
