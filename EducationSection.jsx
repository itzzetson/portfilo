import React from 'react';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';
import { SectionHeader, ZipReveal } from '../components/MotionPrimitives';

export default function EducationSection() {
  return (
    <section id="education" className="relative py-20 sm:py-24">
      <div className="section-container">
        <SectionHeader
          eyebrow="Education"
          title="Academic Background"
          subtitle="Undergraduate engineering specialization in Artificial Intelligence &amp; Data Science."
        />

        <ZipReveal direction="up" delay={0.06}>
          <div className="glass-card group relative rounded-2xl p-6 sm:p-8 overflow-hidden hover:-translate-y-1">
            {/* Subtle top accent gradient */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-[#55A6FF]/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
            />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#244B9B] to-[#111D3A] border border-[#55A6FF]/45 text-[#55A6FF] shadow-glow-sky transition-transform duration-300 group-hover:scale-105">
                  <GraduationCap className="h-7 w-7" />
                </div>

                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#B7A5F5]">
                    Undergraduate Degree
                  </span>
                  <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-white">
                    {EDUCATION.degree}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
                    <span className="inline-flex items-center gap-1.5 text-[#55A6FF] font-medium">
                      <MapPin className="h-4 w-4" />
                      {EDUCATION.institution}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-white/70">
                      <Calendar className="h-4 w-4 text-[#B7A5F5]" />
                      {EDUCATION.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {EDUCATION.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-white/75"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#55A6FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ZipReveal>
      </div>
    </section>
  );
}
