"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.wrapper} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
           <Image
              src="/logo.png"
              alt="Syncore"
              width={150}
              height={150}
           />
        </div>
          

        <div className={styles.links}>
          <a href="#">Product</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </div>

        <button className={styles.cta}>Get started</button>
      </div>
    </div>
  );
}