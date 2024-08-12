"use client";
import Link from "next/link";
import style from "../styles/header.module.css";
import { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [activeSubLink, setActiveSubLink] = useState("");

  const handleClick = (link, subLink = "") => {
    setActiveLink(link);
    setActiveSubLink(subLink);
  };

  return (
    <>
      <div className={style.headerMainContainer}>
        <div className="container">
          <div className={style.headerInnerItems}>
            <div className={style.left}>
              <Link
                id={style.Logo}
                onClick={() => handleClick("/")}
                className={activeLink === "/" ? "active" : "inactive"}
                href="/"
              >
                <figure>
                  <img src="/COLONELZ_22png-02.png" alt="" />
                </figure>
              </Link>
            </div>
            <div className={style.right}>
              <ul className={style.menuListOpt}>
                <li
                  onClick={() => handleClick("/")}
                  className={activeLink === "/" ? "active" : "inactive"}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  onClick={() => handleClick("/about")}
                  className={activeLink === "/about" ? "active" : "inactive"}
                >
                  <Link href="/about">About</Link>
                </li>
                <li
                  className={`${style.serviceMenu} ${
                    activeLink.startsWith("/interior") ||
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
                     
                      <Link className={style.menuli}
                        href="/interior"
                        onClick={() => handleClick("/interior")}
                      >
                        INTERIOR DESIGN
                      </Link>
                      <img src="right-arrow.png" alt="" />
                      {/* Architecture sub menu  */}
 {/* ============================================desktop======================= */}
 <div className={style.desktop_View}>                    
                      <ul className={style.interiorDesSubMenu}>
                        <li>
                          {/* <img src="dropDownArrow.svg" alt="" /> */}
                          <Link className={style.menuli}
                            href="/interior/residential-interior"
                            onClick={() =>
                              handleClick(
                                "/interior",
                                "/interior/residential-interior"
                              )
                            }
                          >
                            - Residential Interior
                          </Link>
                        </li>

                        <li >
                          {/* <img src="dropDownArrow.svg" alt="" /> */}
                          <Link className={style.menuli}
                            href="/interior/commercial-interior"
                            onClick={() =>
                              handleClick(
                                "/interior",
                                "/interior/commercial-interior"
                              )
                            }
                          >
                            - Commercial Interior
                          </Link>
                        </li>
                      </ul>

                      </div>
{/* ====================================mobile view===========================                       */}
{/* <div className={style.mobile_View}>
<ul className={style.interiorDesSubMenu}>
  <li>
    
    <Link className={style.menuli}
      href="/interior/residential-interior"
      onClick={() =>
        handleClick(
          "/interior",
          "/interior/residential-interior"
        )
      }
    >
      - Residential Interior
    </Link>
  </li>

  <li >
    
    <Link className={style.menuli}
      href="/interior/commercial-interior"
      onClick={() =>
        handleClick(
          "/interior",
          "/interior/commercial-interior"
        )
      }
    >
      - Commercial Interior
    </Link>
  </li>
</ul>

</div> */}





                      
                    </li>

                    <li className={`${style.architectureMenu}`}>
                      {/* <img src="dropDownArrow.svg" alt="" /> */}
                      <Link className={style.menuli}
                        href="/architecture"
                        onClick={() => handleClick("/architecture")}
                      >
                        ARCHITECTURE
                      </Link>
                    </li>

                    <li>
                      {/* <img src="dropDownArrow.svg" alt="" /> */}
                      <Link className={style.menuli}
                        href="/construction"
                        onClick={() => handleClick("/construction")}
                      >
                        CONSTRUCTION
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  onClick={() => handleClick("/projects")}
                  className={activeLink === "/projects" ? "active" : "inactive"}
                >
                  <Link href="/projects">Projects</Link>
                </li>
                <li
                  onClick={() => handleClick("/career")}
                  className={activeLink === "/career" ? "active" : "inactive"}
                >
                  <Link href="/career">Career</Link>
                </li>
                <li
                  onClick={() => handleClick("/blogs")}
                  className={activeLink === "/blogs" ? "active" : "inactive"}
                >
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
