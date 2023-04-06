import { theme } from "@/styles/theme";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React, { FC } from "react";
import PrimaryButton from "./Buttons/PrimaryButton";
import Divider from "@mui/material/Divider";

type NavItem = {
  name: string;
  href: string;
};
interface IProps {
  handleDrawerToggle: () => void;
  navItems: Array<NavItem>;
  authNavItems: Array<NavItem>;
  drawerWidth: number;
  mobileOpen: boolean;
  navButtonTextColor: string;
}

const MobileDrawer: FC<IProps> = ({
  authNavItems,
  drawerWidth,
  handleDrawerToggle,
  mobileOpen,
  navItems,
  navButtonTextColor,
}) => {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Avatar sx={{ my: 2, height: "6rem", width: "6rem", mx: "auto" }} />
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton href={item.href} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        paddingTop={3}
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap={2}
      >
        {authNavItems.map((link, i) =>
          link.name === "Log in" ? (
            <Button
              fullWidth
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
              fullWidth
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
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default MobileDrawer;
