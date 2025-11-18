import { Phone, Mail, Youtube, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <p className="mt-3 text-slate-300">Speak with our counselors for personalized guidance.</p>

            <div className="mt-8 space-y-4">
              <a href="tel:6363702631" className="flex items-center gap-3 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>6363702631</span>
              </a>
              <a href="mailto:ym5685756@gmail.com" className="flex items-center gap-3 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>ym5685756@gmail.com</span>
              </a>
              <a href="https://youtube.com/@med-revive" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700">
                <Youtube className="w-5 h-5 text-blue-400" />
                <span>YouTube: med-revive</span>
              </a>
              <a href="https://instagram.com/med-revive" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700">
                <Instagram className="w-5 h-5 text-blue-400" />
                <span>Instagram: med-revive</span>
              </a>
              <a href="https://wa.me/6363702631" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <span>WhatsApp: Med- Revive</span>
              </a>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl p-6 border border-slate-200 shadow">
            <h3 className="font-semibold text-lg">Quick enquiry</h3>
            <form className="mt-4 grid gap-4">
              <input placeholder="Full name" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input placeholder="Email or phone" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea placeholder="Tell us about your goals" rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="button" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700">Submit</button>
            </form>
            <p className="text-xs text-slate-500 mt-3">We will reach out within 24 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
