// WORK PAGE

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Banner from '../../components/banner/';
import './style.css';

export default function WorkPage() {

    return (

        <div>

            <Banner></Banner>

            <Container className="main">

                <div className="submenu">

                    <Grid container spacing={1}>

                        <Grid item xs={6}>
                            <Button variant="outlined" className="submenu-button">Project Areas</Button>
                        </Grid>

                        <Grid item xs={6}>
                            <Button variant="outlined" className="submenu-button">Geographic Focus</Button>
                        </Grid>

                    </Grid>

                </div>

            </Container>
            {/* BUILD ELEMENTS BELOW HERE. FEEL FREE TO EDIT THE ITEMS, JUST A TOOLKIT. */}


    <Container className="proj-area">

            <Typography
                variant="h4"
                className="proj-area-header"
                style={{ textAlign: "center" }}
            >
                    Project Areas
          </Typography>

                <Container className="proj-card-container">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box className="proj-card">
                                <Typography variant="subtitle2" style={{ textAlign: "center" }}>Cybersecurity</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Box className="proj-card">
                                <Typography variant="subtitle2" style={{ textAlign: "center" }}>Quality Engineering</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Box className="proj-card">
                                <Typography variant="subtitle2" style={{ textAlign: "center" }}>Data Analytics</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Box className="proj-card">
                                <Typography variant="subtitle2" style={{ textAlign: "center" }}>Database Management</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Box className="proj-card">
                                <Typography variant="subtitle2" style={{ textAlign: "center" }}>Application Support</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Box className="proj-card">
                                <Typography variant="subtitle2" style={{ textAlign: "center" }}>Network Engineering</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Box className="proj-card">
                                <Typography variant="subtitle2" style={{ textAlign: "center" }}>Mainframe Computing</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Box className="proj-card">
                                <Typography variant="subtitle2" style={{ textAlign: "center" }}>Web Development</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Box className="proj-card">
                                <Typography variant="subtitle2" style={{ textAlign: "center" }}>IT Support</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Container>
                    <Typography variant="h4" style={{ textAlign: "center" }}>
                        Geograhic Focus
            </Typography>
                </Container>
            </Container>






        </div>
    )
}