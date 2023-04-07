import React, { FC } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { weekdays } from "../../../constants";
import { WeatherIcon } from "../weatherIcon/weatherIcon";
import { dayOfWeekStyles, temperatureStyles, weatherCardStyles, weatherCardTodayStyles } from "./weatherCard.styles";

export interface WeatherInfo {
	date: number;
	temperature: number;
	description: string;
	icon: string;
}

export const WeatherCard: FC<WeatherInfo> = (props) => {
    const { date, temperature, description, icon } = props;

    const currentDay = new Date().getDay();

    return (
        <Box sx={currentDay === date ? weatherCardTodayStyles : weatherCardStyles}>

            {currentDay === date ?
                (
                    <>
                        <Box mr={3}>
                            <WeatherIcon iconCode={icon} style={{ padding: "20px" }}/>
                        </Box>
                        <Box>
                            <Typography component="span" sx={dayOfWeekStyles} fontSize={16}>
                                TODAY
                            </Typography>
                            <Typography sx={temperatureStyles} fontSize={40}>
                                {Math.round(temperature)}&#176;
                            </Typography>
                        </Box>
                    </>
                ) :
                (
                    <>
                        <Typography component="span" sx={dayOfWeekStyles} fontSize={12}>
                            {weekdays[date]}
                        </Typography>
                        <Box my={3}>
                            <WeatherIcon iconCode={icon}/>
                        </Box>
                        <Typography sx={temperatureStyles} fontSize={30}>
                            {Math.round(temperature)}&#176;
                        </Typography>
                    </>
                )
            }
        </Box>
    );
};
