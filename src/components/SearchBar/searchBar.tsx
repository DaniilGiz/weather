import { Search } from "@mui/icons-material";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { cities } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { errorMessage } from "../../redux/weatherCards";
import { getCard } from "../../redux/weatherDetailInfo";
import { errorMessageStyle } from "./searchBar.styles";

export const SearchBar: React.FC = () => {
    const message = useAppSelector(errorMessage);
    const dispatch = useAppDispatch();
    const [searchText, setSearchText] = useState<string>("");

    const handleSearch = () => {
        dispatch(getCard(searchText));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" && searchText.length > 3) {
            handleSearch();
        }
    };

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string | null) => {
        if (newValue) {
            setSearchText(newValue);
            dispatch(getCard(newValue));
        }
    };

    return (
        <Autocomplete
            freeSolo
            selectOnFocus
            autoHighlight={true}
            disableClearable={true}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            sx={{ width: "100%", maxWidth: "300px" }}
            options={cities}
            inputValue={searchText}
            onInputChange={(_, value) => setSearchText(value)}
            renderInput={(params) => (
                <Box position="relative">
                    <TextField
                        {...params}
                        placeholder="Search by city"
                        variant="standard"
                        // onKeyDown={handleKeyDown}
                        InputProps={{
                            ...params.InputProps,
                            sx: {
                                color: "#fff",
                                "&:before": {
                                    borderBottomColor: "#ffffff96"
                                },
                                "&:after": {
                                    borderBottomColor: "#2f3649"
                                },
                                "&:hover:not(.Mui-disabled, .Mui-error):before": {
                                    borderBottomColor: "#fff"
                                }
                            },
                            endAdornment: (
                                <>
                                    <Search
                                        className="search-icon"
                                        onClick={handleSearch}
                                        sx={{ cursor: "pointer", color: "#fff" }}
                                    />
                                        {params.InputProps.endAdornment}
                                    </>
                            )
                        }}
                    />
                    <Typography
                        sx={{
                            ...errorMessageStyle,
                            opacity: message ? 1 : 0
                        }}
                        variant="body1"
                    >
                        {message}
                    </Typography>
                </Box>
            )}
        />
    );
};
