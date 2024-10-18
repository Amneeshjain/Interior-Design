"use client";
import { useEffect, useState } from "react";
import styles from "../styles/mobileMenu.module.css";

import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    services: false,
    projects: false
  });
  const [projectTypes, setProjectTypes] = useState([]); // Added state to store project types data

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (dropdown) => {
    setDropdowns({ ...dropdowns, [dropdown]: !dropdowns[dropdown] });
  };

  // Fetch project types from API
  useEffect(() => {
    const fetchProjectTypes = async () => {
      try {
        const response = await fetch(
          "https://backend-interior.onrender.com/api/project/project-types"
        );
        const data = await response.json();
        if (data.success) {
          setProjectTypes(data.data);
        } else {
          console.error("Failed to fetch project types:", data.message);
        }
      } catch (error) {
        console.error("Error fetching project types:", error);
      }
    };

    fetchProjectTypes();
  }, []);

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
    <nav id="targetElement" className={`text-center ${styles.navbar} ${styles.defaultClass}`}>
      <div className={styles.smNavItems}>
        <div className={styles.sm_logo}>
          <Link href="/">
            <figure>
              {/* <img src="/COLONELZ_22png_artboard16 (1).png" alt="" width={"150px"} /> */}
              <img src="/Colonelz new logo.png" alt="Logo" width={"150px"} />
            </figure>
          </Link>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div>
      </div>
      <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <Link href="/" onClick={toggleMenu}>Home</Link>
        <Link href="/about" onClick={toggleMenu}>About</Link>

        {/* Services Dropdown */}
        <div className={styles.dropdown}>
          <button onClick={() => toggleDropdown("services")}>
            Services <img src="dropDownArrow.svg" alt="" />
          </button>
          <div className={`${styles.dropdownContent} ${dropdowns.services ? styles.open : ""}`}>
            <Link href="/interior" onClick={toggleMenu}>Interior Design</Link>
            <Link href="/architecture" onClick={toggleMenu}>Architecture</Link>
            <Link href="/construction" onClick={toggleMenu}>Construction</Link>
          </div>
        </div>

        {/* Projects Dropdown with API data */}
        <div className={styles.dropdown}>
          <button onClick={() => toggleDropdown("projects")}>
            Projects <img src="dropDownArrow.svg" alt="" />
          </button>
          <div className={`${styles.dropdownContent} ${dropdowns.projects ? styles.open : ""}`}>
            {projectTypes.length > 0 ? (
              projectTypes.map((project) => (
                <Link
                  key={project._id}
                  href={`/projects/type/${project._id}`}
                  onClick={toggleMenu}
                >
                  {project.project_type.toUpperCase()}
                </Link>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>

        <Link href="/clients" onClick={toggleMenu}>Customer Stories</Link>
        <Link href="/blogs" onClick={toggleMenu}>Blogs</Link>
        <Link href="/get-in-touch" onClick={toggleMenu}>Get in touch</Link>
        <div className=" text-center">
          <form className="d-flex me-2" role="search">
            <input
              className="form-control ms-3 px-1 py-2 text-center text-gray-700 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
