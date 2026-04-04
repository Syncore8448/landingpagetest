import React from 'react';
import styles from './ProblemSolution.module.css';

const problems = [
  "Ręczne wpisywanie zamówień i błędy",
  "Brak synchronizacji stanów magazynowych",
  "Chaos przy obsłudze wielu kurierów"
];

const solutions = [
  "Pełna automatyzacja procesów z Apilo",
  "Stany magazynowe zawsze pod kontrolą",
  "Wszystkie przesyłki w jednym panelu",
  "Szybsza obsługa klienta i więcej czasu"
];

export default function ProblemSolution() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* LEWA STRONA: TEKST I PROBLEM */}
        <div className={styles.textContent}>
          <span className={styles.badge}>Rozwiązanie Twoich problemów</span>
          <h2 className={styles.title}>Ogarnij wszystko jednym systemem</h2>
          <p className={styles.description}>
            Zamiast walczyć z chaosem, postaw na sprawdzone wdrożenie. 
            Eliminujemy najczęstsze bariery wzrostu w e-commerce:
          </p>
          
          <ul className={styles.problemList}>
            {problems.map((p, i) => (
              <li key={i} className={styles.problemItem}>
                <span className={styles.cross}>✕</span> {p}
              </li>
            ))}
          </ul>
        </div>

        {/* PRAWA STRONA: WYRÓŻNIONA KARTA ROZWIĄZANIA */}
        <div className={styles.solutionCard}>
          <h3 className={styles.cardTitle}>Co zyskujesz z nami?</h3>
          <ul className={styles.solutionList}>
            {solutions.map((s, i) => (
              <li key={i} className={styles.solutionItem}>
                <span className={styles.check}>✔️</span> {s}
              </li>
            ))}
          </ul>
          <button className={styles.ctaButton}>Umów bezpłatną konsultację</button>
          <p className={styles.ctaSubtext}>*Pierwsze efekty wdrożenia już po 7 dniach</p>
        </div>

      </div>
    </section>
  );
}