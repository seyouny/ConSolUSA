// HOME/LANDING PAGE

import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
import logo from './logowhite.png';
import Border from './border-rt-bottom-orange.png';

export default function HomePage() {

  return (

    <div>
      <header className="hero">

        <Grid container spacing={1} className="sticky-shrinknav-menu">
          <Grid item xs={2}>
          <a href="/people">PEOPLE</a>
          </Grid>
          <Grid item xs={2}>
          <a href="/impact">IMPACT</a>
          </Grid>
          <Grid item xs={2}>
          <a href="/work">WORK</a>
          </Grid>
          <Grid item xs={2}>
          <a href="/partners">PARTNERS</a>
          </Grid>
          <Grid item xs={2}>
          <a href="/news">NEWS</a>
          </Grid>
          <Grid item xs={2}>
          <a href="/contact">CONTACT</a>
          </Grid>

          <div className="herobrand">
            <img src={logo} alt="ConSol USA logo" width="35%"></img>
          </div>

          <div className="border">
            <img src={Border} alt="border curve"></img>
          </div>

        </Grid>

      </header>
    </div>

  )
}