import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import GenUSA from "./genusa_logo.jpg";
import Yearup from "./yearup_logo.jpg";
import Genesys from "./genesysworks_logo.jpg";
import Npower from "./npower_logo.jpg";

import "./style.css";

export default function Talentpartners () {
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
            <Grid item xs={12} sm={6} md={3} className="logo-grid">
              <img src={GenUSA} alt="logo" className="talent-logo1" />
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="logo-grid">
              <img src={Yearup} alt="logo" className="talent-logo2" />
            </Grid>

            <Grid item xs={12} sm={6} md={3} className="logo-grid">
              <img src={Genesys} alt="logo" className="talent-logo3" />
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="logo-grid">
              <img src={Npower} alt="logo" className="talent-logo4" />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
}
