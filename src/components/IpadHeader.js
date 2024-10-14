"use client";
import { useEffect, useState } from "react";
import styles from "../styles/ipadheader.module.css";
import Link from "next/link";

const IpadHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdowns, setDropdowns] = useState({
        services: false,
        projects: false
    });
    const [projectTypes, setProjectTypes] = useState([]);

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
        <nav id="targetElement" className={`${styles.navbar} ${styles.defaultClass}`}>
            <div className={styles.smNavItems}>
                <div className={styles.sm_logo}>
                    <Link href="/">
                        <figure>
                            <img src="/COLONELZ_22png_artboard16 (1).png" alt="" width={"150px"} />
                        </figure>
                    </Link>
                </div>
                <div className="d-flex align-items-center text-center">
                    <form className="d-flex me-2" role="search">
                        <input
                            className={`form-control ms-3 ${styles.custom_search_input} px-1 py-2 text-center text-gray-700 border  `}
                            type="search" go-500
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </form>

                    <div className={styles.button_wrapper}>
                        <Link href="/get-in-touch" className={styles.custom_button}>
                            Get in touch
                        </Link>
                    </div>
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

                <Link href="/clients" onClick={toggleMenu}>Customer Story</Link>
                <Link href="/blogs" onClick={toggleMenu}>Blogs</Link>
            </div>
        </nav>
    );
};

export default IpadHeader;
