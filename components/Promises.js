import styles from './Promises.module.css'

export default function Promises() {
  return (
    <section className={styles.promises}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Ihr Unternehmen verdient mehr als Standard-Marketing.
          </h2>
          <p className={styles.subtitle}>
            Wir liefern keine vorgefertigten Lösungen – sondern pragmatische Strategien, die wirklich funktionieren. Weil Ihre Zeit und Ihr Budget zu wertvoll sind für Experimente.
          </p>
        </div>
        
        <div className={styles.promisesGrid}>
          <div className={styles.promiseCard}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>⚡</span>
            </div>
            <h3 className={styles.cardTitle}>Strategien, die zu Ihnen passen</h3>
            <p className={styles.cardDescription}>
              Wir entwickeln keine Konzepte „von der Stange" – sondern exakt auf Ihre Branche, Ihr Geschäftsmodell und Ihre Ziele zugeschnitten.
            </p>
            <div className={styles.cardHighlight}>
              → Klar, machbar, und mit Plan zur Umsetzung.
            </div>
          </div>
          
          <div className={styles.promiseCard}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>🎯</span>
            </div>
            <h3 className={styles.cardTitle}>Umsetzung, die entlastet</h3>
            <p className={styles.cardDescription}>
              Wir zerlegen das große Marketing-Chaos in konkrete ToDos – und begleiten Sie Schritt für Schritt.
            </p>
            <div className={styles.cardHighlight}>
              → Keine Überforderung. Keine Fachchinesisch. Sondern klare Prioritäten.
            </div>
          </div>
          
          <div className={styles.promiseCard}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>📊</span>
            </div>
            <h3 className={styles.cardTitle}>Ergebnisse, die messbar sind</h3>
            <p className={styles.cardDescription}>
              Sie wissen jederzeit, was sich verändert – und warum.
            </p>
            <div className={styles.cardHighlight}>
              → Sichtbarkeit, Leads und Kennzahlen, auf die es in Ihrem Geschäftsalltag wirklich ankommt.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
