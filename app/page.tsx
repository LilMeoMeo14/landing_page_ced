"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import MobileMenu from "@/components/mobile-menu"

export default function Page() {
  const [scrollY, setScrollY] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Offset for header height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50/30 to-white">
      {/* Header */}
      <header
        className={`
        sticky top-0 z-50 w-full transition-all duration-300 animate-fadeInDown
        ${scrollY > 50 ? "bg-white shadow-md" : "bg-transparent"}
      `}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 sm:gap-2">
              <div
                className="relative flex items-end cursor-pointer hover:opacity-80 transition-opacity duration-300"
                onClick={scrollToTop}
              >
                <img src="/logoVbuilder.png" alt="V.Builders" className="h-7 sm:h-10 w-auto z-20" />
                <span className="font-bold text-[rgba(251,176,59,1)] text-base sm:text-3xl relative z-10 sm:pl-3 pl-1">
                  .Builders
                </span>
              </div>
              <span className="text-slate-300 mx-1 text-lg sm:text-4xl hidden sm:block">|</span>
              <span className="text-blue-600 font-normal leading-7 text-base sm:text-4xl hidden sm:block">Cedra</span>
            </div>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="text-[#00246B] hover:text-[#4BA1FF] font-medium text-base xl:text-lg transition-colors duration-300 hover:scale-105 transform"
              >
                About
              </a>
              <a
                href="#objectives"
                onClick={(e) => handleNavClick(e, "objectives")}
                className="text-[#00246B] hover:text-[#4BA1FF] font-medium text-base xl:text-lg transition-colors duration-300 hover:scale-105 transform"
              >
                Objectives
              </a>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1 z-50 p-2"
              aria-label="Toggle menu"
            >
              <div
                className={`w-5 h-0.5 bg-[#00246B] transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-[#00246B] transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-[#00246B] transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></div>
            </button>
          </div>
        </div>

        <MobileMenu isOpen={mobileMenuOpen} onNavClick={handleNavClick} />
      </header>

      {/* Hero Section with Background - Đã giảm chiều cao trên mobile */}
      <div
        className="relative min-h-[60vh] sm:min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/Cedra%20Scholarship%20Program.png')",
        }}
      >
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12 sm:ml-[50px] sm:-mt-[12px]">
          <div className="my-0 py-0 mx-0 px-2 sm:px-10 space-y-3 sm:space-y-7">
            <div className="animate-slideInLeft" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold mb-2 mt-0 ml-0 sm:ml-4 text-[rgba(75,161,255,1)] mr-0">
                Cedra
              </h1>
              <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black mx-0 sm:mx-4 my-1 sm:my-2.5 text-[rgba(4,34,161,1)] py-1 sm:py-3 leading-tight">
                Scholarship Program
              </h2>
            </div>

            <p
              className="mx-0 sm:mx-4 text-base sm:text-2xl lg:text-3xl text-[rgba(0,106,208,1)] font-normal my-2 sm:my-11 animate-slideInLeft leading-relaxed"
              style={{ animationDelay: "0.4s" }}
            >
              Next Gen Web3 Builders on Cedra
            </p>

            <button
              className="bg-gradient-to-r from-[#010f3f] to-[#0853e8] hover:opacity-90 hover:scale-105 text-white text-sm sm:text-lg lg:text-[26px] font-bold py-3 sm:py-3 rounded-lg sm:rounded-xl mx-0 sm:mx-4 shadow-md transition-all duration-300 px-6 sm:px-20 my-0 animate-slideInLeft w-full sm:w-auto"
              style={{ animationDelay: "0.6s" }}
            >
              Register Now
            </button>

            <div className="pt-2 sm:pt-8 space-y-2 sm:space-y-4 my-0 animate-fadeIn" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-baseline gap-3 px-0 sm:px-4 my-0 text-sm">
                <span className="text-slate-700 font-medium">Prepared for</span>
                <span className="text-lg sm:text-2xl font-bold text-[rgba(0,106,208,1)]">Cedra</span>
              </div>
              <div className="flex items-baseline gap-3 px-0 sm:px-4 my-1 text-sm">
                <span className="text-slate-700 font-medium">Prepared by</span>
                <span className="text-lg sm:text-2xl font-bold text-[rgba(251,176,59,1)]">V.Builders</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About us */}
      <ScrollSection>
        <section
          id="about"
          className="min-h-[60vh] sm:min-h-screen py-8 sm:py-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/about-us.png')] bg-cover bg-center z-0"></div>
          <div className="absolute inset-0 bg-[url('/program&struct.png')] bg-cover bg-center z-0 sm:hidden"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-0 items-start">
              <div>
                <AnimateOnScroll animation="slideInLeft">
                  <h2 className="text-2xl sm:text-[40px] font-bold text-[#4BA1FF] mb-4 sm:mb-6">About us</h2>
                  <div className="space-y-4 sm:space-y-5 text-base sm:text-xl text-slate-800">
                    <p className="leading-relaxed">
                      <span className="text-[#fbb03b] font-semibold">V.Builders</span> is an organization dedicated to
                      empowering the next generation of young innovators in the Web3 space.
                    </p>
                    <p className="leading-relaxed">
                      We combine technology (Tech) and business training to help participants develop startup projects
                      with real-world impact.
                    </p>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="slideInLeft" delay={200}>
                  <div className="mt-6 sm:mt-16">
                    <h2 className="text-2xl sm:text-[40px] font-bold text-[#4BA1FF] mb-4 sm:mb-6">
                      Meet Our Instructors
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg hover:scale-105 transition-transform duration-300">
                        <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
                          Tech Instructor <span>💻</span>
                        </h3>
                        <p className="text-sm sm:text-lg leading-relaxed">
                          Blockchain fundamentals, smart contract training, Cedra integration, and prototype
                          development.
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-[#00246B] to-[#1a1a2e] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg hover:scale-105 transition-transform duration-300">
                        <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
                          Business Instructor <span>📊</span>
                        </h3>
                        <p className="text-sm sm:text-lg leading-relaxed">
                          Startup strategy, marketing, legal frameworks, and business model design.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* Program Objectives Section */}
      <ScrollSection>
        <section
          id="objectives"
          className="min-h-[60vh] sm:min-h-screen py-8 sm:py-20 relative overflow-hidden"
        >
          {/* Background Decorations */}
          <div className="absolute top-10 left-5 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#4BA1FF]/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-5 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#00246B]/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-orange-400/10 rounded-full blur-lg"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <AnimateOnScroll animation="fadeInUp">
              <div className="text-center mb-8 sm:mb-20">
                <h2 className="text-2xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-[#00246B] to-[#4BA1FF] bg-clip-text text-transparent">
                  Program Objectives
                  <span className="block text-xl sm:text-4xl font-semibold text-[#00246B] mt-2">
                    & Structure
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#4BA1FF] to-orange-400 mx-auto rounded-full"></div>
              </div>
            </AnimateOnScroll>

            {/* Grid container với chiều cao bằng nhau */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 auto-rows-fr">

              {/* Mission Card */}
              <AnimateOnScroll animation="slideInLeft" delay={200}>
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-100 hover:border-[#4BA1FF]/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-center">
                  <div className="flex items-start gap-4 mb-4 sm:mb-6">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#4BA1FF] to-[#00246B] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg sm:text-xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#00246B] mb-2">Mission</h3>
                      <div className="w-10 h-1 bg-orange-400 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                    Empower the next generation of young builders with creativity, technical expertise, and
                    entrepreneurial strategies to turn Web3 ideas into reality, leveraging the Berachain ecosystem.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Duration & Format Card */}
              <AnimateOnScroll animation="slideInRight" delay={200}>
                <div className="group bg-gradient-to-br from-[#00246B] to-[#1e3a8a] rounded-2xl p-6 sm:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                      <span className="text-lg sm:text-xl">⏱️</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">Duration & Format</h3>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3 p-3 sm:p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-orange-400 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">●</span>
                      </div>
                      <div className="text-sm sm:text-base">
                        <span className="font-semibold text-orange-300">17 sessions:</span>
                        <span className="ml-2">8 Tech, 8 Business, 1 Demo Day</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 sm:p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-[#4BA1FF] rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">●</span>
                      </div>
                      <div className="text-sm sm:text-base">
                        <span className="font-semibold text-[#4BA1FF]">Each session:</span>
                        <span className="ml-2">3h (Online via Google Meet)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Vision Card */}
              <AnimateOnScroll animation="slideInLeft" delay={300}>
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-100 hover:border-[#4BA1FF]/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-center">
                  <div className="flex items-start gap-4 mb-4 sm:mb-6">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg sm:text-xl">👁️</span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#00246B] mb-2">Vision</h3>
                      <div className="w-10 h-1 bg-[#4BA1FF] rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                    Build a bridge between emerging builders and leading blockchain platforms, contributing to
                    scalable startups in the global ecosystem.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Target Audience Card */}
              <AnimateOnScroll animation="slideInRight" delay={300}>
                <div className="group bg-gradient-to-br from-[#4BA1FF] to-[#3b82f6] rounded-2xl p-6 sm:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                      <span className="text-lg sm:text-xl">👥</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">Target Audience</h3>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3 p-3 sm:p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-orange-400 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">●</span>
                      </div>
                      <span className="text-sm sm:text-base">Developers & young talents</span>
                    </div>

                    <div className="flex items-start gap-3 p-3 sm:p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-[#4BA1FF] text-xs">●</span>
                      </div>
                      <div className="text-sm sm:text-base">
                        <span className="font-semibold">Cohort size:</span>
                        <span className="ml-2">20-30 participants</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* Footer */}
      <footer className="bg-slate-900/90 backdrop-blur-sm text-white py-6 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <AnimateOnScroll animation="fadeIn">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                  <img src="/logoVbuilder.png" alt="logo" className="h-5 sm:h-8 w-auto" />
                  <span className="font-bold text-sm sm:text-lg">V.Builders</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-base">
                  Empowering the next generation of Web3 innovators
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeIn" delay={200}>
              <div>
                <h3 className="font-semibold text-base sm:text-xl mb-4 text-white">Contact Us</h3>

                <div className="flex flex-wrap gap-5 sm:gap-8 items-center">
                  {/* Facebook Group */}
                  <a
                    href="https://www.facebook.com/groups/2557951364555274"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-slate-300 hover:text-white transition-all"
                  >
                    <img
                      src="/icons/facebook.png"
                      alt="Facebook Group"
                      className="w-8 h-8 sm:w-10 sm:h-10 mb-1 hover:scale-110 transition-transform"
                    />
                    <span className="text-xs sm:text-sm text-center">Facebook<br />Group</span>
                  </a>

                  {/* Twitter */}
                  <a
                    href="https://x.com/intent/user?screen_name=v_builders_x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-slate-300 hover:text-white transition-all"
                  >
                    <img
                      src="/icons/twitter.png"
                      alt="Twitter"
                      className="w-8 h-8 sm:w-10 sm:h-10 mb-1 hover:scale-110 transition-transform"
                    />
                    <span className="text-xs sm:text-sm">Twitter</span>
                  </a>

                  {/* Vbuilders Fanpage */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61578314760398&sk=about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-slate-300 hover:text-white transition-all"
                  >
                    <img
                      src="/icons/facebook.png"
                      alt="Fan Page"
                      className="w-8 h-8 sm:w-10 sm:h-10 mb-1 hover:scale-110 transition-transform"
                    />
                    <span className="text-xs sm:text-sm">Vbuilders</span>
                  </a>

                  {/* Tiktok */}
                  <a
                    href="https://www.tiktok.com/@vbuilder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-slate-300 hover:text-white transition-all"
                  >
                    <img
                      src="/icons/tiktok.png"
                      alt="Tiktok"
                      className="w-8 h-8 sm:w-10 sm:h-10 mb-1 hover:scale-110 transition-transform"
                    />
                    <span className="text-xs sm:text-sm">Tiktok</span>
                  </a>

                  {/* Youtube */}
                  <a
                    href="https://www.youtube.com/@vbuilders_offical?feature=shared"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-slate-300 hover:text-white transition-all"
                  >
                    <img
                      src="/icons/youtube.png"
                      alt="Youtube"
                      className="w-8 h-8 sm:w-10 sm:h-10 mb-1 hover:scale-110 transition-transform"
                    />
                    <span className="text-xs sm:text-sm">Youtube</span>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="border-t border-slate-700 mt-4 sm:mt-8 pt-4 sm:pt-8 text-center text-slate-400">
            <p className="text-xs sm:text-base">
              © {new Date().getFullYear()} V.Builders. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50
          bg-[#4BA1FF] text-white
          w-10 h-10 sm:w-12 sm:h-12 rounded-full
          flex items-center justify-center
          shadow-lg hover:bg-[#0066FF]
          transition-all duration-300
          ${showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
        `}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </main>
  )
}

// Scroll Animation Components
function ScrollSection({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

function AnimateOnScroll({
  children,
  animation = "fadeInUp",
  delay = 0,
}: {
  children: React.ReactNode
  animation?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const animationClass = isVisible ? animation : "opacity-0"
  const delayStyle = delay ? { animationDelay: `${delay}ms` } : {}

  return (
    <div ref={ref} className={animationClass} style={delayStyle}>
      {children}
    </div>
  )
}