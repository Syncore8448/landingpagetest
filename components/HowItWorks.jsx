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
          <span className={styles.badge}>PROCESS</span>

          <h2 className={styles.title}>
            How the implementation <br /> process works
          </h2>

          <p className={styles.subtitle}>
            From first contact to full automation — we handle everything step by step.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.number}>{step.no}</div>

              <h3 className={styles.stepTitle}>{step.title}</h3>

              <p className={styles.stepDescription}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}