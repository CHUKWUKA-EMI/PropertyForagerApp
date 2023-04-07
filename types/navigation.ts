type NavItem = {
  name: string;
  href: string;
};

interface INavBarProps {
  handleDrawerToggle: () => void;
  navItems: Array<NavItem>;
  authNavItems: Array<NavItem>;
  navButtonTextColor: string;
}

interface IMobileDrawerProps extends INavBarProps {
  drawerWidth: number;
  mobileOpen: boolean;
}
