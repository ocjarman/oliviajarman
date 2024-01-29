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
