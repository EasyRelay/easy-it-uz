import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Index from "./pages";
import ProjectDetail from "./components/ProjectDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioModal from "./components/AddPortfolioModal";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
      <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/portfolio/add" element={<PortfolioModal />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy></PrivacyPolicy>} />
            <Route path="/cookie-policy" element={<CookiePolicy></CookiePolicy>} />
            <Route path="/terms-of-service" element={<TermsOfService></TermsOfService>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
