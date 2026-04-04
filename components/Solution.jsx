import React from 'react';
import styles from './Solution.module.css';

const features = [
  "Pełna integracja z Allegro i Erli",
  "Automatyczna synchronizacja stanów",
  "Masowe wystawianie aukcji",
  "Obsługa kurierów w jednym oknie",
  "Generowanie faktur jednym kliknięciem",
  "Powiadomienia dla klientów 24/7"
];

export default function Solution() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ogarnij wszystko jednym systemem</h2>
          <p className={styles.description}>
            Wdrażamy Apilo i łączymy wszystkie Twoje kanały sprzedaży w jeden 
            spójny system, który działa automatycznie.
          </p>
          
          <ul className={styles.list}>
            {features.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.check}>✔️</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}