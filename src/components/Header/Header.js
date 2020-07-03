import React from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bg from "./bg2.jpg";
// import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "10px",
    minHeight: "100%",
    backgroundAttachment: "fixed",
  },
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  profile: {
    margin: "20px 0 0 0 ",
    maxWidth: 300,
  },
  title: {
    color: "white",
    marginRight: 10,
    marginLeft: 10,
  },
  subtitle: {
    color: "#4bffa5",
  },
  typedOutput: {
    textAlign: "center",
    marginBottom: 10,
  },
  strong: {
    color: "#4bffa5",
  },
  paper: {
    height: 140,
    width: 100,
  },
  intro: {
    fontSize: 50,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
    color: "white",
    textAlign: "center",
    maxWidth: "inherit",
  },
  introPaper: {
    backgroundColor: "black",
    opacity: 0.8,
    marginBottom: 50,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Container
      style={{
        backgroundImage: `url(${bg})`,
        backgroundColor: "#7fc7d9",
        height: "90vh",
        maxHeight: "1000px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
      }}
      maxWidth="xl"
    >
      <Grid container className={classes.root} spacing={2}>
        <Grid container justify="center" style={{ marginTop: 100 }}>
          <Typography variant="h1" style={{ color: "white" }}>
            Bispari
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid xs={12} item>
            <Typography variant="h2" className={classes.intro}>
              Connecting Skilled People and Customers In Need.......
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
