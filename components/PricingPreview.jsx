import styles from './PricingPreview.module.css';

export default function PricingPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.content}>
          <h2 className={styles.title}>
            Choose the right Apilo implementation
          </h2>

          <p className={styles.description}>
            From quick integrations to fully automated ecommerce workflows.
          </p>
        </div>

        <div className={styles.highlights}>
          <div className={styles.tier}>
            <strong>Start</strong>
            <span>– basic integration</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.tier}>
            <strong>Standard</strong>
            <span>– full automation</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.tier}>
            <strong>Custom</strong>
            <span>– dedicated implementation</span>
          </div>
        </div>

        <div className={styles.action}>
          <a href="/cennik" className={styles.ctaButton}>
            View full pricing
          </a>
        </div>

      </div>
    </section>
  );
}