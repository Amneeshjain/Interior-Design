// components/Navbar.js
"use client";
import { useEffect, useState } from "react";
import styles from "../styles/mobileMenu.module.css";
import style from "../styles/header.module.css";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    services: false,
    construction: false,
    interiorDesign: false,
    projects: false
    // construction: false,
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = dropdown => {
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
  const data = [
    {
      "id": 1,
      "category_name": "Apartment",
      "header_route": "projects"
    },
    {
      "id": 2,
      "category_name": "Villas",
      "header_route": "projects"
    },
    {
      "id": 3,
      "category_name": "Offices",
      "header_route": "projects"
    },
    {
      "id": 4,
      "category_name": "Resorts & Hotels",
      "header_route": "projects"
    },
    {
      "id": 5,
      "category_name": "Restaurants & Cafes",
      "header_route": "projects"
    },
    {
      "id": 6,
      "category_name": "Retail & Showroom",
      "header_route": "projects"
    },
    {
      "id": 7,
      "category_name": "Builder Floor",
      "header_route": "projects"
    },
    {
      "id": 8,
      "category_name": "Farm House",
      "header_route": "projects"
    },
    {
      "id": 9,
      "category_name": "Commercial Complex",
      "header_route": "projects"
    },
    {
      "id": 10,
      "category_name": "Industrial Units",
      "header_route": "projects"
    }
  ]
  return (
    <nav
      id="targetElement"
      className={`${styles.navbar} ${styles.defaultClass}`}
    >
      <div className={styles.smNavItems}>
        <div className={styles.sm_logo}>
          <Link href="/">
            <figure>
              <img
                src="/COLONELZ_22png_artboard16 (1).png"
                alt=""
                width={"150px"}
              />
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
            className={`${styles.dropdownContent} ${dropdowns.services
              ? styles.open
              : ""}`}
          >
            <div className={styles.dropdown}>
              <button className={styles.menuOnly}>
                <Link href="/interior" onClick={toggleMenu}>
                  interior design
                </Link>
              </button>
              
            </div>

            <div className={styles.dropdown}>
              <Link href="/architecture" onClick={toggleMenu}>
                Architecture
              </Link>
            </div>
            <div className={styles.dropdown}>
              <Link href="/construction" onClick={toggleMenu}>
                Construction
              </Link>
            </div>
          </div>
        </div>
        <li className={`${style.projectMenu}`}>
          <button className={styles.menuOnly}>
            <Link href="/projects" onClick={() => handleClick("/projects")}>
              Projects
            </Link>
            <img
              src="dropDownArrow.svg"
              alt=""
            />
          </button>
          <ul className={style.projectSubMenu}>
            {data.length > 0 ? (
              data.map((project, index) => (
                <li key={index}>
                  <Link
                    href={`${project.header_route}`}
                    onClick={() => handleClick(`/projects/${project.header_route}`)}
                  >
                    {project.category_name.toUpperCase()}
                  </Link>
                </li>
              ))
            ) : (
              <li>Loading...</li>
            )}
          </ul>
        </li>

        <Link onClick={toggleMenu} href="/clients">
          Client
        </Link>
        <Link onClick={toggleMenu} href="/blogs">
          Blogs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
