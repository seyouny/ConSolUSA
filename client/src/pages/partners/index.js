// PARTNERS PAGE

import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Banner from "../../components/banner/";
import Honors from "./honorspathway.png";
import Yearup from "./yearup.jpg";
import Genesys from "./genesysworks.jpg";
import Merritt from "./merrittcollege.png";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../../components/footer";
import "./style.css";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         '& > *': {
//             // margin: theme.spacing(1),
//             width: theme.spacing(40),
//             height: theme.spacing(50)
//         },
//     },
// }));

// export default function PartnersPage() {
//     const classes = useStyles();
//     return (

//         <div>

//             <Banner></Banner>
//             <br></br>
//             <br></br>
//             <Container className="main">

//                 <div className="submenu">

//                     <Grid container spacing={1}>

//                         <Grid item xs={3}>
//                             <Button variant="outlined" className="submenu-button">Talent</Button>
//                         </Grid>

//                         <Grid item xs={3}>
//                             <Button variant="outlined" className="submenu-button">Training</Button>
//                         </Grid>

//                         <Grid item xs={3}>
//                             <Button variant="outlined" className="submenu-button">Academic</Button>
//                         </Grid>

//                         <Grid item xs={3}>
//                             <Button variant="outlined" className="submenu-button">Community</Button>
//                         </Grid>

//                     </Grid>

//                 </div>

//                 {/* BUILD ELEMENTS BELOW HERE. FEEL FREE TO EDIT THE ITEMS, JUST A TOOLKIT. */}

//                 <div id="talent">

//                     <Typography variant="h3" style={{ textAlign: "center", fontWeight: "900", marginTop: "8%" }}>Talent Partners</Typography>
//                     <Typography variant="body1" style={{ textAlign: "center", margin: "3%", marginRight: "10%", marginLeft: "10%" }}>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                         euismod in pellentesque. Pellentesque id nibh tortor id aliquet lectus proin.
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                         euismod in pellentesque. Pellentesque id nibh tortor id aliquet lectus proin.
//                                 </Typography>

//                 </div>

//                 <Grid container spacing={5}>
//                     <Grid className={classes.root} item xs={12} sm={6} md={4}>
//                         <Paper >
//                             <Box className="proj-card">
//                                 <Typography
//                                     variant="h6"
//                                     gutterBottom
//                                     style={{ textAlign: "center" }}
//                                     className="proj-type-head"
//                                 >
//                                     Cybersecurity
//                                 </Typography>
//                                 <hr />
//                                 <Typography
//                                     variant="body2"
//                                     gutterBottom
//                                     className="proj-type"
//                                     style={{ textAlign: "center" }}
//                                 >
//                                     Endpoint protection; triage between endpoint, Active
//                                     Directory, and remote management/monitoring tools;
//                                     synchronization, auditing and hardening of Active Directory;
//                                     critical information protection.
//                                 </Typography>
//                             </Box>
//                         </Paper>
//                     </Grid>
//                     <Grid className={classes.root} item xs={12} sm={6} md={4}>
//                         <Paper >
//                             <Box className="proj-card">
//                                 <Typography
//                                     variant="h6"
//                                     gutterBottom
//                                     style={{ textAlign: "center" }}
//                                     className="proj-type-head"
//                                 >
//                                     Cybersecurity
//                                 </Typography>
//                                 <hr />
//                                 <Typography
//                                     variant="body2"
//                                     gutterBottom
//                                     className="proj-type"
//                                     style={{ textAlign: "center" }}
//                                 >
//                                     Endpoint protection; triage between endpoint, Active
//                                     Directory, and remote management/monitoring tools;
//                                     synchronization, auditing and hardening of Active Directory;
//                                     critical information protection.
//                                 </Typography>
//                             </Box>
//                         </Paper>
//                     </Grid>
//                     <Grid className={classes.root} item xs={12} sm={6} md={4}>
//                         <Paper >
//                             <Box className="proj-card">
//                                 <img src=''></img>
//                                 <Typography
//                                     variant="h6"
//                                     gutterBottom
//                                     style={{ textAlign: "center" }}
//                                     className="proj-type-head"
//                                 >
//                                     Cybersecurity
//                                 </Typography>
//                                 <hr />
//                                 <Typography
//                                     variant="body2"
//                                     gutterBottom
//                                     className="proj-type"
//                                     style={{ textAlign: "center" }}
//                                 >
//                                     Endpoint protection; triage between endpoint, Active
//                                     Directory, and remote management/monitoring tools;
//                                     synchronization, auditing and hardening of Active Directory;
//                                     critical information protection.
//                                 </Typography>
//                             </Box>
//                         </Paper>
//                     </Grid>
//                 </Grid>

//                 <div id="training">

//                     <Typography variant="h3" style={{ textAlign: "center", fontWeight: "900", marginTop: "8%" }}>Training Partners</Typography>
//                     <Typography variant="body1" style={{ textAlign: "center", margin: "3%", marginRight: "10%", marginLeft: "10%" }}>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                         euismod in pellentesque. Pellentesque id nibh tortor id aliquet lectus proin.
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                         euismod in pellentesque. Pellentesque id nibh tortor id aliquet lectus proin.
//                     </Typography>

//                 </div>

//                 <Grid container spacing={5}>
//                     <Grid className={classes.root} item xs={12} sm={6} md={4}>

//                         <Box className="proj-card">
//                             <Typography
//                                 variant="h6"
//                                 gutterBottom
//                                 style={{ textAlign: "center" }}
//                                 className="proj-type-head"
//                             >
//                                 Cybersecurity
//                                 </Typography>
//                             <hr />
//                             <Typography
//                                 variant="body2"
//                                 gutterBottom
//                                 className="proj-type"
//                                 style={{ textAlign: "center" }}
//                             >
//                                 Endpoint protection; triage between endpoint, Active
//                                 Directory, and remote management/monitoring tools;
//                                 synchronization, auditing and hardening of Active Directory;
//                                 critical information protection.
//                                 </Typography>
//                         </Box>
//                     </Grid>
//                     <Grid className={classes.root} item xs={12} sm={6} md={4}>
//                         <Box className="proj-card">
//                             <Typography
//                                 variant="h6"
//                                 gutterBottom
//                                 style={{ textAlign: "center" }}
//                                 className="proj-type-head"
//                             >
//                                 Cybersecurity
//                                 </Typography>
//                             <hr />
//                             <Typography
//                                 variant="body2"
//                                 gutterBottom
//                                 className="proj-type"
//                                 style={{ textAlign: "center" }}
//                             >
//                                 Endpoint protection; triage between endpoint, Active
//                                 Directory, and remote management/monitoring tools;
//                                 synchronization, auditing and hardening of Active Directory;
//                                 critical information protection.
//                                 </Typography>
//                         </Box>
//                     </Grid>
//                     <Grid className={classes.root} item xs={12} sm={6} md={4}>
//                         <Box className="proj-card">
//                             <img src=''></img>
//                             <Typography
//                                 variant="h6"
//                                 gutterBottom
//                                 style={{ textAlign: "center" }}
//                                 className="proj-type-head"
//                             >
//                                 Cybersecurity
//                                 </Typography>
//                             <hr />
//                             <Typography
//                                 variant="body2"
//                                 gutterBottom
//                                 className="proj-type"
//                                 style={{ textAlign: "center" }}
//                             >
//                                 Endpoint protection; triage between endpoint, Active
//                                 Directory, and remote management/monitoring tools;
//                                 synchronization, auditing and hardening of Active Directory;
//                                 critical information protection.
//                                 </Typography>
//                         </Box>
//                     </Grid>
//                 </Grid>

//                 <div id="academic">

//                     <Typography variant="h3" style={{ textAlign: "center", fontWeight: "900", marginTop: "8%", marginBottom: "0%" }}>Academic Partners</Typography>
//                     <Typography variant="body1" style={{ textAlign: "center", margin: "3%", marginRight: "10%", marginLeft: "10%" }}>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                         euismod in pellentesque. Pellentesque id nibh tortor id aliquet lectus proin.
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                         euismod in pellentesque. Pellentesque id nibh tortor id aliquet lectus proin.
//                     </Typography>

//                 </div>

//                 <Grid container spacing={5}>
//                     <Grid className={classes.root} item xs={12} sm={6} md={4}>
//                         <Box className="proj-card">
//                             <Typography
//                                 variant="h6"
//                                 gutterBottom
//                                 style={{ textAlign: "center" }}
//                                 className="proj-type-head"
//                             >
//                                 Cybersecurity
//                             </Typography>
//                             <hr />
//                             <Typography
//                                 variant="body2"
//                                 gutterBottom
//                                 className="proj-type"
//                                 style={{ textAlign: "center" }}
//                             >
//                                 Endpoint protection; triage between endpoint, Active
//                                 Directory, and remote management/monitoring tools;
//                                 synchronization, auditing and hardening of Active Directory;
//                                 critical information protection.
//                             </Typography>
//                         </Box>
//                     </Grid>
//                     <Grid className={classes.root} item xs={12} sm={6} md={4}>
//                         <Box className="proj-card">
//                             <Typography
//                                 variant="h6"
//                                 gutterBottom
//                                 style={{ textAlign: "center" }}
//                                 className="proj-type-head"
//                             >
//                                 Cybersecurity
//                             </Typography>
//                             <hr />
//                             <Typography
//                                 variant="body2"
//                                 gutterBottom
//                                 className="proj-type"
//                                 style={{ textAlign: "center" }}
//                             >
//                                 Endpoint protection; triage between endpoint, Active
//                                 Directory, and remote management/monitoring tools;
//                                 synchronization, auditing and hardening of Active Directory;
//                                 critical information protection.
//                             </Typography>
//                         </Box>
//                     </Grid>
//                     <Grid className={classes.root} item xs={12} sm={6} md={4}>
//                         <Box className="proj-card">
//                             <img src=''></img>
//                             <Typography
//                                 variant="h6"
//                                 gutterBottom
//                                 style={{ textAlign: "center" }}
//                                 className="proj-type-head"
//                             >
//                                 Cybersecurity
//                             </Typography>
//                             <hr />
//                             <Typography
//                                 variant="body2"
//                                 gutterBottom
//                                 className="proj-type"
//                                 style={{ textAlign: "center" }}
//                             >
//                                 Endpoint protection; triage between endpoint, Active
//                                 Directory, and remote management/monitoring tools;
//                                 synchronization, auditing and hardening of Active Directory;
//                                 critical information protection.
//                             </Typography>
//                         </Box>
//                     </Grid>
//                 </Grid>

//             </Container>

//         </div>

//     )
// }

export default function PartnersPage() {
  return (
    <div>
      <Banner></Banner>

      <Container className="partner-btns">
        <div className="submenu">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                variant="outlined"
                className="submenu-button"
                href="#talent-sect"
              >
                Talent
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Button
                variant="outlined"
                className="submenu-button"
                href="#g-focus"
              >
                Training
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Button
                variant="outlined"
                className="submenu-button"
                href="#p-area"
              >
                Academic
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Button
                variant="outlined"
                className="submenu-button"
                href="#p-area"
              >
                Community
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>

      <Container className="talent-card-container" id="talent-sect">
        <Typography
          variant="h3"
          className="talent-area-header"
          style={{ textAlign: "center", fontWeight: "900" }}
        >
          Talent Partners
        </Typography>
        <Typography
          variant="body1"
          style={{
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          We work with the nation's leading organizations focused on academic
          preparedness and workforce readiness for talent in under-served
          communities. Our partners include Honors Pathway, Year Up, and Genesys
          Works. For project-ready talent in cybersecurity we've partnered with
          Merritt College Cybersecurity Program.
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={3} className="logo-grid">
            <a href="https://honorspathway.org/" target="_blank">
              <img src={Honors} alt="logo" className="talent-logo1" />
            </a>
            {/* <Paper>
              <Box className="">
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ textAlign: "center" }}
                  className="proj-type-head"
                >
                  Honors Pathway
                </Typography>
                
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                ></Typography>
              </Box>
            </Paper> */}
          </Grid>
          <Grid item xs={12} sm={3} className="logo-grid">
            <a href="https://www.yearup.org/" target="_blank">
              <img src={Yearup} alt="logo" className="talent-logo2" />
            </a>
            {/* <Paper>
              <Box className="">
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ textAlign: "center" }}
                  className="proj-type-head"
                >
                  Year Up
                </Typography>
                
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                ></Typography>
              </Box>
            </Paper> */}
          </Grid>

          <Grid item xs={12} sm={3} className="logo-grid">
            <a href="https://genesysworks.org/" target="_blank">
              <img src={Genesys} alt="logo" className="talent-logo3" />
            </a>
            {/* <Paper>
              <Box className="">
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ textAlign: "center" }}
                  className="proj-type-head"
                >
                  Genesys Works
                </Typography>
                
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                ></Typography>
              </Box>
            </Paper> */}
          </Grid>
          <Grid item xs={12} sm={3} className="logo-grid">
            <a href="https://merrittsecurity.com/" target="_blank">
              <img src={Merritt} alt="logo" className="talent-logo4" />
            </a>
            {/* <Paper>
              <Box className="">
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ textAlign: "center" }}
                  className="proj-type-head"
                >
                  Merritt College
                </Typography>
                
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                ></Typography>
              </Box>
            </Paper> */}
          </Grid>
        </Grid>
      </Container>

      <Container className="main">
        {/* <div className="submenu">
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Button variant="outlined" className="submenu-button">
                Talent
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button variant="outlined" className="submenu-button">
                Training
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button variant="outlined" className="submenu-button">
                Academic
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button variant="outlined" className="submenu-button">
                Community
              </Button>
            </Grid>
          </Grid>
        </div> */}

        {/* BUILD ELEMENTS BELOW HERE. FEEL FREE TO EDIT THE ITEMS, JUST A TOOLKIT. */}

        {/* <div id="talent">
          <Typography
            variant="h3"
            style={{ textAlign: "center", fontWeight: "900", marginTop: "8%" }}
          >
            Talent Partners
          </Typography>
          <Typography
            variant="body1"
            style={{
              textAlign: "center",
              margin: "3%",
              marginRight: "10%",
              marginLeft: "10%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, euismod in
            pellentesque. Pellentesque id nibh tortor id aliquet lectus proin.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, euismod in
            pellentesque. Pellentesque id nibh tortor id aliquet lectus proin.
          </Typography>
        </div>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper>
              <Box className="proj-card">
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ textAlign: "center" }}
                  className="proj-type-head"
                >
                  Cybersecurity
                </Typography>
                <hr />
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                >
                  Endpoint protection; triage between endpoint, Active
                  Directory, and remote management/monitoring tools;
                  synchronization, auditing and hardening of Active Directory;
                  critical information protection.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper>
              <Box className="proj-card">
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ textAlign: "center" }}
                  className="proj-type-head"
                >
                  Cybersecurity
                </Typography>
                <hr />
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                >
                  Endpoint protection; triage between endpoint, Active
                  Directory, and remote management/monitoring tools;
                  synchronization, auditing and hardening of Active Directory;
                  critical information protection.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper>
              <Box className="proj-card">
                <img src=""></img>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ textAlign: "center" }}
                  className="proj-type-head"
                >
                  Cybersecurity
                </Typography>
                <hr />
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                >
                  Endpoint protection; triage between endpoint, Active
                  Directory, and remote management/monitoring tools;
                  synchronization, auditing and hardening of Active Directory;
                  critical information protection.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <div id="training">
          <Typography
            variant="h3"
            style={{ textAlign: "center", fontWeight: "900", marginTop: "8%" }}
          >
            Training Partners
          </Typography>
          <Typography
            variant="body1"
            style={{
              textAlign: "center",
              margin: "3%",
              marginRight: "10%",
              marginLeft: "10%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, euismod in
            pellentesque. Pellentesque id nibh tortor id aliquet lectus proin.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, euismod in
            pellentesque. Pellentesque id nibh tortor id aliquet lectus proin.
          </Typography>
        </div>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box className="proj-card">
              <Typography
                variant="h6"
                gutterBottom
                style={{ textAlign: "center" }}
                className="proj-type-head"
              >
                Cybersecurity
              </Typography>
              <hr />
              <Typography
                variant="body2"
                gutterBottom
                className="proj-type"
                style={{ textAlign: "center" }}
              >
                Endpoint protection; triage between endpoint, Active Directory,
                and remote management/monitoring tools; synchronization,
                auditing and hardening of Active Directory; critical information
                protection.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box className="proj-card">
              <Typography
                variant="h6"
                gutterBottom
                style={{ textAlign: "center" }}
                className="proj-type-head"
              >
                Cybersecurity
              </Typography>
              <hr />
              <Typography
                variant="body2"
                gutterBottom
                className="proj-type"
                style={{ textAlign: "center" }}
              >
                Endpoint protection; triage between endpoint, Active Directory,
                and remote management/monitoring tools; synchronization,
                auditing and hardening of Active Directory; critical information
                protection.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box className="proj-card">
              <img src=""></img>
              <Typography
                variant="h6"
                gutterBottom
                style={{ textAlign: "center" }}
                className="proj-type-head"
              >
                Cybersecurity
              </Typography>
              <hr />
              <Typography
                variant="body2"
                gutterBottom
                className="proj-type"
                style={{ textAlign: "center" }}
              >
                Endpoint protection; triage between endpoint, Active Directory,
                and remote management/monitoring tools; synchronization,
                auditing and hardening of Active Directory; critical information
                protection.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <div id="academic">
          <Typography
            variant="h3"
            style={{
              textAlign: "center",
              fontWeight: "900",
              marginTop: "8%",
              marginBottom: "0%",
            }}
          >
            Academic Partners
          </Typography>
          <Typography
            variant="body1"
            style={{
              textAlign: "center",
              margin: "3%",
              marginRight: "10%",
              marginLeft: "10%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, euismod in
            pellentesque. Pellentesque id nibh tortor id aliquet lectus proin.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, euismod in
            pellentesque. Pellentesque id nibh tortor id aliquet lectus proin.
          </Typography>
        </div>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box className="proj-card">
              <Typography
                variant="h6"
                gutterBottom
                style={{ textAlign: "center" }}
                className="proj-type-head"
              >
                Cybersecurity
              </Typography>
              <hr />
              <Typography
                variant="body2"
                gutterBottom
                className="proj-type"
                style={{ textAlign: "center" }}
              >
                Endpoint protection; triage between endpoint, Active Directory,
                and remote management/monitoring tools; synchronization,
                auditing and hardening of Active Directory; critical information
                protection.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box className="proj-card">
              <Typography
                variant="h6"
                gutterBottom
                style={{ textAlign: "center" }}
                className="proj-type-head"
              >
                Cybersecurity
              </Typography>
              <hr />
              <Typography
                variant="body2"
                gutterBottom
                className="proj-type"
                style={{ textAlign: "center" }}
              >
                Endpoint protection; triage between endpoint, Active Directory,
                and remote management/monitoring tools; synchronization,
                auditing and hardening of Active Directory; critical information
                protection.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box className="proj-card">
              <img src=""></img>
              <Typography
                variant="h6"
                gutterBottom
                style={{ textAlign: "center" }}
                className="proj-type-head"
              >
                Cybersecurity
              </Typography>
              <hr />
              <Typography
                variant="body2"
                gutterBottom
                className="proj-type"
                style={{ textAlign: "center" }}
              >
                Endpoint protection; triage between endpoint, Active Directory,
                and remote management/monitoring tools; synchronization,
                auditing and hardening of Active Directory; critical information
                protection.
              </Typography>
            </Box>
          </Grid> */}
        {/* </Grid> */}
      </Container>
    </div>
  );
}
