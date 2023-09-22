import SimpleQuestionnaire from './simple-questionnaire'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-4 gap-8">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">
          Craig Smith (BOS) on Marc-André Fluery (CHI)
        </h1>
        <p className="mt-2 text-xl">
          March 15, 2022
        </p>
      </div>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/EBuRYKcWJPI"
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
