import React from "react";
import { Container, Link } from "@mui/material";
import RRR from "../static/images/RRR.png";
import SITB from "../static/images/SITB.png";
import "/Users/oliviafsa/ojarman_personalsite/src/App.css";
import styles from "./Home.styles";
import topBarLogo from "../static/images/codenames.svg";

const Projects = ({ theme }) => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "2%",
          marginTop: "5vh",
          gap: "2vw",
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
          <Link href="https://codenames-0nt7.onrender.com/">
            {" "}
            <img src={topBarLogo} alt={"logo"} className="sitb-color" />
          </Link>
        </Container>
      </Container>
    </>
  );
};

export default Projects;
