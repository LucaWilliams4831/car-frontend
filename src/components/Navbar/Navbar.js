import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Box,
  Link,
  Avatar,
  Hidden,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Logo from "../../assets/images/logo.svg";
import Cart from "../../assets/images/cart.svg";
import { useNavigate, useLocation } from "react-router-dom";
import useStyles from "./style";

const navigationLinks = [
  { name: "Car Valuation", to: "/" },
  { name: "FAQs", to: "/" },
  { name: "Branch Locator", to: "/" },
  { name: "Manage Appointment", to: "/" },
];

const Navbar = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  let location = useLocation();

  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          padding: "0 !important",
        }}
      >
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid
            item
            md={2.5}
            sm={6}
            xs={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                px: { lg: 1, md: 1, sm: 2, xs: 2 },
              }}
            >
              <Link to="/">
                <Avatar className={classes.checkAvt} src={Logo} />
              </Link>
            </Box>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              md={8}
              sm={5}
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "end",
                  md: "start",
                },
                pl: { xs: "7%" },
              }}
            >
              {navigationLinks.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Link
                      className={
                        location?.pathname === item.to
                          ? classes.active
                          : classes.nonActive
                      }
                      onClick={() => {
                        navigate(item.to);
                      }}
                      variant="button"
                      underline="none"
                    >
                      {item.name}
                    </Link>
                  </Box>
                );
              })}
            </Grid>
          </Hidden>

          <Grid
            item
            md={1}
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <img src={Cart} alt="Product" />
          </Grid>

          <Hidden mdUp>
            <Grid
              item
              md={3}
              xs={0}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <IconButton
                onClick={() => setOpen(true)}
                sx={{ paddingRight: 0, paddingLeft: "20px" }}
              >
                <MenuIcon
                  style={{ color: "white", width: "2em", height: "2em" }}
                />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div onClick={() => setOpen(false)} tabIndex={0}>
          <IconButton sx={{ padding: 0 }}>
            <ChevronRightIcon sx={{ width: "2em" }} />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item, index) => (
            <ListItem key={index}>
              <Link
                className={
                  location?.pathname === item.to
                    ? classes.active
                    : classes.nonActive
                }
                onClick={() => {
                  navigate(item.to);
                }}
                variant="button"
                underline="none"
              >
                <Typography variant="h7">{item.name}</Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Navbar;
