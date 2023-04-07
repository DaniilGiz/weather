import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { meridiemStyles, timeStyles } from "./time.styles";

interface ITimeProps {
    time: string;
}

export const Time: FC<ITimeProps> = ({ time }) => {
    const [formattedTime, meridiem] = time.split(" ");
    const [hour, minute] = formattedTime.split(":");

    return (
        <Box display="flex" alignItems="end">
            <Typography
                sx={timeStyles}
                variant="h2"
            >
                    {hour}:{minute}
            </Typography>
            <Typography sx={meridiemStyles}>{meridiem}</Typography>
        </Box>
    );
};
