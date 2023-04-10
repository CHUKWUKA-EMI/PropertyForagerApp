import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

const StyledSearchInput = styled(InputBase)(({ theme }) => ({
  width: "100%",
  padding: "0.5rem",
  "& .MuiInputBase-input": {
    "::placeholder": {
      color: "#212121",
      fontWeight: 600,
    },
  },
}));

const StyledSearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  borderRadius: "3rem",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 1,
  border: "1px solid #212121",
  padding: theme.spacing(0.5),
  paddingLeft: theme.spacing(2),
}));

const Search = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography fontWeight={400} variant="body1" component="p">
        We believe there&apos;s a perfect home for everybody, no matter the
        budget.
        <br /> Let us help you find your dream home
      </Typography>
      <StyledSearchBox
        onSubmit={(e) => {
          e.preventDefault();
        }}
        component="form"
      >
        <SearchIcon
          sx={{
            color: "#212121",
            width: "2rem",
            height: "2rem",
          }}
        />
        <StyledSearchInput
          sx={{ width: "100%", ":-moz-placeholder": { color: "red" } }}
          placeholder="Enter a state, city or area"
        />

        <PrimaryButton
          sx={{
            borderRadius: "2rem",
            py: "0.7rem",
            px: "2rem",
            textTransform: "none",
          }}
          size="medium"
          type="submit"
          disableElevation
          variant="contained"
        >
          Search
        </PrimaryButton>
      </StyledSearchBox>
    </Box>
  );
};

export default Search;
