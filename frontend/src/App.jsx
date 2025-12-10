import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContentProvider from "./context/ContentProvider";
import { ContentContext } from "./context/ContentContext";
import { useContext } from "react";
import Home from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import Loader from "./components/Loader";
import ScrollToTop "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ContentProvider>
        <AppContent />
      </ContentProvider>
    </Router>
  );
}

function AppContent() {
  const { loading } = useContext(ContentContext);

  return (
    <>
    <ScrollToTop>
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
      </ScrollToTop>
    </>
  );
}

export default App;