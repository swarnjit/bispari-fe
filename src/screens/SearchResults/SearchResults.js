import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Card,
  CardContent,
  Typography,
  CardActions,
  Hidden,
} from "@material-ui/core";
import Navbar from "../../components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core";
import { fetchProfilesBySearch } from "../../api/apiCore";

const style = (theme) => ({
  mainRaised: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    margin: "90px 10px 10px 10px",
    [theme.breakpoints.down("xs")]: {
      margin: "90px 0 0 0",
    },

    padding: 20,
  },
  root: {
    width: "100%",
  },
  leftPanel: {
    float: "left",
    padding: 20,
    width: "20%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  rightPanel: {
    float: "right",
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: 20,
    },
  },
  newRoot: {
    flexGrow: 1,
    width: "100%",
  },
  card: {
    margin: "10px",
    boxShadow: "0 1px 5px 2px rgba(105,105,105, .9)",
    width: "100%",
  },
  paper: {
    height: 140,
    width: 100,
  },
  typography: {
    margin: "5px",
  },
  contentMenu: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    margin: "70px 10px 10px 10px",
    borderRadius: "6px",
    height: 1000,
  },
});

const useStyles = makeStyles(style);

const SearchResults = () => {
  const [profile, setProfile] = useState([]);

  // function SelectProfileImage({ skillerProfileId }) {
  //   const onDrop = useCallback((acceptedFiles) => {
  //     const file = acceptedFiles[0];
  //     console.log(file);
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     axios
  //       .post(
  //         `http://localhost:9191/profile/${skillerProfileId}/image`,
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       )
  //       .then(() => {
  //         console.log("File is launched");
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }, []);
  //   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  //   return (
  //     <div {...getRootProps()}>
  //       <input {...getInputProps()} />
  //       {isDragActive ? (
  //         <p>Drop the files here ...</p>
  //       ) : (
  //         <p>Drag 'n' drop some files here, or click to select files</p>
  //       )}
  //     </div>
  //   );
  // }
  useEffect(() => {
    const fetchProfiles = async () => {
      const results = await fetchProfilesBySearch();
      setProfile(results);
    };
    fetchProfiles();
  }, []);
  const classes = useStyles();
  return (
    <>
      <div>
        <Navbar color="white" />
      </div>
      <div>
        {" "}
        <Hidden mdDown>
          <div className={classes.leftPanel}>
            <Paper elevation={3} className={classes.contentMenu}></Paper>
          </div>
        </Hidden>
        <div className={classes.rightPanel}>
          <Paper elevation={3} className={classes.mainRaised}>
            <Grid container className={classes.newRoot}>
              <Grid item xs={12}>
                <Typography className={classes.typography}>
                  Search results
                </Typography>
                {profile.length > 0 ? (
                  <Grid container justify="center">
                    {profile.map((profiles, index) => (
                      <Grid component={Card} item className={classes.card}>
                        {/* <SelectProfileImage skillerProfileId={profiles.id} /> */}
                        <CardContent>
                          {profiles.id}
                          <h1>{profiles.name}</h1>
                          {/* <img
                            src={profiles.profileImageURL}
                            width="200px"
                            height="200px"
                          /> */}
                        </CardContent>
                        <CardActions>asdasdasd</CardActions>
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <h1>null</h1>
                )}
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
