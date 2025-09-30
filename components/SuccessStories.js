'use client'

import styles from './SuccessStories.module.css'

export default function SuccessStories() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const testimonials = [
  {
    id: 1,
    name: "Matthias Becker",
    title: "Inhaber",
    company: "Becker & Sohn Heizungsbau",
    icon: "🛠",
    quote: "Wir dachten immer, gute Arbeit reicht – aber online war von uns kaum was zu sehen. Vio hat uns geholfen, endlich gefunden zu werden. Heute bekommen wir regelmäßig Anfragen über unsere Website – ohne, dass wir selbst irgendwas posten müssen.",
    rating: 5
  },
  {
    id: 2,
    name: "Sabrina Klein",
    title: "Geschäftsführerin",
    company: "Malerbetrieb Klein & Partner",
    icon: "🎨",
    quote: "Wir wollten keine fancy Marketing-Kampagnen, sondern Aufträge. Vio hat uns auf Instagram genau so positioniert, wie wir sind – echt, greifbar, professionell. Nach 6 Wochen kamen die ersten DMs mit konkreten Projektanfragen. Wir waren baff.",
    rating: 5
  },
  {
    id: 3,
    name: "Andreas Vogl",
    title: "Inhaber",
    company: "WeinZeit Vinothek",
    icon: "🍷",
    quote: "Vorher war unser Online-Auftritt mehr Deko als Nutzen. Jetzt sind unsere Events ausgebucht, der Newsletter läuft, und wir verkaufen sogar Gutscheine online. Ohne Vios Strategie wären wir nie so weit gekommen – und hätten uns komplett verzettelt.",
    rating: 5
  }
  ]

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              Warum KMU-Chefs mit uns arbeiten – und bleiben.
            </h2>
            <p className={styles.subtitle}>
              Was früher Frust über Online-Marketing war, ist heute Sichtbarkeit, Struktur und messbares Wachstum.<br />
              Lesen Sie, wie andere Geschäftsführer mit unserer Unterstützung Klarheit gefunden – und Ergebnisse erzielt haben.
            </p>
          </div>
          <div className={styles.headerImage}>
            <img src="/images/Vio-Hero.png" alt="Vio Marketingberatung" className={styles.headerPortrait} />
          </div>
        </div>
        
        <div className={styles.testimonialsLayout}>
          <div className={styles.testimonialTopLeft}>
            <div className={styles.topTestimonialImage}>
              <img src="/images/Matthias Diaz-Becker.png" alt="Matthias Diaz-Becker" className={styles.topAuthorPortrait} />
            </div>
            <blockquote className={styles.quote}>
              "{testimonials[0].quote}"
            </blockquote>
            <div className={styles.rating}>
              {[...Array(testimonials[0].rating)].map((_, i) => (
                <span key={i} className={styles.star}>⭐</span>
              ))}
            </div>
            <div className={styles.author}>
              <div className={styles.authorName}>{testimonials[0].name}</div>
              <div className={styles.authorTitle}>{testimonials[0].title}, {testimonials[0].company}</div>
            </div>
          </div>
          
          <div className={styles.testimonialBottomLeft}>
            <div className={styles.authorImage}>
              <img src="/images/Sabrina Klein .png" alt="Sabrina Klein" className={styles.authorPortrait} />
            </div>
            <div className={styles.testimonialContent}>
              <blockquote className={styles.quote}>
                "{testimonials[1].quote}"
              </blockquote>
              <div className={styles.rating}>
                {[...Array(testimonials[1].rating)].map((_, i) => (
                  <span key={i} className={styles.star}>⭐</span>
                ))}
              </div>
              <div className={styles.author}>
                <div className={styles.authorName}>{testimonials[1].name}</div>
                <div className={styles.authorTitle}>{testimonials[1].title}, {testimonials[1].company}</div>
              </div>
            </div>
          </div>
          
          <div className={styles.testimonialBottomRight}>
            <div className={styles.testimonialContent}>
              <blockquote className={styles.quote}>
                "{testimonials[2].quote}"
              </blockquote>
              <div className={styles.rating}>
                {[...Array(testimonials[2].rating)].map((_, i) => (
                  <span key={i} className={styles.star}>⭐</span>
                ))}
              </div>
              <div className={styles.author}>
                <div className={styles.authorName}>{testimonials[2].name}</div>
                <div className={styles.authorTitle}>{testimonials[2].title}, {testimonials[2].company}</div>
              </div>
            </div>
            <div className={styles.authorImage}>
              <img src="/images/Andreas Vöckler.png" alt="Andreas Vöckler" className={styles.authorPortrait} />
            </div>
          </div>
        </div>
        
        <div className={styles.ctaSection}>
          <button className={styles.ctaButton} onClick={scrollToCTA}>
            Kostenloses 30-Minuten-Erstgespräch anfordern
          </button>
        </div>
      </div>
    </section>
  )
}
