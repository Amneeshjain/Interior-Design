"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from 'axios';
import { useRouter } from "next/navigation";
import style from "../styles/header.module.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [categories, setCategories] = useState([]);  // State to store project categories
  const router = useRouter();

  // Set the active link on click
  const handleClick = (link) => {
    setActiveLink(link);
  };

  const handleTypeClick = (type) => {
    router.push(`/projects?type=${type}`);
  };

  // Fetch project types dynamically from the backend or db.json
  const fetchProjectTypes = async () => {
    try {
      const response = await axios.get("http://localhost:7000/project-types");  // Adjust URL to your endpoint
      setCategories(response.data["project-types"]); // Assuming the response contains an array of project types
    } catch (error) {
      console.error('Error fetching project types:', error);
    }
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchProjectTypes();
  }, []);

  return (
    <div className={style.headerMainContainer}>
      <div className="container-fluid">
        <div className={style.headerInnerItems}>
          {/* Logo Section */}
          <div className={style.left}>
            <div className="d-flex justify-content-between gap-4">
              <div className="mt-3">
                <form className="flex" role="search">
                  <input
                    className="form-control me-2 w-full px-4 py-2 text-gray-700 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
              <Link
                id={style.Logo}
                className={activeLink === "/" ? "active" : "inactive"}
                href="/"
              >
                <figure>
                  <img src="/COLONELZ_22png-02.png" alt="" />
                </figure>
              </Link>
            </div>
          </div>

          {/* Menu Section */}
          <div className={style.right}>
            <ul className={style.menuListOpt}>
              <li onClick={() => handleClick("/")} className={activeLink === "/" ? "active" : "inactive"}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={() => handleClick("/about")} className={activeLink === "/about" ? "active" : "inactive"}>
                <Link href="/about">About</Link>
              </li>

              {/* Projects Dropdown */}
              <li className={`${style.projectMenu}`}>
                <Link href="/projects" onClick={() => handleClick("/projects")}>
                  Projects
                  <img className={style.dropIcon} src="dropDownArrow.png" alt="Dropdown Icon" />
                </Link>

                {/* Dropdown for Projects Categories */}
                <ul className={style.projectSubMenu}>
                  {categories.map((projectType) => (
                    <li key={projectType.id}>
                      <a onClick={() => handleTypeClick(projectType.name)}>{projectType.name}</a>
                    </li>
                  ))}
                </ul>
              </li>

              <li onClick={() => handleClick("/clients")} className={activeLink === "/clients" ? "active" : "inactive"}>
                <Link href="/clients">Clients</Link>
              </li>
              <li onClick={() => handleClick("/blogs")} className={activeLink === "/blogs" ? "active" : "inactive"}>
                <Link href="/blogs">Blog</Link>
              </li>
              <li className={style.headerBtn}>
                <Link href="/get-in-touch">Get in touch</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .active {
          border-bottom: 3px solid #0d0d0d;
        }
        .inactive {
          border-bottom: 3px solid transparent;
        }
      `}</style>
    </div>
  );
};

export default Header;
