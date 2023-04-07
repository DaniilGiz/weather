import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCurrentStringDate } from "../../helpers/dateFunc";
import { Time } from "./Time/time";

export const Clock = () => {
    const currentDate = getCurrentStringDate();

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const refreshClock = () => {
        setTime(new Date().toLocaleTimeString());
    };

    useEffect(() => {
        const remainingSeconds = 60 - new Date().getSeconds();
        const timerId = setInterval(refreshClock, remainingSeconds * 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <Box width="100%">
            <Time time={time} />
            <Typography
                sx={{
                    textShadow: "2px 2px 4px black"
                }}
                color="#fff"
            >
                {currentDate}
            </Typography>
        </Box>
    );
};
