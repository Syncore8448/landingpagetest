import React from 'react';
import Link from 'next/link'; // <--- Upewnij się, że jest 'next/link'
import styles from './Pricing.module.css';

const mainTiers = [
  {
    name: 'START',
    subtitle: 'Fundamenty',
    price: '1 900',
    features: ['1 sklep (np. Shoper)', '1 konto Allegro', '2 kurierów (InPost + DPD)', 'Synchronizacja co 1h/4h', 'Mapowanie statusów', '1h szkolenia online'],
    limit: 'Do 1000 produktów (SKU)',
    buttonText: 'Wybierz Start',
    popular: false
  },
  {
    name: 'AUTOMATYZACJA',
    subtitle: 'Najczęściej wybierany',
    price: '3 500',
    features: ['Wszystko z pakietu START', 'Dodatkowe konta Allegro/Erli/Empik', 'Auto-akcje (do 5 reguł)', 'Integracja z księgowością', 'Reguły marżowe i ceny', '2h warsztatów z automatyzacji'],
    limit: 'Do 5000 produktów (SKU)',
    buttonText: 'Wybierz Automatyzację',
    popular: true
  },
  {
    name: 'MIGRACJA / ERP',
    subtitle: 'Dla wymagających',
    price: 'od 5 500',
    features: ['Integracja z ERP (Subiekt/Comarch)', 'Przeniesienie ofert z BaseLinker', 'Szablony aukcji HTML/CSS', 'Nielimitowane auto-akcje', 'Asysta w dniu przepięcia', 'Indywidualna opieka'],
    limit: 'Bez limitu produktów',
    buttonText: 'Wycena indywidualna',
    popular: false
  }
];

const maintenancePlans = [
  {
    name: 'Basic Support',
    price: '300',
    features: ['1h prac serwisowych / msc', 'Reakcja do 48h', 'Drobne zmiany konfiguracji', 'Wsparcie mailowe']
  },
  {
    name: 'Premium Partner',
    price: '900',
    features: ['4h prac serwisowych / msc', 'Priorytetowa reakcja (SLA)', 'Monitoring błędów synchro', 'Kwartalny przegląd ustawień'],
    highlight: true
  }
];

export default function PricingPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        
        <header className={styles.header}>
          <Link href="/" className={styles.backLink}>← Powrót do strony głównej</Link>
          <h1 className={styles.title}>Cennik Wdrożeń i Automatyzacji Apilo</h1>
          <p className={styles.subtitle}>Wszystkie ceny są sugerowanymi kwotami netto (PLN).</p>
        </header>

        {/* ETAP 0 - AUDYT */}
        <div className={styles.auditBox}>
          <span className={styles.auditBadge}>ETAP 0 - OBOWIĄZKOWY DLA SKLEPÓW Z HISTORIĄ</span>
          <div className={styles.auditFlex}>
            <div className={styles.auditText}>
              <h2 className={styles.auditTitle}>🔍 Audyt i Higiena Danych</h2>
              <p>Zanim połączymy systemy, musimy upewnić się, że dane (SKU/EAN) są poprawne.</p>
            </div>
            <div className={styles.auditPrices}>
              <div className={styles.auditPriceItem}>
                <strong>300 zł</strong>
                <span>Wstępny Audyt*</span>
              </div>
              <div className={styles.auditPriceItem}>
                <strong>200 zł/h</strong>
                <span>Czyszczenie danych</span>
              </div>
            </div>
          </div>
          <p className={styles.auditNote}>*Audyt jest bezpłatny przy zamówieniu dowolnego pakietu wdrożeniowego.</p>
        </div>

        {/* PAKIETY GŁÓWNE */}
        <div className={styles.grid}>
          {mainTiers.map((tier, index) => (
            <div key={index} className={`${styles.card} ${tier.popular ? styles.popular : ''}`}>
              {tier.popular && <span className={styles.popularBadge}>BESTSELLER</span>}
              <h3 className={styles.tierName}>{tier.name}</h3>
              <p className={styles.tierSubtitle}>{tier.subtitle}</p>
              <div className={styles.priceBox}>
                <span className={styles.amount}>{tier.price}</span>
                <span className={styles.currency}>zł netto</span>
              </div>
              <ul className={styles.featureList}>
                {tier.features.map((f, i) => (
                  <li key={i} className={styles.featureItem}><span className={styles.check}>✓</span> {f}</li>
                ))}
              </ul>
              <div className={styles.limitBox}><strong>Limit:</strong> {tier.limit}</div>
              <button className={styles.cta}>{tier.buttonText}</button>
            </div>
          ))}
        </div>

        {/* USŁUGI DODATKOWE */}
        <section className={styles.addonsSection}>
          <h2 className={styles.sectionTitle}>🧩 Usługi Dodatkowe (Menu)</h2>
          <div className={styles.addonsGrid}>
            <div className={styles.addonItem}><span>Migracja ofert trwających (do 1000)</span> <strong>500 zł</strong></div>
            <div className={styles.addonItem}><span>Szablon Aukcji (Design + Kod)</span> <strong>600 - 1000 zł</strong></div>
            <div className={styles.addonItem}><span>Manager Sprzedaży Allegro (konfig)</span> <strong>250 zł</strong></div>
            <div className={styles.addonItem}><span>Dodatkowa godzina szkolenia</span> <strong>250 zł</strong></div>
            <div className={styles.addonItem}><span>Integracja Amazon / eBay</span> <strong>800 zł / rynek</strong></div>
            <div className={styles.addonItem}><span>Dropshipping (hurtownia XML)</span> <strong>1 200 zł</strong></div>
          </div>
        </section>

        {/* OPIEKA ABONAMENTOWA */}
        <section className={styles.maintenanceSection}>
          <h2 className={styles.sectionTitle}>🛡️ Opieka Abonamentowa (Utrzymanie)</h2>
          <div className={styles.maintenanceGrid}>
            {maintenancePlans.map((plan, index) => (
              <div key={index} className={`${styles.mCard} ${plan.highlight ? styles.mCardPremium : ''}`}>
                <h3 className={styles.mCardTitle}>{plan.name}</h3>
                <div className={styles.mPrice}>{plan.price}<span> zł / mc netto</span></div>
                <ul className={styles.mList}>
                  {plan.features.map((f, i) => <li key={i}>— {f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <footer className={styles.footerNotes}>
          <p><strong>Ważne uwagi:</strong> Cena nie zawiera licencji Apilo oraz dodatków typu "Bridge". Odpowiedzialność za dane spoczywa na Kliencie, chyba że zamówiono czyszczenie danych.</p>
        </footer>
      </div>
    </main>
  );
}