import React from 'react'
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Calgov from "./calgovbiz_logo.jpg";
import Oakland from "./oakland_logo.jpg";
import Dol from "./usdol_logo.png";

import "./style.css";

export default function Govpartners() {
    return (
      <div>
        <Container className="gov-card-container" id="gov-sect">
          <Typography
            variant="h3"
            className="gov-area-header"
            style={{ textAlign: "center", fontWeight: "900" }}
          >
            Government Partners
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
              <img src={Calgov} alt="logo" className="gov-logo1" />
            </Grid>
            <Grid item xs={12} sm={4} className="logo-grid">
              <img src={Oakland} alt="logo" className="gov-logo2" />
            </Grid>
            <Grid item xs={12} sm={4} className="logo-grid">
              <img src={Dol} alt="logo" className="gov-logo3" />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}
