import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import * as React from "react";
import initials from "../static/images/initialsNavy.png";
import styles from "./Home.styles";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import { Link, Button } from "@mui/material";
import instagramIcon from "../static/images/instagramIcon.png";
import linkedIn from "../static/images/linkedIn.png";
import AboutMe from "./AboutMe";
import { Typography } from "@mui/material";
import TechnicalProficiencies from "./TechnicalProficiencies";
import Divider from "@mui/material/Divider";
import github from "../static/images/github.png";

import "./home.css";

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
  return (
    <ThemeProvider theme={theme}>
      <Container sx={styles.sx.HomeContainer} maxWidth={false}>
        <Projects theme={theme} />

        <Container sx={styles.sx.LogoContainer}>
          <img
            className="logo"
            src={initials}
            alt={"logo"}
            width="300vh"
            height="300vh"
            styles={styles.sx.Logo}
          />
          <Typography variant="h3" component="h3">
            OLIVIA JARMAN
          </Typography>

          <Typography
            variant="h5"
            component="h5"
            sx={{
              display: "flex",
              marginTop: "5%",
              justifyContent: "center",
            }}
          >
            SOFTWARE ENGINEER | FULLSTACK DEVELOPER
          </Typography>

          <Container
            sx={{
              display: "flex",
              marginTop: "5%",
              justifyContent: "center",
              maxWidth: "500px",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Button href="https://www.linkedin.com/in/oliviajarman/">
              <img
                src={linkedIn}
                styles={styles.sx.GitHubIcon}
                alt={"linkedin"}
                height="70vh"
              />
            </Button>
            <Divider />
            <Link href="https://www.instagram.com/livcath/?hl=en">
              <img
                src={instagramIcon}
                styles={styles.sx.GitHubIcon}
                alt={"instagram"}
                height="78vh"
              />
            </Link>
            <Divider />
            <Link href="https://github.com/ocjarman">
              <img
                src={github}
                styles={styles.sx.GitHubIcon}
                alt={"linkedin"}
                height="80vh"
                // className="sitb-color"
              />
            </Link>
          </Container>
          <AboutMe />
        </Container>
        <TechnicalProficiencies theme={theme} />

        <ContactForm theme={theme} />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
