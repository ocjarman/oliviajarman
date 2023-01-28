import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import * as React from "react";
import initials from "../static/images/initialsNavy.png";
import styles from "./Home.styles";
import Projects from "./Projects";
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm";
import About from "./About";
import { useDispatch } from "react-redux";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, Button } from "@mui/material";
import instagramIcon from "../static/images/instagramIcon.png";
import linkedIn from "../static/images/linkedIn.png";
import TechnicalProficiencies from "./TechnicalProficiencies";
import AboutMe from "./AboutMe";
import { Typography } from "@mui/material";
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
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <Container sx={styles.sx.HomeContainer} maxWidth={false}>
        <Projects theme={theme} />

        <Container sx={styles.sx.LogoContainer}>
          <img
            src={initials}
            alt={"logo"}
            width="300vh"
            height="300vh"
            styles={styles.sx.Logo}
          />
          <Typography variant="h2" component="h2">
            OLIVIA JARMAN
          </Typography>

          <Typography
            variant="h3"
            component="h3"
            sx={{
              display: "flex",
              margin: "5%",
              justifyContent: "center",
            }}
          >
            SOFTWARE ENGINEER | FULLSTACK DEVELOPER
          </Typography>

          <AboutMe />
          <Container
            sx={{
              display: "flex",
              margin: "10%",
              justifyContent: "center",
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
            <Link href="https://github.com/ocjarman">
              <GitHubIcon style={styles.sx.GitHubIcon} />
            </Link>
            <Link href="https://www.instagram.com/livcath/?hl=en">
              <img
                src={instagramIcon}
                styles={styles.sx.GitHubIcon}
                alt={"instagram"}
                height="80vh"
              />
            </Link>
          </Container>
          <TechnicalProficiencies />
        </Container>
        <ContactForm theme={theme} />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
