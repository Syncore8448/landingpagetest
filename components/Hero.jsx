import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* TŁO */}
      <div className={styles.backgroundWrapper}>
        <img 
          src="/282.png" 
          alt="Background" 
          className={styles.backgroundImage} 
        />
        <div className={styles.overlay}></div>
      </div>

      {/* TREŚĆ */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          The all-in-one platform <br /> for financial advisers
        </h1>
        <p className={styles.subtitle}>
          AI-powered practice management available now - with integrated 
          custody and execution launching soon.
        </p>
        <div className={styles.ctaWrapper}>
          <button className={styles.ctaButton}>
            Get Started For Free
          </button>
        </div>
      </div>

      {/* DASHBOARD MOCKUP */}
      <div className={styles.mockupContainer}>
        <div className={styles.mockupImageWrapper}>
          {/* Desktop */}
          <img 
            src="/mockupapilopc.png" 
            alt="Dashboard Preview Desktop" 
            className={`${styles.mockupImage} ${styles.desktopOnly}`} 
          />
          {/* Mobile */}
          <img 
            src="/mockupapilomobile.png" 
            alt="Dashboard Preview Mobile" 
            className={`${styles.mockupImage} ${styles.mobileOnly}`} 
          />
        </div>
      </div>
    </section>
  );
}