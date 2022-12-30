import React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const HeaderContent = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: "64px",
            fontWeight: "700",
            fontFamily: "Poppins",
            textAlign: "center",
            marginTop: "16%",
          }}
        >
          30 Seconds Car Valuation
        </Typography>
        <Grid container sx={{ justifyContent: "space-between" }} spacing={2}>
          <Grid item md={4} sm={6} xs={6}>
            <Button
              variant="outlined"
              //   startIcon={<DeleteIcon />}
              sx={{
                minWidth: "100%",
                minHeight: "93px",
                borderColor: "white",
                borderRadius: "50px",
                fontWeight: 500,
                fontSize: "20px",
                color: "#1E1E1E",
                "&:hover": {
                  backgroundColor: "#FCEE26",
                  borderColor: "#FCEE26",
                  boxShadow: "0px 4px 4px 0px #00000040",
                },
              }}
            >
              Enter your Registration
            </Button>
          </Grid>
          <Grid item md={4} sm={6} xs={6}>
            <Button
              variant="outlined"
              //   startIcon={<DeleteIcon />}
              sx={{
                minWidth: "100%",
                minHeight: "93px",
                borderColor: "white",
                borderRadius: "50px",
                fontWeight: 500,
                fontSize: "20px",
                color: "#1E1E1E",
                "&:hover": {
                  backgroundColor: "#FCEE26",
                  borderColor: "#FCEE26",
                  boxShadow: "0px 4px 4px 0px #00000040",
                },
              }}
            >
              Enter the Mileage
            </Button>
          </Grid>
          <Grid item md={4} sm={6} xs={6}>
            <Button
              variant="outlined"
              //   startIcon={<DeleteIcon />}
              sx={{
                minWidth: "100%",
                minHeight: "93px",
                borderColor: "white",
                borderRadius: "50px",
                fontWeight: 500,
                fontSize: "20px",
                color: "#1E1E1E",
                "&:hover": {
                  backgroundColor: "#FCEE26",
                  borderColor: "#FCEE26",
                  boxShadow: "0px 4px 4px 0px #00000040",
                },
              }}
            >
              Get my Car Valuation
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeaderContent;
