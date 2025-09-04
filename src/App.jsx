import "./index.css";
import Home from "./home";
import AboutUs from "./about-us";
import Technology from "./our-technologies";
import Services from "./our-services";
import Staff from "./our-staff";
import How from "./how-we-hire";
import { Routes, Route } from "react-router-dom";
import CaseStudy from "./caseStudy";
import PrivacyPolicy from "./privacy-Policy";
import Termsandconditions from "./termsandconditions";
import ScrollToTop from "./ScrollToTop"; 

function App() {
  return (
    <>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-technologies" element={<Technology />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/our-staff" element={<Staff />} />
        <Route path="/how-we-hire" element={<How />} />
        <Route path="/caseStudy" element={<CaseStudy />} />
        <Route path="/privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<Termsandconditions />} />
      </Routes>
    </>
  );
}

export default App;

