import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What is Goalie Interference?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-white">
        {children}
      </body>
    </html>
  )
}
