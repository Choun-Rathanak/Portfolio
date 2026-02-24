import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900 min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Decorative circles - matching the website style */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I&apos;m{" "}
              <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Choun Rathanak</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300">
              Aspiring <span className="text-pink-400 font-semibold">Frontend Developer</span>
            </p>
            <p className="text-lg text-gray-400 italic">Your vision, my code.</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium text-lg px-6 py-3 rounded-lg transition-all duration-300 group hover:shadow-2xl hover:shadow-pink-500/50"
              >
                View my work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="/Choun-Rathanak-CV.pdf"
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
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative max-w-md mx-auto">
              {/* Main image container with gradient background */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/30 transform hover:scale-[1.02] transition-all duration-500">
                {/* Gradient background behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700"></div>
                
                {/* Image */}
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/profile.png"
                    alt="Choun Rathanak"
                    fill
                    className="object-cover object-center transition-transform duration-500"
                    priority
                  />
                </div>
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
