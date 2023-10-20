import { type PrismaClient } from '@prisma/client'

export async function cleanupDb(prisma: PrismaClient) {
  const votes = await prisma.vote.findMany({})
  await Promise.all(votes.map((vote) => prisma.vote.delete({ where: { id: vote.id } })))

  const incidents = await prisma.incident.findMany({})
  await Promise.all(
    incidents.map((incident) => prisma.incident.delete({ where: { id: incident.id } })),
  )
}
