import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import CarForCashImg from "../../assets/images/car-for-cash.svg";
import ArcticonsBestprice from "../../assets/images/arcticons_bestprice.svg";
import EntypoHourGlass from "../../assets/images/entypo_hour-glass.svg";
import IcBaselineSell from "../../assets/images/ic_baseline-sell.svg";
import ArcticonsPrivatelock from "../../assets/images/arcticons_privatelock.svg";
import CarbonFinance from "../../assets/images/carbon_finance.svg";
import CarbonMoney from "../../assets/images/carbon_money.svg";

const CarForCash = () => {
  return (
    <>
      <Box>
        <Container fixed>
          <Box>
            <img src={CarForCashImg} alt="Car For Cash" />
          </Box>
          <Box
            sx={{
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            <span
              style={{
                width: "97px",
                borderBottom: "2px solid #39B8FF",
                display: "block",
                margin: "0 auto",
                marginBottom: "20px",
              }}
            ></span>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontFamily: "poppins",
                fontWeight: "600",
                fontSize: "36px",
              }}
            >
              Buy my car for cash
            </Typography>
            <p>
              Simply enter your reg number to get your instant valuation for
              free and sell your car without the hassle.
            </p>
          </Box>
          <Grid container sx={{ justifyContent: "space-between" }} spacing={6}>
            <Grid item md={4} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <img src={ArcticonsBestprice} alt="arcticons_bestprice" />
                <Box sx={{ marginLeft: "12px" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      textAlign: "left",
                      color: "#1E1E1E",
                      marginBottom: "15px",
                    }}
                  >
                    4-day price guarantee
                  </Typography>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Your car valuation is guaranteed for 4 days after you obtain
                    a quote by entering your reg number. This means you have the
                    flexibility to book an appointment at a time that suits you
                    and are protected from market fluctuations.
                  </p>
                </Box>
              </Box>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <img src={EntypoHourGlass} alt="EntypoHourGlass" />
                <Box sx={{ marginLeft: "12px" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      textAlign: "left",
                      color: "#1E1E1E",
                      marginBottom: "15px",
                    }}
                  >
                    Sell your car in under an hour
                  </Typography>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    We will buy your car in under an hour, regardless of the
                    make, model, mileage or condition. Start the process by
                    getting a free valuation in less than 30 seconds.
                  </p>
                </Box>
              </Box>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <img src={IcBaselineSell} alt="IcBaselineSell" />
                <Box sx={{ marginLeft: "12px" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      textAlign: "left",
                      color: "#1E1E1E",
                      marginBottom: "15px",
                    }}
                  >
                    No obligation to sell
                  </Typography>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    We don’t use pushy sales tactics. Instead, we provide a
                    no-hassle assessment of your vehicle and allow you to decide
                    whether you want to go ahead with the sale of your car.
                  </p>
                </Box>
              </Box>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <img src={ArcticonsPrivatelock} alt="ArcticonsPrivatelock" />
                <Box sx={{ marginLeft: "12px" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      textAlign: "left",
                      color: "#1E1E1E",
                      marginBottom: "15px",
                    }}
                  >
                    Avoid the hassle of a private sale
                  </Typography>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    You can avoid the hassle of a private sale by selling your
                    car through our simple three-step process.
                  </p>
                </Box>
              </Box>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <img src={CarbonFinance} alt="CarbonFinance" />
                <Box sx={{ marginLeft: "12px" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      textAlign: "left",
                      color: "#1E1E1E",
                      marginBottom: "15px",
                    }}
                  >
                    We settle any finance
                  </Typography>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Are you looking to sell a car with outstanding finance? No
                    problem, we can settle it!
                  </p>
                </Box>
              </Box>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <img src={CarbonMoney} alt="CarbonMoney" />
                <Box sx={{ marginLeft: "12px" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      textAlign: "left",
                      color: "#1E1E1E",
                      marginBottom: "15px",
                    }}
                  >
                    Have the money in your bank in 30 minutes
                  </Typography>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    By choosing our Premier Payment option, you can have the
                    money in your bank in as little as 30 minutes.
                  </p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CarForCash;
