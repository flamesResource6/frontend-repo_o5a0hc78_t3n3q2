import { GraduationCap, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white grid place-items-center shadow-lg">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="leading-tight">
              <p className="font-bold text-slate-900">Med Revive</p>
              <p className="text-xs text-slate-500">Abroad Education Consultancy</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#destinations" className="hover:text-blue-600 transition">Destinations</a>
            <a href="#process" className="hover:text-blue-600 transition">Process</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow">Contact</a>
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2 fade-in">
            <div className="flex flex-col gap-2 text-slate-700">
              <a onClick={() => setOpen(false)} href="#services" className="px-3 py-2 rounded-lg hover:bg-slate-100">Services</a>
              <a onClick={() => setOpen(false)} href="#destinations" className="px-3 py-2 rounded-lg hover:bg-slate-100">Destinations</a>
              <a onClick={() => setOpen(false)} href="#process" className="px-3 py-2 rounded-lg hover:bg-slate-100">Process</a>
              <a onClick={() => setOpen(false)} href="#contact" className="px-3 py-2 rounded-lg bg-blue-600 text-white">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
