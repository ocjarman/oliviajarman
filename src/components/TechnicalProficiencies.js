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
import typescript from "../static/images/typescript.png";
import { Typography, Container } from "@mui/material";

const TechnicalProficiencies = ({ theme }) => {
  return (
    <Container
      sx={{
        display: "flex",
        // flexDirection: "column",

        marginTop: "2rem",
        width: "auto",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "2rem",
          border: "1px solid gainsboro",
        }}
      >
        <Typography variant="h5" component="h6" sx={{ marginTop: "3%" }}>
          Languages
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <img src={javascript} alt={"js"} height="90vh" />
          <img src={typescript} alt={"js"} height="90vh" />
          <img src={cssLogo} alt={"css"} height="90vh" />
          <img src={html5} alt={"html"} height="90vh" />
        </Container>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid gainsboro",
          margin: "2rem",
        }}
      >
        {" "}
        <Typography variant="h5" component="h6" sx={{ marginTop: "3%" }}>
          Frameworks
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <img src={reactlogo} alt={"react"} height="90vh" />
          <img src={nodejs} alt={"react"} height="90vh" />
          <img src={firebase} alt={"firebase"} height="90vh" />
          <img src={psql} alt={"firebase"} height="90vh" />
        </Container>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "2rem",
          border: "1px solid gainsboro",
        }}
      >
        {" "}
        <Typography variant="h5" component="h6" sx={{ marginTop: "3%" }}>
          Libraries
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <img src={muilogo} alt={"mui"} height="90vh" />
          <img src={reduxlogo} alt={"redux"} height="90vh" />
          <img src={sequelize} alt={"firebase"} height="90vh" />
        </Container>
      </Container>
    </Container>
  );
};

export default TechnicalProficiencies;
