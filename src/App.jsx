import { BrowserRouter, Routes, Route } from "react-router-dom";

import FooterComponent from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Puppies from "./pages/Puppies";
import FAQ from "./pages/FAQ";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puppies" element={<Puppies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};
export default App;
