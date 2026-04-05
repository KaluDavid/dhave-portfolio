export default function CaseStudyLoading() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-border h-[57px] bg-background/80" />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Back button */}
            <div className="h-8 w-32 rounded-md bg-muted" />

            {/* Title */}
            <div className="space-y-4">
              <div className="h-12 w-3/4 rounded bg-muted" />
              {/* Meta row */}
              <div className="flex gap-6">
                <div className="h-4 w-24 rounded bg-muted" />
                <div className="h-4 w-20 rounded bg-muted" />
                <div className="h-4 w-16 rounded bg-muted" />
              </div>
              {/* Tech badges */}
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-6 w-20 rounded-full bg-muted" />
                ))}
              </div>
            </div>

            {/* Case study body sections */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="py-10 border-t border-border space-y-4">
                {/* Section label */}
                <div className="h-3 w-8 rounded bg-muted" />
                {/* Section heading */}
                <div className="h-8 w-56 rounded bg-muted" />
                {/* Paragraph lines */}
                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-muted" />
                  <div className="h-4 w-11/12 rounded bg-muted" />
                  <div className="h-4 w-4/5 rounded bg-muted" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-muted" />
                  <div className="h-4 w-3/4 rounded bg-muted" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
