// PEOPLE PAGE

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Banner from '../../components/banner/';
import Founder from './founder.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
});


export default function PeoplePage() {

  const classes = useStyles();

  return (

    <div>

      <Banner></Banner>

      <Container className="main">

        {/* BUILD ELEMENTS BELOW HERE. FEEL FREE TO EDIT THE ITEMS, JUST A TOOLKIT. */}

        <div className="submenu">

          <Grid container spacing={1}>

            <Grid item xs={4}>
              <Button variant="outlined" className="submenu-button">Founder</Button>
            </Grid>

            <Grid item xs={4}>
              <Button variant="outlined" className="submenu-button">Leaders</Button>
            </Grid>

            <Grid item xs={4}>
              <Button variant="outlined" className="submenu-button">Board</Button>
            </Grid>

          </Grid>

        </div>

        <div id="founderdiv">

          <Paper className="padded-section">

            <Grid container spacing={1}>

              <Grid item xs={8}>

                <Typography variant="h2">Founder's Story</Typography>
                <Typography variant="body1"><i>From humble beginnings...</i></Typography>

                <Typography variant="body1" paragraph>

                    ConSol USA's founder is a global entrepreneur who, himself, has taken the journey of crossing the opportunity divide.  Born into poverty, he went from a high school dropout working as a housepainter, joined the military at age 17, and studied during his military service, graduating Summa Cum Laude in Behavioral Science from State University of New York Institute of Technology. He then took his first corporate roles, first in HR then in Sales & Marketing, after which he moved into consulting a few years later, where he was exposed to his first international experience. After emigrating to Switzerland to build his consulting practice, he found his first entrepreneurial opportunity. Thirty years later his journey took him from being a housepainter to a dual-national, bi-lingual, global technology entrepreneur who has lived and worked on four continents. <br></br>
                </Typography>
                <Typography variant="body1" paragraph>
                    After returning to the US, Robert spent over two years working closely with youth development non-profits, philanthropists, foundations, corporations, and technology training organizations. From this work, it was clear that a new paradigm was needed, one that meant bringing together all of the key elements that would provide overlooked talent with a full runway from which to take off... in one holistic ecosystem.  None existed, so he founded ConSol USA to build it.<br></br>
                </Typography>
                <Typography variant="body1" paragraph>
                    Robert's journey has given him a unique perspective on our mission, based on the absolute belief that he is in no way unique... there are literally millions of people who have the same talent, drive, and capability, but have not yet had the opportunity to grow to their potential. He has an intimate understanding of the people whose lives ConSol USA was founded to change. <br></br>
                </Typography>
                <Typography variant="body1" paragraph>
                    His profound desire is to provide a platform through which people like the younger version of himself can become the older version of himself; creating and sharing value in communities that are not fully engaged, but can, should, and will be.
                </Typography>

              </Grid>

              <Grid item xs={1}>
              </Grid>

              <Grid item xs={3}>
                <img src={Founder} alt="Robert Tibbs" className="headshot" width="100%" />
              </Grid>

              <Grid item xs={12}>
                {/* SECTION DIVIDER HERE */}
              </Grid>

              {/* STAFF PHOTOS BELOW */}

              <Grid item xs={3}>

                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://img1.wsimg.com/isteam/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/Robert%20Tibbs.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:582,h:291,cg:true"
                      title="Robert Tibbs"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Robert Tibbs
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Entrepreneur with over 30 years of international technology ventures on four continents. Former founder and CEO of Forbes Digital Commerce; Accelon; Africa Venture Partners; and Actel Ltd.  Former board member of NY Technology Alliance
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Email
                    </Button>
                    <Button size="small" color="primary">
                      LinkedIn
                    </Button>
                  </CardActions>
                </Card>

              </Grid>

              <Grid item xs={3}>

              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://img1.wsimg.com/isteam/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/Robert%20Tibbs.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:582,h:291,cg:true"
                    title="Robert Tibbs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Robert Tibbs
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Entrepreneur with over 30 years of international technology ventures on four continents. Former founder and CEO of Forbes Digital Commerce; Accelon; Africa Venture Partners; and Actel Ltd.  Former board member of NY Technology Alliance
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Email
                  </Button>
                  <Button size="small" color="primary">
                    LinkedIn
                  </Button>
                </CardActions>
              </Card>

              </Grid>

              <Grid item xs={3}>

              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://img1.wsimg.com/isteam/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/Robert%20Tibbs.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:582,h:291,cg:true"
                    title="Robert Tibbs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Robert Tibbs
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Entrepreneur with over 30 years of international technology ventures on four continents. Former founder and CEO of Forbes Digital Commerce; Accelon; Africa Venture Partners; and Actel Ltd.  Former board member of NY Technology Alliance
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Email
                  </Button>
                  <Button size="small" color="primary">
                    LinkedIn
                  </Button>
                </CardActions>
              </Card>

              </Grid>

              <Grid item xs={3}>

              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://img1.wsimg.com/isteam/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/Robert%20Tibbs.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:582,h:291,cg:true"
                    title="Robert Tibbs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Robert Tibbs
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Entrepreneur with over 30 years of international technology ventures on four continents. Former founder and CEO of Forbes Digital Commerce; Accelon; Africa Venture Partners; and Actel Ltd.  Former board member of NY Technology Alliance
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Email
                  </Button>
                  <Button size="small" color="primary">
                    LinkedIn
                  </Button>
                </CardActions>
              </Card>

              </Grid>

            </Grid>

          </Paper>

        </div>






      </Container>

    </div>

  )
}