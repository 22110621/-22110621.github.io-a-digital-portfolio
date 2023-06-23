import { useRef } from "react";
import Search from "./components/search";
import { sidetray } from "./components/sidebar";

function Navigation() {
  const mobilenav = useRef();

  const openSide = () => {
    sidetray.current.classList.add("open");
    document.querySelector("[data-side]").setAttribute("aria-expanded", true);
  };

  const openMobileNav = () => {
    mobilenav.current.setAttribute("data-nav", true);
  };

  return (
    <div className="top-navigation">
      <div className="nav-logo">
        <a href="/">
          <img
            src="https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81oWdeXAT0Fvue92t2iUVaNcg4Qf3RHkAKcpuu9n22GmwJStMfD2eLboK5dGe-DSTm-1rAta9k1Iw8edOdOtgZ01QwvuZw=w1919-h1081"
            alt="Portfolio Logo"
          />
          </a>
      </div>
      <div className="navigation">
        <ul className="nav">
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="#">My mission</a>
            <div className="submenu">
              <ul className="dropdown">
                <li>
                  <a href="/it/networking">Networking</a>
                </li>
                <li>
                  <a href="/it/cloud">Cloud</a>
                </li>
                <li>
                  <a href="/it/experience">My Experience</a>
                </li>
                <li>
                  <a href="/it/skills">My Skills</a>
                </li>
              </ul>
            </div>
          </li>
          <Search />
          <li>
            <a href="#" data-side onClick={openSide}>
              Accessibillity
            </a>
          </li>
        </ul>
        <div className="hamburger">
          <button onClick={openMobileNav}>=</button>
          <div className="mobile-nav" ref={mobilenav}></div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
