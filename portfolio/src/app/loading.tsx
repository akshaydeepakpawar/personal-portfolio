export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface-950">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-2 border-accent-500/20" />
          <div className="absolute inset-0 rounded-full border-2 border-accent-500 border-t-transparent animate-spin" />
        </div>
        <p className="text-sm text-neutral-500 animate-pulse">Loading</p>
      </div>
    </div>
  );
}
