import prisma from '@/db'
import SimpleQuestionnaire from './simple-questionnaire'

export default async function IncidentPage({ params }: { params: { incidentId: string } }) {
  const incident = await prisma.incident.findFirstOrThrow({
    where: { id: parseInt(params.incidentId) },
  })

  const {
    youtubeId,
    startTime,
    endTime,
    offendingPlayer,
    offendingPlayerTeam,
    goalie,
    goalieTeam,
    date,
    timeElapsed,
    period,
  } = incident

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 pt-4">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">
          {`${offendingPlayer} (${offendingPlayerTeam}) on ${goalie} (${goalieTeam})`}
        </h1>
        <p className="mt-2 text-xl">
          {`${date.toDateString()} at ${timeElapsed} in the ${period}`}
        </p>
      </div>

      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${youtubeId}?start=${startTime}&end=${endTime}`}
        title="YouTube video player"
        allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />

      <div>
        <SimpleQuestionnaire />
      </div>
    </main>
  )
}
