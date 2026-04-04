import React from 'react';
import styles from './Features.module.css';

const featuresData = [
  { icon: '🤖', title: 'Zadania automatyczne', desc: 'Automatyzuj procesy 24h na dobę i odzyskaj nawet 80% swojego czasu.' },
  { icon: '📦', title: 'Asystent Pakowania', desc: 'Ułatw sobie e-commerce bez dodatkowych opłat dzięki pełnej automatyzacji.' },
  { icon: '⚡', title: 'Manager Zamówień 3.0', desc: 'Kontroluj realizację wszystkich zamówień w nowej odsłonie bez wysiłku.' },
  { icon: '🔍', title: 'Obsługa skanera', desc: 'Usprawnij magazyn dzięki skanerom i inteligentnym zadaniom automatycznym.' },
  { icon: '🚚', title: 'Magazyn i wysyłka', desc: 'Przyspiesz pakowanie i realizację wysyłek, zwiększając zadowolenie klientów.' },
  { icon: '📊', title: 'Stany i ceny', desc: 'Pełna kontrola nad synchronizacją danych i cen w czasie rzeczywistym.' },
  { icon: '🧾', title: 'Fakturowanie VAT OSS', desc: 'Zarządzaj dokumentacją sprawnie i rozliczaj się wygodnie z jednego miejsca.' },
  { icon: '🌐', title: 'Sprzedaż wielokanałowa', desc: 'Zostaw powtarzalne zadania systemowi i skup się na realnym rozwoju biznesu.' },
  { icon: '📈', title: 'Marketplace Manager', desc: 'Wykorzystaj dedykowane narzędzia i rozwijaj sprzedaż na topowych rynkach.' },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Możliwości systemu</span>
          <h2 className={styles.title}>Wszystko w jednym panelu</h2>
          <p className={styles.subtitle}>Poznaj zestaw narzędzi, które odmienią Twoją codzienną pracę.</p>
        </div>

        <div className={styles.grid}>
          {featuresData.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconBox}>{item.icon}</div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}