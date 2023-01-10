import React from "react";
import { Button, Container, Link } from "@mui/material";
import RRR from "../static/images/RRR.png";
import SITB from "../static/images/SITB.png";
import "/Users/oliviafsa/ojarman_personalsite/src/App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./Home.styles";

const Projects = ({ theme }) => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "2%",
          marginTop: "10vh",
          gap: "2vw",
          color: `${theme.palette.primary.light}`,
        }}
      >
        <Container
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "85%",
            gap: "2vw",
          }}
        >
          <Link href="https://rightroundrecords.us">
            <img src={RRR} alt={"logo"} width="auto" className="App-logo" />
          </Link>
          <Link href="https://ocjarman.github.io/trivia_frontend/">
            {" "}
            <img src={SITB} alt={"logo"} className="sitb-color" />
          </Link>
          <Link href="https://github.com/ocjarman">
            <GitHubIcon style={styles.sx.GitHubIcon} />
          </Link>
        </Container>
      </Container>
    </>
  );
};

export default Projects;
