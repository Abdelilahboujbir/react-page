import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from './components/body'
import PropertiesPage from './pages/PropertiesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import ApartmentDetails from './pages/ApartmentDetails'

import './App.css'

function App() {
  

  return (
    <>
      
       <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/apartment/:id" element={<ApartmentDetails />} />
       </Routes>
      
    </>
  )
}

export default App
