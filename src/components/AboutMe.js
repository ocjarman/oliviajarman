import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Dialog from "@mui/material/Dialog";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ padding: "10%", width: "80%" }}>
        Hi! My name is Olivia, and I am an aspiring software engineer graduating
        from Fullstack Academy of Code in February of 2023.<br></br>
        <br></br>
        Prior to my shift into software engineering, I was a science teacher and
        program manager at a college access program with about 7 years of
        experience in education. My work focused on preparing and coaching high
        school students in the college application processes, in addition to
        project management for various events and onboarding of new staff
        members. I also completed 25 credit hours towards becoming a school
        psychologist at Brooklyn College from 2020-2021. <br></br>
        <br></br>I found myself drawn to software engineering during my
        maternity leave from graduate school. I started learning to code during
        my son’s nap time, and fell in love with the feeling I got from building
        sites and working through problems. I realized that I enjoyed coding
        more than I did writing psychological reports, so I decided to go to
        bootcamp. Instead of solving education based problems, I am now able to
        solve real world problems with code. <br></br>
        <br></br>
        My strengths include learning new technologies quickly, staying
        organized, and communicating with teammates about project goals,
        visions, and next steps. I am proud of the projects I have been able to
        complete solo and with teams at Fullstack Academy with the various new
        technologies and languages I have learned like React, Redux, and
        Javascript. <br></br>
        <br></br>
        I’m looking forward to exploring fullstack roles where I can be part of
        a team with a lot of mentorship, learn a ton (and eventually teach
        newcomers!), and help build web applications that solve real world
        problems for people.
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function AboutMe() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <br />
      <Button
        variant="contained"
        onClick={handleClickOpen}
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
      >
        About me
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
