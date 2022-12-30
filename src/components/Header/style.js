import { makeStyles } from "@mui/styles";
import Banner from "../../assets/images/banner-bg.png";

const useStyles = makeStyles((theme) => ({
  headerWrap: {
    backgroundImage: `url(${Banner})`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
}));

export default useStyles;
