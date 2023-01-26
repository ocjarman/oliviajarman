import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import * as React from "react";
import initials from "../static/images/initialsNavy.png";
import styles from "./Home.styles";
import Projects from "./Projects";
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm";
import MiniDrawer from "./MiniDrawer";
import About from "./About";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import { setShowForm, setShowAbout } from "../store/contactSlice";
import { useDispatch } from "react-redux";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#F5E5E5",
      main: "#10134B",
      dark: "#10134B",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#10134B",
      contrastText: "#000",
    },
  },
});

const Home = () => {
  const showForm = useSelector((state) => state.contact.showForm);
  const showAbout = useSelector((state) => state.contact.showAbout);

  const dispatch = useDispatch();

  const toggleForm = () => {
    dispatch(setShowForm());
  };
  const toggleAbout = () => {
    dispatch(setShowAbout());
  };
  return (
    <ThemeProvider theme={theme}>
      <Container sx={styles.sx.HomeContainer} maxWidth={false}>
        <MiniDrawer theme={theme} />
        <Projects theme={theme} />
        <Container sx={styles.sx.LogoContainer}>
          <img
            src={initials}
            alt={"logo"}
            width="300vh"
            height="300vh"
            styles={styles.sx.Logo}
          />
          <h2>OLIVIA JARMAN</h2>
          <h5>SOFTWARE ENGINEER | FULLSTACK DEVELOPER</h5>
          <List sx={{ display: "flex", border: "2px solid red" }}>
            <ListItem
              sx={{
                display: "flex",
              }}
              onClick={toggleAbout}
            >
              <ListItemButton onClick={toggleAbout}>
                <ListItemIcon
                  onClick={toggleAbout}
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    color: "#10134B",
                  }}
                >
                  <PersonIcon style={styles.sx.GitHubIcon} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ display: "flex" }} onClick={toggleForm}>
              <ListItemButton onClick={toggleForm}>
                <ListItemIcon
                  onClick={toggleForm}
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    gap: 3,
                    color: "#10134B",
                  }}
                >
                  <EmailIcon style={styles.sx.GitHubIcon} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ display: "flex" }}>
              <ListItemButton href="https://www.linkedin.com/in/oliviajarman/">
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    gap: 3,
                    color: "#10134B",
                  }}
                >
                  <LinkedInIcon style={styles.sx.GitHubIcon} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ display: "flex" }}>
              <ListItemButton href="https://www.instagram.com/livcath/?hl=en">
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    gap: 3,
                    color: "#10134B",
                  }}
                >
                  <InstagramIcon style={styles.sx.GitHubIcon} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ display: "flex" }}>
              <ListItemButton href="https://www.instagram.com/livcath/?hl=en">
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    gap: 3,
                    color: "#10134B",
                  }}
                >
                  <Link href="https://github.com/ocjarman">
                    <GitHubIcon style={styles.sx.GitHubIcon} />
                  </Link>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
          {showForm && <ContactForm theme={theme} />}
          {showAbout && <About theme={theme} />}
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
