"use client";

import styles from "./CTA.module.css";
import { useState } from "react";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("FORM DATA:", form);

    // TODO: tutaj podepniesz API / maila
    alert("Dzięki! Odezwę się wkrótce 🚀");
  };

  return (
    <section id="kontakt" className={styles.section}>
      <div className={styles.container}>
        
        {/* LEWA STRONA */}
        <div className={styles.text}>
          <h2>Chcesz wdrożyć Apilo w swojej firmie?</h2>
          <p>
            Umów bezpłatną konsultację i zacznij automatyzować sprzedaż już dziś.
          </p>

          <ul>
            <li>✔ Bez zobowiązań</li>
            <li>✔ 30 minut rozmowy</li>
            <li>✔ Szybka wycena</li>
          </ul>
        </div>

        {/* FORMULARZ */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Imię"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Krótko opisz swój biznes (opcjonalnie)"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit">
            Umów konsultację
          </button>
        </form>
      </div>
    </section>
  );
}