"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import CircularText from "../components/CircularText/CircularText";
import localFont from "next/font/local";
import DecryptedText from "../components/DecryptedText/DecryptedText";
import TargetCursor from "../components/TargetCursor/TargetCursor";
import CurvedLoop from "../components/CurvedLoop/CurvedLoop";
import ScrollVelocity from "../components/ScrollVelocity/ScrollVelocity";
import LoadingScreen from "../components/LoadingScreen/loadingscreen";
import ShinyText from "../components/ShinyText/ShinyText";
import StaggeredMenu from "../components/StaggeredMenu/StaggeredMenu";
import PlasmaWave from "../components/PlasmaWave/PlasmaWave";
import LanyardOriginal from "../components/Lanyard/Lanyard";

const Lanyard = LanyardOriginal as any;

const creatoDisplay = localFont({
  src: "../font/CreatoDisplay-Regular.otf",
  display: "swap",
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoadingComplete = () => setIsLoading(false);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about me", link: "#about" },
    { label: "Work", ariaLabel: "View my projects", link: "#work" },
    { label: "Gallery", ariaLabel: "View my gallery", link: "#gallery" },
    { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://x.com/hoo_qii" },
    { label: "GitHub", link: "https://github.com/hooqii" },
    { label: "LinkedIn", link: "https://linkedin.com/in/defri-salwan" },
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
        {/* Kursor kembali ke default TargetCursor untuk seluruh halaman */}
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />

        {/* PEMBUNGKUS MENU "SMART GLASS" DENGAN AUTO-REVERSE */}
        <div
          className={`fixed inset-0 z-[9999] transition-all duration-300 ${
            isMenuOpen
              ? "pointer-events-auto"
              : "pointer-events-none mix-blend-difference"
          }`}
        >
          {/* Saat tertutup, hanya tag <button>, <a>, <svg>, dan <img> yang bisa diklik */}
          <div
            className={`w-full h-full ${
              isMenuOpen
                ? "pointer-events-auto"
                : "[&_button]:pointer-events-auto [&_a]:pointer-events-auto [&_svg]:pointer-events-auto [&_img]:pointer-events-auto"
            }`}
          >
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
              onMenuOpen={() => setIsMenuOpen(true)}
              onMenuClose={() => setIsMenuOpen(false)}
            />
          </div>
        </div>

        <section
          id="home"
          className="h-screen px-8 relative z-10 overflow-hidden"
        >
          <div className="absolute inset-0 z-0 bg-black flex items-center justify-center overflow-hidden">
            <PlasmaWave
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
                    {" "}
                    a.k.a{" "}
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
                    Tech, Software, UI/UX Design & BlockChain
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
          className="h-screen flex items-center justify-center px-8 bg-orange-500 relative z-10"
        >
          {/* 👇 2. Bungkus Lanyard dengan absolute ukuran penuh sebagai background */}
          <div className="absolute inset-0 w-full h-full z-20 cursor-grab active:cursor-grabbing">
            {/* @ts-ignore - Mengabaikan error bawaan tipe Lanyard dari ReactBits */}
            <Lanyard
              position={[-10, 0, 20]}
              gravity={[0, -40, 0]}
              frontImage="/profile.png"
              backImage="/lanyard.png"
              imageFit="cover"
              lanyardImage="/lanyard.png"
              lanyardWidth={0.75}
            />
          </div>
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl text-white font-bold mb-4">About Me</h2>
            <p className="text-lg text-white leading-relaxed">
              Seorang Tech Enthusiast yang memiliki pengalaman sebagai Software
              Developer (Full-Stack Web & Mobile App) dan spesialis UI/UX yang
              berbasis di Aceh. Lulusan S1 Sistem Informasi yang memimiliki
              pengalaman merancang antarmuka hingga men-deploy aplikasi skala
              produksi. Saya adaptif, menyukai sesuatu yang baru, dan fokus
              menciptakan pengalaman pengguna yang menarik dan fungsional.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <span className="px-5 py-2 bg-[#ff7a30] text-black font-semibold rounded-full text-sm">
                UI/UX Design
              </span>
              <span className="px-5 py-2 bg-[#03b3c3] text-black font-semibold rounded-full text-sm">
                Mobile Development
              </span>
              <span className="px-5 py-2 bg-white text-black font-semibold rounded-full text-sm">
                Web Development
              </span>
              <span className="px-5 py-2 bg-gray-800 text-white font-semibold rounded-full text-sm">
                PC Builder
              </span>
            </div>
          </div>
        </section>
        <section
          id="work"
          className="min-h-screen py-24 flex items-center justify-center px-8 bg-white"
        >
          <div className="max-w-6xl w-full">
            <h2 className="text-4xl text-black font-bold mb-12 text-center">
              Experience & Projects
            </h2>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: LIMS */}
              <a
                href="https://lims.labkesmas-aceh.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target block bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold mb-1 text-black">
                  LIMS Labkesmas
                </h3>
                <p className="text-sm text-[#ff7a30] font-bold mb-4">
                  Internship • Full-Stack Web
                </p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Merancang dan men-deploy Sistem Informasi Manajemen
                  Laboratorium (LIMS) berskala penuh untuk registrasi pasien &
                  pelacakan hasil tes real-time.
                </p>
                <p className="text-xs font-mono text-gray-400">
                  React • Vite • Node.js • Prisma
                </p>
              </a>

              {/* Card 2: Kamus Gayo */}
              <a
                href="https://play.google.com/store/apps/details?id=com.kamusgayo.supabase&hl=id"
                className="cursor-target bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold mb-1 text-black">
                  Kamus Gayo
                </h3>
                <p className="text-sm text-[#03b3c3] font-bold mb-4">
                  Project • Android Mobile
                </p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Aplikasi kamus digital dengan sistem terjemahan dua arah dan
                  integrasi Supabase sebagai backend database.
                </p>
                <p className="text-xs font-mono text-gray-400">
                  Kotlin • XML • Supabase
                </p>
              </a>

              {/* Card 3: Dentiva */}
              <a className="cursor-target bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-1 text-black">Dentiva</h3>
                <p className="text-sm text-[#ff6b6b] font-bold mb-4">
                  Project • UI/UX & Mobile
                </p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Aplikasi kesehatan mulut interaktif dengan fitur Nearby Doctor
                  dan integrasi machine learning untuk scan mulut.
                </p>
                <p className="text-xs font-mono text-gray-400">
                  Figma • Kotlin
                </p>
              </a>
            </div>
          </div>
        </section>

        <section
          id="gallery"
          // 👇 1. Tambahkan overflow-hidden agar talinya rapi tidak tembus ke section lain
          className="min-h-screen py-24 flex items-center justify-center px-8 bg-black relative z-10 overflow-hidden"
        >
          {/* 👇 3. Tambahkan pointer-events-none agar mouse bisa menembus ke Lanyard di belakang */}
          <div className="max-w-6xl w-full relative z-10 pointer-events-none">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-white font-bold mb-4">My Gallery</h2>
              <p className="text-gray-400">
                Showcase UI/UX Design & Personal Shots
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
              <div className="relative col-span-2 row-span-1 rounded-2xl overflow-hidden bg-gray-900 group pointer-events-auto">
                <Image
                  src="/glassmorphism-card.jpg"
                  alt="Design 2"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <p className="text-white font-bold">Dentiva UI Mockup</p>
                </div>
              </div>

              {/* Gambar 2 */}
              <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-gray-900 group pointer-events-auto">
                <Image
                  src="/dentiva.jpg"
                  alt="UI Design 1"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Gambar 3 */}
              <div className="relative col-span-1 row-span-2 rounded-2xl overflow-hidden bg-gray-900 group pointer-events-auto">
                <Image
                  src="/hosting_web_design.jpg"
                  alt="Hostingr Web Design"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Gambar 4 (Lebar) */}
              <div className="relative col-span-3 row-span-1 rounded-2xl overflow-hidden bg-gray-900 group pointer-events-auto">
                <Image
                  src="/nyawallet.jpg"
                  alt="NyaWallet"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <p className="text-white font-bold">
                    NyaWallet (Financial App)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-[80vh] flex items-center justify-center px-8 bg-gray-100 relative z-10 pb-32"
        >
          <div className="text-center max-w-2xl">
            <h2 className="text-5xl text-black font-extrabold mb-6">
              Let's Connect!
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Tertarik untuk berkolaborasi dalam proyek seru atau sedang mencari
              talenta UI/UX dan Mobile Developer? Jangan ragu untuk menyapa!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="mailto:defrisalwan.id@gmail.com"
                className="px-8 py-4 bg-[#ff7a30] text-black font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
              >
                Send Me an Email
              </a>
              <a
                href="https://linkedin.com/in/defri-salwan"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300"
              >
                Connect on LinkedIn
              </a>
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
        <main className="fixed bottom-8 right-6 z-50 mix-blend-difference">
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
