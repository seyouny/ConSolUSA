import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Salesforce from "./salesforce_logo.png";
import Forgerock from "./forgerock_logo.png";
import Cisco from "./cisco_logo.png";
import Tableau from "./tableau_logo.jpg";
import Okta from "./okta.png";
import Pingid from "./pingid_logo.png";

import "./style.css";

export default function Technologypartners() {
    return (
      <div>
        <Container className="tech-card-container" id="tech-sect">
          <Typography
            variant="h3"
            className="tech-area-header"
            style={{ textAlign: "center", fontWeight: "900" }}
          >
            Technology Partners
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
            <Grid item xs={12} sm={6} md={4} className="logo-grid">
              <img src={Salesforce} alt="logo" className="tech-logo1" />
            </Grid>

            <Grid item xs={12} sm={6} md={4} className="logo-grid">
              <img src={Forgerock} alt="logo" className="tech-logo2" />
            </Grid>

            <Grid item xs={12} sm={6} md={4} className="logo-grid">
              <img src={Cisco} alt="logo" className="tech-logo3" />
            </Grid>

            <Grid item xs={12} sm={6} md={4} className="logo-grid">
              <img src={Tableau} alt="logo" className="tech-logo4" />
            </Grid>

            <Grid item xs={12} sm={6} md={4} className="logo-grid">
              <img src={Okta} alt="logo" className="tech-logo5" />
            </Grid>

            <Grid item xs={12} sm={6} md={4} className="logo-grid">
              <img src={Pingid} alt="logo" className="tech-logo6" />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}
