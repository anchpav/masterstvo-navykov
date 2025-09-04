import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import EasterEggs from "./components/EasterEggs";

import HomePage from "./pages/HomePage";
import Planning from "./pages/services/Planning";
import Communication from "./pages/services/Communication";
import Challenge from "./pages/services/Challenge";
import Consultation from "./pages/services/Consultation";

export default function App() {
  return (
    <Router>
      
      <EasterEggs /> {/* Пасхалки видны на всех страницах */}
      <Hero />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/planning" element={<Planning />} />
        <Route path="/services/communication" element={<Communication />} />
        <Route path="/services/challenge" element={<Challenge />} />
        <Route path="/services/consultation" element={<Consultation />} />
      </Routes>
      
    </Router>
  );
}
