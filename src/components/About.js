import React from "react";
import { Container, Typography } from "@mui/material";
import styles from "./About.styles";

const About = () => {
  return (
    <Container sx={{ padding: "2%", marginTop: "2%" }}>
      <Typography sx={styles.sx.AboutText} variant={"h5"}>
        Hi! My name is Olivia, and I am a fullstack software engineer.<br></br>
        <br></br>
        Prior to my shift into software engineering, I was a science teacher and
        program manager at a college access program with about 7 years of
        experience. My work focused on preparing high school students in the
        college application processes. I also completed 25 credit hours towards
        becoming a school psychologist at Brooklyn College from 2020-2021.{" "}
        <br></br>
        <br></br>I found myself drawn to software engineering during my
        maternity leave from graduate school. I started learning to code during
        my son’s nap time, and fell in love with building and working through
        problems with code. I realized that I enjoyed coding more than I did
        writing psychological reports, so I decided to go to bootcamp. <br></br>
        <br></br>
        My strengths include learning new technologies quickly, staying
        organized, and communicating with teammates about project goals,
        visions, and next steps. Most of my experience is working with React,
        JavaScript, TypeScript, AGGrid, and PostgreSQL, but I have worked with
        countless other technologies during my time as an engineer so far.
        <br></br>
        <br></br>
        I’m interested in exploring frontend leaning / fullstack roles where I
        can be part of a team with mentorship, feedback, and the opportunity to
        learn and grow as a developer.
      </Typography>
    </Container>
  );
};

export default About;
