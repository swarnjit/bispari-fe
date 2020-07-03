import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
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
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </Typography>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default IntroPart;
