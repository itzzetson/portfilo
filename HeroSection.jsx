import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ZIP_EASE } from '../components/MotionPrimitives';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const fullName = PORTFOLIO_CONFIG.name;
  const fullIntro = PORTFOLIO_CONFIG.heroIntro;
  const roles = PORTFOLIO_CONFIG.roles;

  const [typedName, setTypedName] = useState(
    prefersReducedMotion ? fullName : ''
  );
  const [nameDone, setNameDone] = useState(Boolean(prefersReducedMotion));

  const [typedIntro, setTypedIntro] = useState(
    prefersReducedMotion ? fullIntro : ''
  );

  const [roleIndex, setRoleIndex] = useState(0);
  const [roleCharIndex, setRoleCharIndex] = useState(
    prefersReducedMotion ? roles[0].length : 0
  );
  const [isDeletingRole, setIsDeletingRole] = useState(false);

  // Sync immediately if reduced motion preference changes
  useEffect(() => {
    if (prefersReducedMotion) {
      setTypedName(fullName);
      setNameDone(true);
      setTypedIntro(fullIntro);
      setRoleCharIndex(roles[0].length);
      setIsDeletingRole(false);
    }
  }, [prefersReducedMotion, fullName, fullIntro, roles]);

  // 1. Typewriter for name: JETSON ALLTO
  useEffect(() => {
    if (prefersReducedMotion || nameDone) return;

    if (typedName.length < fullName.length) {
      const timer = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length + 1));
      }, 75);
      return () => clearTimeout(timer);
    } else {
      const doneTimer = setTimeout(() => setNameDone(true), 180);
      return () => clearTimeout(doneTimer);
    }
  }, [typedName, fullName, nameDone, prefersReducedMotion]);

  // 2. Typewriter for introduction after name finishes
  useEffect(() => {
    if (prefersReducedMotion || !nameDone) return;
    if (typedIntro.length >= fullIntro.length) return;

    const timer = setTimeout(() => {
      setTypedIntro(fullIntro.slice(0, typedIntro.length + 1));
    }, 18);
    return () => clearTimeout(timer);
  }, [typedIntro, fullIntro, nameDone, prefersReducedMotion]);

  // 3. Smooth cycling typewriter for professional role titles
  useEffect(() => {
    if (prefersReducedMotion) return;

    const currentRole = roles[roleIndex];

    if (!isDeletingRole && roleCharIndex < currentRole.length) {
      const timer = setTimeout(() => {
        setRoleCharIndex((prev) => prev + 1);
      }, 62);
      return () => clearTimeout(timer);
    }

    if (!isDeletingRole && roleCharIndex === currentRole.length) {
      const pauseTimer = setTimeout(() => {
        setIsDeletingRole(true);
      }, 2100);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeletingRole && roleCharIndex > 0) {
      const deleteTimer = setTimeout(() => {
        setRoleCharIndex((prev) => prev - 1);
      }, 34);
      return () => clearTimeout(deleteTimer);
    }

    if (isDeletingRole && roleCharIndex === 0) {
      const nextTimer = setTimeout(() => {
        setIsDeletingRole(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 260);
      return () => clearTimeout(nextTimer);
    }
  }, [roleIndex, roleCharIndex, isDeletingRole, roles, prefersReducedMotion]);

  const currentRoleText = prefersReducedMotion
    ? PORTFOLIO_CONFIG.headline
    : roles[roleIndex].slice(0, roleCharIndex);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden"
    >
      {/* Ambient dark technology background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-dark bg-[size:48px_48px] opacity-55"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none ambient-orb absolute -top-28 -left-24 h-96 w-96 rounded-full bg-[#244B9B]/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none ambient-orb absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#55A6FF]/15 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-[#B7A5F5]/10 blur-[120px]"
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: ZIP_EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-[#55A6FF]/30 bg-[#111D3A]/80 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#55A6FF] mb-5 shadow-glow-sky"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#B7A5F5]" />
              <span>B.Tech AI &amp; Data Science Graduate</span>
            </motion.div>

            {/* Name with smooth typewriter + warm golden accent */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06, ease: ZIP_EASE }}
            >
              <p className="text-sm sm:text-base font-medium tracking-wide uppercase text-[#B7A5F5] mb-2">
                Hello, I&apos;m
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                <span className="sr-only">{fullName}</span>
                <span className="relative inline-block" aria-hidden="true">
                  {/* Locked layout ghost to avoid jumps */}
                  <span className="invisible select-none">{fullName}</span>
                  <span className="absolute inset-0 left-0 top-0 whitespace-nowrap">
                    <span className="gold-name-gradient">{typedName}</span>
                    {!nameDone && (
                      <span className="typing-cursor typing-cursor-gold" />
                    )}
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Animated Role Titles */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14, ease: ZIP_EASE }}
              className="mt-4"
            >
              <div className="flex flex-wrap items-center gap-2 min-h-[2.25rem]">
                <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-white/55">
                  Role //
                </span>
                <span className="font-display text-lg sm:text-2xl font-semibold text-[#55A6FF]">
                  <span className="sr-only">{PORTFOLIO_CONFIG.headline}</span>
                  <span aria-hidden="true">
                    {currentRoleText}
                    {!prefersReducedMotion && <span className="typing-cursor" />}
                  </span>
                </span>
              </div>

              <p className="mt-1.5 text-xs sm:text-sm font-medium tracking-wide text-white/65">
                {PORTFOLIO_CONFIG.headline}
              </p>
            </motion.div>

            {/* Introduction with locked-height typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: ZIP_EASE }}
              className="mt-6 max-w-2xl"
            >
              <p className="sr-only">{fullIntro}</p>
              <div
                aria-hidden="true"
                className="relative text-base sm:text-lg leading-relaxed text-white/80"
              >
                <span className="invisible select-none">{fullIntro}</span>
                <span className="absolute inset-0">
                  {typedIntro}
                  {nameDone &&
                    typedIntro.length < fullIntro.length &&
                    !prefersReducedMotion && <span className="typing-cursor" />}
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: ZIP_EASE }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#projects"
                className="btn-primary group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
              >
                <span>View My Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href={PORTFOLIO_CONFIG.resumePath}
                download={PORTFOLIO_CONFIG.resumeDownloadName}
                className="btn-secondary group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
              >
                <Download className="h-4 w-4 text-[#55A6FF] transition-transform duration-200 group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              <a
                href={PORTFOLIO_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold"
              >
                <Linkedin className="h-4 w-4 text-[#55A6FF] transition-transform duration-200 group-hover:scale-110" />
                <span>LinkedIn</span>
              </a>

              <a
                href="#contact"
                className="btn-secondary group inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold border-[#B7A5F5]/30 hover:border-[#B7A5F5]/70"
              >
                <Mail className="h-4 w-4 text-[#B7A5F5] transition-transform duration-200 group-hover:scale-110" />
                <span>Contact Me</span>
              </a>
            </motion.div>
          </div>

          {/* Right Profile Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: ZIP_EASE }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Outer atmospheric glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#244B9B]/55 via-[#55A6FF]/35 to-[#B7A5F5]/35 blur-2xl opacity-75 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Subtle rotating tech ring */}
              <div
                aria-hidden="true"
                className="relative rounded-full p-[3px] bg-gradient-to-br from-[#55A6FF] via-[#244B9B] to-[#B7A5F5] shadow-[0_0_45px_rgba(36,75,155,0.55)]"
              >
                <div className="relative h-64 w-64 sm:h-76 sm:w-76 md:h-80 md:w-80 rounded-full overflow-hidden bg-[#111D3A] border-4 border-[#080D1B]">
                  <img
                    src={PORTFOLIO_CONFIG.profilePhotoPath}
                    alt="Jetson Allto profile photograph"
                    className="h-full w-full object-cover object-[50%_38%] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Subtle inner rim gradient */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/15"
                  />
                </div>
              </div>

              {/* Floating subtle accent badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: ZIP_EASE }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#55A6FF]/35 bg-[#080D1B]/90 backdrop-blur-xl px-4 py-1.5 text-xs font-medium text-white shadow-glass-blue"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-[#55A6FF] mr-2 align-middle" />
                Open to Data &amp; AI Roles
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
