"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from 'axios';
import style from "../styles/header.module.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [activeSubLink, setActiveSubLink] = useState("");
  const [data, setData] = useState([]);

  const handleClick = (link, subLink = "") => {
    setActiveLink(link);
    setActiveSubLink(subLink);
  };

  const getdata = async () => {
    try {
      const response = await axios.get("http://localhost:7000/projects");
      setData(response.data);  // Set the actual data from the response
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
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
                <li
                  className={`${style.serviceMenu} ${activeLink.startsWith("/interior") ||
                    activeLink === "/architecture" ||
                    activeLink === "/constraction"
                    ? "active"
                    : "inactive"
                    }`}
                >
                  <Link href="" onClick={() => handleClick("/services")}>
                    Services
                    <img className={style.dropIcon} src="dropDownArrow.png" alt="" />
                  </Link>
                  {/* services sub menu */}
                  <ul className={style.serviceSubMenu}>
                    <li className={style.interiorDesMenu}>
                      <Link className={style.menuli} href="/interior" onClick={() => handleClick("/interior")}>
                        INTERIOR DESIGN
                      </Link>
                      <img src="right-arrow.png" alt="" />
                      <div className={style.desktop_View}>
                        <ul className={style.interiorDesSubMenu}>
                          <li>
                            <Link className={style.menuli} href="/interior/residential-interior"
                              onClick={() => handleClick("/interior", "/interior/residential-interior")}>
                              - Residential Interior
                            </Link>
                          </li>
                          <li>
                            <Link className={style.menuli} href="/interior/commercial-interior"
                              onClick={() => handleClick("/interior", "/interior/commercial-interior")}>
                              - Commercial Interior
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className={`${style.architectureMenu}`}>
                      <Link className={style.menuli} href="/architecture"
                        onClick={() => handleClick("/architecture")}>
                        ARCHITECTURE
                      </Link>
                    </li>
                    <li>
                      <Link className={style.menuli} href="/construction"
                        onClick={() => handleClick("/construction")}>
                        CONSTRUCTION
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Projects Dropdown */}
                <li className={`${style.projectMenu}`}>
                  <Link href="/projects" onClick={() => handleClick("/projects")}>
                    Projects
                    <img className={style.dropIcon} src="dropDownArrow.png" />
                  </Link>
                  {/* Dropdown for Projects */}
                  <ul className={style.projectSubMenu}>
                    {data.length > 0 ? (
                      data.map((project, index) => (
                        <li key={index}>
                          <Link
                            href={`/projects/${project.header_route}`}
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
      </div>

      <style jsx>{`
        .active {
          border-bottom: 3px solid #0d0d0d;
        }
        .inactive {
          border-bottom: 3px solid transparent;
        }
      `}</style>
    </>
  );
};

export default Header;
