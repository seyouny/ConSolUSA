// IMPACT PAGE

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Banner from '../../components/banner/';
import ecosystem from './ecosystem.jpg';
import impactchain from './impactchain.jpg';
import statbar from './statbar.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import Carousel from '../../components/carousel/';
import './style.css';

export default function ImpactPage() {

    return (

        <div>

            <Banner></Banner>

            <Container className="top">

                <div className="submenu">

                    <Grid container spacing={1}>

                        <Grid item xs={4}>
                            <a href="#mission"><Button variant="outlined" className="submenu-button">Mission</Button></a>
                        </Grid>

                        <Grid item xs={4}>
                            <a href="#ecosystem"><Button variant="outlined" className="submenu-button">Ecosystem</Button></a>
                        </Grid>

                        <Grid item xs={4}>
                            <a href="#impactChain"><Button variant="outlined" className="submenu-button">Impact Chain</Button></a>
                        </Grid>

                    </Grid>

                </div>

            </Container>

            <Container id="mission" className="section">

                <Paper elevation={0}>

                    <Grid container spacing={1}>

                        <Grid item xs={12}>

                            <Typography variant="h3" className="sectionHead">Our Mission</Typography>
                            <Typography variant="body1" className="bigMargin">
                                We believe there is enormous untapped energy, ingenuity, and talent
                                in communities that traditionally have been overlooked. Our mission
                                is to build an ecosystem that brings that talent "online" to both
                                create value to our customers and provide robust and sustainable career mobility.
                                </Typography>

                        </Grid>

                    </Grid>

                </Paper>

            </Container>

            <Container id="ecosystem" className="section">

                <Paper elevation={0}>

                    <Grid container spacing={1}>

                        <Grid item xs={12}>

                            <Typography variant="h3" className="sectionHead">Our Ecosystem</Typography>

                                <img alt="ecosystem" src={ecosystem} width="80%"/>

                        </Grid>

                    </Grid>

                </Paper>

            </Container>

            <Container className="section carouselBkg" maxWidth="false">

                <Paper elevation={3} id="slider">

                    <Grid container spacing={1}>

                        <Grid item xs={12}>

                            <Typography variant="h3" className="sectionHead" id="partnerHead">Partners</Typography>
                                <ArrowBackIosIcon id="arrowLeft"></ArrowBackIosIcon>
                                <ArrowForwardIosIcon id="arrowRight"></ArrowForwardIosIcon>

                        </Grid>

                    </Grid>

                </Paper>

            </Container>

            <Container id="impactChain" className="section">

                <Paper elevation={0}>

                    <Grid container spacing={1}>

                        <Grid item xs={12}>

                            <Typography variant="h3" className="sectionHead">Our Impact Chain</Typography>

                                <img alt="impact chain" src={impactchain} width="85%" />

                        </Grid>

                    </Grid>

                </Paper>

            </Container>

            <Container id="stats" className="section">

                <Paper elevation={0}>

                    <Grid container spacing={1}>

                        <Grid item xs={12}>

                            <Typography variant="h3" className="sectionHead">By The Numbers</Typography>


                            <img alt="statistics bar" src={statbar} width="85%" />


                        </Grid>

                    </Grid>

                </Paper>

            </Container>

        </div>
    )
}