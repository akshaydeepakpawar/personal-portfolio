export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface-950">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-accent-500/10" />
          <div className="absolute inset-0 rounded-full border-2 border-accent-500/30 border-t-transparent animate-spin" />
          <div className="absolute inset-2 rounded-full bg-accent-500/5 blur-sm" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm font-medium text-neutral-400">Akshay Pawar</p>
          <p className="text-xs text-neutral-600">Loading portfolio...</p>
        </div>
      </div>
    </div>
  );
}
