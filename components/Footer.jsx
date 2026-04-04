import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* LEWA STRONA */}
        <div className={styles.brand}>
          <img src="/logo transparent.png" alt="Logo" className={styles.logo} />
          <p>
            Pomagamy firmom e-commerce wdrażać Apilo i automatyzować sprzedaż
            wielokanałową.
          </p>
        </div>

        {/* LINKI */}
        <div className={styles.links}>
          <h4>Firma</h4>
          <a href="#">O firmie</a>
          <a href="#kontakt">Kontakt</a>
          <a href="#">Polityka prywatności</a>
        </div>

        {/* SOCIAL MEDIA */}
        <div className={styles.links}>
          <h4>Social media</h4>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </div>

      {/* DÓŁ */}
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Twoja Firma. Wszelkie prawa zastrzeżone.</span>
      </div>
    </footer>
  );
}