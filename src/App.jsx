import "./App.css";
// import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
import Problem from "./components/Problem/Problem";
import RoadMap from "./components/Road-Map/RoadMap";
import Solution from "./components/Solution/Solution";
import Footer from "./components/Footer/Footer"
import Customer from "./components/CustomerPage/Customer";
import CountPage from "./components/CountPage/CountPage";
import FeaturePage from "./components/FeaturePage/FeaturePage";
import Navbar from "./components/Navbar/Navbar"
import Contact from "./components/contact/Contact"
// import Contact from "./components/Contact/Contact"
function App() {
 

  
  return (
    <div className="App">


      <Navbar />
      
      <Home />
      <Problem />
      <FeaturePage /> 

      <RoadMap />

      <Solution /> 
      <CountPage />


       {/* <Customer /> */}
       <Contact />

      
       <Footer />  
    </div>
  );
}

export default App;
