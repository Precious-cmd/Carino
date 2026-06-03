export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 text-white">
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-slate-900 shadow-glow">
          <div className="h-12 w-12 animate-pulse rounded-full bg-primary" />
        </div>
        <div className="space-y-2 text-center">
          <p className="text-lg font-semibold">Carino Studio</p>
          <p className="text-sm text-slate-400">Building premium motion experiences...</p>
        </div>
      </div>
    </div>
  );
}
