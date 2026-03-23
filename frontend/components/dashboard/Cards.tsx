type CardProps = {
  title: string;
  value: string;
  subtitle: string;
};

export default function Cards({ title, value, subtitle }: CardProps) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-zinc-500">{title}</p>
      <h3 className="mt-3 text-3xl font-bold text-black">{value}</h3>
      <p className="mt-2 text-sm text-zinc-400">{subtitle}</p>
    </div>
  );
}