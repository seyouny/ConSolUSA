import NavHeader from './components/navheader/';
import HomePage from './pages/home/';
import PeoplePage from './pages/people/';
import ImpactPage from './pages/impact/';
import WorkPage from './pages/work/';
import PartnersPage from './pages/partners/';
import NewsPage from './pages/news/';
import ContactPage from './pages/contact/';
import Footer from './components/footer/index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <NavHeader></NavHeader>

      <Router>
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

      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;
