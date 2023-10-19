import '@/app/globals.css'

import { getCurrentLocale } from '@/locales/server'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = getCurrentLocale()

  return (
    <html lang={locale} className="h-full">
      <body className="h-full bg-white">{children}</body>
    </html>
  )
}
