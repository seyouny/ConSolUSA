// PEOPLE PAGE

import React from 'react';
import Grid from '@material-ui/core/Grid';
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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './style.css';


export default function PeoplePage() {

  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (

    <div>

      <Banner></Banner>

      {/* ================= SUBMENU ================= */}

      <Container className="top">

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

      </Container>

      <Container className="main">

        <Grid container spacing={1}>

      {/* ================= FOUNDERS STORY ================= */}

          <Grid item xs={8}>

            <Typography variant="h3">Founder's Story</Typography>
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
          {/* ================= SECTION DIVIDER ================= */}
          </Grid>



          {/* ================= STAFF PHOTOS ================= */}

          <Grid item xs={3}>

            <Card className="staffCard">
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

                  <Typography gutterBottom variant="p" component="h3" className="title">
                    Chairman and CEO
                  </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button><a size="small" color="primary" href='mailto:rtibbs@consol-usa.com'>
                    Email
                  </a></Button>
                  <Button><a size="small" color="primary" href='https://www.linkedin.com/in/roberttibbs/'>
                    LinkedIn
                  </a></Button>
              </CardActions>

                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>about</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      Entrepreneur with over 30 years of international technology ventures on four continents. Former founder and CEO of Forbes Digital Commerce; Accelon; Africa Venture Partners; and Actel Ltd.  Former board member of NY Technology Alliance
                    </Typography>
                  </AccordionDetails>
                </Accordion>

            </Card>

          </Grid>

          <Grid item xs={3}>

            <Card className="staffCard">

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

                  <Typography gutterBottom variant="p" component="h3" className="title">
                    Chief of Staff
                  </Typography>

                  </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button><a size="small" color="primary" href='mailto:atibbs@consol-usa.com'>
                      Email
                    </a></Button>
                    <Button><a size="small" color="primary" href='https://www.linkedin.com/in/annatinatibbs/'>
                      LinkedIn
                    </a></Button>
                </CardActions>

                  <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>about</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2">
                      Serial entrepreneur, Director of Corporate Affairs at Forbes Digital Commerce and Lotaris SA; substantial international experience in Europe, Africa, Asia and North America; specialist in human capital, building organizational ethos; holistic wellness coach and practitioner.                      </Typography>
                    </AccordionDetails>
                  </Accordion>

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

                <Typography gutterBottom variant="p" component="h3" className="title">
                  President & Chief Commercial Officer
                </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button><a size="small" color="primary" href='mailto:mgoodwin@consol-usa.com'>
                    Email
                  </a></Button>
                  <Button><a size="small" color="primary" href='https://www.linkedin.com/in/malcolmgoodwin/'>
                    LinkedIn
                  </a></Button>
              </CardActions>

                <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>about</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                    Former client executive with World Wide Technology, the largest Black-owned technology company in the US (founded by Dave Steward, one of the 5 Black US billionaires). Board member of Big Brothers Big Sisters Bay Area, and 100 Black Men of the Bay Area.             </Typography>
                  </AccordionDetails>
                </Accordion>

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

                <Typography gutterBottom variant="p" component="p" className="title">
                  Chief Technology Officer
                </Typography>

              </CardContent>
            </CardActionArea>
            <CardActions>
                <Button><a size="small" color="primary" href='mailto:megans@consol-usa.com'>
                  Email
                </a></Button>
                <Button><a size="small" color="primary" href='https://www.linkedin.com/in/markeegan/'>
                  LinkedIn
                </a></Button>
            </CardActions>

              <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>about</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                  25 years of experience leading global IT organizations; specialization in IT transformation, information security, and M&A; Partner at StrataFusion Group; former global CIO at VMware; former global CIO at Symantec; author; lecturer at UC Berkeley Haas School of Business.                  </Typography>
                </AccordionDetails>
              </Accordion>

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

                <Typography gutterBottom variant="p" component="h3" className="title">
                  Chief Technology Advisor
                </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button><a size="small" color="primary" href='mailto:rfosu@consol-usa.com'>
                    Email
                  </a></Button>
                  <Button><a size="small" color="primary" href='https://www.linkedin.com/in/rachealfosu/'>
                    LinkedIn
                  </a></Button>
              </CardActions>

                <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>about</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                    Technology Executive with 20 years experience in Strategy, IT transformation, Big Data and Analytics; former head of Global Technology Strategy at Broadridge; former Global Technology Head at ICE/NY Stock Exchange responsible for teams in Americas, Europe and Asia.                    </Typography>
                  </AccordionDetails>
                </Accordion>

            </Card>

            </Grid>

            <Grid item xs={3}>

            <Card className="staffCard">

                <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Patrick Cohen"
                  height="140"
                  image="https://isteam.wsimg.com/ip/c75c11ac-84a2-47f7-94f0-8f5c6616f844/IMG_5167-0001.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:582,h:291,cg:true"
                  title="Patrick Cohen"
                />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="name">
                    Patrick Cohen
                  </Typography>

                  <Typography gutterBottom variant="p" component="h3" className="title">
                    Chief Operations Advisor
                  </Typography>

                  </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button><a size="small" color="primary" href='mailto:pcohen@consol-usa.com'>
                      Email
                    </a></Button>
                    <Button><a size="small" color="primary" href='https://www.linkedin.com/in/patrick-cohen-094a1b14/'>
                      LinkedIn
                    </a></Button>
                </CardActions>

                  <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>about</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2">
                      Former VP, Strategic Partnerships and National Director at NPower, Former Adjunct Professor at NYU, business executive with over 20 years experience in finance, operations and program management.
                      </Typography>
                      </AccordionDetails>
                  </Accordion>

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

                  <Typography gutterBottom variant="p" component="h3" className="title">
                    Chief Financial & Strategy Officer
                  </Typography>

                </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button><a size="small" color="primary" href='mailto:jspence@consol-usa.com'>
                    Email
                  </a></Button>
                  <Button><a size="small" color="primary" href='https://www.linkedin.com/in/josephspenceii/'>
                    LinkedIn
                  </a></Button>
              </CardActions>

                <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>about</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                    Investment banker, investor, and advisor; former Executive Director with Goldman Sachs responsible for sector teams in the Americas, Europe, Middle East and Africa; Managing Partner at Valhalla Ventures, philanthropist and founder of We are Makers and IconIQ.                  
                    </Typography>
                    </AccordionDetails>
                </Accordion>

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

                <Typography gutterBottom variant="p" component="p" className="title">
                  Senior Manager, Finance
                </Typography>

              </CardContent>
            </CardActionArea>
            <CardActions>
                <Button><a size="small" color="primary" href='mailto:ncohen@consol-usa.com'>
                  Email
                </a></Button>
                <Button><a size="small" color="primary" href='https://www.linkedin.com/in/nagelah-cohen-6020038/'>
                  LinkedIn
                </a></Button>
            </CardActions>

              <Accordion square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>about</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Seasoned finance/accounting professional and former Ernst & Young auditor with over twenty years of experience across internal controls, assurance, tax, Sarbanes-Oxley and financial reporting in various industries including pharmaceutical, real estate, non-profit, healthcare, government and transportation.  Served as treasurer for Delta Sigma Theta Sorority, Incorporated. 
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </Card>

            </Grid>

        </Grid>

    </Container>

    </div>

  )
}