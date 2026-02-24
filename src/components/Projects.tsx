"use client";

import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const projects = [
    {
      title: "Online Marketplace for Tech Products",
      description: "A full-featured e-commerce platform for the Cambodian tech retail market with KHQR payments via Bakong, real-time Telegram notifications, secure JWT authentication, and a robust admin dashboard.",
      technologies: ["React.js", "Node.js", "Express.js", "TypeScript", "MySQL", "Tailwind CSS"],
      role: "Frontend Development & UML Design",
      image: "🛒",
      gradient: "from-blue-500 to-purple-600",
      github: "https://github.com/CPF-CADT/computer-shop.git",
      live: "https://computer-shop-henna.vercel.app/"
    },
    {
      title: "School Learning Platform",
      description: "Created an educational platform with clean, accessible interfaces for students and teachers, focusing on usability and engagement.",
      technologies: ["Next.js", "TypeScript", "Firebase"],
      role: "Front-end development with mobile-first responsive design",
      image: "📚",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "E-Commerce Desktop Application",
      description: "A Java-based e-commerce application with graphical user interface for managing products, orders, and customer interactions in a desktop environment.",
      technologies: ["Java", "Swing/JavaFX", "MySQL"],
      role: "GUI Development & Database Integration",
      image: "🖥️",
      gradient: "from-indigo-500 to-blue-600",
      github: "https://github.com/CPF-CADT/E-Commerce.git"
    },
    {
      title: "EcoMind Game",
      description: "Educational simulation game teaching AI and environmental care to kids. Features no-code AI training gameplay, environmental missions (pollution, deforestation), voice instructions, and Khmer-English language toggle with energy-based strategy mechanics.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      role: "Game Logic Designer & Frontend Developer",
      image: "🎮",
      gradient: "from-green-500 to-emerald-600",
      github: "https://github.com/CPF-CADT/ecomind.git",
      live: "https://ecomind-d9tk.vercel.app/"
    },
    {
      title: "Restaurant Booking App",
      description: "Designed a mobile-friendly restaurant reservation system with smooth animations and an elegant, minimalist interface.",
      technologies: ["Flutter", "Figma", "Firebase"],
      role: "UI/UX design, prototyping, and mobile app development",
      image: "🍽️",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Portfolio Website",
      description: "Built a personal portfolio showcasing design work with attention to typography, spacing, and visual hierarchy.",
      technologies: ["Next.js", "Tailwind CSS"],
      role: "Complete design and development with performance optimization",
      image: "💼",
      gradient: "from-pink-500 to-purple-600",
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-gray-900 relative overflow-hidden min-h-screen">
      {/* Background Decorations */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Featured Projects
        </h2>
        <div className={`w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 rounded-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        <p className={`text-center text-gray-300 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Showcase of my best work in web design and development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Image/Icon Area */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300"></div>
                <span className={`text-8xl transform transition-all duration-500 ${hoveredIndex === index ? 'scale-125 rotate-12' : 'scale-100'}`}>
                  {project.image}
                </span>
                
                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm font-semibold">View Project Details</div>
                  </div>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700 shadow-lg">
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-400 mb-2 flex items-center">
                    <span className="mr-2">🔧</span> Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/10 text-purple-300 border border-white/20 px-3 py-1 rounded-full text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Role */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm font-semibold text-gray-400 mb-2 flex items-center">
                    <span className="mr-2">👨‍💻</span> My Role:
                  </p>
                  <p className="text-gray-300 text-sm">{project.role}</p>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-3">
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/50 transform hover:scale-[1.02] text-center"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/10 hover:bg-white/20 border-2 border-purple-400 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] text-center"
                    >
                      GitHub
                    </a>
                  )}
                  {!project.live && !project.github && (
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/50 transform hover:scale-[1.02]">
                      Learn More
                    </button>
                  )}
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
