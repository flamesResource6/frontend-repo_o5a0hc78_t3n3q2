export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 opacity-40 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
      <div className="absolute -top-24 -right-24 w-[40rem] h-[40rem] bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-[40rem] h-[40rem] bg-cyan-200/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Study Medicine Abroad with Confidence
          </h1>
          <p className="text-lg text-slate-600">
            Med Revive guides aspiring doctors to top global universities with end-to-end support — from admissions to visa and arrival.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700">
              Talk to an Advisor
            </a>
            <a href="#services" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-medium border border-slate-200 hover:border-slate-300 shadow-sm">
              Explore Services
            </a>
          </div>
          <div className="text-sm text-slate-500">
            Contact: 6363702631 • Email: ym5685756@gmail.com
          </div>
        </div>

        <div className="relative">
          <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop" alt="Medical students" className="rounded-2xl shadow-2xl border border-slate-200" />
          <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-xl p-4 shadow-lg w-64">
            <p className="text-sm font-semibold text-slate-900">Why Med Revive?</p>
            <ul className="mt-2 text-sm text-slate-600 space-y-1 list-disc list-inside">
              <li>Trusted university partners</li>
              <li>Transparent guidance</li>
              <li>Visa & post-arrival support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
