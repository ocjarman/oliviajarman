import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import * as React from "react";
import initials from "../static/images/initialsNavy.png";
import styles from "./Home.styles";
import Projects from "./Projects";
import BottomNav from "./BottomNav";
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm";

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
  const showForm = useSelector((state) => state.contact.showForm);

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
        <Container>{showForm && <ContactForm />}</Container>

        {/* <Button variant="contained">hello</Button> */}
      </Container>
      <BottomNav theme={theme} />
    </ThemeProvider>
  );
};

export default Home;
