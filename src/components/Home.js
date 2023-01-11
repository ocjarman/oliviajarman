import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import * as React from "react";
import initials from "../static/images/initialsNavy.png";
import styles from "./Home.styles";
import Projects from "./Projects";
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm";
import MiniDrawer from "./MiniDrawer";
import About from "./About";

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
});

const Home = () => {
  const showForm = useSelector((state) => state.contact.showForm);
  const showAbout = useSelector((state) => state.contact.showAbout);

  return (
    <ThemeProvider theme={theme}>
      <MiniDrawer theme={theme} />
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
          {showForm && <ContactForm theme={theme} />}
          {showAbout && <About theme={theme} />}
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
