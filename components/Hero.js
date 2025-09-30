'use client'

import styles from './Hero.module.css'

export default function Hero() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className={styles.hero}>
      <div className={styles.logoContainer}>
        <img src="/images/Vio-Logo.png" alt="Vio Marketingberatung Logo" className={styles.logo} />
      </div>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h1 className={styles.headline}>
            Marketing, das funktioniert –<br />
            statt nur gut klingt.
          </h1>
          <p className={styles.description}>
            Sie sind sichtbar präsent, aber online kaum auffindbar?<br />
            Vio hilft kleinen und mittleren Unternehmen dabei, gezielt neue Kunden zu gewinnen – mit digitaler Strategie, die nicht überfordert, sondern entlastet.
          </p>
          <div className={styles.trustBuilders}>
            <div className={styles.trustItem}>
              <span className={styles.checkmark}>✓</span>
              Beratung speziell für KMU in Handwerk, Dienstleistung & Produktion
            </div>
            <div className={styles.trustItem}>
              <span className={styles.checkmark}>✓</span>
              Persönlich & lokal: Digital oder direkt vor Ort in Baden-Württemberg
            </div>
            <div className={styles.trustItem}>
              <span className={styles.checkmark}>✓</span>
              Fokus: Online-Sichtbarkeit, Leadgenerierung & machbare Umsetzung
            </div>
          </div>
                  <button className={styles.ctaButton} onClick={scrollToCTA}>
                    → Kostenlose Erstberatung anfragen
                  </button>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img src="/images/Vio-Hero.png" alt="Professionelle Marketingberatung" className={styles.heroImage} />
          </div>
        </div>
      </div>
    </section>
  )
}
