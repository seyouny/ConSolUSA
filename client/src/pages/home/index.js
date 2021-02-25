// HOME/LANDING PAGE

import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
import logo from './logowhite-min.png';
import Border from './divider_orange_blue.png';

export default function HomePage() {

  return (

    <div className="hero">

        <Grid container spacing={1}>

          <div>
            <img className="herobrand" src={logo} alt="ConSol USA logo"></img>
          </div>

          <div className="border">
            <img src={Border} alt="border curve" className="homePgDiv"></img>
          </div>

        </Grid>

    </div>

  )
}