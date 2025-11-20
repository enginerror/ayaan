import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menubar from "./navbar/Menubar.jsx";
import Navbar from "./navbar/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import AddProjectPage from "./pages/AddProjectPage.jsx";
import DSAPage from "./pages/DSAPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import Footer from "./footer/Footer.jsx";

function App() {
  return (
    <div className="outfit px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <BrowserRouter>
        <Menubar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/add" element={<AddProjectPage />} />
          <Route path="/dsa" element={<DSAPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
