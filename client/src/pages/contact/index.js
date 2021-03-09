// CONTACT PAGE

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Banner from '../../components/banner/';
import TextField from '@material-ui/core/TextField';
import PageBreak from "./page_graphic_blue_orange.png";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from "@material-ui/core/styles";
import './style.css';


const useStyles = makeStyles({
    pageDiv: {
      paddingLeft: "0",
      paddingRight: "0",
    },
    divImage: {
      width: "100%",
      marginTop: "-50%",
    //   paddingTop: "-105px",
      zIndex: "100",
    },
    formControl: {
        margin: 1,
        width: "200px",
    },
  });

export default function ContactPage() {

    const classes = useStyles();

    const [region, setRegion] = React.useState('');
    const [interest, setInterest] = React.useState('');

    const handleChangeRegion = (event) => {
      setRegion(event.target.value);
    };

    const handleChangeInterest = (event) => {
      setInterest(event.target.value);
    };

    return (

        <div>

            <Banner></Banner>

            <Container>

                <Paper className="contactForm">

                    <Grid container spacing={1}>

                        <Grid item xs={12}>

                            <Typography variant="h3" className="contactHead">Contact Us</Typography>
                            <Typography variant="body1" className="contactHead">Thanks for stopping by. We'd love to hear from you. Give us a few details and we'll get right back to you.</Typography>

                            <form noValidate autoComplete="off">

                                <TextField className="formBox" id="firstName" margin="normal" label="First Name" type="text" variant="outlined" />
                                <TextField className="formBox" id="lastName" margin="normal" label="Last Name" type="text" variant="outlined" />
                                <TextField className="formBox" id="business" margin="normal" label="Business Affiliation" type="text" variant="outlined" />
                                <TextField className="formBox" id="position" margin="normal" label="Position" type="text" variant="outlined" /><br />
                                <TextField className="formBox" id="phone" margin="normal" label="Phone" type="text" variant="outlined" />
                                <TextField className="formBox" id="email" margin="normal" label="Email" type="text" variant="outlined" />
                                {/* <TextField className="formBox" id="region" margin="normal" label="Region" type="text" variant="outlined" /> */}

                                <FormControl>
                                    <InputLabel id="region">Region</InputLabel>

                                    <Select
                                    className="formBox"
                                    variant="outlined"
                                    labelId="region-label"
                                    id="region-select"
                                    margin="normal"
                                    value={region}
                                    onChange={handleChangeRegion}
                                    label="Region"
                                    >
                                    <MenuItem value="">
                                        <em>Any</em>
                                    </MenuItem>
                                    <MenuItem value="East">East</MenuItem>
                                    <MenuItem value="Midwest">Midwest</MenuItem>
                                    <MenuItem value="West">West</MenuItem>
                                    </Select>
                                    
                                </FormControl>

                                {/* <TextField className="formBox" id="interest" margin="normal" label="Interest Area" type="text" variant="outlined" /><br /> */}

                                <FormControl
                                    width="200px">
                                    <InputLabel id="interest">Interest Area</InputLabel>

                                    <Select
                                    className="formBox"
                                    variant="outlined"
                                    labelId="interest-label"
                                    id="interest-select"
                                    margin="normal"
                                    value={interest}
                                    onChange={handleChangeInterest}
                                    label="Interest Area"
                                    
                                    >
                                    <MenuItem value="interest">
                                        <em>Any</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Outsource Your Work</MenuItem>
                                    <MenuItem value={20}>Work for ConSol USA</MenuItem>
                                    <MenuItem value={20}>Provide a Talent Pipeline</MenuItem>
                                    <MenuItem value={30}>Explore Partnership</MenuItem>
                                    <MenuItem value={30}>General Information</MenuItem>
                                    </Select>
                                    
                                </FormControl>

                                <TextField className="formBox" id="message" margin="normal" label="Message" type="text" fullWidth multiline rows={4} placeholder="Hi. What's on your mind?" variant="outlined" />

                                <Button id="submitBtn" variant="contained" type="submit" color="secondary">Submit</Button>

                            </form>

                        </Grid>

                    </Grid>

                </Paper>

            </Container>

            <Container className={classes.pageDiv} maxWidth="false">
                <Grid container>
                    <Grid item xs={12}>
                        <img
                            className={classes.divImage}
                            src={PageBreak}
                            alt="page graphic"
                        ></img>
                    </Grid>
                </Grid>
            </Container>



        </div>
    )
}