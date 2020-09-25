import React, { useState } from "react";
import {
  Typography,
  Grid,
  Container,
  TextField,
  InputBase,
  IconButton,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import bg from "../Header/bg2.png";
import bgMobile from "../Header/bgMobile.png";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#eef2f5",
    backgroundImage: `url(${bg})`,
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${bgMobile})`,
    },
    height: "60vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "start",
  },
  subHeader: {
    margin: 0,
    maxWidth: 540,
    padding: "0 0 0 30px",
    paddingTop: "15vh",
    width: "auto",
  },
  intro: {
    fontSize: 30,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
    color: "#1f2229",
    textAlign: "left",
    fontWeight: 700,
    paddingBottom: 20,
  },
  searchBar: {
    display: "block",
    position: "relative",
    zIndex: 2,
  },
  search: {
    height: 48,
    paddingLeft: 40,
    marginBottom: 0,
    background: "white",
    width: "80%",
  },
  searchIcons: {
    width: "20px",
    height: "20px",
    marginRight: "3px",
    "&:hover,&:focus": {
      color: "#1dbf73",
      background: "rgba(200, 200, 200, 0.2)",
    },
  },
}));
const initialState = {
  searchEntry: "",
};

const Header = () => {
  const classes = useStyles();
  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    setState({
      ...initialState,
      searchEntry: e.target.value,
    });
    console.log(state.searchEntry);
  };

  const handleClick = () => {};

  return (
    <Container className={classes.container} maxWidth="xl">
      <Grid container className={classes.subHeader} md={6} xs={12}>
        <Typography className={classes.intro}>
          Find the help from people you are looking for.
        </Typography>
        <Grid container="form" className={classes.searchBar}>
          <InputBase
            className={classes.search}
            placeholder="Type here to search"
            onChange={handleChange}
          />
          <IconButton
            type="submit"
            aria-label="search"
            component={Link}
            to="/search"
            onClick={handleClick}
          >
            <SearchIcon className={classes.searchIcon} />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
