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
        Hi! My name is Olivia, and I am a Fullstack Software Engineer.<br></br>
        <br></br>
        Prior to my shift into web development, I was a science teacher and
        program manager at a college access program, with about 7 years of
        professional experience. My work focused on preparing and coaching high
        school students in the college application process, in addition to
        project and event management for the organizations I worked for.{" "}
        <br></br>
        <br></br>I found myself drawn to software engineering during my
        maternity leave from graduate school. I started learning to code during
        my son’s nap time, and fell in love with the feeling I got from building
        sites and working through problems. I realized that I enjoyed coding
        more than I did writing psychological reports, so I decided to go to
        bootcamp. Instead of solving education based problems, I am now able to
        solve problems with code. <br></br>
        <br></br>
        My strengths include learning new technologies quickly, staying
        organized, and communicating with teammates about project goals,
        visions, and next steps. I've completed individual and group projects at
        Fullstack Academy of Code, with various new technologies and languages I
        have learned like TypeScript, JavaScript, React, and Firebase, and many
        others.
        <br></br>
        <br></br>
        I’m looking forward to beginning a fullstack role where I can be on a
        collaborative team with mentorship, code review processes, and am able
        to contribute to meaningful projects with code.
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
