import { useLocation, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import { initGA, logPageView } from "./analytics.js";

import FooterComponent from "./components/Footer";
import Header from "./components/Header.jsx";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Puppies = lazy(() => import("./pages/Puppies"));
const Parents = lazy(() => import("./pages/Parents.jsx"));
const Contact = lazy(() => import("./pages/Contact"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const About = lazy(() => import("./pages/About"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

const App = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
    logPageView(location.pathname); // Log on every route change
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Header />
      {/* Suspense fallback ensures the user sees a loading indicator */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puppies" element={<Puppies />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <FooterComponent />
    </>
  );
};

export default App;
