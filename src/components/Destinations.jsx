const countries = [
  { name: "Russia", flag: "🇷🇺", note: "Affordable MBBS with English-medium programs" },
  { name: "Georgia", flag: "🇬🇪", note: "Recognized universities, modern infrastructure" },
  { name: "Kazakhstan", flag: "🇰🇿", note: "Budget-friendly with good clinical exposure" },
  { name: "Uzbekistan", flag: "🇺🇿", note: "Growing popularity among Indian students" },
  { name: "Philippines", flag: "🇵🇭", note: "US-style MD curriculum" },
  { name: "Kyrgyzstan", flag: "🇰🇬", note: "Compact classes, Indian-friendly" },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">Top Destinations</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((c) => (
            <div key={c.name} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition">
              <div className="text-4xl">{c.flag}</div>
              <h3 className="mt-2 font-semibold text-slate-900">{c.name}</h3>
              <p className="text-sm text-slate-600 mt-1">{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
