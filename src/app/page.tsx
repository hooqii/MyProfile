"use client";

import Image from "next/image";
import Lenis from "lenis";
import { useState, useEffect, useRef } from "react";
import CircularText from "./components/CircularText/CircularText";
import localFont from "next/font/local";
import DecryptedText from "./components/DecryptedText/DecryptedText";
import TargetCursor from "./components/TargetCursor/TargetCursor";
import CurvedLoop from "./components/CurvedLoop/CurvedLoop";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import Hyperspeed from "./components/Hyperspeed/Hyperspeed";
import LoadingScreen from "./components/LoadingScreen/loadingscreen";
import GradualBlur from "./components/GradualBlur/GradualBlur";
import { motion, AnimatePresence } from "framer-motion";
import ShinyText from "./components/ShinyText/ShinyText";

const creatoDisplay = localFont({
  src: "../font/CreatoDisplay-Regular.otf",
  display: "swap",
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleLoadingComplete = () => setIsLoading(false);

  // Smooth scroll setup
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const isReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch || isReducedMotion) return;

    const lenis = new Lenis({
      wrapper: el as HTMLElement,
      content: el.firstElementChild as HTMLElement,
      duration: 1.8,
      smoothWheel: true,
      touchMultiplier: 1.2,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Resize fix after loading
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        globalThis.dispatchEvent(new Event("resize"));
      }, 50);
    }
  }, [isLoading]);

  // Optional: trigger resize when menu toggles
  useEffect(() => {
    globalThis.dispatchEvent(new Event("resize"));
  }, [isMenuOpen]);

  return (
    <div className={`${creatoDisplay.className} text-black min-h-screen`}>
      {/* Loading screen */}
      <LoadingScreen onComplete={handleLoadingComplete} isLoading={isLoading} />

      <div
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />

        {/* === SECTION 1 (HOME) === */}
        <section
          id="home"
          className="h-screen px-8 relative z-10 overflow-hidden"
        >
          {/* Background Hyperspeed */}
          <div className="absolute inset-0 z-0 bg-black flex items-center justify-center overflow-hidden">
            <Hyperspeed
              effectOptions={{
                onSpeedUp: () => {},
                onSlowDown: () => {},
                distortion: "turbulentDistortion",
                length: 400,
                roadWidth: 10,
                islandWidth: 2,
                lanesPerRoad: 4,
                fov: 90,
                fovSpeedUp: 150,
                speedUp: 2,
                carLightsFade: 0.4,
                totalSideLightSticks: 20,
                lightPairsPerRoadWay: 40,
                shoulderLinesWidthPercentage: 0.05,
                brokenLinesWidthPercentage: 0.1,
                brokenLinesLengthPercentage: 0.5,
                lightStickWidth: [0.12, 0.5],
                lightStickHeight: [1.3, 1.7],
                movingAwaySpeed: [60, 80],
                movingCloserSpeed: [-120, -160],
                carLightsLength: [400 * 0.03, 400 * 0.2],
                carLightsRadius: [0.05, 0.14],
                carWidthPercentage: [0.3, 0.5],
                carShiftX: [-0.8, 0.8],
                carFloorSeparation: [0, 5],
                isHyper: true,
                colors: {
                  roadColor: 0x080808,
                  islandColor: 0x0a0a0a,
                  background: 0x000000,
                  shoulderLines: 0xffffff,
                  brokenLines: 0xffffff,
                  leftCars: [0xff7a30, 0xff7a30, 0xff7a30],
                  rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                  sticks: 0x03b3c3,
                },
              }}
            />
            <GradualBlur
              target="parent"
              position="bottom"
              height="6rem"
              strength={2}
              divCount={5}
              curve="bezier"
              exponential={true}
              opacity={1}
            />
          </div>

          {/* Foreground content */}
          <div className="px-8 pt-8 relative z-10">
            {/* HEADER / NAV */}
            <header className="flex justify-between items-center w-full mb-16 relative z-[1000]">
              <a
                href="/"
                className="cursor-target hover:text-white text-lg font-medium text-[#E9963A]"
              >
                ©HooQii
              </a>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white focus:outline-none z-[1200]"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>

              {/* Mobile Menu */}
              <AnimatePresence>
                {isMenuOpen && (
                  <>
                    <motion.div
                      key="overlay"
                      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1300]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setIsMenuOpen(false)}
                    />
                    <motion.nav
                      key="nav"
                      initial={{ opacity: 0, x: "100%" }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 140,
                        damping: 18,
                      }}
                      className="fixed top-16 right-0 h-full w-3/4 sm:w-1/2 flex flex-col gap-6 text-lg font-medium text-white bg-white/5 backdrop-blur-xl p-8 shadow-2xl border-l border-white/10 z-[1400]"
                    >
                      <a
                        href="#home"
                        onClick={() => setIsMenuOpen(false)}
                        className="cursor-target hover:text-[#E9963A] transition-colors"
                      >
                        HOME
                      </a>
                      <a
                        href="#about"
                        onClick={() => setIsMenuOpen(false)}
                        className="cursor-target hover:text-[#E9963A] transition-colors"
                      >
                        ABOUT ME
                      </a>
                      <a
                        href="#work"
                        onClick={() => setIsMenuOpen(false)}
                        className="cursor-target hover:text-[#E9963A] transition-colors"
                      >
                        WORK
                      </a>
                      <a
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="cursor-target hover:text-[#E9963A] transition-colors"
                      >
                        <DecryptedText
                          text="CONTACT"
                          animateOn="hover"
                          revealDirection="center"
                        />
                      </a>
                    </motion.nav>
                  </>
                )}
              </AnimatePresence>

              {/* Desktop Nav */}
              <nav className="hidden md:flex gap-8 text-sm sm:text-lg font-medium text-white">
                <a
                  href="#home"
                  className="cursor-target hover:text-[#E9963A] transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="cursor-target hover:text-[#E9963A] transition-colors"
                >
                  About Me
                </a>
                <a
                  href="#work"
                  className="cursor-target hover:text-[#E9963A] transition-colors"
                >
                  Work
                </a>
                <a
                  href="#contact"
                  className="cursor-target hover:text-[#E9963A] transition-colors"
                >
                  Contact
                </a>
              </nav>
            </header>

            {/* HERO CONTENT */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-12 md:mt-24 gap-8 md:gap-16">
              <div className="text-center sm:text-center md:text-left max-w-xl">
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-medium mb-4 text-[#E9963A]">
                  Hello, my name is{" "}
                  <span className="cursor-target">
                    <DecryptedText
                      className="cursor-target font-extrabold text-white"
                      text="Defri Salwan"
                      speed={75}
                      maxIterations={40}
                      animateOn="hover"
                      revealDirection="center"
                      parentClassName="cursor-pointer"
                    />
                  </span>
                  <br />
                  <span className="text-xl sm:text-3xl lg:text-4xl">
                    a.k.a{" "}
                    <DecryptedText
                      className="cursor-target text-white hover:text-[#E9963A] font-semibold"
                      text="HooQii"
                      speed={75}
                      maxIterations={80}
                      animateOn="view"
                    />
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-white mt-4 leading-relaxed lg:text-2xl">
                  Deeply interested in{" "}
                  <span className="font-semibold">
                    Web3, Blockchain, Tech, & UI Design
                  </span>
                  . Passionate about new challenges and full-stack learning.
                </p>
              </div>

              {/* PROFILE IMAGE */}
              <div className="bg-black/60 relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[30rem] lg:h-[30rem] rounded-full overflow-hidden border-4 border-[#E9963A] flex-shrink-0">
                <Image
                  src="/foto-profile.png"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <ShinyText
            text="[Scroll To Explore]"
            disabled={false}
            speed={3}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-base sm:text-lg text-gray-100"
          />
        </section>

        {/* Scroll Text */}
        <ScrollVelocity
          texts={[" ✦ TECH ✦ WEB3 ✦ DESIGN", "SCROLL DOWN"]}
          className="custom-scroll-text text-2xla font-medium text-white"
          parallaxClassName="bg-black"
        />

        {/* === SECTION 2 === */}
        <section
          id="about"
          className="h-screen flex items-center justify-center px-8 bg-black"
        >
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl text-white font-bold mb-4">About Me</h2>
            <p className="text-lg text-white leading-relaxed">
              I'm a junior developer with a keen eye for design, capable of
              producing engaging user experiences. Mobile Developer | UI/UX
              Designer
            </p>
          </div>
        </section>

        {/* === SECTION 3 === */}
        <section
          id="work"
          className="h-screen flex items-center justify-center px-8 bg-white"
        >
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl text-black font-bold mb-4">My Work</h2>
          </div>
        </section>

        {/* Curved Text Footer */}
        <div className="bottom-0">
          <CurvedLoop
            marqueeText="Tech ✦ Web3 ✦ Design ✦"
            speed={3}
            curveAmount={0}
            direction="right"
            interactive={true}
            className="custom-text-style text-black"
          />
        </div>

        {/* Floating Circular Text */}
        <main className="fixed bottom-8 right-6 z-50">
          <CircularText
            text="DESIGNER✦SOFTWARE✦DEVELOPER✦"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
        </main>
      </div>
    </div>
  );
}
