import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900 min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Decorative circles - matching the website style */}
      <div className="pointer-events-none absolute top-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="pointer-events-none absolute bottom-20 left-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I&apos;m{" "}
              <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Choun Rathanak</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300">
              Junior <span className="text-pink-400 font-semibold">Software Engineer</span>
            </p>
            <p className="text-lg text-gray-400 italic">Your vision, my code.</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium text-lg px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50"
              >
                View my work
              </Link>
              <a
                href="/images/Choun%20Rathanak%20CV%20Resume%20(3).pdf"
                download
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-purple-400 text-white font-medium text-lg px-6 py-3 rounded-lg transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/50 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-in flex items-center justify-center" style={{ animationDelay: '0.2s' }}>
            <div className="relative max-w-xl w-full mx-auto">
              <div className="relative aspect-[3/4] translate-y-16 flex items-center justify-center">
                <Image
                  src="/images/photo_2026-11-19_22-55-26-Photoroom.png"
                  alt="Choun Rathanak"
                  fill
                  className="object-contain -translate-y-[30%] scale-[1.62] transition-transform duration-500 hover:scale-[1.65]"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-50 blur-2xl animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full opacity-50 blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
