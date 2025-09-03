import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Index from "./components";
import ProjectDetail from "./components/ProjectDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
      <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/privacy-policy" element={<></>} />
            <Route path="/cookie-policy" element={<></>} />
            <Route path="/terms-of-service" element={<></>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
