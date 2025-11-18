const steps = [
  { n: 1, t: "Consultation", d: "Understand your goals, budget, and preferred countries." },
  { n: 2, t: "Profile Evaluation", d: "Check eligibility and shortlist best-fit universities." },
  { n: 3, t: "Applications", d: "Prepare and submit documents with accuracy." },
  { n: 4, t: "Admissions & Visa", d: "Receive offers and complete visa process." },
  { n: 5, t: "Pre-Departure", d: "Accommodation, travel, and arrival assistance." },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">How it works</h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map(s => (
            <li key={s.n} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-items-center font-bold">{s.n}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{s.t}</h3>
              <p className="text-sm text-slate-600 mt-1">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
