import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./Navbar/Navbar.jsx";
import ProjectsPage from "./pages/ProjectsPage";
import FixedNavbar from "./Navbar/FixedNavbar";
import AiInput from "./components/ai-input"
import Footer from "./footer/GlobalFooter.jsx";
import AddProjectPage from "./pages/AddProjectPage";
import DashboardPage from "./pages/DashbordPage";
import DSAPage from "./pages/DSAPage";

function App() {
  return (
    <div className="outfit px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <BrowserRouter>
        <FixedNavbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/add" element={<AddProjectPage />} />
          <Route path="/dsa" element={<DSAPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <AiInput />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
