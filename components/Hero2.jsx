import styles from './Hero2.module.css';
import HeroBackground from '@/components/HeroBackground';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      
      {/* 🔥 CANVAS TŁO */}
      <HeroBackground />

      {/* 🔥 OVERLAY (dla czytelności tekstu) */}
      <div className={styles.overlay}></div>

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

      {/* MOCKUP */}
      <div className={styles.mockupContainer}>
        <div className={styles.mockupImageWrapper}>
          <img 
            src="/mockupapilopc.png" 
            alt="Desktop" 
            className={`${styles.mockupImage} ${styles.desktopOnly}`} 
          />
          <img 
            src="/mockupapilomobile.png" 
            alt="Mobile" 
            className={`${styles.mockupImage} ${styles.mobileOnly}`} 
          />
        </div>
      </div>
    </section>
  );
}