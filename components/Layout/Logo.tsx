import React from "react";
import logo from "../../public/PropertyForager.jpeg";
import { Box, Typography } from "@mui/material";
import CustomLinkComponent from "../CustomLinkComponent";
import Image from "next/image";
import { theme } from "@/styles/theme";

const Logo = () => {
  return (
    <Box fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>
      <CustomLinkComponent
        sx={{
          color: "white",
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        href="/"
      >
        <Image width={100} height={40} src={logo} alt="Logo" />
        <Typography
          fontWeight={900}
          color={theme.palette.primary.main}
          component="span"
          sx={{
            fontSize: { xs: "12px", sm: "14px" },
            fontFamily: "sans-serif",
          }}
        >
          Property Forager
        </Typography>
      </CustomLinkComponent>
    </Box>
  );
};

export default Logo;
