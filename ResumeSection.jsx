import React from 'react';
import {
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { SectionHeader, ZipReveal } from '../components/MotionPrimitives';

const RESUME_HIGHLIGHTS = [
  'B.Tech in Artificial Intelligence & Data Science (2022 – 2026)',
  '3 Industry Internships: Data Science, Data Analytics & AI',
  'Hands-on Python, SQL, Scikit-learn, Pandas, NumPy & Streamlit',
  'End-to-end projects in Machine Learning, Data Analytics & Flutter/Firebase',
];

export default function ResumeSection() {
  return (
    <section id="resume" className="relative py-20 sm:py-24">
      <div className="section-container">
        <SectionHeader
          eyebrow="Resume"
          title="Curriculum Vitae"
          subtitle="View or download my official resume PDF for full academic, internship, and project details."
        />

        <ZipReveal direction="up" delay={0.06}>
          <div className="glass-card relative overflow-hidden rounded-2xl p-6 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#244B9B]/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#B7A5F5]/15 blur-3xl"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left info */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#55A6FF]/30 bg-[#080D1B]/80 px-3.5 py-1.5 text-xs font-medium text-[#55A6FF] mb-4">
                  <FileText className="h-3.5 w-3.5" />
                  <span>Official Resume Document (PDF)</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {PORTFOLIO_CONFIG.displayName} — Resume
                </h3>
                <p className="mt-2 text-sm sm:text-base text-white/75 leading-relaxed">
                  Includes complete details on my technical stack, analytics and
                  machine learning internships, featured projects, and academic
                  credentials.
                </p>

                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {RESUME_HIGHLIGHTS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#55A6FF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-3.5">
                  <a
                    href={PORTFOLIO_CONFIG.resumePath}
                    download={PORTFOLIO_CONFIG.resumeDownloadName}
                    className="btn-primary group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
                  >
                    <Download className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                    <span>Download Resume</span>
                  </a>

                  <a
                    href={PORTFOLIO_CONFIG.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
                  >
                    <ExternalLink className="h-4 w-4 text-[#55A6FF] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <span>View Resume</span>
                  </a>
                </div>
              </div>

              {/* Right dark glass document card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-[#55A6FF]/25 bg-[#080D1B]/85 p-6 shadow-glass-blue">
                  <div className="flex items-center justify-between border-b border-[#55A6FF]/15 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#244B9B]/40 border border-[#55A6FF]/40 text-[#55A6FF]">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-display text-sm font-semibold text-white">
                          Jetson_Allto_Resume.pdf
                        </p>
                        <p className="text-xs text-white/55">
                          Ready for immediate view &amp; download
                        </p>
                      </div>
                    </div>
                    <Sparkles className="h-4 w-4 text-[#B7A5F5]" />
                  </div>

                  <div className="mt-5 space-y-3 text-xs sm:text-sm">
                    <div className="flex items-center justify-between rounded-xl bg-[#111D3A]/60 px-3.5 py-2.5 border border-[#55A6FF]/10">
                      <span className="text-white/60">Candidate</span>
                      <span className="font-medium text-white">
                        {PORTFOLIO_CONFIG.displayName}
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-[#111D3A]/60 px-3.5 py-2.5 border border-[#55A6FF]/10">
                      <span className="text-white/60">Target Roles</span>
                      <span className="font-medium text-[#55A6FF]">
                        Data Analyst / ML Engineer
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-[#111D3A]/60 px-3.5 py-2.5 border border-[#55A6FF]/10">
                      <span className="text-white/60">Format</span>
                      <span className="font-mono text-xs text-[#B7A5F5]">
                        PDF Document
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ZipReveal>
      </div>
    </section>
  );
}
