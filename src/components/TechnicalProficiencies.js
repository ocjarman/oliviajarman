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
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "auto",
  lineHeight: "60px",
  marginTop: "40%",
}));
const lightTheme = createTheme({ palette: { mode: "light" } });

const TechnicalProficiencies = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {[lightTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr 1fr" },
                gap: 2,
              }}
            >
              <Item elevation={2}>
                <Typography
                  variant="h5"
                  component="h6"
                  sx={{ marginTop: "3%" }}
                >
                  Languages
                </Typography>
                <img src={cssLogo} alt={"css"} height="70vh" />
                <img src={javascript} alt={"js"} height="70vh" />
                <img src={html5} alt={"html"} height="70vh" />
              </Item>
              <Item elevation={2}>
                <Typography
                  variant="h5"
                  component="h6"
                  sx={{ marginTop: "3%" }}
                >
                  Frameworks
                </Typography>
                <img src={reactlogo} alt={"react"} height="70vh" />
                <img src={nodejs} alt={"react"} height="70vh" />
                <img src={firebase} alt={"firebase"} height="70vh" />
                <img src={psql} alt={"firebase"} height="70vh" />
              </Item>
              <Item elevation={2}>
                <Typography
                  variant="h5"
                  component="h6"
                  sx={{ marginTop: "3%" }}
                >
                  Libraries
                </Typography>
                <img src={muilogo} alt={"mui"} height="70vh" />
                <img src={reduxlogo} alt={"redux"} height="70vh" />
                <img src={sequelize} alt={"firebase"} height="70vh" />
              </Item>
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>

    // <Container
    //   maxWidth={false}
    //   sx={{
    //     textAlign: "center",
    //     marginTop: "5%",
    //     display: "flex",
    //     flexDirection: "column",
    //     flexWrap: "wrap",
    //   }}
    // >
    //   <Typography variant="h5" component="h5">
    //     TECH STACK
    //   </Typography>

    //   <Container sx={{ display: "flex", flexDirection: "column" }}>
    //     <Container>
    //       <Typography variant="h5" component="h6" sx={{ marginTop: "3%" }}>
    //         Languages
    //       </Typography>
    //       <img src={cssLogo} alt={"css"} height="40vh" />
    //       <img src={javascript} alt={"js"} height="40vh" />
    //       <img src={html5} alt={"html"} height="40vh" />
    //     </Container>
    //     <Container>
    //       <Typography variant="h5" component="h6" sx={{ marginTop: "3%" }}>
    //         Frameworks
    //       </Typography>
    //       <img src={reactlogo} alt={"react"} height="40vh" />
    //       <img src={nodejs} alt={"react"} height="40vh" />
    //       <img src={firebase} alt={"firebase"} height="40vh" />
    //       <img src={psql} alt={"firebase"} height="40vh" />
    //     </Container>
    //     <Container>
    //       <Typography variant="h5" component="h6" sx={{ marginTop: "3%" }}>
    //         Libraries
    //       </Typography>
    //       <img src={muilogo} alt={"mui"} height="40vh" />
    //       <img src={reduxlogo} alt={"redux"} height="40vh" />
    //       <img src={sequelize} alt={"firebase"} height="40vh" />
    //     </Container>
    //   </Container>
    // </Container>
  );
};

export default TechnicalProficiencies;
