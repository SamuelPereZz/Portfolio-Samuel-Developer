import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutMe";
import Portafolio from "./Pages/Portafolio";
import ContactMePage from "./Pages/ContactMe";
import styled from "@emotion/styled";
import React from "react";

const Fondo = styled.div`
  --s: 50px;
  --c: #ededed;
  --_s: calc(2 * var(--s)) calc(2 * var(--s));
  --_g: 35.36% 35.36% at;
  --_c: #0000 66%, #8a8fa324 68% 70%, #0000 72%;
  background: radial-gradient(var(--_g) 100% 25%, var(--_c)) var(--s) var(--s) /
      var(--_s),
    radial-gradient(var(--_g) 0 75%, var(--_c)) var(--s) var(--s) / var(--_s),
    radial-gradient(var(--_g) 100% 25%, var(--_c)) 0 0 / var(--_s),
    radial-gradient(var(--_g) 0 75%, var(--_c)) 0 0 / var(--_s),
    repeating-conic-gradient(var(--c) 0 25%, #0000 0 50%) 0 0 / var(--_s),
    radial-gradient(var(--_c)) 0 calc(var(--s) / 2) / var(--s) var(--s) var(--c);
`;

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Fondo>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutPage />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/Contact-me" element={<ContactMePage />} />
        </Routes>
      </Fondo>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
