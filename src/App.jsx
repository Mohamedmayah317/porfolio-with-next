"use client"

import { useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useEffect } from "react";

function App() {
  const [scrollButton, setscrollButton] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setscrollButton(1);
      } else {
        setscrollButton(0);
      }
    });
  }, []);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider"/>

      <Main />
      <div className="divider"/>

      <Contact />
      <div className="divider"/>

      <Footer />

      <a style={{ opacity: scrollButton, transition: ".5s" }} href="#up">
        <button
          onScroll={() => {}}
          className="scrolltotop icon-keyboard_arrow_up"
        ></button>
      </a>
    </div>
  );
}

export default App;
