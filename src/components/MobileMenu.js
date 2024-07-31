// components/Navbar.js
"use client";
import { useEffect, useState } from "react";
import styles from "../styles/mobileMenu.module.css";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    services: false,
    construction: false,
    interiorDesign: false,
    projects: false,
    // construction: false,
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (dropdown) => {
    setDropdowns({ ...dropdowns, [dropdown]: !dropdowns[dropdown] });
  };

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById("targetElement");
      if (window.scrollY > 50) {
        targetElement.classList.add(styles.scrollClass);
      } else {
        targetElement.classList.remove(styles.scrollClass);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="targetElement"
      className={`${styles.navbar} ${styles.defaultClass}`}
    >
      <div className={styles.smNavItems}>
        <div className={styles.sm_logo}>
          <Link href="/">
            <figure>
              <img src="/COLONELZ_22png_artboard16.png" alt="" width={"150px"}/>
            </figure>
          </Link>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div>
      </div>
      <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <Link href="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link href="/about" onClick={toggleMenu}>
          About
        </Link>

        <div className={styles.dropdown}>
          <button onClick={() => toggleDropdown("services")}>
            Services <img src="dropDownArrow.svg" alt="" />
          </button>
          <div
            className={`${styles.dropdownContent} ${
              dropdowns.services ? styles.open : ""
            }`}
          >
            <div className={styles.dropdown}>
              <Link href="/construction" onClick={toggleMenu}>
                Construction
                {/* <img src="dropDownArrow.svg" alt="" /> */}
              </Link>
              {/* <div
                className={`${styles.dropdownContent} ${
                  dropdowns.construction ? styles.open : ""
                }`}
              >
                <Link
                  onClick={toggleMenu}
                  href="/constraction/residential-constraction"
                >
                  Residential Construction
                </Link>
              </div> */}
            </div>

            <div className={styles.dropdown}>
              <Link href="/architecture" onClick={toggleMenu}>
                Architecture
                {/* <img src="dropDownArrow.svg" alt="" /> */}
              </Link>
              {/* <div
                className={`${styles.dropdownContent} ${
                  dropdowns.architecture ? styles.open : ""
                }`}
              >
                <Link
                  onClick={toggleMenu}
                  href="/architecture/residential-architucture"
                >
                  Residential Architecture
                </Link>
              </div> */}
            </div>

            <div className={styles.dropdown}>
              <button  className={styles.menuOnly}>
                <Link href="/interior">interior design</Link>
                <img src="dropDownArrow.svg" alt="" onClick={() => toggleDropdown("interiorDesign")}/>
              </button>
              <div
                className={`${styles.dropdownContent} ${
                  dropdowns.interiorDesign ? styles.open : ""
                }`}
              >
                <Link
                  onClick={toggleMenu}
                  href="/interior/residential-interior"
                >
                  Residential Interior
                </Link>
                <Link
                  onClick={toggleMenu}
                  href="/interior/commercial-interior"
                >
                  Commercial Interior
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.dropdown}>
          <button onClick={() => toggleDropdown("projects")}>
            projects <img src="dropDownArrow.svg" alt="" />
          </button>
          <div
            className={`${styles.dropdownContent} ${
              dropdowns.projects ? styles.open : ""
            }`}
          >
            <Link onClick={toggleMenu} href="/projects">
              projects
            </Link>

            <Link onClick={toggleMenu} href="/project-detail">
              projects details
            </Link>
          </div>
        </div> */}

        <Link onClick={toggleMenu} href="/projects">
          Projects
        </Link>

        <Link onClick={toggleMenu} href="/career">
          Career
        </Link>
        <Link onClick={toggleMenu} href="/blogs">
          Blogs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
