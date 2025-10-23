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
import LoadingScreen from "./components/LoadingScreen/loadingscreen";
import GradualBlur from "./components/GradualBlur/GradualBlur";
import ShinyText from "./components/ShinyText/ShinyText";
import StaggeredMenu from "./components/StaggeredMenu/StaggeredMenu";
import Plasma from "./components/Plasma/Plasma";

const creatoDisplay = localFont({
  src: "../font/CreatoDisplay-Regular.otf",
  display: "swap",
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleLoadingComplete = () => setIsLoading(false);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "#about" },
    { label: "Work", ariaLabel: "View our services", link: "#work" },
    { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com/hooqii" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        globalThis.dispatchEvent(new Event("resize"));
      }, 50);
    }
  }, [isLoading]);

  useEffect(() => {
    globalThis.dispatchEvent(new Event("resize"));
  }, [isMenuOpen]);

  return (
    <div className={`${creatoDisplay.className} text-black min-h-screen`}>
      <LoadingScreen onComplete={handleLoadingComplete} isLoading={isLoading} />

      <div
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        <div className="fixed top-0 w-full h-full z-50">
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#ff7a30"
            openMenuButtonColor="#000"
            changeMenuColorOnOpen={true}
            colors={["#03b3c3", "#ff7a30"]}
            logoUrl="/favicon.svg"
            accentColor="#ff6b6b"
            onMenuOpen={() => console.log("Menu opened")}
            onMenuClose={() => console.log("Menu closed")}
          />
        </div>

        <section
          id="home"
          className="h-screen px-8 relative z-10 overflow-hidden"
        >
          <div className="absolute inset-0 z-0 bg-black flex items-center justify-center overflow-hidden">
            <Plasma
              color="#ff6b35"
              speed={0.6}
              direction="forward"
              scale={1}
              opacity={1}
              mouseInteractive={true}
            />
          </div>
          <div className="px-8 pt-8 relative z-10">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-12 md:mt-24 gap-8 md:gap-16">
              <div className="text-center sm:text-center md:text-left max-w-2xl">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light mb-4 text-white">
                  Hello, my name is{" "}
                  <span className="cursor-target">
                    <DecryptedText
                      className="text-[#ff7a30] cursor-target font-extrabold"
                      text="DEFRI SALWAN"
                      speed={75}
                      maxIterations={40}
                      animateOn="hover"
                      revealDirection="center"
                      parentClassName="cursor-pointer"
                    />
                  </span>
                  <span className="text-xs sm:text-xl lg:text-3xl">
                    a.k.a
                    <DecryptedText
                      className="cursor-target text-white hover:text-[#ff7a30] font-bold"
                      text="HooQii"
                      speed={75}
                      maxIterations={80}
                      animateOn="view"
                    />
                  </span>
                </h1>
                <p className="sm:text-lg text-white mt-4 leading-relaxed lg:text-2xl">
                  Who is deeply interested in{" "}
                  <span className="font-semibold">
                    Web3, Blockchain, Tech, & UI Design
                  </span>
                  . Passionate about new challenges and full-stack learning.
                </p>
              </div>
              <div className="bg-black/60 relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[30rem] lg:h-[30rem] rounded-full overflow-hidden flex-shrink-0">
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
          <GradualBlur
            target="parent"
            position="bottom"
            height="6rem"
            strength={2}
            divCount={5}
            curve="bezier"
            exponential={true}
            opacity={1}
            className="z-20"
          />

          {/* ShinyText setelah GradualBlur dengan z-index lebih tinggi */}
          <ShinyText
            text="[Scroll To Explore]"
            disabled={false}
            speed={3}
            className=" z-[9999] absolute bottom-16 left-1/2 transform -translate-x-1/2 text-base sm:text-lg text-gray-100"
          />
        </section>

        <ScrollVelocity
          texts={[" ✦ TECH ✦ WEB3 ✦ DESIGN", "SCROLL DOWN"]}
          className="custom-scroll-text text-2xla font-medium text-white"
          parallaxClassName="bg-black"
        />

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
        <section
          id="work"
          className="h-screen flex items-center justify-center px-8 bg-white"
        >
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl text-black font-bold mb-4">My Work</h2>
          </div>
        </section>
        <section id="contact">
          <div className="h-screen flex items-center justify-center px-8 bg-gray-100">
            <div className="text-center max-w-2xl">
              <h2 className="text-4xl text-black font-bold mb-4">Contact Me</h2>
            </div>
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
