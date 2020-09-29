import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { container, title } from "./../../assets/mainCss";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import IntroPart from "./Parts/IntroPart";
import classNames from "classnames";
import Featuredprofiles from "./Parts/FeaturedProfiles";
import Footer from "../../components/Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Header />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <IntroPart />
          <Featuredprofiles />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
