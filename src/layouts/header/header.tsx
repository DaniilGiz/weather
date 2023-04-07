import { Typography } from "@mui/material";
import React, { Box } from "@mui/system";
import { FC } from "react";
import { Clock } from "../../components/Clock/clock";
import { SearchBar } from "../../components/SearchBar/searchBar";
import { useAppSelector } from "../../hooks";
import { selectCard } from "../../redux/weatherCards";
import { cardState } from "../../redux/weatherDetailInfo";
import { headerWrapper, locationWrapper } from "./header.styles";

interface IHeader {
    title?: string;
}

export const Header: FC<IHeader> = (props) => {
    const { title = "Weather App" } = props;
	const card = useAppSelector(cardState);

    return (
        <Box sx={headerWrapper}>
            <Clock />
            <SearchBar />
            <Box sx={locationWrapper}>
                {card && (
                    <>
                        <Typography sx={locationWrapper.city}>
                            {card.name}
                        </Typography>
                        <Typography sx={locationWrapper.country}>
                            {card.sys.country}
                        </Typography>
                    </>
                )}
            </Box>
        </Box>
    );
};
