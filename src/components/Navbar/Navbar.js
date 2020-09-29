import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RightMenu from "@material-ui/core/Drawer";
import classNames from "classnames";

import {
  AppBar,
  Toolbar,
  IconButton,
  ListItem,
  ListItemIcon,
  List,
  Divider,
  Box,
  ListItemText,
  Hidden,
  Grid,
} from "@material-ui/core";
import { Home, LockOpen, SearchSharp } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import NavbarLinks from "./NavbarLinks";
import logo from "./logo1.png";

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    width: 250,
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  listItem: {
    color: "black",
  },
  title: {
    lineHeight: "30px",
    fontSize: "24px",
    borderRadius: "3px",
    textTransform: "none",
    color: "white",
    padding: "8px 16px",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      color: "lightblue",
      background: "transparent",
    },
  },
  container: {
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    "@media (min-width: 576px)": {
      maxWidth: "540px",
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px",
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px",
    },
  },
  flex: {
    flex: 1,
  },
  appBar: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: "#FFFFFF",
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#fff",
    backgroundColor: "#fff !important",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
  },
  logo: {
    height: theme.spacing(4),
    width: theme.spacing(10),
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <SearchSharp />,
    listText: "Browse",
    listPath: "/browse",
  },
  {
    listIcon: <LockOpen />,
    listText: "Login",
    listPath: "/login",
  },
];

const Navbar = (props) => {
  const [state, setState] = useState({
    right: false,
  });

  useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const toggleSideMenu = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const { color } = props;
  const appBarClassList = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
  });

  const sideList = (slider) => (
    <Box
      className={classes.menuContainer}
      component="div"
      onClick={toggleSideMenu(slider, false)}
    >
      <Divider />
      <List>
        {menuItems.map((IsItem, key) => (
          <ListItem button key={key} component={Link} to={IsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {IsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={IsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <AppBar position="fixed" className={appBarClassList}>
        <Toolbar className={classes.container}>
          <Grid component={Link} to={"/"}>
            <img className={classes.logo} src={logo} alt="logo" />
          </Grid>
          {/* <div className={classes.flex}>
            <Button
              button="true"
              className={classes.title}
              component={Link}
              to={"/bispari-fe"}
            >
              Bispari
            </Button>
          </div> */}

          <Hidden mdUp>
            <IconButton onClick={toggleSideMenu("right", true)}>
              <MenuIcon style={{ color: "#000" }} />
            </IconButton>
            <RightMenu
              open={state.right}
              anchor="right"
              onClose={toggleSideMenu("right", false)}
            >
              {sideList("right")}
            </RightMenu>
          </Hidden>
          <Hidden smDown>
            <NavbarLinks />
          </Hidden>
        </Toolbar>
      </AppBar>
      {/* <Toolbar></Toolbar> */}
    </>
  );
};

export default Navbar;
