import React from "react";
import { Container, Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <div>
      <Container component="footer">
        <Typography style={{ marginTop: "40px" }} align="center">
          Copyright Bispari 2020
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
