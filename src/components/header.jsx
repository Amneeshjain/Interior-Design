"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projectTypes = [
    { _id: "1", project_type: "Residential" },
    { _id: "2", project_type: "Commercial" },
    { _id: "3", project_type: "Office Interiors" },
    { _id: "4", project_type: "Retail Spaces" },
  ];

  const services = [
    { name: "Interior Design", href: "/interior" },
    { name: "Architecture", href: "/architecture" },
    { name: "Construction", href: "/construction" },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Stories", path: "/clients" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <>
      <header
        className="
    fixed inset-x-0 top-0 z-50
    h-20
    bg-white/50
    backdrop-blur-2xl
    border-b border-gray-100/50
    transition-all duration-300
  "
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="
          p-3
          rounded-2xl
          bg-gradient-to-br
          from-zinc-900
          via-zinc-800
          to-black
          shadow-lg shadow-black/20
          group-hover:scale-105
          transition-all duration-300
        "
            >
              <Image
                src="/logo 2 (2).png"
                alt="Logo"
                width={120}
                height={40}
                className="brightness-0 invert"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const active = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-[15px] font-medium transition-colors duration-300 ${active
                    ? "text-orange-500"
                    : "text-zinc-700 hover:text-orange-500"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Services */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-[15px] font-medium text-zinc-700 hover:text-orange-500 transition-colors duration-300">
                Services
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              <div
                className="
            absolute top-full left-1/2
            -translate-x-1/2
            mt-5 w-64
            opacity-0 invisible translate-y-2
            group-hover:opacity-100
            group-hover:visible
            group-hover:translate-y-0
            transition-all duration-300
          "
              >
                <div className="rounded-xl bg-white border border-gray-100 shadow-lg p-2">
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="
                  block
                  px-4 py-3
                  rounded-lg
                  text-sm font-medium
                  text-zinc-700
                  hover:bg-gray-50
                  hover:text-orange-500
                  transition-all duration-200
                "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="relative group">
              <Link
                href="/projects"
                className="
    flex
    items-center
    gap-1

    text-[15px]
    font-medium
    text-zinc-700

    hover:text-orange-500
    transition-colors
    duration-300
    group
  "
              >
                Projects

                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </Link>

              <div
                className="
            absolute top-full left-1/2
            -translate-x-1/2
            mt-5 w-80
            opacity-0 invisible translate-y-2
            group-hover:opacity-100
            group-hover:visible
            group-hover:translate-y-0
            transition-all duration-300
          "
              >
                <div className="rounded-xl bg-white border border-gray-100 shadow-lg p-2">
                  <div className="grid grid-cols-2 gap-1">
                    {projectTypes.map((type) => (
                      <Link
                        key={type._id}
                        href={`/projects/${type._id}`}
                        className="
                    rounded-lg
                    px-4 py-3
                    text-sm font-medium
                    text-zinc-700
                    hover:bg-gray-50
                    hover:text-orange-500
                    transition-all duration-200
                  "
                      >
                        {type.project_type}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
              />

              <input
                type="text"
                placeholder="Search..."
                className="
            h-11
            w-56
            rounded-full
            bg-white/70
            border border-zinc-200
            pl-11 pr-4
            text-sm
            outline-none
            focus:border-orange-400
            focus:ring-4
            focus:ring-orange-100
            transition-all duration-300
          "
              />
            </div>

            <Link
              href="/get-in-touch"
              className="
          inline-flex
          items-center
          justify-center
          h-11
          px-6
          rounded-full
          bg-orange-500
          text-white
          text-sm
          font-semibold
          hover:bg-orange-600
          transition-all duration-300
        "
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setMobileOpen(true)}
            className="
        lg:hidden
        h-11
        w-11
        rounded-xl
        bg-white
        shadow-md
        flex
        items-center
        justify-center
        hover:text-orange-500
        transition-all duration-300
      "
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="
  fixed right-0 top-0
  h-screen w-[320px]
  bg-white
  shadow-2xl
  z-[60]
  flex flex-col
"
            >
              {/* Top */}
              <div className="flex items-center justify-between p-5 border-b border-orange-100">
                <Image
                  src="/logo 2 (2).png"
                  alt="logo"
                  width={120}
                  height={40}
                />

                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-100 transition"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-5">
                {/* Main Nav */}
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`
                  block py-3 px-4 rounded-xl text-sm font-medium transition
                  ${pathname === item.path
                          ? "bg-orange-500 text-white"
                          : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        }
                `}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Services */}
                <div className="mt-8">
                  <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-3">
                    Services
                  </h3>

                  <div className="space-y-2">
                    {services.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="
                    block py-2 px-3 rounded-lg text-gray-600
                    hover:text-orange-600 hover:bg-orange-50
                    transition
                  "
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="mt-8">
                  <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-3">
                    Projects
                  </h3>

                  <div className="space-y-2">
                    {projectTypes.map((type) => (
                      <Link
                        key={type._id}
                        href={`/projects/${type._id}`}
                        onClick={() => setMobileOpen(false)}
                        className="
                    block py-2 px-3 rounded-lg text-gray-600
                    hover:text-orange-600 hover:bg-orange-50
                    transition
                  "
                      >
                        {type.project_type}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-5 border-t border-orange-100">
                <Link
                  href="/get-in-touch"
                  onClick={() => setMobileOpen(false)}
                  className="
              block w-full text-center
              py-3 rounded-xl
              bg-orange-500 text-white
              font-medium
              hover:bg-orange-600
              transition
            "
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
