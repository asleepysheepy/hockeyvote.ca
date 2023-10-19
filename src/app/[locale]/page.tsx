import { type Metadata } from 'next'
import Link from 'next/link'
import prisma from '@/db'
import { getScopedI18n } from '@/locales/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('home')

  return {
    title: t('title'),
  }
}

export default async function HomePage() {
  const incidents = await prisma.incident.findMany()

  return (
    <ul>
      {incidents.map((incident) => (
        <li key={incident.id}>
          <Link href={`/incidents/${incident.id}`}>
            {`${incident.offendingPlayer} on ${incident.goalie} - ${incident.date.toDateString()}`}
          </Link>
        </li>
      ))}
    </ul>
  )
}
