import styles from "./SocialProof.module.css";

export default function SocialProof() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Zaufali nam sprzedawcy e-commerce</h2>

      {/* STATY */}
      <div className={styles.stats}>
        <div>
          <strong>400+</strong>
          <span>wdrożeń Apilo</span>
        </div>
        <div>
          <strong>99%</strong>
          <span>zadowolonych klientów</span>
        </div>
        <div>
          <strong>24h</strong>
          <span>automatyzacja sprzedaży</span>
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className={styles.testimonial}>
        <p>
          „Dzięki wdrożeniu Apilo skróciliśmy czas obsługi zamówień o ponad 60%.
          Wszystko działa automatycznie, a zespół może skupić się na rozwoju.”
        </p>
        <span>— Właściciel sklepu e-commerce</span>
      </div>

      {/* LOGA */}
      <div className={styles.logos}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.logo}>LOGO</div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <a href="#" className={styles.button}>
          Zobacz case study →
        </a>
      </div>
    </section>
  );
}