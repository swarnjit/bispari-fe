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
import { EmailRounded, LockRounded } from "@material-ui/icons";
import style from "../LoginSignUp/loginStyle";
import { Link } from "react-router-dom";

import { loginUser } from "../../api/apiCore";

const useStyles = makeStyles(style);

function Login(props) {
  const { history } = props;
  const classes = useStyles();

  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });

  function onChange({ target }) {
    const value = target.value;
    setLogin((prevState) => ({
      ...prevState,
      [target.name]: value,
    }));
  }

  function onSubmit(event) {
    event.preventDefault();
    try {
      loginUser(login);
      history.push("/bispari-fe");
    } catch (error) {}
  }
  return (
    <div>
      <div>
        <Navbar color="white" />
      </div>

      {/* <Container
        // className={classes.pageHeader}
        style={{
          backgroundColor: "#7fc7d9",
          height: "30vh",
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
      ></Container> */}
      <div className={classes.container}>
        <Grid container justify="center" className={classes.grid}>
          <Grid item xs={12} sm={12} md={4} className={classes.gridItem}>
            <Card>
              <form className={classes.form} onSubmit={onSubmit}>
                <CardHeader title="Login" className={classes.cardHeader} />
                <p className={classes.divider}>Enter Your Email and Password</p>
                <CardContent className={classes.cardContent}>
                  <div>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <EmailRounded />
                      </Grid>
                      <Grid item>
                        <TextField
                          id="userName"
                          label="Username"
                          name="userName"
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
                          autoComplete="current-password"
                          onChange={onChange}
                        />
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={1} justify="center">
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className={classes.button}
                        >
                          Login
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          className={classes.buttonRegister}
                          component={Link}
                          to="/register"
                        >
                          Register
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </CardContent>
              </form>
            </Card>

            {/* <Card>
                <form className={classes.form}>
                  <CardHeader className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div>
                      <TextField />
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardContent>
                      <TextField />
                      <TextField />
                      <TextField />
                      <TextField />
                    </CardContent>
                  </CardBody>
                </form>
              </Card> */}
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
