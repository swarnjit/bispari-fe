import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  IconButton,
  Typography,
  Button,
  MenuItem,
  Menu,
  Grid,
  Card,
  CardContent,
  Container,
} from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { fetchSkillerProfile } from "../api/apiCore";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function SelectProfileImage({ skillerProfileId }) {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(
        `http://localhost:8082/api/v1/skiller-profile/${skillerProfileId}/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        console.log("File is launched");
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchProfiles = async () => {
      const results = await fetchSkillerProfile();
      setProfile(results);
    };
    fetchProfiles();
  }, []);
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Bispari
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container component="div" maxWidth="xl" disableGutters="false">
        <Grid container spacing={2}>
          {profile.map((profiles, index) => (
            <Grid key={index} item md={3}>
              <Card>
                <SelectProfileImage
                  skillerProfileId={profiles.skillerProfileId}
                />
                <CardContent>{profiles.skillerProfileId}</CardContent>
                <h1>{profiles.username}</h1>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container component="footer"></Container>
    </React.Fragment>
  );
}
