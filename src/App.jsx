import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import Marketplace from "./pages/Marketplace";
import Chatbot from "./pages/Chatbot";
import Booking from "./pages/Booking";
import Activities from "./pages/Activities";
import FloatingCalendar from "./components/FloatingCalendar";

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
              <FloatingCalendar />

            </>
          }
        />

        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
