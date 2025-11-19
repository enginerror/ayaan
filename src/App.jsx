import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Navbar from "./Navbar/Navbar";
import ProjectsPage from "./pages/Projects";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import FixedNavbar from "./Navbar/FixedNavbar";
import Footer from "./footer/footer";

function App() {
  return (
    <div className="outfit px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <BrowserRouter>
        <FixedNavbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
