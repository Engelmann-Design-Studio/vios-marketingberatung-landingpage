import './globals.css'

export const metadata = {
  title: 'Vios Marketingberatung',
  description: 'Massgeschneiderte Marketingstrategien für kleine und mittlere Unternehmen',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
