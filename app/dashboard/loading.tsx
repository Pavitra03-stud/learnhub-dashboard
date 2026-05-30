export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="h-64 rounded-3xl bg-zinc-900 animate-pulse" />
        <div className="h-64 rounded-3xl bg-zinc-900 animate-pulse" />
        <div className="h-64 rounded-3xl bg-zinc-900 animate-pulse" />
        <div className="h-64 rounded-3xl bg-zinc-900 animate-pulse" />
        <div className="h-64 rounded-3xl bg-zinc-900 animate-pulse" />
      </div>
    </main>
  );
}