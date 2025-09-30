'use client'

import styles from './Progress.module.css'

export default function Progress() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className={styles.progress}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Von Unsicherheit zu Sichtbarkeit – in 3 Schritten.
          </h2>
          <p className={styles.subtitle}>
            Unser strukturierter Prozess für messbare Ergebnisse und planbare Kundenanfragen.
          </p>
        </div>
        
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <div className={styles.stepImage}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.stepNumber}>1</span>
              </div>
            </div>
            <div className={styles.stepContent}>
              <div className={styles.stepLabel}>Schritt 1</div>
              <h3 className={styles.stepTitle}>Analyse</h3>
              <p className={styles.stepDescription}>
                Wir hören zu, bevor wir beraten.<br />
                Gemeinsam analysieren wir Ihre aktuelle Marketinglage, identifizieren Schwachstellen und definieren klare Ziele – mit Blick auf Ihre Branche, Ihre Zielgruppe und Ihre Kapazitäten.
              </p>
            </div>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepImage}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.stepNumber}>2</span>
              </div>
            </div>
            <div className={styles.stepContent}>
              <div className={styles.stepLabel}>Schritt 2</div>
              <h3 className={styles.stepTitle}>Umsetzung</h3>
              <p className={styles.stepDescription}>
                Keine Strategie ohne Umsetzung.<br />
                Wir entwickeln eine machbare, auf Ihr Unternehmen abgestimmte Marketing-Roadmap – und begleiten Sie aktiv bei der Umsetzung. Ob Content, Kampagnen oder Tools: Sie bleiben entlastet, wir liefern.
              </p>
            </div>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepImage}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.stepNumber}>3</span>
              </div>
            </div>
            <div className={styles.stepContent}>
              <div className={styles.stepLabel}>Schritt 3</div>
              <h3 className={styles.stepTitle}>Messung</h3>
              <p className={styles.stepDescription}>
                Marketing ohne Zahlen ist Bauchgefühl.<br />
                Wir messen, was funktioniert – und optimieren, was nicht. Mit Fokus auf Leads, Sichtbarkeit und Ihrem konkreten ROI. Transparent. Verständlich. Umsetzbar.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Marketing darf kein Blindflug sein.</h3>
          <p className={styles.ctaSubtitle}>
            Lassen Sie uns gemeinsam herausfinden, was Ihr Unternehmen wirklich braucht, um online sichtbar zu werden und regelmäßig neue Kunden zu gewinnen – ohne Zeitverlust oder Fachchinesisch.
          </p>
          <button className={styles.ctaButton} onClick={scrollToCTA}>
            → Kostenlose Erstberatung anfragen
          </button>
        </div>
      </div>
    </section>
  )
}
