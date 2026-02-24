"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Decoration */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Profile Image */}
        <div className={`flex justify-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse-slow"></div>
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl shadow-purple-500/50">
              <Image
                src="/images/profile.png"
                alt="Choun Rathanak"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>

        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 text-white transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          About Me
        </h2>
        <div className={`w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-16 rounded-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

        <div className="max-w-5xl mx-auto">
          {/* Intro Text */}
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm an aspiring frontend developer passionate about creating clean, responsive, and visually 
              appealing websites. I enjoy turning ideas into{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">functional, interactive experiences</span> using HTML,
              CSS, JavaScript, React, and Tailwind CSS.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className={`bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 text-center hover:border-purple-500/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} delay-300`}>
              <h3 className="text-xl font-bold mb-4 text-white mt-4">Clean & Semantic Code</h3>
              <p className="text-gray-300 leading-relaxed">
                Writing well-structured, semantic HTML and React components for maintainable code-bases.
              </p>
            </div>

            {/* Card 2 */}
            <div className={`bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 text-center hover:border-pink-500/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} delay-400`}>
              <h3 className="text-xl font-bold mb-4 text-white mt-4">Modern UI Styling</h3>
              <p className="text-gray-300 leading-relaxed">
                Crafting visually appealing interfaces using Tailwind CSS and responsive design principles.
              </p>
            </div>

            {/* Card 3 */}
            <div className={`bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 text-center hover:border-purple-500/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} delay-500`}>
              <h3 className="text-xl font-bold mb-4 text-white mt-4">Interactive Components</h3>
              <p className="text-gray-300 leading-relaxed">
                Building dynamic, user-friendly components with React and UI libraries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
