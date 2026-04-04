import React from 'react';
import styles from './PricingPreview.module.css';

export default function PricingPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Wybierz wdrożenie Apilo dopasowane do Twojego biznesu</h2>
          <p className={styles.description}>
            Oferujemy pakiety dla małych i średnich sklepów, od szybkiej integracji po pełną automatyzację procesów.
          </p>
        </div>

        <div className={styles.highlights}>
          <div className={styles.tier}>
            <strong>Start</strong> – podstawowa integracja
          </div>
          <div className={styles.divider} aria-hidden="true">|</div>
          <div className={styles.tier}>
            <strong>Standard</strong> – pełna automatyzacja
          </div>
          <div className={styles.divider} aria-hidden="true">|</div>
          <div className={styles.tier}>
            <strong>Indywidualny</strong> – dedykowane wdrożenie
          </div>
        </div>

        <div className={styles.action}>
          <a href="/cennik" className={styles.ctaButton}>
            Zobacz wszystkie pakiety
          </a>
        </div>
      </div>
    </section>
  );
}