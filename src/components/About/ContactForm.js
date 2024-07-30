// components/ContactForm.js
import React, { useState } from "react";
import Button from "../button";
import styles from "../../styles/about.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <form
      className={`container mt-4 ${styles.whiteBg}`}
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="subject"
          name="subject"
          placeholder="Your Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
      </div>
      <Button className={styles.subBtn} type="submit">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
