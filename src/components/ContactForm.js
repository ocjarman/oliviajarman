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
        bottom: 0,
        top: "8vh",
        alignItems: "center",
      }}
    >
      <form
        id="contact_form"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20rem",
          borderRadius: "5%",
          border: `1px solid white`,
          color: "white",
          padding: "2%",
          marginTop: "5rem",
          marginBottom: "5rem",

          gap: 5,
        }}
      >
        <Typography
          sx={{
            color: "white",
            padding: "2%",
            placeSelf: "center",
          }}
          variant={"h4"}
        >
          Get in touch
        </Typography>
        <FormControl required sx={{ color: "white" }}>
          <InputLabel sx={{ color: "white" }} htmlFor="name-input">
            Your Name
          </InputLabel>
          <Input
            type="text"
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
            sx={{
              color: "white",
              borderBottom: "1px solid white",
              width: "30vh",
            }}
          />
          <FormHelperText
            sx={{ color: "white" }}
            id="name-helper-text"
          ></FormHelperText>
        </FormControl>

        <FormControl required sx={{ color: "white" }}>
          <InputLabel sx={{ color: "white" }} htmlFor="email-input">
            Your Email
          </InputLabel>
          <Input
            type="text"
            name="reply_to"
            value={toSend.reply_to}
            onChange={handleChange}
            sx={{
              color: "white",
              borderBottom: "1px solid white",
              width: "30vh",
            }}
          />
          <FormHelperText
            sx={{ color: "white" }}
            id="email-helper-text"
          ></FormHelperText>
        </FormControl>
        <FormControl sx={{ color: "white" }}>
          <InputLabel sx={{ color: "white" }} htmlFor="name-input">
            Company
          </InputLabel>
          <Input
            name="company"
            id="company"
            aria-describedby="company-helper-text"
            onChange={handleChange}
            sx={{
              color: "white",
              borderBottom: "1px solid white",
              width: "30vh",
            }}
          />
          <FormHelperText id="name-helper-text"></FormHelperText>
        </FormControl>

        <FormControl sx={{ color: "white" }}>
          <InputLabel sx={{ color: "white" }} htmlFor="phoneNum-input">
            Your Phone Number
          </InputLabel>
          <Input
            name="phoneNum"
            id="phoneNum-input"
            aria-describedby="phoneNum-helper-text"
            onChange={handleChange}
            sx={{
              color: "white",
              borderBottom: "1px solid white",
              width: "30vh",
            }}
          />
          <FormHelperText id="phoneNum-helper-text" sx={{ color: "white" }}>
            Please include area code.
          </FormHelperText>
        </FormControl>

        <FormControl required sx={{ color: "white" }}>
          <InputLabel sx={{ color: "white" }} htmlFor="message-input">
            Your message
          </InputLabel>
          <Input
            type="text"
            name="message"
            value={toSend.message}
            onChange={handleChange}
            sx={{
              color: "white",
              borderBottom: "1px solid white",
              width: "30vh",
            }}
          />
          <FormHelperText
            sx={{ color: "white" }}
            id="message-helper-text"
          ></FormHelperText>
        </FormControl>
        <Button
          size="large"
          sx={{
            width: "auto",
            height: "5vh",
            placeSelf: "center",
            marginTop: "2%",
            color: "black",
            backgroundColor: "white",
            ":hover": {
              backgroundColor: "black",
              color: "white",
              border: "1px solid white",
            },
          }}
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
