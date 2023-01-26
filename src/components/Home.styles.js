import backgroundImage from "../static/images/backgroundimage.png";
const styles = {
  sx: {
    HomeContainer: {
      // backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      width: "100vw",
      backgroundPosition: "center",
      height: "100vh",
      overflowY: "hidden",
      maxWidth: "false",
    },
    LogoContainer: {
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "center",
      justifyItems: "center",
      alignItems: "center",
      marginTop: "3vh",
    },
    Logo: {
      placeSelf: "center",
      alignSelf: "center",
    },
    GitHubIcon: {
      height: "5vh",
      width: "auto",
      color: "#10134B",
    },
    ContactContainer: {
      display: "flex",
      justifyContent: "flex-start",
      width: "85%",
      gap: "2vw",
    },
    AboutContainer: {
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      top: "8vh",
      width: "40%",
      height: "100%",
    },
  },
};

export default styles;
