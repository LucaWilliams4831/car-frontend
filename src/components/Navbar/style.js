import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({

  checkAvt: {
    width: "100%",
    height: "auto",
    borderRadius: 0,
  },

  active: {
    textAlign: "left",
    fontSize: "18px",
    letterSpacing: "0px",
    color: "#1E1E1E",
    marginRight: "40px",
    cursor: "pointer",
    fontWeight: "500",
    // fontFamily: 'Aileron-Regular',
    textTransform: "capitalize",
    "&:hover": { color: "white" },
    "&:lastChild": { marginRight: "0" },
    "@media (max-width: 899.9px)": {
      color: "#000",
      fontWeight: "bold",
      fontSize: "15px",
      borderBottom: "2px solid #000",
      "&:hover": { color: "black" },
    },
    "@media (min-width: 1899.9px)": {
      marginRight: "58px",
    },
    "@media (min-width: 1200px) and (max-width: 1599.9px)": {
      fontSize: "16px",
      marginRight: "28px",
    },
    "@media (min-width: 900px) and (max-width: 1199.9px)": {
      fontSize: "12px",
      marginRight: "20px",
    },
  },
  nonActive: {
    textAlign: "left",
    fontSize: "20px",
    letterSpacing: "0px",
    color: "white",
    marginRight: "40px",
    cursor: "pointer",
    // fontFamily: 'Aileron-Regular',
    fontWeight: "normal",
    textTransform: "capitalize",
    "&:hover": { color: "white" },
    "&:lastChild": { marginRight: "0" },
    "@media (max-width: 899.9px)": {
      color: "#000",
      fontSize: "15px",
      fontWeight: "bold",
    },
    "@media (min-width: 1899.9px)": {
      marginRight: "58px",
    },
    "@media (min-width: 1200px) and (max-width: 1599.9px)": {
      fontSize: "16px",
      marginRight: "28px",
    },
    "@media (min-width: 900px) and (max-width: 1199.9px)": {
      fontSize: "14px",
      marginRight: "12px",
    },
  },
}));

export default useStyles;
