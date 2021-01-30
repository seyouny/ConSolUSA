import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
// import Logo from './logo_white.png';

export default function NavHeader () {

  return (

    <div>
      <header className="sticky-shrinknav-header">

      {/* <h1 className="sticky-shrinknav-header-title">ConSol USA</h1> */}
        {/* <Logo></Logo> */}

        <Grid container spacing={1} className="sticky-shrinknav-menu">
          <Grid item xs={2}>
            PEOPLE
          </Grid>
          <Grid item xs={2}>
            IMPACT
          </Grid>
          <Grid item xs={2}>
            WORK
          </Grid>
          <Grid item xs={2}>
            PARTNERS
          </Grid>
          <Grid item xs={2}>
            NEWS
          </Grid>
          <Grid item xs={2}>
            CONTACT
          </Grid>
        </Grid>

        {/* <ul className="sticky-shrinknav-menu">
          <li>PEOPLE</li>
          <li>IMPACT</li>
          <li>WORK</li>
          <li>PARTNERS</li>
          <li>NEWS</li>
          <li>CONTACT</li>
        </ul> */}

      </header>
    </div>

  )
}