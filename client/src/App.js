// import logo from './logo.svg';
// import './App.css';
import NavHeader from './components/navheader/';
import ImpactPage from './pages/impact/';
import HomePage from './pages/home/';
import Footer from './components/footer/index';

function App() {
  return (
    <div className="App">
      {/* Landing Page */}
      {/* <NavHeader></NavHeader> */}
      <HomePage></HomePage>
      {/* <ImpactPage></ImpactPage> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
