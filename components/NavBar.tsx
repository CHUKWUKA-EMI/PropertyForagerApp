import { theme } from "@/styles/theme";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import React, { FC } from "react";
import PrimaryButton from "./Buttons/PrimaryButton";
import Logo from "./Logo";

type NavItem = {
  name: string;
  href: string;
};
interface IProps {
  handleDrawerToggle: () => void;
  navItems: Array<NavItem>;
  authNavItems: Array<NavItem>;
  navButtonTextColor: string;
}

const NavBar: FC<IProps> = ({
  authNavItems,
  handleDrawerToggle,
  navItems,
  navButtonTextColor,
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{ py: 1, backgroundColor: "white" }}
      elevation={2}
      component="nav"
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#212121", fontSize: "2rem" }} />
          </IconButton>
          <Logo />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          {navItems.map((item, i) => (
            <Button
              key={i}
              sx={{
                color: navButtonTextColor,
                fontWeight: "500",
                fontSize: "18px",
                letterSpacing: "2px",
                textTransform: "none",
              }}
            >
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                color="inherit"
                href={item.href}
              >
                {item.name}
              </Link>
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex" } }} gap={2}>
          {authNavItems.map((link, i) =>
            link.name === "Log in" ? (
              <Button
                disableElevation
                variant="contained"
                sx={{
                  color: navButtonTextColor,
                  textTransform: "none",
                  backgroundColor: "rgba(64,87,109,.07)",
                  width: "5rem",
                  px: "0.5rem",
                  ":hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
                key={i}
              >
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  color="inherit"
                  href={link.href}
                >
                  {link.name}
                </Link>
              </Button>
            ) : (
              <PrimaryButton
                sx={{ textTransform: "none", width: "5rem", px: "0.5rem" }}
                disableElevation
                variant="contained"
                key={i}
              >
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  color="inherit"
                  href={link.href}
                >
                  {link.name}
                </Link>
              </PrimaryButton>
            )
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
