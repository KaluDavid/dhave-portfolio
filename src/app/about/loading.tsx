export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Header placeholder */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-border h-[57px] bg-background/80" />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Back link */}
            <div className="h-4 w-28 rounded bg-muted" />

            {/* Section heading */}
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded bg-muted" />
              <div className="h-8 w-48 rounded bg-muted" />
            </div>

            {/* Experience cards */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="border border-border rounded-xl p-6 space-y-3"
              >
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <div className="h-5 w-48 rounded bg-muted" />
                    <div className="h-4 w-32 rounded bg-muted" />
                  </div>
                  <div className="h-4 w-24 rounded bg-muted" />
                </div>
                <div className="space-y-2 pt-2">
                  <div className="h-3 w-full rounded bg-muted" />
                  <div className="h-3 w-5/6 rounded bg-muted" />
                  <div className="h-3 w-4/6 rounded bg-muted" />
                </div>
                <div className="flex gap-2 pt-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="h-6 w-16 rounded-full bg-muted" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
