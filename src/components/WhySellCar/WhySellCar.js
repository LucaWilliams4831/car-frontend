import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import Logo from "../../assets/images/logo.svg";

const WhySellCar = () => {
  return (
    <>
      <Box sx={{ margin: "160px 0", p: "200px 0", backgroundColor: "#F5F5F5", transform: "rotate(-4.62deg)" }}>
        <Container fixed sx={{transform: "rotate(4.62deg)"}}>
          <Box sx={{ p: "0 7%" }}>
            <Grid
              container
              sx={{ justifyContent: "space-between", alignItems: "center" }}
              spacing={6}
            >
              <Grid item md={6} sm={12} xs={12}>
                <Box>
                  <span
                    className="topLine"
                    style={{
                      width: "97px",
                      borderBottom: "2px solid #39B8FF",
                      display: "block",
                      marginBottom: "15px",
                    }}
                  ></span>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      fontFamily: "poppins",
                      fontWeight: "400",
                      fontSize: "36px",
                    }}
                  >
                    Why Sell you car with
                  </Typography>
                  <p>
                    Whether it’s time for you to upgrade your car or you simply
                    don’t need your vehicle anymore, you will want to know how
                    much your car is worth. Our free car valuation tool provides
                    you with a valuation in under 30 seconds - simply enter your
                    reg plate and a few details about your car for an accurate
                    valuation. If you’re happy with your valuation, you can sell
                    your car in less than an hour by booking an appointment at
                    your local branch, which is less than 13 minutes away on
                    average.
                  </p>
                </Box>
              </Grid>
              <Grid item md={6} sm={12} xs={12} textAlign={"center"}>
                <img src={Logo} alt="Logo" />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default WhySellCar;
