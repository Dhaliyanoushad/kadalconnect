import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import Marketplace from "./pages/Marketplace";

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
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
