import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        <div className={styles.left}>
          <h1>
            Zobacz, jak <span>Apilo</span> automatyzuje Twój e-commerce
          </h1>
          
          <p>
            Integruj sprzedaż, zarządzaj zamówieniami i oszczędzaj godziny pracy każdego dnia.
          </p>

          <a href="#features" className={styles.cta}>
            Zobacz możliwości
          </a>
        </div>

        <div className={styles.right}>
          <img src="/banerek kopia.png" alt="Apilo dashboard" />
        </div>

      </div>
    </section>
  );
}