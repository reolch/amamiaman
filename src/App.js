// App.js
import './Font.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutSection from './components/Section/AboutSection/AboutSection'
import Header from './components/common/Header/Header';
import HeroSection from './components/Section/HeroSection/HeroSection';
import NewsSection from './components/Section/NewsSection/NewsSection';
import ServicesSection from './components/Section/ServiceSection/ServiceSection';
import AccessSection from './components/Section/AccessSection/AccessSection';
import Footer from './components/common/Footer/Footer';
import ParallaxSection from './components/component/ParallaxSection';

// Pages
import StoreInformation from './pages/StoreInformationPage/StoreInformationPage';
import OurPassionPage from './pages/OurPassionPage/OurPassionPage';
import Snorkelling from './pages/SnorkellingPage/SnorkellingPage';
import SeaKayakPage from './pages/SeaKayakPage/SeakayakPage';
import GlassBoatPage from './pages/GlassBoatPage/GlassBoatPage';
import LodgingPage from './pages/LodgingPage/LodgingPage';
import ContactPage from './pages/ContactPage/ContactPage';

import aboutSectionBg from './assets/images/bg-AboutSection.png';

function App() {
  return (
    <Router>
      <Header />
      <div className='app-container'>
        <Routes>
          <Route path="/access" element={<StoreInformation />} />
          <Route path="/passion" element={<OurPassionPage />} />
          <Route path="/snorkelling" element={<Snorkelling />} />
          <Route path="/seaKayak" element={<SeaKayakPage />} />
          <Route path="/glassboat" element={<GlassBoatPage />} />
          <Route path="/lodging" element={<LodgingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <AccessSection />
              <NewsSection />
            </>
          } />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
