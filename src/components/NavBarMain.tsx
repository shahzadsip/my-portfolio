import { useEffect } from "react";
import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  // navbar scroll effect
  useEffect(() => {
    const onScroll = () => {
      document
        .getElementById("navbar")
        ?.classList.toggle("scrolled", window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="logo">DevChain</div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Sun /> : <Moon />}
          </button>

          <button className="mobile-menu-btn">
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
}
 