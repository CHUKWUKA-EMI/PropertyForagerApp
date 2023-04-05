import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Head from "next/head";
import { theme } from "@/styles/theme";
import CustomLinkComponent from "./CustomLinkComponent";
import { Avatar } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "/login" },
];

interface IProps extends React.PropsWithChildren {
  pageTitle: string;
}

export default function Layout({ children, pageTitle }: IProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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
    </Box>
  );

  return (
    <>
      <Head>
        <title>{`${pageTitle} | Property Forager`}</title>
        <meta
          name="description"
          content="Find your ideal home with Property Forager"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar sx={{ py: 1 }} elevation={0} component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              fontSize="20px"
              fontWeight="bold"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <CustomLinkComponent
                sx={{ color: "white", textDecoration: "none" }}
                href="/"
              >
                Property Forager
              </CustomLinkComponent>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
              {navItems.map((item, i) => (
                <CustomLinkComponent
                  key={i}
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "18px",
                    letterSpacing: "1px",
                    textTransform: "none",
                  }}
                  href={item.href}
                >
                  {item.name}
                </CustomLinkComponent>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

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
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </>
  );
}
