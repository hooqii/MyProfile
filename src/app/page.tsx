"use client";

import { useState, useEffect } from "react"; // <-- Tambahkan import ini
import CircularText from "./component/CircularText/CircularText";
import localFont from "next/font/local";
import DecryptedText from "./component/DecryptedText/DecryptedText";
import TargetCursor from "./component/TargetCursor/TargetCursor";
import Squares from "./component/Squares/Squares";
import CurvedLoop from "./component/CurvedLoop/CurvedLoop";
import ScrollVelocity from "./component/ScrollVelocity/ScrollVelocity";
import Hyperspeed from "./component/Hyperspeed/Hyperspeed";
import LoadingScreen from "./component/LoadingScreen/loadingscreen";

const creatoDisplay = localFont({
  src: "../font/CreatoDisplay-Regular.otf",
  display: "swap", // opsional, tapi baik untuk UX
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 50); // delay sedikit biar DOM sudah siap
    }
  }, [isLoading]);

  return (
    <div className={`${creatoDisplay.className} text-black min-h-screen`}>
      {/* Tampilkan LoadingScreen jika isLoading true */}
      <LoadingScreen onComplete={handleLoadingComplete} isLoading={isLoading} />

      <div
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        {/* === SECTION 1 === */}
        <section id="home" className="h-screen px-8 relative z-10 ">
          <div className="absolute inset-0 -z-10">
            <Squares
              speed={0.5}
              squareSize={40}
              direction="diagonal"
              borderColor="#DDDAD0"
              hoverFillColor="#1C352D"
            />
          </div>
          {/* Main Content */}
          <div className="px-8 pt-8 z-1">
            {/* Top Header */}
            <header className="flex justify-between items-center w-full mb-16">
              {/* Left - Branding */}
              <a
                href="/"
                className="cursor-target text-sm sm:text-xl font-medium"
              >
                ©HooQii
              </a>
              {/* Right - Navigation */}
              <nav className="flex gap-8 text-sm sm:text-xl font-medium">
                <a
                  href="#home"
                  className="cursor-target hover:text-orange-600 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="cursor-target hover:text-orange-600 transition-colors"
                >
                  About Me
                </a>
                <a
                  href="#work"
                  className="cursor-target hover:text-orange-600 transition-colors"
                >
                  Work
                </a>
                <a
                  href="#contact"
                  className="cursor-target hover:text-orange-600 transition-colors"
                >
                  <DecryptedText
                    text="Contact"
                    animateOn="view"
                    revealDirection="center"
                  />
                </a>
              </nav>
            </header>
            {/* Hero / Introduction Section */}
            <div className="mt-32 text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-5xl font-medium mb-4">
                Hello, my name is{" "}
                <DecryptedText
                  className="font-extrabold text-orange-600"
                  text="Defri Salwan"
                  speed={75}
                  maxIterations={40}
                  animateOn="hover"
                  revealDirection="center"
                  parentClassName="cursor-pointer"
                />
                <br />
                <span className="text-xl sm:text-3xl">
                  a.k.a{" "}
                  <DecryptedText
                    className="cursor-target text-emerald-950 hover:text-orange-600 font-semibold"
                    text="HooQii"
                    speed={75}
                    maxIterations={80}
                    animateOn="view"
                  />
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed">
                I'm a creative software developer with a passion for crafting
                interactive UI, digital experiences, and efficient components.
                Welcome to my portfolio.
              </p>
              <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-base font-serif sm:text-lg text-gray-700 leading-relaxed">
                [Scroll To Explore]
              </p>
            </div>
          </div>
        </section>
        <ScrollVelocity
          texts={[" ✦ TECH ✦ WEB3 ✦ DESIGN", "SCROLL DOWN"]}
          className="custom-scroll-text text-2xla font-medium"
        />
        {/* === SECTION 2 === */}
        <section
          id="about"
          className="h-screen flex items-center justify-center px-8 relative overflow-hidden"
        >
          <div className="absolute bg-black items-center justify-center inset-0 -z-10">
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
          </div>
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl text-white font-bold mb-4">About Me</h2>
            <p className="text-lg text-white leading-relaxed">
              I'am a junior developer, has a keen eye for design, and capable of
              producing engaging user experiences. Mobile Developer | UI/UX
              Designer
            </p>
          </div>
        </section>
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
        {/* Circular Text - fixed position */}
        <main className="fixed bottom-8 left-6 z-50">
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
