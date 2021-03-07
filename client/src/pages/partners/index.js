// PARTNERS PAGE

import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Banner from "../../components/banner/";
import Talentpartners from "../../components/talent_partners";
import Trainingpartners from "../../components/training_partners";
import Academicpartners from "../../components/academic_partners";
import Technologypartners from "../../components/technology_partners";
import Govpartners from "../../components/government_partners";
import { makeStyles } from "@material-ui/core/styles";

import "./style.css";

export default function PartnersPage() {
  return (
    <div>
      <Banner></Banner>

      <Container className="partner-btns">
        <div className="submenu">
          <Grid container className="btns-container" maxWidth={false}>
            <Grid item xs={12} sm={6} md={1}></Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Button
                size="small"
                variant="outlined"
                className="submenu-button btn-space"
                href="#talent-sect"
              >
                Talent
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Button
                size="small"
                variant="outlined"
                className="submenu-button btn-space"
                href="#training-sect"
              >
                Training
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Button
                size="small"
                variant="outlined"
                className="submenu-button btn-space"
                href="#academic-sect"
              >
                Academic
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Button
                size="small"
                variant="outlined"
                className="submenu-button btn-space"
                href="#tech-sect"
              >
                Technology
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Button
                size="small"
                variant="outlined"
                className="submenu-button btn-space"
                href="#p-area"
              >
                Government
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={1}></Grid>
          </Grid>
        </div>
      </Container>

      <Talentpartners></Talentpartners>

      <Trainingpartners></Trainingpartners>

      <Academicpartners></Academicpartners>

      <Technologypartners></Technologypartners>

      <Govpartners></Govpartners>
    </div>
  );
}
