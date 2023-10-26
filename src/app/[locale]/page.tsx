import { type Metadata } from 'next'
import Link from 'next/link'
import prisma from '@/db'
import { getCurrentLocale, getScopedI18n } from '@/locales/server'
import { formatDate } from '@/utils/formatters'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('home')

  return {
    title: t('title'),
  }
}

export default async function HomePage() {
  const locale = getCurrentLocale()
  const incidents = await prisma.incident.findMany()

  return (
    <ul>
      {incidents.map((incident) => (
        <li key={incident.id}>
          <Link href={`/incidents/${incident.id}`}>
            {`${incident.offendingPlayer} on ${incident.goalie} - ${formatDate(
              incident.date,
              locale,
            )}`}
          </Link>
        </li>
      ))}
    </ul>
  )
}
