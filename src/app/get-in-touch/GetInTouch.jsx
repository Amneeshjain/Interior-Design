"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";

const Contact = ({ bg = "#fff" }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

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
      value: "Sector-48, Gurugram",
      href: "https://maps.app.goo.gl/uXjo914FmXRjWFrr9",
    },
  ];

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setFile(selected);
    if (selected.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(selected));
    } else setPreview(null);
  };

  const removeFile = () => {
    setFile(null);
    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    if (file) formData.append("attachment", file);

    try {
      const res = await fetch(
        "https://backend-interior.onrender.com/api/contact/submit",
        { method: "POST", body: formData }
      );

      if (!res.ok) throw new Error("Submission failed");

      Swal.fire("Success!", "Message sent successfully.", "success");
      e.target.reset();
      removeFile();
    } catch (err) {
      Swal.fire("Error!", err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ backgroundColor: bg }} className="py-36">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-orange-500 text-white">
            Get In Touch
          </span>

          <h2 className="text-2xl md:text-3xl font-bold mt-3">
            Let’s Build Something Beautiful
          </h2>

          <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
            Interior design, architecture & construction solutions tailored for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* LEFT */}
          <div className="space-y-4">

            {contactInfo.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                target={item.title === "Office" ? "_blank" : undefined}
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-50">
                  <Image src={item.icon} alt="" width={18} height={18} />
                </div>

                <div>
                  <p className="text-[11px] text-gray-400 uppercase">
                    {item.title}
                  </p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </Link>
            ))}

            {/* MAP */}
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <iframe
                className="w-full h-[220px]"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.172529196996!2d77.033676773742!3d28.414050493971892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d236a0cf13cc5%3A0x8f739ce50923a065!2sColonelz%20Constructions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1721986258818!5m2!1sen!2sin"
              />
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white border border-orange-100 rounded-2xl shadow-md p-5">

            <form onSubmit={handleSubmit} className="space-y-3">

              <div className="grid grid-cols-2 gap-3">
                <Input name="first_name" label="First Name" />
                <Input name="last_name" label="Last Name" />
              </div>

              <Input name="email" label="Email" type="email" />
              <Input name="phone" label="Phone" />
              <Input name="location" label="Location" />

              <select
                name="category"
                className="w-full h-10 px-3 text-sm border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              >
                <option>Select Category</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Architecture</option>
                <option>Construction</option>
              </select>

              {/* Upload */}
              <div className="border border-dashed border-orange-200 rounded-lg p-3 text-center">
                <input type="file" onChange={handleFileChange} className="text-sm" />
                <p className="text-xs text-gray-400 mt-1">Images / PDF</p>
              </div>

              {preview && (
                <Image
                  src={preview}
                  alt="preview"
                  width={500}
                  height={200}
                  className="rounded-lg object-cover"
                />
              )}

              <textarea
                name="message"
                rows={3}
                placeholder="Project details..."
                className="w-full border rounded-lg p-2 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full h-10 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

/* INPUT */
const Input = ({ name, label, type = "text" }) => (
  <input
    name={name}
    type={type}
    placeholder={label}
    className="w-full h-10 px-3 text-sm border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
  />
);

export default Contact;