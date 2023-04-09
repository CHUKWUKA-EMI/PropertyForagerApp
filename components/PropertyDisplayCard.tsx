import React, { FC } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import LocationIcon from "@mui/icons-material/LocationOnOutlined";
import { PropertyOverview, PropertyPriceType } from "@/types/property";

const PropertyDisplayCard: FC<PropertyOverview> = (props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        cursor: "pointer",
        ":hover": {
          transform: "scale(1.03)",
          transitionProperty: "transform",
          transitionTimingFunction: theme.transitions.easing.easeInOut,
          transitionDuration: "150ms",
        },
      }}
    >
      <Box
        sx={{
          backgroundImage: `url("${props.images[0].imageURL}")`,
          width: "100%",
          height: "250px",
          objectFit: "scale-down",
          borderRadius: "0.5rem",
          backgroundSize: "cover",
        }}
      ></Box>
      <Paper
        elevation={4}
        sx={{
          width: "95%",
          height: "fit-content",
          mx: "auto",
          mt: -6,
          borderRadius: "0.5rem",
          padding: "1rem",
        }}
      >
        <Typography fontWeight={500} variant="h4" component="h4">
          {props.title}
        </Typography>
        {props.description && (
          <Typography variant="body1" component="p" my={2}>
            {props.description}
          </Typography>
        )}
        <Typography
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            padding: "0.4rem",
            borderRadius: "0.3rem",
            width: "fit-content",
          }}
          my={2}
          variant="h6"
          fontWeight={500}
        >
          ₦{props.price.toLocaleString("en")} per{" "}
          {props.priceType == PropertyPriceType.PerAnnum ? "annum" : "month"}
        </Typography>
        <Stack
          my={2}
          justifyContent="space-between"
          spacing={2}
          sx={{
            border: `3px solid ${theme.palette.grey[300]}`,
            borderRadius: "5px",
            padding: "10px",
          }}
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Typography display="flex" flexDirection="column" alignItems="center">
            <Typography
              color={theme.palette.grey[800]}
              fontWeight={500}
              variant="body1"
              component="span"
            >
              Bedrooms
            </Typography>
            <Typography fontWeight={700} variant="body1" component="strong">
              {props.numberOfBedrooms}
            </Typography>
          </Typography>
          <Typography display="flex" flexDirection="column" alignItems="center">
            <Typography
              color={theme.palette.grey[800]}
              fontWeight={500}
              variant="body1"
              component="span"
            >
              Bathrooms
            </Typography>
            <Typography fontWeight={700} variant="body1" component="strong">
              {props.numberOfBathrooms}
            </Typography>
          </Typography>
          <Typography
            sx={{
              display: !props.totalLandArea ? "none" : "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              color={theme.palette.grey[800]}
              fontWeight={500}
              variant="body1"
              component="span"
            >
              Total Space
            </Typography>
            <Typography fontWeight={700} variant="body1" component="strong">
              {props.totalLandArea} Sq Ft
            </Typography>
          </Typography>
        </Stack>
        <Typography gap={1} display="flex" alignItems="center" mt={1}>
          <LocationIcon color="primary" />{" "}
          <Typography fontWeight={500} variant="body1" component="strong">
            {props.street},{props.locality}
          </Typography>
        </Typography>
      </Paper>
    </Box>
  );
};

export default PropertyDisplayCard;
