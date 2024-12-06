"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/contactform.module.css"
import emailjs from "emailjs-com"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    secondname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    emailjs.init("Cp1U6sjzZrRcIQYZuJUO"); // Replace with your actual public key
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const templateParams = {
      firstname: formData.firstname,
      secondname: formData.secondname,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_2rfuqouq", // Your Service ID
        "template_w3qfspf", // Your Template ID
        templateParams
      );
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
    setFormData({
      firstname: "",
      secondname: "",
      email: "",
      phone: "",
      message: "",
    });
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <main className={styles.main }>
      <h2 className={styles.h2}>
        Fill out this Form to Work with us
      </h2>
      {submitted && (
        <p className={styles.p}>Message sent successfully!</p>
      )}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.div}>
          <input
            type="text"
            name="firstname"
            placeholder="Your First Name"
            value={formData.firstname}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="text"
            name="secondname"
            placeholder="Your Second Name"
            value={formData.secondname}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.div}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.div}>
          <textarea
            name="message"
            placeholder="Your Message Here"
            value={formData.message}
            onChange={handleChange}
            required
            rows={3}
            className={styles.input}
          />
        </div>

        <button
          type="submit"
          className={styles.button}
        >
          Submit Message
        </button>
      </form>
    </main>
  );
}
