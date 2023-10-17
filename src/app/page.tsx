import Link from 'next/link'
import prisma from '@/db'

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
