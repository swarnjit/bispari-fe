import React from "react";
import { Paper, Container } from "@material-ui/core";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  CardContent,
  Card,
  CardHeader,
  TextField,
} from "@material-ui/core";

const styles = () => ({
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
});

const Howitworks = () => {
  return (
    <Container
      style={{
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
    ></Container>
  );
};

export default Howitworks;
