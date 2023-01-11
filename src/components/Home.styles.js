import backgroundImage from "../static/images/backgroundimage.png";
const styles = {
  sx: {
    HomeContainer: {
      backgroundImage: `url(${backgroundImage})`,
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
      height: "9vh",
      width: "auto",
      color: "#10134B",
    },
    ContactContainer: {
      display: "flex",
      justifyContent: "flex-start",
      width: "85%",
      gap: "2vw",
    },
    Contact: {},
  },
};

export default styles;
