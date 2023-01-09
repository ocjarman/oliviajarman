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
      border: "3px solid blue",
    },
    LogoContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "20vh",
    },
    Logo: {
      placeSelf: "center",
      alignSelf: "center",
    },
  },
};

export default styles;
