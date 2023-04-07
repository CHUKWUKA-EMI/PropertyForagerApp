import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import SecondaryButton from "./Buttons/SecondaryButton";

const LatestProperties = () => {
  return (
    <Box sx={{ py: 2, px: 6 }}>
      <Box
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        <Box>
          <Typography
            textAlign="center"
            fontWeight={500}
            variant="h3"
            component="h2"
          >
            Latest Properties
          </Typography>
          <Typography textAlign="center">Coming soon...</Typography>
        </Box>

        <SecondaryButton disableElevation variant="contained">
          View All Properties
        </SecondaryButton>
      </Box>
    </Box>
  );
};

export default LatestProperties;
