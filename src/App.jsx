import "./App.css";
import CompanySlider from "./components/CompanySlider/CompanySlider";
import Contact from "./components/Contact/Contact";
import Count from "./components/Count/Count";
import Features from "./components/Features/Features";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Problem from "./components/Problem/Problem";
import RoadMap from "./components/Road-Map/RoadMap";
import Solution from "./components/Solution/Solution";
// import CountUp from "react-countup/build/CountUp";
import Footer from "./components/Footer/Footer"
function App() {
 

  
  return (
    <div className="App">


      
      <Navbar />
      <Home />
      <CompanySlider />
      <Problem />
       <Count />
      <Solution />
      <Features />

      <RoadMap />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
