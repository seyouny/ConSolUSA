// PEOPLE PAGE

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Banner from '../../components/banner/';
import Founder from './founder.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';
import PageGraphic from '../../components/divider';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Grow from '@material-ui/core/Grow';
import BlueArc from '../../components/bluearc';
import MaroonArc from '../../components/maroonarc';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './style.css';


export default function PeoplePage() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div>

      <Banner></Banner>

      {/* ================= SUBMENU ================= */}

      <Container className="top">

        <div className="submenu">

          <Grid container spacing={1}>

            <Grid item xs={12} sm={6} md={3}>
            <a href="#founder"><Button variant="outlined" className="submenu-button">Founder</Button></a>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <a href="#staffContainer"><Button variant="outlined" className="submenu-button">Leaders</Button></a>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <a href="#board"><Button variant="outlined" className="submenu-button">Board</Button></a>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <a href="#advisors"><Button variant="outlined" className="submenu-button">Advisors</Button></a>
            </Grid>

          </Grid>

        </div>

      </Container>

      <Container id="founder">

        <Grid container spacing={1}>

          {/* ================= FOUNDERS STORY ================= */}

          <Grid item xs={8}>

            <Typography variant="h3" className="sectionHead">Founder's Story</Typography>
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

        </Grid>

      </Container>


      {/* ================= SECTION DIVIDER ================= */}

      <PageGraphic></PageGraphic>

      {/* ================= STAFF PHOTOS ================= */}
      <Container id="staffContainer" maxWidth="false">

        <Grid container spacing={1} id="staffCards">

        <Grid item xs={12}>
        <Typography 
          variant="h3"
          style={{ textAlign: "center", color: "white" }}
        >Staff</Typography>
        </Grid>

          <Grid item xs={3}>

            <Card className="staffCard" onClick={handleOpen}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Robert Tibbs"
                  height="140"
                  image="https://img1.wsimg.com/isteam/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/Robert%20Tibbs.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:582,h:291,cg:true"
                  title="Robert Tibbs"
                />                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="name">
                    Robert Tibbs
                  </Typography>

                  <Typography gutterBottom variant="body1" component="h3" className="title">
                    Chairman and CEO
                  </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions>
                <a size="small" color="primary" href='mailto:rtibbs@consol-usa.com'>
                  <EmailIcon></EmailIcon>
                  </a>
                <a size="small" color="primary" target="_blank" href='https://www.linkedin.com/in/roberttibbs/'>
                  <LinkedInIcon></LinkedInIcon>
                  </a>
              </CardActions>

            </Card>

          </Grid>

          <Grid item xs={3}>

            <Card className="staffCard" onClick={handleOpen}>

              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Annatina Tibbs"
                  height="140"
                  image="https://isteam.wsimg.com/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/IMG_5167-0001.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:582,h:291,cg:true"
                  title="Annatina Tibbs"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="name">
                    Annatina Tibbs
                  </Typography>

                  <Typography gutterBottom variant="body1" component="h3" className="title">
                    Chief of Staff
                  </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions>
                <a size="small" target="_blank" color="primary" href='mailto:atibbs@consol-usa.com'>
                <EmailIcon></EmailIcon>
                    </a>
                <a target="_blank" size="small" color="primary" href='https://www.linkedin.com/in/annatinatibbs/'>
                <LinkedInIcon></LinkedInIcon>
                    </a>
              </CardActions>

              <Modal
                className="staffModal"
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >

                <Paper>
                  <h2 id="simple-modal-title">Text in a modal</h2>
                  <p id="simple-modal-description">
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                </Paper>

              </Modal>

            </Card>

          </Grid>

          <Grid item xs={3}>

            <Card className="staffCard">

              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Malcolm Goodwin"
                  height="140"
                  image="https://isteam.wsimg.com/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/Malcolm%20Headshot.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:582,h:291,cg:true"
                  title="Malcolm Goodwin"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="name">
                    Malcolm Goodwin
                </Typography>

                  <Typography gutterBottom variant="body1" component="h3" className="title">
                    President
                </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions>
                <a target="_blank" size="small" color="primary" href='mailto:mgoodwin@consol-usa.com'>
                <EmailIcon></EmailIcon>
                  </a>
                <a target="_blank" size="small" color="primary" href='https://www.linkedin.com/in/malcolmgoodwin/'>
                <LinkedInIcon></LinkedInIcon>
                  </a>
              </CardActions>

            </Card>

          </Grid>

          <Grid item xs={3}>

            <Card className="staffCard">

              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://img1.wsimg.com/isteam/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/Screen%20Shot%202020-03-15%20at%204.12.27%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:582,h:291,cg:true"
                  title="Robert Tibbs"
                />              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="name">
                    Mark Egan
                </Typography>

                  <Typography gutterBottom variant="body1" component="h3" className="title">
                    Chief Technology Officer
                </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions>
                <a target="_blank" size="small" color="primary" href='mailto:megans@consol-usa.com'>
                <EmailIcon></EmailIcon>
                </a>
                <a target="_blank" size="small" color="primary" href='https://www.linkedin.com/in/markeegan/'>
                <LinkedInIcon></LinkedInIcon>
                </a>
              </CardActions>

            </Card>

          </Grid>

          <Grid item xs={3}>

            <Card className="staffCard">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Racheal Fosu"
                  height="140"
                  image="https://img1.wsimg.com/isteam/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/RFosu%20Bio%20Picture.jpeg/:/cr=t:2.83%25,l:0%25,w:100%25,h:94.34%25/rs=w:582,h:291,cg:true"
                  title="Racheal Fosu"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="name">
                    Racheal Fosu
                </Typography>

                  <Typography gutterBottom variant="body1" component="h3" className="title">
                    Chief Technology Advisor
                </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions>
                <a target="_blank" size="small" color="primary" href='mailto:rfosu@consol-usa.com'>
                <EmailIcon></EmailIcon>
                  </a>
                <a target="_blank" size="small" color="primary" href='https://www.linkedin.com/in/rachealfosu/'>
                <LinkedInIcon></LinkedInIcon>
                  </a>
              </CardActions>

            </Card>

          </Grid>

          <Grid item xs={3}>

            <Card className="staffCard">

              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Patrick Cohen"
                  height="140"
                  image="https://img1.wsimg.com/isteam/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/Patrick%20Cohen.jpeg/:/cr=t:5.36%25,l:0%25,w:100%25,h:89.29%25/rs=w:582,h:291,cg:true"
                  title="Patrick Cohen"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="name">
                    Patrick Cohen
                  </Typography>

                  <Typography gutterBottom variant="body1" component="h3" className="title">
                    Chief Operations Advisor
                  </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions>
                <a target="_blank" size="small" color="primary" href='mailto:pcohen@consol-usa.com'>
                <EmailIcon></EmailIcon>
                    </a>
                <a target="_blank" size="small" color="primary" href='https://www.linkedin.com/in/patrick-cohen-094a1b14/'>
                <LinkedInIcon></LinkedInIcon>
                    </a>
              </CardActions>

            </Card>

          </Grid>

          <Grid item xs={3}>

            <Card className="staffCard">

              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Joseph Spence II"
                  height="140"
                  image="https://isteam.wsimg.com/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/Joe%20Spence%20Headshot.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:582,h:291,cg:true"
                  title="Joseph Spence II"
                />                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="name">
                    Joseph Spence II
                  </Typography>

                  <Typography gutterBottom variant="body1" component="h3" className="title">
                    Chief Financial & Strategy Officer
                  </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions>
                <a target="_blank" size="small" color="primary" href='mailto:jspence@consol-usa.com'>
                <EmailIcon></EmailIcon>
                  </a>
                <a target="_blank" size="small" color="primary" href='https://www.linkedin.com/in/josephspenceii/'>
                <LinkedInIcon></LinkedInIcon>
                  </a>
              </CardActions>

            </Card>

          </Grid>

          <Grid item xs={3}>

            <Card className="staffCard">

              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Nagelah Cohen"
                  height="140"
                  image="https://img1.wsimg.com/isteam/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/image-0002.jpg/:/cr=t:2.83%25,l:0%25,w:100%25,h:94.34%25/rs=w:582,h:291,cg:true"
                  title="Nagelah Cohen"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="name">
                    Nagelah Cohen
                </Typography>

                  <Typography gutterBottom variant="body1" component="p" className="title">
                    Senior Manager, Finance
                </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions>
                <a target="_blank" size="small" color="primary" href='mailto:ncohen@consol-usa.com'>
                <EmailIcon></EmailIcon>
                </a>
                <a target="_blank" size="small" color="primary" href='https://www.linkedin.com/in/nagelah-cohen-6020038/'>
                <LinkedInIcon></LinkedInIcon>
                </a>
              </CardActions>

            </Card>

          </Grid>

          <Grid item xs={3}>

          <Card className="staffCard">

            <CardActionArea>
              <CardMedia
                component="img"
                alt="Kendall Norris"
                height="140"
                image="https://img1.wsimg.com/isteam/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/Kendall%20Norris.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:194,cg:true"
                title="Kendall Norris"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className="name">
                  Kendall Norris
              </Typography>

                <Typography gutterBottom variant="body1" component="p" className="title">
                  Chief Operating Officer
              </Typography>

              </CardContent>
            </CardActionArea>
            <CardActions>
              <a target="_blank" size="small" color="primary" href='mailto:knorris@consol-usa.com'>
              <EmailIcon></EmailIcon>
              </a>
              <a target="_blank" size="small" color="primary" href='https://www.linkedin.com/in/knorris-glf/'>
              <LinkedInIcon></LinkedInIcon>
              </a>
            </CardActions>

          </Card>

          </Grid>

          <Grid item xs={3}>

          <Card className="staffCard">

            <CardActionArea>
              <CardMedia
                component="img"
                alt="Racheal Fosu"
                height="140"
                image="https://img1.wsimg.com/isteam/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/RFosu%20Bio%20Picture.jpeg/:/cr=t:2.83%25,l:0%25,w:100%25,h:94.34%25/rs=w:388,h:194,cg:true"
                title="Racheal Fosu"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className="name">
                  Racheal Fosu
              </Typography>

                <Typography gutterBottom variant="body1" component="p" className="title">
                  Chief Technology Advisor
              </Typography>

              </CardContent>
            </CardActionArea>
            <CardActions>
              <a target="_blank" size="small" color="primary" href='mailto:rfosu@consol-usa.com'>
              <EmailIcon></EmailIcon>
              </a>
              <a target="_blank" size="small" color="primary" href='https://www.linkedin.com/in/rachealfosu/'>
              <LinkedInIcon></LinkedInIcon>
              </a>
            </CardActions>

          </Card>

          </Grid>

          <Grid item xs={3}>

          <Card className="staffCard">

            <CardActionArea>
              <CardMedia
                component="img"
                alt="Elidy Guillaume"
                height="140"
                image="https://img1.wsimg.com/isteam/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/IMG_0134-0002.jpeg/:/cr=t:9.68%25,l:0%25,w:100%25,h:80.65%25/rs=w:388,h:194,cg:true"
                title="Elidy Guillaume"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className="name">
                  Elidy Guillaume
              </Typography>

                <Typography gutterBottom variant="body1" component="p" className="title">
                  Manager, Accounting
              </Typography>

              </CardContent>
            </CardActionArea>
            <CardActions>
              <a target="_blank" size="small" color="primary" href='mailto:eguillaume@consol-usa.com'>
              <EmailIcon></EmailIcon>
              </a>
              <a target="_blank" size="small" color="primary" href='http://www.linkedin.com/in/elidy-guillaume-mba-3955a16b/'>
              <LinkedInIcon></LinkedInIcon>
              </a>
            </CardActions>

          </Card>

          </Grid>

          <Grid item xs={3}>

            <Card className="staffCard">

              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Joe Nicholson"
                  height="140"
                  image="https://picsum.photos/388/194"
                  title="Joe Nicholson"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="name">
                    Joe Nicholson
                </Typography>

                  <Typography gutterBottom variant="body1" component="p" className="title">
                    Marketing & Communications Mgr
                </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions>
                <a target="_blank" size="small" color="primary" href='mailto:jnicholson@consol-usa.com'>
                <EmailIcon></EmailIcon>
                </a>
                <a target="_blank" size="small" color="primary" href='http://www.linkedin.com/in/elidy-guillaume-mba-3955a16b/'>
                <LinkedInIcon></LinkedInIcon>
                </a>
              </CardActions>

            </Card>

            </Grid>


        </Grid>
      </Container>

      {/* ================= SECTION DIVIDER ================= */}

      <BlueArc></BlueArc> 

      {/* =================== BOARD =================== */}

      <Container id="board" className="section">
        <Grid container spacing={1}>

        <Grid item xs={12}>
        <Typography 
          variant="h3"
          className="sectionHead"
        >Board</Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={0} variant="outlined" className="boardList">
            <Typography variant="body1">
              <List>
                <ListItem>
                Chairman<br></br>
                Robert Tibbs<br></br>
                Founder & CEO<br></br>
                ConSol USA</ListItem>

                <ListItem>
                Jim Agnew<br></br>
                VP Corporate Development<br></br>
                Village MD</ListItem>

                <ListItem>
                Dr. Taiwo Kayode<br></br>
                Chief Consulting Engineer<br></br>
                Exxon Mobile</ListItem>

                <ListItem>
                Vice Chairman<br></br>
                Demola Eleso<br></br>
                Chairman<br></br>
                Contact Solutions Ltd</ListItem>

                <ListItem>
                Tom Knight<br></br>
                Chief Operating Officer<br></br> 
                Genesys Work</ListItem>

                <ListItem>
                Mars Shah<br></br>
                Chief Operating Officer<br></br>
                ConSol USA</ListItem>

                <ListItem>
                Dr. Marc Spencer <br></br>
                CEO <br></br>
                Summer Search</ListItem>
              </List>
            </Typography>
          </Paper>
        </Grid>


        </Grid>
      </Container>

{/* ================= SECTION DIVIDER ================= */}

      <MaroonArc></MaroonArc>

{/* =================== ADVISORS =================== */}

      <Container id="advisors" className="section">
        <Grid container spacing={1}>

        <Grid item xs={12}>
        <Typography 
          variant="h3"
          className="sectionHead"
          style={{ color: "white" }}
        >Advisors</Typography>
        </Grid>

          <Grid item xs={12}>
            <Paper elevation={0} variant="outlined" className="boardList">
              <Typography variant="body1">
                <List>
                  <ListItem>
                  Ralph Loura<br></br>
                  SVP/CIO<br />
                  Lumentum</ListItem>

                  <ListItem>
                  Emily Schaffer<br />
                  Managing Director<br />
                  Year Up</ListItem>

                  <ListItem>
                  Randy Lewis<br />
                  Partner - Wilson Sonsini<br /> 
                  Goodrich & Rosati</ListItem>

                  <ListItem>
                  Roberto Romano<br />
                  Former VP Enterprise Partnerships<br /> 
                  Mastercard</ListItem>

                  <ListItem>
                  Paul Musselman<br />
                  Managing Director <br />
                  Alvarez & Marsal</ListItem>

                  <ListItem>
                  Dr. Jahanzeb Sherwani<br />
                  Founder and CEO<br />
                  Screenhero</ListItem>

                  <ListItem>
                  Keith Rosmarin<br />
                  Registered Industrial Psychologist</ListItem>
                </List>
              </Typography>
            </Paper>
          </Grid>


        </Grid>
      </Container>

    </div>

  )
}