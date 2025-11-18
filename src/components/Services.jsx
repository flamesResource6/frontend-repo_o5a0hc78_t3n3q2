import { ClipboardList, Plane, ShieldCheck, FileCheck2 } from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Admissions Counseling",
    desc: "University shortlisting, eligibility checks, application strategy and timelines."
  },
  {
    icon: FileCheck2,
    title: "Documentation & Applications",
    desc: "SOPs, LORs, attestations, and form submissions handled end-to-end."
  },
  {
    icon: ShieldCheck,
    title: "Visa Guidance",
    desc: "Mock interviews, financial documentation, and appointment support."
  },
  {
    icon: Plane,
    title: "Pre-Departure & Arrival",
    desc: "Flights, accommodation advice, airport pickup and onboarding."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">What we do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition bg-white">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white grid place-items-center shadow">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
