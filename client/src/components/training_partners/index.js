import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Perscholas from "./perscholas_logo.jpg";
import Bayvalleytech from "./bayvalleytech_logo.jpg";
import Npower from "./npower_logo.jpg";

import "./style.css";

export default function Trainingpartners() {
    return (
      <div>
        <Container className="talent-card-container" id="training-sect">
          <Typography
            variant="h3"
            className="talent-area-header"
            style={{ textAlign: "center", fontWeight: "900" }}
          >
            Training Partners
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
            <Grid item xs={12} sm={4} className="logo-grid">
              <img src={Perscholas} alt="logo" className="train-logo1" />
              {/* <Paper>
              <Box className="">
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ textAlign: "center" }}
                  className="proj-type-head"
                >
                  Honors Pathway
                </Typography>
                
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                ></Typography>
              </Box>
            </Paper> */}
            </Grid>
            <Grid item xs={12} sm={4} className="logo-grid">
              <img src={Bayvalleytech} alt="logo" className="train-logo2" />
              {/* <Paper>
              <Box className="">
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ textAlign: "center" }}
                  className="proj-type-head"
                >
                  Year Up
                </Typography>
                
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                ></Typography>
              </Box>
            </Paper> */}
            </Grid>

            <Grid item xs={12} sm={4} className="logo-grid">
              <img src={Npower} alt="logo" className="train-logo3" />
              {/* <Paper>
              <Box className="">
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ textAlign: "center" }}
                  className="proj-type-head"
                >
                  Genesys Works
                </Typography>
                
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                ></Typography>
              </Box>
            </Paper> */}
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}
