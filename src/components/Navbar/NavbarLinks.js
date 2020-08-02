import React from "react";
import { List, ListItem, makeStyles, Button } from "@material-ui/core";
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
    color: "#555",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "600",
    fontSize: "16px",
    textTransform: "capitalize",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "#1dbf73",
      background: "rgba(200, 200, 200, 0.2)",
    },
    // [theme.breakpoints.down("sm")]: {
    //   width: "calc(100% - 30px)",
    //   marginLeft: "15px",
    //   marginBottom: "8px",
    //   marginTop: "8px",
    //   textAlign: "left",
    //   "& > span:first-child": {
    //     justifyContent: "flex-start",
    //   },
    // },
  },
});
const useStyles = makeStyles(style);

const NavbarLinks = () => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
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
        <Button component={Link} to="/login" className={classes.navLink}>
          <LockOpenIcon className={classes.icons} />
          Login
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button component={Link} to="/register" className={classes.navLink}>
          <LockOpenIcon className={classes.icons} />
          Register
        </Button>
      </ListItem>
    </List>
  );
};

export default NavbarLinks;
