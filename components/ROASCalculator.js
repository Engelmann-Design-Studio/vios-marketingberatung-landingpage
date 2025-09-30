'use client'

import { useState } from 'react'
import { TrendingUp, DollarSign, Target, ShoppingCart } from 'lucide-react'
import styles from './ROASCalculator.module.css'

export default function ROASCalculator() {
  const [adSpend, setAdSpend] = useState('')
  const [revenue, setRevenue] = useState('')
  const [conversions, setConversions] = useState('')
  const [avgOrderValue, setAvgOrderValue] = useState('')
  
  const calculate = () => {
    const spend = parseFloat(adSpend) || 0
    const rev = parseFloat(revenue) || 0
    const conv = parseFloat(conversions) || 0
    const aov = parseFloat(avgOrderValue) || 0
    
    const roas = spend > 0 ? rev / spend : 0
    const cpa = conv > 0 ? spend / conv : 0
    const profit = rev - spend
    const profitMargin = spend > 0 ? (profit / spend) * 100 : 0
    const calculatedAOV = conv > 0 ? rev / conv : aov
    
    return {
      roas,
      cpa,
      profit,
      profitMargin,
      calculatedAOV
    }
  }
  
  const result = calculate()
  const isGoodROAS = result.roas >= 4
  const isOkayROAS = result.roas >= 2 && result.roas < 4

  const getROASRating = () => {
    if (result.roas >= 5) return { text: 'Ausgezeichnet', color: 'green' }
    if (result.roas >= 4) return { text: 'Sehr gut', color: 'green' }
    if (result.roas >= 3) return { text: 'Gut', color: 'blue' }
    if (result.roas >= 2) return { text: 'Akzeptabel', color: 'yellow' }
    if (result.roas > 0) return { text: 'Verbesserungsbedarf', color: 'orange' }
    return { text: 'Nicht profitabel', color: 'red' }
  }

  const rating = getROASRating()

  return (
    <section className={styles.roasCalculator}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <Target size={36} />
              <h2 className={styles.title}>ROAS-Rechner für KMU</h2>
            </div>
            <p className={styles.subtitle}>Online-Marketing Performance messen & optimieren</p>
          </div>
          
          <div className={styles.content}>
            <div className={styles.inputGrid}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  <DollarSign size={18} />
                  Werbeausgaben (€)
                </label>
                <input
                  type="number"
                  value={adSpend}
                  onChange={(e) => setAdSpend(e.target.value)}
                  placeholder="z.B. 1000"
                  className={styles.input}
                />
                <p className={styles.inputHint}>Google Ads, Meta Ads, etc.</p>
              </div>
              
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  <TrendingUp size={18} />
                  Generierter Umsatz (€)
                </label>
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  placeholder="z.B. 4500"
                  className={styles.input}
                />
                <p className={styles.inputHint}>Direkt zugeordneter Umsatz</p>
              </div>
              
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  <ShoppingCart size={18} />
                  Anzahl Conversions
                </label>
                <input
                  type="number"
                  value={conversions}
                  onChange={(e) => setConversions(e.target.value)}
                  placeholder="z.B. 30"
                  className={styles.input}
                />
                <p className={styles.inputHint}>Käufe, Leads, Anfragen</p>
              </div>
              
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  <DollarSign size={18} />
                  Ø Bestellwert (€) <span className={styles.optional}>(optional)</span>
                </label>
                <input
                  type="number"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(e.target.value)}
                  placeholder="z.B. 150"
                  className={styles.input}
                />
                <p className={styles.inputHint}>Wird automatisch berechnet</p>
              </div>
            </div>
            
            <div className={`${styles.resultCard} ${styles[rating.color]}`}>
              <div className={styles.roasDisplay}>
                <div className={styles.roasLabel}>Return on Ad Spend (ROAS)</div>
                <div className={`${styles.roasValue} ${styles[rating.color + 'Text']}`}>
                  {result.roas.toFixed(2)}:1
                </div>
                <div className={`${styles.ratingBadge} ${styles[rating.color + 'Badge']}`}>
                  {rating.text}
                </div>
              </div>
              
              <div className={styles.metricsGrid}>
                <div className={styles.metric}>
                  <div className={styles.metricLabel}>Gewinn</div>
                  <div className={`${styles.metricValue} ${result.profit >= 0 ? styles.profit : styles.loss}`}>
                    {result.profit.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                  </div>
                </div>
                
                <div className={styles.metric}>
                  <div className={styles.metricLabel}>Cost per Acquisition</div>
                  <div className={styles.metricValue}>
                    {result.cpa > 0 ? result.cpa.toLocaleString('de-DE', { minimumFractionDigits: 2 }) : '0.00'} €
                  </div>
                </div>
                
                <div className={styles.metric}>
                  <div className={styles.metricLabel}>Ø Bestellwert</div>
                  <div className={styles.metricValue}>
                    {result.calculatedAOV.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.interpretation}>
              <h3 className={styles.interpretationTitle}>
                <Target size={20} />
                Interpretation für KMU
              </h3>
              <div className={styles.interpretationContent}>
                {result.roas === 0 ? (
                  <p>Geben Sie Ihre Kampagnendaten ein, um den ROAS zu berechnen.</p>
                ) : (
                  <>
                    <p><strong>Ihre Performance:</strong> Für jeden investierten Euro in Werbung erhalten Sie {result.roas.toFixed(2)} € Umsatz zurück.</p>
                    
                    {result.roas >= 4 && (
                      <p className={styles.successText}>✓ Ihre Kampagne läuft sehr gut! Ein ROAS von {result.roas.toFixed(2)}:1 ist für die meisten KMU profitabel.</p>
                    )}
                    
                    {result.roas >= 2 && result.roas < 4 && (
                      <p className={styles.warningText}>→ Solider ROAS. Prüfen Sie Ihre Produktmargen - bei 50% Marge sind Sie im Plus. Optimierungspotenzial vorhanden.</p>
                    )}
                    
                    {result.roas > 0 && result.roas < 2 && (
                      <p className={styles.dangerText}>⚠ Kritischer Bereich. Bei einem ROAS unter 2:1 arbeiten die meisten KMU mit Verlust. Kampagne dringend optimieren!</p>
                    )}
                    
                    <p><strong>CPA von {result.cpa.toFixed(2)} €:</strong> {
                      result.calculatedAOV > 0 
                        ? `Das sind ${((result.cpa / result.calculatedAOV) * 100).toFixed(1)}% Ihres durchschnittlichen Bestellwerts.`
                        : 'Kosten pro Kunde bzw. Lead.'
                    }</p>
                  </>
                )}
              </div>
            </div>
            
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <h4 className={styles.tipTitle}>📊 ROAS-Benchmarks</h4>
                <ul className={styles.tipList}>
                  <li>• <strong>5:1+</strong> - Exzellent</li>
                  <li>• <strong>4:1</strong> - Sehr gut (Ziel für E-Commerce)</li>
                  <li>• <strong>3:1</strong> - Gut (profitabel bei guter Marge)</li>
                  <li>• <strong>2:1</strong> - Minimum für Profitabilität</li>
                </ul>
              </div>
              
              <div className={styles.tipCard}>
                <h4 className={styles.tipTitle}>💡 Optimierungstipps</h4>
                <ul className={styles.tipList}>
                  <li>• Zielgruppen-Targeting verfeinern</li>
                  <li>• Landing Pages optimieren</li>
                  <li>• A/B-Tests für Anzeigen durchführen</li>
                  <li>• Negative Keywords hinzufügen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
