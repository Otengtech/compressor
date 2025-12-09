import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Navbar />

      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App
