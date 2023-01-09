import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Container } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import initials from "../static/images/initialsNavy.png";
import styles from "./Home.styles";
import Projects from "./Projects";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#365f7s",
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
        </Container>
        {/* <Button variant="contained">hello</Button> */}
      </Container>
    </ThemeProvider>
  );
};

export default Home;
