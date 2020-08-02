import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  makeStyles,
  Grid,
  Button,
  CardContent,
  Card,
  CardHeader,
  TextField,
} from "@material-ui/core";
import Footer from "../../components/Footer/Footer";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import { EmailRounded, LockRounded, PersonOutline } from "@material-ui/icons";
import style from "../LoginSignUp/registerStyle";
import { registerUser } from "../../api/apiCore";

const useStyles = makeStyles(style);

function Register() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    email: "",
    active: true,
    roles: "USER",
    profileImageURL:
      "s3://bispari-propic/100996291-male-avatar-profile-picture-vector.jpg",
    skillName: "Plumber",
  });

  function onSubmit(event) {
    event.preventDefault();
    registerUser(formData);
    console.log(formData);
  }

  function onChange({ target }) {
    const value = target.value;
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: value,
    }));
  }

  return (
    <div>
      <div>
        <Navbar color="white" />
      </div>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={classes.form} onSubmit={onSubmit}>
                <CardHeader title="Sign Up" className={classes.cardHeader} />
                <p className={classes.divider}>Register to start connecting</p>
                <CardContent className={classes.cardContent}>
                  <div>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <PersonOutline />
                      </Grid>
                      <Grid item>
                        <TextField
                          id="firstname"
                          label="First Name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={onChange}
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <PersonOutline />
                      </Grid>
                      <Grid item>
                        <TextField
                          id="lastname"
                          label="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={onChange}
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <PersonOutline />
                      </Grid>
                      <Grid item>
                        <TextField
                          id="username"
                          label="Username"
                          name="userName"
                          value={formData.userName}
                          onChange={onChange}
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <EmailRounded />
                      </Grid>
                      <Grid item>
                        <TextField
                          id="email"
                          label="Email"
                          name="email"
                          value={formData.email}
                          onChange={onChange}
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <LockRounded />
                      </Grid>
                      <Grid item>
                        <TextField
                          id="password"
                          label="Password"
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={onChange}
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <LockRounded />
                      </Grid>
                      <Grid item>
                        <TextField
                          id="re-password"
                          label="Confirm Password"
                          type="password"
                          name="re-password"
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={1} justify="center">
                      <Grid item>
                        <Button
                          className={classes.buttonRegister}
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          Register
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </CardContent>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>

      <Footer />
    </div>
  );
}

export default Register;
