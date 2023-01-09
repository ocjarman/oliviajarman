import React from "react";
import { Button, Container } from "@mui/material";
import RRR from "../static/images/RRR.png";
import SITB from "../static/images/SITB.png";
import recordSpin from "/Users/oliviafsa/ojarman_personalsite/src/App.css";
const Projects = ({ theme }) => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "30vh",
          marginTop: "10vh",
          gap: "2vw",
          color: `${theme.palette.primary.light}`,
        }}
      >
        {/* <h3>Projects</h3> */}
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "20vh",
          gap: "2vw",
        }}
      >
        <Button>
          <img
            src={RRR}
            alt={"logo"}
            width="100vh"
            height="auto"
            className={recordSpin}
            style={{
              animation: `spin 5s linear infinite`,
              transform: `rotate(${Math.floor(Math.random() * 361)}deg)`,
            }}
          />
        </Button>
        <Button>
          {" "}
          <img src={SITB} alt={"logo"} width="130vh" height="auto" />
        </Button>
      </Container>
    </>
  );
};

export default Projects;
