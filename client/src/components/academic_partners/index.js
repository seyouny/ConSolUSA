import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Merritt from "./merrittcollege.png";
import Mills from "./millscollege_logo.png";

import "./style.css";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function Academicpartners () {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

    return (
      <div>
        <Container className="academic-card-container" id="academic-sect">
          <Typography
            variant="h3"
            className="academic-area-header"
            style={{ textAlign: "center", fontWeight: "900" }}
          >
            Academic Partners
          </Typography>
          <Typography
            variant="body1"
            style={{
              textAlign: "center",
              fontSize: "18px",
              paddingBottom: "45px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>

          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}></Grid>
            <Grid
              item
              xs={12}
              sm={3}
              className="logo-grid"
              container
              direction="column"
            >
              <img src={Merritt} alt="logo" className="academic-logo1" />
              <Container>
                <div className="pop-div">
                  <Button
                    size="small"
                    aria-describedby={id}
                    variant="contained"
                    color="white"
                    onClick={handleClick}
                  >
                    Info
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography className={classes.typography}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                  </Popover>
                </div>
              </Container>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              className="logo-grid"
              container
              direction="column"
            >
              <img src={Mills} alt="logo" className="academic-logo2" />
              <Container>
                <div className="pop-div">
                  <Button
                    size="small"
                    aria-describedby={id}
                    variant="contained"
                    color="white"
                    onClick={handleClick}
                  >
                    Info
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography className={classes.typography}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                  </Popover>
                </div>
              </Container>
            </Grid>
            <Grid item xs={12} sm={3}></Grid>
          </Grid>
        </Container>
      </div>
    );
}