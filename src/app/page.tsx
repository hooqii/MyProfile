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
import SplashCursor from "../components/SplashCursor/SplashCursor";

const Lanyard = LanyardOriginal as any;

const creatoDisplay = localFont({
  src: "../font/CreatoDisplay-Regular.otf",
  display: "swap",
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 👇 1. STATE BARU: Sensor cerdas pendeteksi posisi kursor di area spesifik
  const [activeSplash, setActiveSplash] = useState("none");

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
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />

        {/* PEMBUNGKUS MENU "SMART GLASS" DENGAN AUTO-REVERSE */}
        <div
          className={`fixed inset-0 z-[9999] transition-all duration-300 ${
            isMenuOpen
              ? "pointer-events-auto"
              : "pointer-events-none mix-blend-difference"
          }`}
        >
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
          // 👇 Matikan splash cursor saat di Home
          onMouseEnter={() => setActiveSplash("none")}
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
          className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 bg-orange-500 relative z-10 overflow-hidden"
          // 👇 Matikan splash cursor saat di About
          onMouseEnter={() => setActiveSplash("none")}
        >
          <div className="w-full h-[50vh] md:w-1/2 md:h-screen relative z-20 cursor-grab active:cursor-grabbing flex items-start justify-center md:justify-start">
            <Lanyard
              position={[0, 0, 20]}
              gravity={[0, -40, 0]}
              frontImage="/profile.png"
              backImage="/lanyard.png"
              imageFit="cover"
              lanyardImage="/lanyard.png"
              lanyardWidth={1}
            />
          </div>

          <div className="w-full md:w-1/2 text-center ml-0 md:ml-6 md:text-left max-w-2xl relative z-30 pointer-events-none pb-12 md:pb-0">
            <h2 className="text-4xl text-white font-bold mb-4">About Me</h2>
            <p className="text-lg text-white leading-relaxed">
              Seorang Tech Enthusiast yang memiliki pengalaman sebagai Software
              Developer (Full-Stack Web & Mobile App) dan spesialis UI/UX yang
              berbasis di Aceh. Lulusan S1 Sistem Informasi yang memimiliki
              pengalaman merancang antarmuka hingga men-deploy aplikasi skala
              produksi. Saya adaptif, menyukai sesuatu yang baru, dan fokus
              menciptakan pengalaman pengguna yang menarik dan fungsional.
            </p>
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-3 pointer-events-auto">
              <span className="cursor-target px-5 py-2 bg-[#ff7a30] text-black font-semibold rounded-full text-sm">
                UI/UX Design
              </span>
              <span className="cursor-target px-5 py-2 bg-[#03b3c3] text-black font-semibold rounded-full text-sm">
                Mobile Development
              </span>
              <span className="cursor-target px-5 py-2 bg-white text-black font-semibold rounded-full text-sm">
                Web Development
              </span>
              <span className="cursor-target px-5 py-2 bg-gray-800 text-white font-semibold rounded-full text-sm">
                PC Builder
              </span>
              <span className="cursor-target px-5 py-2 border-2 border-black text-black font-semibold rounded-full text-sm">
                Tech Enthusiast
              </span>
            </div>
          </div>
        </section>

        <section
          id="work"
          // 👇 KUNCI PERBAIKAN: Di HP pakai min-h-screen & py-24 (bisa discroll turun), di Laptop pakai md:h-screen & md:py-12 (terkunci 1 layar)
          className="min-h-screen md:h-screen py-24 md:py-12 flex items-center justify-center px-8 bg-zinc-950 relative overflow-hidden z-10"
          onMouseEnter={() => setActiveSplash("work")}
        >
          {/* Render efek Orange HANYA bila mouse ada di dalam Work */}
          {activeSplash === "work" && (
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
              <SplashCursor
                DENSITY_DISSIPATION={3.5}
                VELOCITY_DISSIPATION={2}
                PRESSURE={0.1}
                CURL={3}
                SPLAT_RADIUS={0.2}
                SPLAT_FORCE={6000}
                COLOR_UPDATE_SPEED={10}
                SHADING
                RAINBOW_MODE={false}
                COLOR="#ff7a30"
              />
            </div>
          )}

          <div className="max-w-5xl w-full relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl text-white font-extrabold mb-2 tracking-tight">
                Experience & <span className="text-[#ff7a30]">Projects</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <a
                href="https://lims.labkesmas-aceh.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target block p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_rgba(255,122,48,0.4)] group"
              >
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-[#ff7a30] transition-colors">
                  LIMS Labkesmas
                </h3>
                <p className="text-[11px] text-[#ff7a30] font-bold mb-2 uppercase tracking-wider">
                  Internship • Full-Stack Web
                </p>
                <p className="text-gray-300 mb-4 text-xs md:text-sm leading-relaxed line-clamp-3">
                  Merancang dan men-deploy Sistem Informasi Manajemen
                  Laboratorium (LIMS) berskala penuh untuk registrasi pasien &
                  pelacakan hasil tes real-time.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] font-mono text-gray-300">
                    React
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] font-mono text-gray-300">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] font-mono text-gray-300">
                    Prisma
                  </span>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.kamusgayo.supabase&hl=id"
                className="cursor-target block p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_rgba(3,179,195,0.4)] group"
              >
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-[#ff7a30] transition-colors">
                  Kamus Gayo
                </h3>
                <p className="text-[11px] text-[#ff7a30] font-bold mb-2 uppercase tracking-wider">
                  Project • Android Mobile
                </p>
                <p className="text-gray-300 mb-4 text-xs md:text-sm leading-relaxed line-clamp-3">
                  Aplikasi kamus digital dengan sistem terjemahan dua arah dan
                  integrasi Supabase sebagai backend database real-time.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] font-mono text-gray-300">
                    Kotlin
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] font-mono text-gray-300">
                    XML
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] font-mono text-gray-300">
                    Supabase
                  </span>
                </div>
              </a>

              <a className="cursor-target block p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_rgba(255,107,107,0.4)] group">
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-[#ff7a30] transition-colors">
                  Dentiva
                </h3>
                <p className="text-[11px] text-[#ff7a30] font-bold mb-2 uppercase tracking-wider">
                  Project • UI/UX & Mobile
                </p>
                <p className="text-gray-300 mb-4 text-xs md:text-sm leading-relaxed line-clamp-3">
                  Aplikasi kesehatan mulut interaktif dengan fitur Nearby Doctor
                  dan integrasi machine learning canggih untuk scan mulut.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] font-mono text-gray-300">
                    Figma
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] font-mono text-gray-300">
                    Kotlin
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] font-mono text-gray-300">
                    TF Lite
                  </span>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.nyawallet.id&hl=id"
                className="cursor-target block p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.4)] group"
              >
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-[#ff7a30] transition-colors">
                  NyaWallet
                </h3>
                <p className="text-[11px] text-[#ff7a30] font-bold mb-2 uppercase tracking-wider">
                  Project • UI/UX Design
                </p>
                <p className="text-gray-300 mb-4 text-xs md:text-sm leading-relaxed line-clamp-3">
                  Aplikasi dompet digital modern dengan desain yang bersih dan
                  fitur manajemen keuangan berfokus pada kemudahan transaksi.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] font-mono text-gray-300">
                    Figma
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] font-mono text-gray-300">
                    UI/UX
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-[10px] font-mono text-gray-300">
                    Flutter
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section
          id="gallery"
          onMouseEnter={() => setActiveSplash("gallery")}
          // 👇 1. Ubah py-24 menjadi py-16 agar tidak mentok atas-bawah
          className="min-h-screen py-16 flex items-center justify-center px-8 bg-white relative z-10 overflow-hidden"
        >
          {/* Render efek Rainbow HANYA bila mouse ada di dalam Gallery */}
          {activeSplash === "gallery" && (
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
              <SplashCursor
                DENSITY_DISSIPATION={3.5}
                VELOCITY_DISSIPATION={2}
                PRESSURE={0.1}
                CURL={3}
                SPLAT_RADIUS={0.2}
                SPLAT_FORCE={6000}
                COLOR_UPDATE_SPEED={10}
                SHADING
                RAINBOW_MODE={true}
              />
            </div>
          )}

          <div className="max-w-6xl w-full relative z-10 pointer-events-none">
            {/* Header Gallery */}
            <div className="text-center mb-8">
              {" "}
              {/* 👇 2. Margin dikecilkan jadi mb-8 */}
              <h2 className="text-5xl md:text-4xl text-gray-800 font-extrabold mb-4 tracking-tight">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-orange-300 to-blue-300">
                  Gallery
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Showcase UI/UX Design & Personal Shots
              </p>
            </div>

            {/* 👇 3. KUNCI UTAMA: Tambahkan "grid-flow-dense" di sini! */}
            <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-4 md:gap-5 auto-rows-[150px] md:auto-rows-[200px]">
              {/* Gambar 1: Glassmorphism Card */}
              <div className="relative col-span-2 row-span-1 rounded-2xl overflow-hidden bg-gray-900 group pointer-events-auto shadow-lg">
                <Image
                  src="/glassmorphism-card.jpg"
                  alt="Design 2"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center backdrop-blur-sm">
                  <p className="text-white font-bold text-lg tracking-wide">
                    Glassmorphism Card Design
                  </p>
                </div>
              </div>

              {/* Gambar 2: Dentiva */}
              <div className="relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-gray-900 group pointer-events-auto shadow-lg">
                <Image
                  src="/dentiva.jpg"
                  alt="UI Design 1"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center backdrop-blur-sm">
                  <p className="text-white font-bold text-lg tracking-wide">
                    Dentiva UI Mockup
                  </p>
                </div>
              </div>

              {/* Gambar 3: Hosting Web Design */}
              <div className="relative col-span-1 row-span-1 md:row-span-2 rounded-2xl overflow-hidden bg-gray-900 group pointer-events-auto shadow-lg">
                <Image
                  src="/hosting_web_design.jpg"
                  alt="Hosting Web Design"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center backdrop-blur-sm">
                  <p className="text-white font-bold text-lg tracking-wide text-center px-2">
                    Hosting Web Design
                  </p>
                </div>
              </div>

              {/* Gambar 4: NyaWallet (Akan otomatis mengisi celah berkat grid-flow-dense) */}
              <div className="relative col-span-2 md:col-span-3 row-span-1 rounded-2xl overflow-hidden bg-gray-900 group pointer-events-auto shadow-lg">
                <Image
                  src="/nyawallet.jpg"
                  alt="NyaWallet"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center backdrop-blur-sm">
                  <p className="text-white font-bold text-lg tracking-wide">
                    NyaWallet (Financial App)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="min-h-[80vh] flex items-center justify-center px-8 bg-gray-200 relative z-10 pb-32"
          onMouseEnter={() => setActiveSplash("none")}
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
                className="px-8 py-4 border-2 border-black text-black font-bold rounded-full hover:bg-white hover:border-[#ff7a30] hover:text-[#ff7a30] transition-all duration-300"
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
        <main
          onMouseEnter={() => setActiveSplash("gallery")}
          className="fixed bottom-8 right-6 z-50 mix-blend-difference"
        >
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
