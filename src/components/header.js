"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import style from "../styles/header.module.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [activeSubLink, setActiveSubLink] = useState("");
  const [projectTypes, setProjectTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const pathname = usePathname();

  const handleClick = (link, subLink = "") => {
    setActiveLink(link);
    setActiveSubLink(subLink);
  };

  // Fetch project types from API
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

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery) {
      alert("Please enter a search query");
      return;
    }

    setIsSearching(true);
    try {
      const response = await fetch(`https://backend-interior.onrender.com/api/project/search?query=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      console.log("Search Results:", data); // For debugging: log the API response
      if (data.success) {
        setSearchResults(data.data);
      } else {
        console.error("Search failed:", data.message);
      }
    } catch (error) {
      console.error("Error searching projects:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <>
      <div className={style.headerMainContainer}>
        <div className="container-fluid px-5">
          <div className={style.headerInnerItems}>
            <div className={style.left}>
              <Link
                id={style.Logo}
                onClick={() => handleClick("/")}
                className={activeLink === "/" ? "active" : "inactive"}
                href="/"
              >
                <figure>
                  {/* <img src="/Colonelz new logo.png" alt="Logo" /> */}
                  <img src="/logo 2 (2).png" alt="Logo" />

                </figure>
              </Link>
            </div>
            <div className={style.right}>
              <ul className={style.menuListOpt}>
                {/* Menu Items */}
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
                {/* Project Types */}
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
                  <Link href="/clients">Customer Stories</Link>
                </li>
                <li onClick={() => handleClick("/blogs")} className={activeLink === "/blogs" ? "active" : "inactive"}>
                  <Link href="/blogs">Resources</Link>
                </li>

                {/* Search Form */}
                <div className="d-flex align-items-center">
                  <form className="d-flex me-2" role="search" onSubmit={handleSearchSubmit}>
                    <input
                      className="form-control ms-2 w-24 px-1 text-gray-700 border outline-none"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={searchQuery}
                      style={{ padding: "11px" }}
                      onChange={handleSearchInputChange}
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

        {/* Display search results */}
        {isSearching && <p>Searching...</p>}
        {searchResults.length > 0 && (
          <div className={style.searchResults}>
            <ul>
              {searchResults.map((result) => (
                <li key={result._id}>
                  <Link href={`/projects/${result.project_slug}`}>
                    {result.projectName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <style jsx>{`
        .active {
          border-bottom: 3px solid #0d0d0d;
        }
        .inactive {
          border-bottom: 3px solid transparent;
        }
        .searchResults {
          position: absolute;
          background: white;
          border: 1px solid #ccc;
          z-index: 1000;
          width: 100%;
          max-height: 300px;
          overflow-y: auto;
        }
      `}</style>
    </>
  );
};

export default Header;
