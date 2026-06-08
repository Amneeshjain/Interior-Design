"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">

        {/* CTA */}
        <div className="py-16 border-b border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Build Your Dream Space?
              </h2>

              <p className="mt-3 text-gray-400 max-w-xl">
                Let’s discuss your residential, commercial, architecture or construction project.
              </p>
            </div>

            <Link
              href="/get-in-touch"
              className="
                px-7 py-3.5
                rounded-full

                bg-orange-500
                text-white

                font-medium

                shadow-[0_10px_30px_rgba(249,115,22,0.3)]

                hover:bg-orange-600
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(249,115,22,0.4)]

                transition-all duration-300
              "
            >
              Get In Touch →
            </Link>

          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <Image
              src="/COLONELZ_22png_artboard16.png"
              alt="logo"
              width={170}
              height={70}
              className="mb-5"
            />

            <p className="text-base text-gray-400 leading-relaxed">
              Premium construction, interior and architectural solutions with exceptional craftsmanship and innovative design.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { name: "Facebook", href: "#", icon: "/Facebook.svg" },
                { name: "Instagram", href: "#", icon: "/instagram.svg" },
                { name: "YouTube", href: "#", icon: "/YouTube.svg" },
                { name: "LinkedIn", href: "#", icon: "/linked.png" },
              ].map((item, index) => (
                <Link key={index} href={item.href} target="_blank" className="group relative">

                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 text-xs bg-white text-black rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none">
                    {item.name}
                  </div>

                  {/* Icon */}
                  <div className="
          w-11 h-11
          rounded-xl
          bg-white/5
          border border-white/10
          flex items-center justify-center
          hover:bg-orange-500/20
          hover:border-orange-400/40
          hover:-translate-y-1
          transition-all duration-300
        ">
                    <Image src={item.icon} alt={item.name} width={20} height={20} />
                  </div>

                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Company</h3>

            <ul className="space-y-3 text-base">
              {["About", "Careers", "Blogs", "Terms", "Privacy"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-orange-400 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>

            <ul className="space-y-3 text-base">
              {[
                { label: "Residential Interior", slug: "residential-interior" },
                { label: "Commercial Interior", slug: "commercial-interior" },
                { label: "Architecture", slug: "architecture" },
                { label: "Construction", slug: "construction" },
                { label: "Projects", slug: "projects" },
              ].map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${item.slug}`}
                    className="text-gray-400 hover:text-orange-500 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact</h3>

            <div className="space-y-5 text-base text-gray-400">

              {/* Email */}
              <a
                href="mailto:info@colonelz.com"
                className="flex items-center gap-3 hover:text-orange-400 transition"
              >
                <Mail size={20} className="text-orange-500" />
                info@colonelz.com
              </a>

              {/* Phone */}
              <a
                href="tel:8447500754"
                className="flex items-center gap-3 hover:text-orange-400 transition"
              >
                <Phone size={20} className="text-orange-500" />
                +91 8447500754
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 leading-relaxed">
                <MapPin size={20} className="text-orange-500 mt-1" />
                <p>
                  D-11 Vipul World, Sector-48<br />
                  Gurugram, Haryana, India
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="
          py-6
          border-t border-white/10
          flex flex-col md:flex-row
          justify-between items-center gap-3
        ">
          <p className="text-sm text-gray-500">
            © 2026 Colonelz. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed & Developed by{" "}
            <Link href="https://mediadynox.com" className="text-orange-400 hover:underline">
              Media Dynox
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;