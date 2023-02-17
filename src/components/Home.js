import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import * as React from "react";
import initials from "../static/images/initialsSVG2.svg";
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
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

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
  typography: {
    fontFamily: ["courier"].join(","),
    color: "white",
  },
});

const Home = () => {
  // particlets options on background
  const options = {
    background: {
      color: "#000000",
      opacity: 0.1,
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.5,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: true,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 1000,
        },
        value: 10,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
  };
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container sx={styles.sx.HomeContainer}>
        <Particles options={options} init={particlesInit} />
        <Projects theme={theme} />
        <Container sx={styles.sx.LogoContainer}>
          {/* <img
            className="logo"
            src={initials}
            alt={"logo"}
            width="auto"
            height="auto"
            styles={styles.sx.Logo}
          /> */}
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
