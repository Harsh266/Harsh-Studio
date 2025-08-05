import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import UploadProject from "./pages/UploadProject";
import { ThemeProvider } from "./context/ThemeContext";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    
    <ThemeProvider>
      <Analytics />
      <Router>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upload" element={<UploadProject />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
