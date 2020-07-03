import React, { useState, useEffect } from "react";
import { Grid, Paper, Card, CardContent } from "@material-ui/core";
import Navbar from "../../components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core";
import { fetchSkillerProfile, fetchProfilesBySearch } from "../../api/apiCore";

const style = (theme) => ({
  mainRaised: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    margin: "90px 30px 30px 30px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  root: {
    width: "100%",
  },
  newRoot: {
    flexGrow: 1,
  },
  card: {
    margin: "0 0 2% 2%",
    boxShadow: "0 3px 5px 2px rgba(105,105,105, .9)",
    borderBottom: "10px solid rgba(0, 255, 10, 0.5)",
  },
  paper: {
    height: 140,
    width: 100,
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
      <Navbar color="white" />
      <Paper elevation={3} className={classes.mainRaised}>
        <Grid container className={classes.newRoot} spacing={2}>
          <Grid item xs={12}>
            {profile.length > 0 ? (
              <Grid container justify="center" spacing={2}>
                {profile.map((profiles, index) => (
                  <Grid key={index} item>
                    <Card className={classes.card}>
                      {/* <SelectProfileImage skillerProfileId={profiles.id} /> */}
                      <CardContent>{profiles.id}</CardContent>
                      <h1>{profiles.name}</h1>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <h1>null</h1>
            )}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default SearchResults;
