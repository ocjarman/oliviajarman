import React from "react";
import cssLogo from "../static/images/csslogo.png";
import firebase from "../static/images/firebase logo.png";
import html5 from "../static/images/html5.png";
import javascript from "../static/images/javascript.png";
import muilogo from "../static/images/muilogo.png";
import reduxlogo from "../static/images/redux logo.png";
import reactlogo from "../static/images/reactIcon.png";
import psql from "../static/images/psql.png";
import sequelize from "../static/images/sequelize.png";
import nodejs from "../static/images/nodejs.webp";
import { Typography, Container } from "@mui/material";
import styles from "./Technical.styles";
const TechnicalProficiencies = ({ theme }) => {
  return (
    <Container sx={styles.sx.OuterContainer}>
      <Container sx={styles.sx.InnerContainer}>
        <Typography variant="h5" component="h6" sx={{ marginTop: "3%" }}>
          Languages
        </Typography>
        <Container sx={styles.sx.IconContainer}>
          <img src={javascript} alt={"js"} height="90vh" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
            alt={"js"}
            height="70vh"
          />
          <img src={cssLogo} alt={"css"} height="90vh" />
          <img src={html5} alt={"html"} height="90vh" />
        </Container>
      </Container>
      <Container sx={styles.sx.InnerContainer}>
        {" "}
        <Typography variant="h5" component="h6" sx={{ marginTop: "3%" }}>
          Frameworks
        </Typography>
        <Container sx={styles.sx.IconContainer}>
          <img src={reactlogo} alt={"react"} height="90vh" />
          <img src={nodejs} alt={"react"} height="90vh" />
          <img src={firebase} alt={"firebase"} height="90vh" />
          <img src={psql} alt={"firebase"} height="90vh" />
        </Container>
      </Container>
      <Container sx={styles.sx.InnerContainer}>
        {" "}
        <Typography variant="h5" component="h6" sx={{ marginTop: "3%" }}>
          Libraries
        </Typography>
        <Container sx={styles.sx.IconContainer}>
          <img src={muilogo} alt={"mui"} height="90vh" />
          <img src={reduxlogo} alt={"redux"} height="90vh" />
          <img src={sequelize} alt={"firebase"} height="90vh" />
        </Container>
      </Container>
    </Container>
  );
};

export default TechnicalProficiencies;
