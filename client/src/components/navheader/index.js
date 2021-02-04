import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';

export default function NavHeader () {

  return (

    <div>
      <header>

        <Grid container spacing={1} className="menu">
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

      </header>
    </div>

  )
}