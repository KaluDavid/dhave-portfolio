export default function Loading() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Header skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border h-14.25">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="h-8 w-8 rounded-md bg-muted sm:h-12 sm:w-12" />
            <div className="h-3 w-20 rounded bg-muted" />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-24 rounded-md bg-muted hidden sm:block" />
            <div className="h-8 w-8 rounded-md bg-muted" />
            <div className="h-8 w-8 rounded-md bg-muted" />
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-3xl mx-auto text-center px-4 space-y-6 w-full">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-28 h-28 rounded-full bg-muted" />
          </div>
          {/* Name + role */}
          <div className="space-y-3 flex flex-col items-center">
            <div className="h-4 w-32 rounded bg-muted" />
            <div className="h-12 w-64 rounded bg-muted" />
            <div className="h-6 w-40 rounded bg-muted" />
          </div>
          {/* Bio lines */}
          <div className="space-y-2 max-w-lg mx-auto">
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-5/6 rounded bg-muted mx-auto" />
            <div className="h-4 w-4/6 rounded bg-muted mx-auto" />
          </div>
          {/* CTA buttons */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-11 w-36 rounded-md bg-muted" />
            <div className="h-11 w-36 rounded-md bg-muted" />
          </div>
        </div>
      </div>
    </div>
  );
}
