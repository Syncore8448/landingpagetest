import React from 'react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    no: '01',
    title: 'Kontakt',
    description: 'Zgłoś się przez formularz – odezwiemy się w ciągu 24h.'
  },
  {
    no: '02',
    title: 'Analiza potrzeb',
    description: 'Omawiamy Twój e-commerce i dobieramy funkcje Apilo.'
  },
  {
    no: '03',
    title: 'Wdrożenie',
    description: 'Konfigurujemy system i łączymy Twoje kanały sprzedaży.'
  },
  {
    no: '04',
    title: 'Opieka',
    description: 'Testujemy procesy i wspieramy Cię po starcie systemu.'
  }
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Proces</span>
          <h2 className={styles.title}>Jak wygląda współpraca?</h2>
        </div>

        <div className={styles.stepper}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.numberWrapper}>
                <span className={styles.number}>{step.no}</span>
                {index !== steps.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.content}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}