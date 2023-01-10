import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./Home.styles";
import HomeIcon from "@mui/icons-material/Home";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { setShowForm } from "../store/contactSlice";

export default function FixedBottomNavigation() {
  const dispatch = useDispatch();
  //   const showForm = useSelector((state) => state.contact.showForm);

  const toggleForm = () => {
    dispatch(setShowForm());
  };

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Container>
          <Link>
            <EmailIcon style={styles.sx.Contact} onClick={toggleForm} />
          </Link>
          <Link href={"/"}>
            <HomeIcon style={styles.sx.Contact} value={"/"} />
          </Link>
          <Link href="https://www.linkedin.com/in/oliviajarman/">
            <LinkedInIcon style={styles.sx.Contact} />
          </Link>
          <Link href="https://www.instagram.com/livcath/?hl=en">
            <InstagramIcon style={styles.sx.Contact} />
          </Link>
        </Container>
      </Paper>
    </Box>
  );
}
