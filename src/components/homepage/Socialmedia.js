"use client";

import Link from "next/link";
import Image from "next/image";

const Socialmedia = () => {
  const socials = [
    {
      href: "https://www.facebook.com/ColonelzConstructions",
      icon: "/Facebook.svg",
      alt: "Facebook",
    },
    {
      href: "https://www.instagram.com/colonelzconstructions/",
      icon: "/instagram.svg",
      alt: "Instagram",
    },
    {
      href: "https://www.youtube.com/@ColonelzConstruction",
      icon: "/YouTube.svg",
      alt: "YouTube",
    },
    {
      href: "https://www.linkedin.com/company/colonelz/?originalSubdomain=in",
      icon: "/linked.png",
      alt: "LinkedIn",
    },
  ];

  return (
    <div className="flex justify-center">
      <ul className="flex items-center gap-4">
        {socials.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black transition group"
            >
              <Image
                src={item.icon}
                alt={item.alt}
                width={20}
                height={20}
                className="transition group-hover:invert"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socialmedia;