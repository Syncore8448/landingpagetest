import styles from './IntegrationSection.module.css';

const integrations = [
  'allegro',
  'amazon',
  'shopify',
  'shoper',
  'apilo',
  'inpost',
  'dpd',
  'dhl',
  'furgonetka',
  'subiekt',
  'erp',
  'woocommerce'
];

export default function IntegrationSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* HEADER */}
        <div className={styles.header}>
          <span className={styles.badge}>INTEGRATIONS</span>

          <h2 className={styles.title}>
            Connect and automate your entire ecommerce stack
          </h2>

          <p className={styles.subtitle}>
            Integrate marketplaces, couriers, ERP systems and accounting tools 
            into one seamless workflow.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {integrations.map((item, index) => (
            <div 
              key={index} 
              className={styles.tile}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={`/logos/${item}.png`}
                alt={item}
                className={styles.logo}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}