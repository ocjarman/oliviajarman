import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { useDispatch, useSelector } from "react-redux";
import { setShowForm, setShowAbout } from "../store/contactSlice";
import PersonIcon from "@mui/icons-material/Person";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const showAbout = useSelector((state) => state.contact.showAbout);
  const showForm = useSelector((state) => state.contact.showForm);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  //   const showForm = useSelector((state) => state.contact.showForm);

  const toggleForm = () => {
    dispatch(setShowForm());
  };
  const toggleAbout = () => {
    dispatch(setShowAbout());
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            backgroundColor: `${theme.palette.primary.dark}`,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
              backgroundColor: `${theme.palette.primary.dark}`,
              marginLeft: ".1%",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            sx={{ display: "flex", padding: "10%" }}
            onClick={toggleAbout}
          >
            <ListItemButton onClick={toggleAbout}>
              <ListItemIcon
                onClick={toggleAbout}
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  gap: 2,
                  color: "#10134B",
                }}
              >
                <PersonIcon /> About
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{ display: "flex", padding: "10%" }}
            onClick={toggleForm}
          >
            <ListItemButton onClick={toggleForm}>
              <ListItemIcon
                onClick={toggleForm}
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  gap: 2,
                  color: "#10134B",
                }}
              >
                <EmailIcon /> Contact Me
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ display: "flex", padding: "10%" }}>
            <ListItemButton href="https://www.linkedin.com/in/oliviajarman/">
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  gap: 2,
                  color: "#10134B",
                }}
              >
                <LinkedInIcon />
                LinkedIn
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ display: "flex", padding: "10%" }}>
            <ListItemButton href="https://www.instagram.com/livcath/?hl=en">
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  gap: 2,
                  color: "#10134B",
                }}
              >
                <InstagramIcon /> Instagram
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
      </Box>
    </Box>
  );
}
