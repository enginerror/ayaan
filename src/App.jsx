import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menubar from "./navbar/Menubar";
import Navbar from "./navbar/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AddProjectPage from "./pages/AddProjectPage";
import DSAPage from "./pages/DSAPage";
import DashboardPage from "./pages/DashboardPage";
import Footer from "./footer/Footer";

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
