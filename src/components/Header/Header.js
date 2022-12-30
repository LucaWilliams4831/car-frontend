import React from "react";
import useStyles from "./style";
import { Box, Container } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import HeaderContent from "./HeaderContent";
import Frame from "../../assets/images/Frame.png";
import Car from "../../assets/images/car.svg";

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.headerWrap}>
      <Container fixed>
        <Navbar />
        <HeaderContent />
        <Box
          sx={{
            backgroundImage: `url(${Frame})`,
            width: "100%",
            height: "100%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginTop: "15%",
            textAlign: "center"
          }}
        >
          <img style={{marginBottom: "-5%"}} src={Car} alt="Car" />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
