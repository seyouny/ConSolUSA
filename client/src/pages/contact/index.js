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
  });

export default function ContactPage() {

    const classes = useStyles();

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
                                <TextField className="formBox" id="lastName" margin="normal" label="Last Name" type="text" variant="outlined" /><br />
                                <TextField className="formBox" id="business" margin="normal" label="Business Affiliation" type="text" variant="outlined" />
                                <TextField className="formBox" id="position" margin="normal" label="Position" type="text" variant="outlined" /><br />
                                <TextField className="formBox" id="phone" margin="normal" label="Phone" type="text" variant="outlined" />
                                <TextField className="formBox" id="email" margin="normal" label="Email" type="text" variant="outlined" /><br />
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