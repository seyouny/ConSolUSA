// IMPACT PAGE

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Banner from '../../components/banner/';
import './style.css';

export default function ImpactPage() {

    return (

        <div>

            <Banner></Banner>

            <Container className="main">

                <div className="submenu">

                    <Grid container spacing={1}>

                        <Grid item xs={4}>
                            <Button variant="outlined" className="submenu-button">Mission</Button>
                        </Grid>

                        <Grid item xs={4}>
                            <Button variant="outlined" className="submenu-button">Ecosystem</Button>
                        </Grid>

                        <Grid item xs={4}>
                            <Button variant="outlined" className="submenu-button">Impact Chain</Button>
                        </Grid>

                    </Grid>

                </div>

                {/* BUILD ELEMENTS BELOW HERE. FEEL FREE TO EDIT THE ITEMS, JUST A TOOLKIT. */}

                <div id="founderdiv">

                    <Paper className="padded-section">

                        <Grid container spacing={1}>

                            <Grid item xs={12}>

                                <Typography variant="h3">Mission</Typography>
                                <Typography variant="body1">
                                We believe there is enormous untapped energy, ingenuity, and talent 
                                in communities that traditionally have been overlooked. Our mission 
                                is to build an ecosystem that brings that talent "online" to both 
                                create value to our customers and provide robust and sustainable career mobility. 
                                </Typography>

                            </Grid>

                        </Grid>

                    </Paper>

                </div>



            </Container>



        </div>
    )
}