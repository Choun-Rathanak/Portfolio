"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const workImages = [
    { src: "/images/poster.jpg", alt: "Ozempic Poster Design" },
    { src: "/images/poster2.jpg", alt: "Featured Poster Design" },
    { src: "/images/packaging.jpg", alt: "Packaging Design" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Auto-switch carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % workImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [workImages.length]);

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
              I&apos;m an aspiring frontend developer passionate about creating clean, responsive, and visually 
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

          {/* Work Experience Section */}
          <div className={`mt-20 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold text-center mb-4 text-white">Work Experience</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Featured Work Image Carousel */}
                  <div className="relative rounded-xl overflow-hidden border-2 border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                    <div className="relative aspect-square">
                      {workImages.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentImageIndex ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Carousel Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {workImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? "bg-purple-400 w-6"
                              : "bg-white/50 hover:bg-white/75"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Work Details */}
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Graphic Design Clinic Internship</h4>
                    <p className="text-lg text-purple-400 font-semibold mb-1">CTK CABINET</p>
                    <p className="text-sm text-gray-400 mb-4">Sep 2025 - Present</p>
                    
                    <p className="text-gray-300 mb-6">
                      Supported consistent social media posting through team collaboration, created engaging visual content using Photoshop, and produced promotional videos using After Effects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer Experience Section */}
          <div className={`mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold text-center mb-4 text-white">Volunteer Experience</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-white mb-2">Logistics Team Member</h4>
                  <p className="text-lg text-purple-400 font-semibold mb-1">Winning of University Life - Panhasastra University (PUC)</p>
                  <p className="text-sm text-gray-400 mb-4">2025</p>
                  
                  <p className="text-gray-300 mb-6">
                    Volunteered as a logistics team member, where I controlled food delivery and catering operations, welcomed and assisted guests, and maintained flexibility to support various event activities to ensure smooth event execution.
                  </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-xl overflow-hidden border-2 border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                    <Image
                      src="/images/volunteer1.jpg"
                      alt="Welcoming guests at PUC event"
                      width={600}
                      height={400}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden border-2 border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                    <Image
                      src="/images/volunteer2.jpg"
                      alt="Food delivery management"
                      width={600}
                      height={400}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden border-2 border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                    <Image
                      src="/images/volunteer3.jpg"
                      alt="Event logistics coordination"
                      width={600}
                      height={400}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden border-2 border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                    <Image
                      src="/images/volunteer4.jpg"
                      alt="Event venue setup"
                      width={600}
                      height={400}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
