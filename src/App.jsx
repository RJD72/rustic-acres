import { BrowserRouter, Routes, Route } from "react-router-dom";

import FooterComponent from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};
export default App;
