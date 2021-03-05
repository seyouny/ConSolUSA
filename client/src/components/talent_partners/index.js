import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import GenUSA from "./genusa_logo.jpg";
import Yearup from "./yearup_logo.jpg";
import Genesys from "./genesysworks_logo.jpg";
import Npower from "./npower_logo.jpg";

import "./style.css";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function Talentpartners () {

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
        <Container className="talent-card-container" id="talent-sect">
          <Typography
            variant="h3"
            className="talent-area-header"
            style={{ textAlign: "center", fontWeight: "900" }}
          >
            Talent Partners
          </Typography>
          <Typography
            variant="body1"
            style={{
              textAlign: "center",
              fontSize: "18px",
              paddingBottom: "45px",
            }}
          >
            To access tens of thousands of career-ready people from underserved
            communities, we’ve partnered nationally with the country’s leading
            non- profit organizations focused on academic preparedness and
            workforce readiness for opportunity youth and veterans.
          </Typography>

          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              className="logo-grid"
              container
              direction="column"
            >
              <img src={GenUSA} alt="logo" className="talent-logo1" />
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
              sm={6}
              md={3}
              className="logo-grid"
              container
              direction="column"
            >
              <img src={Yearup} alt="logo" className="talent-logo2" />
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
              sm={6}
              md={3}
              className="logo-grid"
              container
              direction="column"
            >
              <img src={Genesys} alt="logo" className="talent-logo3" />
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
              sm={6}
              md={3}
              className="logo-grid"
              container
              direction="column"
            >
              <img src={Npower} alt="logo" className="talent-logo4" />
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
          </Grid>
        </Container>
      </div>
    );
}
