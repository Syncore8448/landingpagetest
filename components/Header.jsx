"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <a href="/">
            <img src="/logo transparent.png" alt="Omiflow logo" width={150} height={50} />
          </a>
        </div>

        {/* Kategorie */}
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <a href="#hero">Home</a>
          <a href="#features">Funkcjonalności</a>
          <a href="#pricing">Cennik</a>
          <a href="#contact">Kontakt</a>
        </nav>

        {/* CTA */}
        <div className={styles.ctaWrapper}>
          <a href="#contact" className={styles.cta}>
            Umów konsultację
          </a>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}