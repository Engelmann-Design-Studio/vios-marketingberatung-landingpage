'use client'

import { useState } from 'react'
import styles from './CTA.module.css'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hier würde die Formular-Verarbeitung stattfinden
    console.log('Form submitted:', formData)
    alert('Vielen Dank! Wir melden uns in Kürze bei Ihnen.')
  }

  return (
    <section className={styles.cta} id="cta-section">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <div className={styles.videoContainer}>
              <video 
                className={styles.video}
                controls
                poster="/images/Vio-Hero.png"
              >
                <source src="/mp4/Design ohne Titel.mp4" type="video/mp4" />
                Ihr Browser unterstützt das Video-Element nicht.
              </video>
            </div>
            <div className={styles.videoTeaser}>
              <p>So begleiten wir KMU vom Marketing-Frust zu planbaren Ergebnissen.</p>
            </div>
          </div>
          
          <div className={styles.rightSection}>
            <div className={styles.formContent}>
              <h2 className={styles.title}>
                Schluss mit Unsicherheit. Start mit Strategie.
              </h2>
              <p className={styles.subtitle}>
                In einem kostenlosen 30-Minuten-Erstgespräch analysieren wir Ihre aktuelle Marketinglage – und zeigen Ihnen konkrete Schritte, wie Sie planbar sichtbar werden und neue Kunden gewinnen.<br />
                Kein Blabla. Kein Fachchinesisch. Nur klare Empfehlungen, direkt umsetzbar.
              </p>
              
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>Ihr Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>Ihre E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="company" className={styles.label}>Firma (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
                
                <button type="submit" className={styles.submitButton}>
                  👉 Jetzt Gespräch sichern & Klarheit gewinnen
                </button>
                
                <div className={styles.securityNote}>
                  🔒 100 % kostenlos & unverbindlich. Kein Verkaufsgespräch.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
