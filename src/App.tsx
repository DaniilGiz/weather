import "./App.css";

import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";

import { useAppDispatch } from "./hooks";
import { appRoutesArray } from "./helpers/default";
import { addCardFromLocalStorage, getCardList } from "./redux/weatherCards";

import { GlobalLayout } from "./layouts/globalLayout/globalLayout";
import { getCard } from "./redux/weatherDetailInfo";
import { useUserLocation } from "./hooks/useUserLocation";

const App = () => {
	const dispatch = useAppDispatch();
	const userLocation = useUserLocation();
	const history = useNavigate();

	useEffect(() => {
		if (userLocation) {
			// dispatch(getCard(userLocation.city));
			history(`/?city=${userLocation.city}`);
		}
	}, [userLocation]);

	return (
		<GlobalLayout>
			<Routes>
				{appRoutesArray.map((route) => {
					const Component = route.component;

					return <Route path={route.link} key={route.link} element={
						<Component />
					} />;
				})}
			</Routes>
		</GlobalLayout>

	);
};

export default App;
