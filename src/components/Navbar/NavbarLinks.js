import React, { useState } from "react";
import {
  List,
  ListItem,
  makeStyles,
  Button,
  InputBase,
  IconButton,
  Paper,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link } from "react-router-dom";

const style = (theme) => ({
  list: {
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
  },
  listItem: {
    float: "left",
    color: "inherit",
    fontSize: "20px",
    position: "relative",
    display: "block",
    width: "auto",
    marginRight: "10px",
    justifyContent: "space-between",
    padding: "0",
    "&:hover,&:focus": {
      color: "lightblue",
      background: "transparent",
    },
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px",
  },
  navLink: {
    color: "white",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "18px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  search: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    opacity: 0.5,
  },
});
const useStyles = makeStyles(style);
const initialState = {
  searchEntry: "ggg",
};

const NavbarLinks = () => {
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
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Paper component="form" className={classes.paper}>
          <InputBase
            className={classes.search}
            placeholder="Type here to search"
            inputProps={{ "aria-label": "search google maps" }}
            onChange={handleChange}
          />
          <IconButton
            type="submit"
            aria-label="search"
            component={Link}
            to="/search"
            onClick={handleClick}
          >
            <SearchIcon className={classes.icons} />
          </IconButton>
        </Paper>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button className={classes.navLink}>
          <SearchIcon className={classes.icons} />
          Browse
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button component={Link} to="/bispari-fe" className={classes.navLink}>
          <PersonIcon className={classes.icons} />
          Profile
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button className={classes.navLink}>
          <LockOpenIcon className={classes.icons} />
          Login
        </Button>
      </ListItem>
    </List>
  );
};

export default NavbarLinks;
