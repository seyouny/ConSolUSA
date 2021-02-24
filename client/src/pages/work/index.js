// WORK PAGE

import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Banner from "../../components/banner/";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PageBreak from "./page_graphic_blue_orange.png";
import Divider from "../../components/divider";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

const useStyles = makeStyles({
  pageDiv: {
    paddingLeft: "0",
    paddingRight: "0",
  },
  divImage: {
    width: "100%",
  },
});

export default function WorkPage() {

  const classes = useStyles();

  return (
    <div>
      <Banner></Banner>

      <Container className="proj-btns">
        <div className="submenu">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                className="submenu-button"
                href="#p-area"
              >
                Project Areas
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                className="submenu-button"
                href="#g-focus"
              >
                Geographic Focus
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>

      <Container className="proj-card-container" id="p-area">
        <Typography
          variant="h3"
          className="proj-area-header"
          style={{ textAlign: "center", fontWeight: "900" }}
        >
          Project Areas
        </Typography>

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
                {/* <hr /> */}
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
                  Quality Engineering
                </Typography>
                {/* <hr /> */}
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                >
                  Leading open source technologies, Agile & Scrum methodologies,
                  automated product testing, mobile and web applications.
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
                  Data Analytics
                </Typography>
                {/* <hr /> */}
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                >
                  Abstraction, analysis & automation, object-oriented & Java
                  programming. Project-based, using tools such as Eclipse IDE.
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
                  Database Management
                </Typography>
                {/* <hr /> */}
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                >
                  Extract, scrub and manipulate real-time and warehouse data,
                  SQL & Java, Big Data and Hadoop. Project definition and test
                  design for solutions, large data set preparation.
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
                  Application Support
                </Typography>
                {/* <hr /> */}
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                >
                  Troubleshoot & prioritize app coding problems (in Java or C+),
                  engagement lifecycle stages, “Zero Maintenance Approach.”
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
                  Network Engineering
                </Typography>
                {/* <hr /> */}
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                >
                  CISCO CCNA certification; topologies and advanced config;
                  monitoring and troubleshooting; servers; ITIL fundamentals;
                  cloud and mobile computing.
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
                  Mainframe Computing
                </Typography>
                {/* <hr /> */}
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                >
                  Operations, Z/OS environment, terminology & skills.
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
                  Web Development
                </Typography>
                {/* <hr /> */}
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                >
                  HTML, CSS and JavaScript for full stack web development.
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
                  IT Support
                </Typography>
                {/* <hr /> */}
                <Typography
                  variant="body2"
                  gutterBottom
                  className="proj-type"
                  style={{ textAlign: "center" }}
                >
                  Professional level OS (Windows, MacOS, Linux), hardware
                  installation, maintenance troubleshooting.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container className="geo-focus-container" id="g-focus" mt={10}>
        <Typography
          variant="h3"
          className="geo-focus-header"
          style={{ textAlign: "center", fontWeight: "900" }}
        >
          Geographic Focus
        </Typography>
        <Box className="geo-focus-img">
          {/* <Box pt={5}>
            <Typography
              variant="h3"
              style={{ textAlign: "center", fontWeight: "900", color: "white" }}
            >
              Geographic Focus
            </Typography>
          </Box> */}
        </Box>

        <Container>
          <Box p={10}>
            <Typography
              variant="subtitle1"
              gutterBottom
              // style={{ textAlign: "center" }}
            >
              Our Associates are able to work on projects for clients throughout
              the US. We work virtually, at our customers premises, or in a
              hybrid framework. We are flexible to meet our customers' needs,
              with each team employing the same innovative ecosystem model.
              <br />
              <br />
              While we are a US company and our employees are drawn from
              "domestic emerging markets" in the United States, we recognize the
              global needs of some of our customers. Our founder and leadership
              team have extensive experience in all the major international
              markets and we will partner as needed to deliver integrated
              offshore services.
            </Typography>
          </Box>
        </Container>
      </Container>

      <Container className="offices-container" maxWidth="false">
        <Typography
          variant="h3"
          className="offices-header"
          maxWidth="false"
          style={{ textAlign: "center", fontWeight: "900" }}
        >
          Offices
        </Typography>
        <Grid container maxWidth="false" className="office-inner" spacing={6}>
          <Grid item xs={12} sm={3}>
            <Card className="w-office">
              <CardActionArea>
                <CardMedia
                  className="offImgBox1"
                  component="img"
                  alt=""
                  height="200"
                  title=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    West Coast
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Oakland, CA <br />
                    west@consol-usa.com <br />
                    (555) 555-5555
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className="mw-office">
              <CardActionArea>
                <CardMedia
                  className="offImgBox2"
                  component="img"
                  alt=""
                  height="200"
                  image=""
                  title=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Mid-West
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Chicago, IL <br />
                    midwest@consol-usa.com <br />
                    (555) 555-5555
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className="e-office">
              <CardActionArea>
                <CardMedia
                  className="offImgBox3"
                  component="img"
                  alt=""
                  height="200"
                  image=""
                  title=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    East Coast
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Dover, DE <br />
                    east@consol-usa.com <br />
                    (302) 401-6537
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        {/* <Container fixed>
          <Grid>
            <Grid item xs={12} className="workPageBreak">
              <img src={PageBreak} alt="page graphic"></img>
            </Grid>
          </Grid>
        </Container> */}
      </Container>

      <Container className={classes.pageDiv} maxWidth="false">
        <Grid container>
          <Grid item xs={12} className="workPageBreak">
            <img
              className={classes.divImage}
              src={PageBreak}
              alt="page graphic"
            ></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
