"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import style from "../styles/header.module.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [activeSubLink, setActiveSubLink] = useState("");
  const [projectTypes, setProjectTypes] = useState([]);
  const pathname = usePathname();

  const handleClick = (link, subLink = "") => {
    setActiveLink(link);
    setActiveSubLink(subLink);
  };

  useEffect(() => {
    const fetchProjectTypes = async () => {
      try {
        const response = await fetch("https://backend-interior.onrender.com/api/project/project-types");
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
    setActiveLink(pathname);
    if (pathname.startsWith('/projects/type/')) {
      setActiveSubLink(pathname);
    }
  }, [pathname]);

  return (
    <>
      <div className={style.headerMainContainer}>
        <div className="container-fluid">
          <div className={style.headerInnerItems}>
            <div className={style.left}>
              <Link
                id={style.Logo}
                onClick={() => handleClick("/")}
                className={activeLink === "/" ? "active" : "inactive"}
                href="/"
              >
                <figure>
                  <img src="/COLONELZ_22png-02.png" alt="Logo" />
                </figure>
              </Link>
            </div>
            <div className={style.right}>
              <ul className={style.menuListOpt}>
                <li onClick={() => handleClick("/")} className={activeLink === "/" ? "active" : "inactive"}>
                  <Link href="/">Home</Link>
                </li>
                <li onClick={() => handleClick("/about")} className={activeLink === "/about" ? "active" : "inactive"}>
                  <Link href="/about">About</Link>
                </li>
                <li className={`${style.serviceMenu} ${activeLink.startsWith("/interior") || activeLink === "/architecture" || activeLink === "/construction" ? "active" : "inactive"}`}>
                  <Link href="#" onClick={() => handleClick("/services")}>
                    Services
                    <img className={style.dropIcon} src="/dropDownArrow.png" alt="Dropdown" />
                  </Link>
                  <ul className={style.serviceSubMenu}>
                    <li className={style.interiorDesMenu}>
                      <Link className={style.menuli} href="/interior" onClick={() => handleClick("/interior")}>
                        INTERIOR DESIGN
                      </Link>

                    </li>
                    <li className={`${style.architectureMenu}`}>
                      <Link className={style.menuli} href="/architecture" onClick={() => handleClick("/architecture")}>
                        ARCHITECTURE
                      </Link>
                    </li>
                    <li>
                      <Link className={style.menuli} href="/construction" onClick={() => handleClick("/construction")}>
                        CONSTRUCTION
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={`${style.serviceMenu} ${activeLink.startsWith("/projects") ? "active" : "inactive"}`}>
                  <Link href="#" onClick={() => handleClick("/projects")}>
                    Project
                    <img className={style.dropIcon} src="/dropDownArrow.png" alt="Dropdown" />
                  </Link>
                  <ul className={style.serviceSubMenu}>
                    {projectTypes.map((type) => (
                      <li key={type._id}>
                        <Link
                          className={`${style.menuli} ${activeSubLink === `/projects/type/${type._id}` ? "active" : ""}`}
                          href={`/projects/type/${type._id}`}
                          onClick={() => handleClick(`/projects/type/${type._id}`)}
                        >
                          {type.project_type}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li onClick={() => handleClick("/clients")} className={activeLink === "/clients" ? "active" : "inactive"}>
                  <Link href="/clients">Customer Service</Link>
                </li>
                <li onClick={() => handleClick("/blogs")} className={activeLink === "/blogs" ? "active" : "inactive"}>
                  <Link href="/blogs">Blog</Link>
                </li>
                <div className="d-flex align-items-center text-center">
                  <form className="d-flex me-2" role="search">
                    <input
                      className="form-control ms-3 w-24 px-1 py-2 text-center text-gray-700 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>

                  <li className={style.headerBtn}>
                    <Link href="/get-in-touch">Get in touch</Link>
                  </li>
                </div>

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