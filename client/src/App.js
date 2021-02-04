// import logo from './logo.svg';
// import './App.css';
import NavHeader from './components/navheader/';
import ImpactPage from './pages/impact/';
import HomePage from './pages/home/';
import Footer from './components/footer/index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* Landing Page */}
      <NavHeader></NavHeader>
      {/* <HomePage></HomePage> */}
      {/* <ImpactPage></ImpactPage> */}
      <Footer></Footer>
      <Router>
          {/* <Navigation /> */}
          <Switch>

              {/* <Route exact path="/login" component={Splash}/> */}
              <Route exact path="/people" component={Footer}/>
              <Route exact path="/impact" component={Footer}/>
              <Route exact path="/work" component={Footer}/>
              <Route exact path="/partners" component={Footer}/>
              <Route exact path="/news" component={Footer}/>
              <Route exact path="/contact" component={Footer}/>
            </Switch>
      
        
          </Router>
    </div>
  );
}

export default App;
