import { Box } from "@mui/material";
import React, { FC } from "react";
import { Header } from "../header/header";
import bgImage from "../../static/layout.jpg";

interface IGlobalLayout {
    headerProps?: any;
    children: React.ReactNode;
}

export const GlobalLayout: FC<IGlobalLayout> = ({ headerProps, children }) => {
    const test = 1;
    return (
        <Box sx={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "100vh",
            height: "100%",
            backgroundPosition: "center"
        }}>
            <Header {...headerProps} />
            <Box>
                {children}
            </Box>
        </Box>
    );
};
