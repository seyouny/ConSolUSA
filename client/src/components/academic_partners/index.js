import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Merritt from "./merrittcollege.png";
import Mills from "./millscollege_logo.png";

import "./style.css";

export default function Academicpartners () {
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
            <Grid item xs={12} sm={3} className="logo-grid">
              <img src={Merritt} alt="logo" className="academic-logo1" />
            </Grid>
            <Grid item xs={12} sm={3} className="logo-grid">
              <img src={Mills} alt="logo" className="academic-logo2" />
            </Grid>
            <Grid item xs={12} sm={3}></Grid>
          </Grid>
        </Container>
      </div>
    );
}
