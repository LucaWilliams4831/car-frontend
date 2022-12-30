import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";

const SellingCarSteps = () => {
  return (
    <>
      <Box sx={{ padding: "129px 0" }}>
        <Container fixed>
          <Box sx={{ p: "0 7%" }}>
            <Box
              className="sectionHead"
              sx={{
                maxWidth: "376px",
              }}
            >
              <span
                className="topLine"
                style={{
                  width: "97px",
                  borderBottom: "1px solid #39B8FF",
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
                Sell your car in{" "}
                <span
                  style={{
                    fontFamily: "poppins",
                    fontWeight: "700",
                    fontSize: "36px",
                    color: "#39B8FF",
                  }}
                >
                  three simple steps
                </span>
              </Typography>
            </Box>
            <Grid
              container
              sx={{ justifyContent: "space-between" }}
              spacing={4}
            >
              <Grid item md={4} sm={12} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "Segoe UI",
                      fontSize: "200px",
                      fontWeight: 900,

                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#A1DDFF",
                    }}
                  >
                    1
                  </Typography>
                  <Box
                    sx={{
                      marginLeft: "-15px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        fontWeight: 700,
                        textAlign: "left",
                        color: "#1E1E1E",
                      }}
                    >
                      Free valuation
                    </Typography>
                    <p>Get your instant valuation in seconds.</p>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "Segoe UI",
                      fontSize: "200px",
                      fontWeight: 900,

                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#A1DDFF",
                    }}
                  >
                    2
                  </Typography>
                  <Box
                    sx={{
                      marginLeft: "-15px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        fontWeight: 700,
                        textAlign: "left",
                        color: "#1E1E1E",
                      }}
                    >
                      Book an appointment
                    </Typography>
                    <p>Book an appointment at your local branch.</p>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "Segoe UI",
                      fontSize: "200px",
                      fontWeight: 900,

                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#A1DDFF",
                    }}
                  >
                    3
                  </Typography>
                  <Box
                    sx={{
                      marginLeft: "-15px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "20px",
                        fontWeight: 700,
                        textAlign: "left",
                        color: "#1E1E1E",
                      }}
                    >
                      Sell your car
                    </Typography>
                    <p>We'll buy your car in under an hour.</p>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SellingCarSteps;
