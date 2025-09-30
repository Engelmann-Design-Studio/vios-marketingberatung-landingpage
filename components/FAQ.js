'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'

export default function FAQ() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const faqs = [
  {
    id: 1,
    question: "Was kostet die Beratung?",
    answer: "Das kostenlose Erstgespräch (30 Minuten) ist unverbindlich. Danach erhalten Sie ein individuelles Angebot, das sich nach Ihren Zielen und Ihrem Bedarf richtet. Keine versteckten Kosten, keine Pauschallösungen."
  },
  {
    id: 2,
    question: "Muss ich schon Vorkenntnisse im Online-Marketing haben?",
    answer: "Nein. Unser Ansatz richtet sich speziell an KMU, die wenig Zeit und oft keine Marketingabteilung haben. Wir sprechen Klartext – ohne Fachjargon – und begleiten Sie Schritt für Schritt."
  },
  {
    id: 3,
    question: "Wie schnell sehe ich erste Ergebnisse?",
    answer: "Das hängt von Ihrem Startpunkt ab. Viele unserer Kunden berichten bereits nach 4–6 Wochen von mehr Sichtbarkeit oder den ersten neuen Anfragen. Wir legen Wert auf pragmatische Maßnahmen, die zügig Wirkung zeigen."
  },
  {
    id: 4,
    question: "Arbeiten Sie auch vor Ort oder nur online?",
    answer: "Beides ist möglich. Wir sind in Baden-Württemberg persönlich verfügbar, arbeiten aber auch digital mit Kunden in ganz Deutschland zusammen."
  },
  {
    id: 5,
    question: "Was unterscheidet Sie von einer klassischen Marketingagentur?",
    answer: "Wir sind keine Agentur, die einfach Kampagnen abwickelt. Vio arbeitet beratend, strategisch und setzt gemeinsam mit Ihnen Maßnahmen um, die wirklich zu Ihrem Unternehmen passen – ohne unnötigen Schnickschnack."
  },
  {
    id: 6,
    question: "Ist das Erstgespräch wirklich unverbindlich?",
    answer: "Ja. Wir analysieren Ihre Situation und geben Ihnen klare Handlungsempfehlungen – Sie entscheiden danach, ob und wie Sie weitermachen möchten."
  }
  ]

  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Häufige Fragen – klar beantwortet.
          </h2>
        </div>
        
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <div key={faq.id} className={styles.faqItem}>
              <button 
                className={styles.questionButton}
                onClick={() => toggleItem(faq.id)}
                aria-expanded={openItems.has(faq.id)}
              >
                <span className={styles.questionIcon}>❓</span>
                <span className={styles.questionText}>{faq.question}</span>
                <span className={`${styles.chevron} ${openItems.has(faq.id) ? styles.chevronOpen : ''}`}>
                  ▼
                </span>
              </button>
              
              <div className={`${styles.answer} ${openItems.has(faq.id) ? styles.answerOpen : ''}`}>
                <div className={styles.answerContent}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaSection}>
          <button className={styles.ctaButton} onClick={scrollToCTA}>
            → Kostenlose Erstberatung anfordern
          </button>
        </div>
      </div>
    </section>
  )
}
