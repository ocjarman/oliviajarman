import React from "react";
import { Container, Link, Typography } from "@mui/material";
import RRR from "../static/images/RRR.png";
import SITB from "../static/images/SITB.png";
import "/Users/oliviafsa/ojarman_personalsite/src/App.css";
import topBarLogo from "../static/images/codenames.svg";
import styles from "./Projects.styles";

const Projects = () => {
  return (
    <Container sx={styles.sx.OuterContainer}>
      <Typography variant="h5" component="h5">
        NOTABLE PROJECTS
      </Typography>

      <Container sx={styles.sx.ProjectIcons}>
        <Link href="https://rightroundrecords.us">
          <img
            src={RRR}
            alt={"logo"}
            width="auto"
            className="App-logo"
            style={{ backgroundColor: "white", borderRadius: "50%" }}
          />
        </Link>
        <Link href="https://ocjarman.github.io/trivia_frontend/">
          {" "}
          <img src={SITB} alt={"logo"} className="sitb-color" />
        </Link>
        <Link href="https://codenames-0nt7.onrender.com/">
          {" "}
          <img src={topBarLogo} alt={"logo"} className="sitb-color" />
        </Link>
      </Container>
    </Container>
  );
};

export default Projects;
