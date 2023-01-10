import React, { useState } from "react";
import { send } from "emailjs-com";

// import axios from "axios";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";

const ContactForm = ({ theme }) => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  //
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send("service_8buah8p", "template_pl8pv7t", toSend, "YOWFCN-XmxUzehOgQ")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "10%",
        position: "fixed",
      }}
    >
      <Typography sx={{}} variant={"h3"}>
        Contact
      </Typography>

      <form
        id="contact_form"
        style={{
          display: "flex",
          flexDirection: "column",
          placeSelf: "flex-start",
          backgroundColor: `${theme.palette.primary.light}`,
          color: "white",
        }}
      >
        <FormControl required>
          <InputLabel htmlFor="name-input">Your Name</InputLabel>
          <Input
            type="text"
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <FormHelperText id="name-helper-text"></FormHelperText>
        </FormControl>

        <FormControl required>
          <InputLabel htmlFor="email-input">Your Email</InputLabel>
          <Input
            type="text"
            name="reply_to"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <FormHelperText id="email-helper-text"></FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="name-input">Company</InputLabel>
          <Input
            name="company"
            id="company"
            aria-describedby="company-helper-text"
            onChange={handleChange}
          />
          <FormHelperText id="name-helper-text"></FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="phoneNum-input">Your Phone Number</InputLabel>
          <Input
            name="phoneNum"
            id="phoneNum-input"
            aria-describedby="phoneNum-helper-text"
            onChange={handleChange}
          />
          <FormHelperText id="phoneNum-helper-text">
            Please enter phone number with area code.
          </FormHelperText>
        </FormControl>

        <FormControl required>
          <InputLabel htmlFor="message-input">Your message</InputLabel>
          <Input
            type="text"
            name="message"
            value={toSend.message}
            onChange={handleChange}
          />
          <FormHelperText id="message-helper-text"></FormHelperText>
        </FormControl>
        <Button
          size="large"
          sx={{ width: "10vw", height: "5vh" }}
          onClick={handleSubmit}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
