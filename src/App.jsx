import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

import Marketplace from "./pages/Marketplace";
import Chatbot from "./pages/Chatbot";
import Booking from "./pages/Booking";
import Activities from "./pages/Activities";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutSection />
              <Testimonials />
            </>
          }
        />

        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>

      <Footer />
      <ChatWidget />
    </BrowserRouter>
  );
}

export default App;
