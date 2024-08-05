"use client"

import { useEffect, useState } from "react";
import "./header.css";
import Link from "next/link";

function Header() {

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


  //toggle  menu
  const [showModel, setshowModel] = useState(false);

  //toggle theme
  const [theme, settheme] = useState("dark");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  });
  return (
    <header className="flex">
      <button className="menu icon-menu" onClick={() => setshowModel(true)}>
        {" "}
      </button>

      <div> </div>
      <nav>
        <ul className="flex">
          <li>
          <Link href={"/about"}>About</Link>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
          <Link href="/">Projects</Link>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <Link href="/contactMe">Contact</Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "themeMode",
            theme === "light" ? "dark" : "light"
          );

          settheme(localStorage.getItem("themeMode"));
        }}
        className="mood"
      >
        {theme === "dark" ? (
          <span className="icon-moon-fill"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>
      {showModel && (
        <div className=" fixed z-10">
          <ul className="modal ">
            <li>
              <button
                className="icon-cross"
                onClick={() => setshowModel(false)}
              ></button>
            </li>
            <li>
              <Link href={"/about"}  onClick={() => setshowModel(false)}>About</Link>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <Link href="/">Projects</Link>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
            <Link href="/contactMe"  onClick={() => setshowModel(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      )}


<a style={{ opacity: scrollButton, transition: ".5s" }} href="#up">
        <button
          onScroll={() => {}}
          className="scrolltotop icon-keyboard_arrow_up"
        ></button>
      </a>

    </header>
  );
}

export default Header;
