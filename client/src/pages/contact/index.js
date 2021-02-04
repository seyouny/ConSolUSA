// CONTACT PAGE

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import NavHeader from '../../components/navheader/';
import './style.css';

export default function ContactPage() {

    return (

        <div>
            <NavHeader></NavHeader>

            <Container className="main">

                {/* BUILD ELEMENTS BELOW HERE. FEEL FREE TO EDIT THE ITEMS, JUST A TOOLKIT. */}

                <Paper>

                    <Grid container spacing={1} className="sticky-shrinknav-menu">

                        <Grid item xs={4}>
                            Column 1
                        </Grid>

                        <Grid item xs={4}>
                            Column 2
                        </Grid>

                        <Grid item xs={4}>
                            Column 3
                        </Grid>

                        <Grid item xs={12}>

                            <Typography>
                                <h1>Contact Page Here</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    euismod in pellentesque. Pellentesque id nibh tortor id aliquet lectus proin.
                                    Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Egestas
                                    integer eget aliquet nibh praesent tristique. Imperdiet massa tincidunt nunc pulvinar sapien et.
                                    Vel turpis nunc eget lorem dolor sed viverra. Montes nascetur ridiculus mus mauris vitae.
                                    Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Ultricies mi quis hendrerit
                                    dolor magna. Dolor morbi non arcu risus quis varius. Fames ac turpis egestas integer.
                                    Amet nisl purus in mollis nunc sed. Neque viverra justo nec ultrices dui sapien eget mi proin.
                                </p>
                            </Typography>

                        </Grid>

                    </Grid>

                </Paper>

            </Container>

        </div>

    )
}