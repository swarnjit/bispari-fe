import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

const styles = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    color: "#3C4858",
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
  },
  description: {
    color: "#999",
  },
};

const useStyles = makeStyles(styles);

const IntroPart = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Typography className={classes.title} variant="h3">
            What is Bispari?
          </Typography>

          <Typography
            variant="body1"
            justify="space-between"
            className={classes.description}
          >
            Bispari is designed to make it easy to connect customers and skilled
            people online. Skilled people can have their profile and can share
            their information that will never go to the bottom of page like many
            ad posting websites.
          </Typography>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default IntroPart;
