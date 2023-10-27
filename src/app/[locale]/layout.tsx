import '@/app/globals.css'

import { I18nProviderClient } from '@/locales/client'
import { getCurrentLocale } from '@/locales/server'
import { Navbar } from './navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = getCurrentLocale()

  return (
    <html lang={locale} className="h-full">
      <body className="h-full bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200">
        <div className="min-h-full">
          <I18nProviderClient locale={locale}>
            <Navbar />
          </I18nProviderClient>

          <div className="py-10">
            <main>
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
