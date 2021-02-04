import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
import logo from './logowhite.png';

export default function NavHeader () {

  return (

    <div>
      <header className="sticky-shrinknav-header">

      {/* <h1 className="sticky-shrinknav-header-title">ConSol USA</h1> */}
        {/* <Logo></Logo> */}

        <Grid container spacing={1} className="sticky-shrinknav-menu">
          <Grid item xs={2}>
            <a href='/people'>PEOPLE</a>
          </Grid>
          <Grid item xs={2}>
          <a href='/impact'>IMPACT</a>
          </Grid>
          <Grid item xs={2}>
          <a href='/work'>WORK</a>
          </Grid>
          <Grid item xs={2}>
            <a href='/partners'>PARTNERS</a>
          </Grid>
          <Grid item xs={2}>
          <a href='/news'>NEWS</a>
          </Grid>
          <Grid item xs={2}>
          <a href='/contact'>CONTACT</a>
          </Grid>

        </Grid>

        <div className="brand">
        <img src={logo} alt="ConSol USA logo" width="35%"></img> 
        </div>

      </header>
    </div>

  )
}