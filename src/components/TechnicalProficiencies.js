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
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "auto",
  lineHeight: "60px",
  marginTop: "40%",
  width: "17.5rem",
}));

const TechnicalProficiencies = ({ theme }) => {
  return (
    <Container
      theme={theme}
      item
      xs={6}
      sx={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            bgcolor: "background.default",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            // border: "5px solid red",
          }}
        >
          <Item
            elevation={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              padding: "2rem",
            }}
          >
            <Typography variant="h5" component="h6" sx={{ marginTop: "3%" }}>
              Languages
            </Typography>
            <Container>
              <img src={javascript} alt={"js"} height="90vh" />
              <img src={typescript} alt={"js"} height="90vh" />
              <img src={cssLogo} alt={"css"} height="90vh" />
              <img src={html5} alt={"html"} height="90vh" />
            </Container>
          </Item>
          <Item
            elevation={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              padding: "2rem",
            }}
          >
            <Typography variant="h5" component="h6" sx={{ marginTop: "3%" }}>
              Frameworks
            </Typography>
            <Container>
              <img src={reactlogo} alt={"react"} height="90vh" />
              <img src={nodejs} alt={"react"} height="90vh" />
              <img src={firebase} alt={"firebase"} height="90vh" />
              <img src={psql} alt={"firebase"} height="90vh" />
            </Container>
          </Item>
          <Item
            elevation={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              padding: "2rem",
            }}
          >
            <Typography variant="h5" component="h6" sx={{ marginTop: "3%" }}>
              Libraries
            </Typography>
            <Container>
              <img src={muilogo} alt={"mui"} height="90vh" />
              <img src={reduxlogo} alt={"redux"} height="90vh" />
              <img src={sequelize} alt={"firebase"} height="90vh" />
            </Container>
          </Item>
        </Box>
      </ThemeProvider>
    </Container>
    // ))}
    // </Grid>
  );
};

export default TechnicalProficiencies;
