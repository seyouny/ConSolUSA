import NavHeader from './components/navheader/';
import MenuIcon from '@material-ui/icons/Menu';
import HomePage from './pages/home/';
import PeoplePage from './pages/people/';
import ImpactPage from './pages/impact/';
import WorkPage from './pages/work/';
import PartnersPage from './pages/partners/';
import NewsPage from './pages/news/';
import ContactPage from './pages/contact/';
import Footer from './components/footer/index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <NavHeader></NavHeader> */}

      <Router>

      <nav>
          <ul className="menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/people" activeClassName="selectedLink">People</NavLink>
            </li>
            <li>
              <NavLink to="/work" activeClassName="selectedLink">Work</NavLink>
            </li>
            <li>
              <NavLink to="/partners" activeClassName="selectedLink">Partners</NavLink>
            </li>
            <li>
              <NavLink to="/news" activeClassName="selectedLink">News</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="selectedLink">Contact</NavLink>
            </li>
            <MenuIcon className="icon"></MenuIcon>
          </ul>
        </nav>

          <Switch>

              <Route exact path="/" component={HomePage}/>              
              <Route exact path="/people" component={PeoplePage}/>
              <Route exact path="/impact" component={ImpactPage}/>
              <Route exact path="/work" component={WorkPage}/>
              <Route exact path="/partners" component={PartnersPage}/>
              <Route exact path="/news" component={NewsPage}/>
              <Route exact path="/contact" component={ContactPage}/>

          </Switch>
      </Router>

      <Footer></Footer>

    </div>
  );
}

export default App;
