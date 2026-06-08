import Link from "next/link";
import Image from "next/image";

const Contact = ({ bg = "#fff" }) => {
  const contactInfo = [
    {
      icon: "/call.svg",
      title: "Phone",
      value: "+91 84475 00754",
      href: "tel:8447500754",
    },
    {
      icon: "/mail.svg",
      title: "Email",
      value: "info@colonelz.com",
      href: "mailto:info@colonelz.com",
    },
    {
      icon: "/location.svg",
      title: "Office",
      value: "Sector-48, Gurugram, Haryana",
      href: "https://maps.app.goo.gl/uXjo914FmXRjWFrr9",
    },
  ];

  return (
    <section style={{ backgroundColor: bg }} className="py-16 md:py-20 relative overflow-hidden">

      {/* soft orange glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-100 blur-3xl rounded-full opacity-50" />

      <div className="max-w-7xl mx-auto px-5 relative">

        {/* Header */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-orange-500">
            <span className="w-8 h-px bg-orange-400"></span>
            Contact Us
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Let’s Build Something <br /> Beautiful Together
          </h2>

          <p className="mt-4 text-gray-500 max-w-xl">
            Luxury interior design, architecture, and construction solutions tailored to your vision.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[1fr_520px] gap-10 items-center">

          {/* Left */}
          <div className="space-y-4">

            {contactInfo.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                target={item.title === "Office" ? "_blank" : undefined}
                className="
                  group flex items-center gap-4
                  bg-white
                  border border-orange-100
                  rounded-2xl
                  p-4
                  shadow-sm
                  hover:shadow-lg
                  hover:-translate-y-1
                  hover:border-orange-300
                  transition-all duration-300
                "
              >
                <div className="
                  w-11 h-11 rounded-xl
                  bg-orange-50
                  flex items-center justify-center
                  group-hover:bg-orange-500
                  transition
                ">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={18}
                    height={18}
                    className="group-hover:invert"
                  />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wider text-orange-400">
                    {item.title}
                  </p>
                  <p className="text-sm md:text-base font-medium text-gray-900">
                    {item.value}
                  </p>
                </div>
              </Link>
            ))}

          </div>

          {/* Right Map */}
          <div className="
            rounded-3xl overflow-hidden
            border border-orange-100
            shadow-xl
            bg-white
          ">
            <iframe
              className="w-full h-[300px] md:h-[380px]"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.172529196996!2d77.033676773742!3d28.414050493971892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d236a0cf13cc5%3A0x8f739ce50923a065!2sColonelz%20Constructions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1721986258818!5m2!1sen!2sin"
            />

            <div className="p-5 border-t border-orange-100">
              <h3 className="font-semibold text-gray-900">
                Colonelz Interior Design
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                D-11, Vipul World, Sector-48, Gurugram
              </p>

              <Link
                href="https://maps.app.goo.gl/uXjo914FmXRjWFrr9"
                target="_blank"
                className="inline-flex mt-3 text-sm font-medium text-orange-600 hover:underline"
              >
                View on Google Maps →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;