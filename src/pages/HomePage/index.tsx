import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";

import { useAppSelector, useAppDispatch } from "../../hooks";

import CardComponent from "../../components/Card";

import {
	selectCard,
	setErrorMessage,
	errorMessage,
	getCardList
} from "../../redux/weatherCards";
import { CardInterface } from "../../redux/weatherDetailInfo";
import CardPage from "../CardPage";

const HomePage = () => {
	const cards = useAppSelector(selectCard);
	const message = useAppSelector(errorMessage);

	const dispatch = useAppDispatch();

	const [cityName, setCityName] = useState("");

	const handlerAddCard = (cityName: string, errorMessage: string) => {
		dispatch(setErrorMessage(errorMessage));
		dispatch(getCardList(cityName));
	};

	const handlerBtnAddCard = () => {
		if (cityName) {
			handlerAddCard(cityName, "");
		} else {
			dispatch(setErrorMessage("Ввидите название города"));
		}
	};

	const handlerKeyUpAddCard = (e: { code: string }) => {
		if (e.code === "Enter" && cityName) {
			handlerAddCard(cityName, "");
		} else if (!cityName && e.code === "Enter") {
			dispatch(setErrorMessage("Ввидите название города"));
		}
	};

	return (
		<Box sx={{
			position: "absolute",
			width: "100%",
			bottom: 0,
			left: 0,
			right: 0
		}}>
			<CardPage/>
		</Box>
	);
};

export default HomePage;
