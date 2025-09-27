
export default function FeatureCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card p-6">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-slate-600">{children}</p>
    </div>
  );
}
