const styles = {
  sx: {
    AboutText: {
      borderRadius: "5%",
      padding: "2%",
      placeSelf: "center",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      overflowX: "scroll",
      color: "pink",
      //   color: `${theme.palette.primary.main}`,
    },
    AboutContainer: {
      marginTop: "10vh",
      marginBottom: "10vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    IconContainer: {
      display: "flex",
      marginTop: "2vh",
      justifyContent: "center",
      maxWidth: "500px",
      alignItems: "center",
      gap: "1rem",
    },
    Icon: {
      height: "9vh",
      width: "auto",
    },
  },
};

export default styles;
