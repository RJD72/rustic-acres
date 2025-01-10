import { BrowserRouter, Routes, Route } from "react-router-dom";

import FooterComponent from "./components/Footer";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Puppies from "./pages/Puppies";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Parents from "./pages/Parents.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puppies" element={<Puppies />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};
export default App;
