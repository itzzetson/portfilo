import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Briefcase,
  Code2,
  Cpu,
  Wrench,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  SectionHeader,
  ZIP_EASE,
  ZipReveal,
} from '../components/MotionPrimitives';

const CATEGORY_ICONS = {
  Code2,
  BarChart3,
  Cpu,
  Briefcase,
  Wrench,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div className="section-container">
        <SectionHeader
          eyebrow="Technical Skills"
          title="Core Competencies &amp; Toolkit"
          subtitle="Structured across programming, analytics, machine learning, business intelligence, and development platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = CATEGORY_ICONS[category.icon] || Code2;
            const isLavender = category.accent === 'lavender';

            return (
              <ZipReveal
                key={category.id}
                direction="up"
                delay={index * 0.06}
                className={
                  index === 1 || index === 2 ? 'lg:col-span-1' : ''
                }
              >
                <div className="glass-card group relative rounded-2xl p-6 h-full flex flex-col overflow-hidden hover:-translate-y-1">
                  {/* Tasteful animated accent top bar (non-percentage progress indicator) */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-[#111D3A] overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.75,
                        delay: 0.1 + index * 0.06,
                        ease: ZIP_EASE,
                      }}
                      className={`h-full w-full origin-left bg-gradient-to-r ${
                        isLavender
                          ? 'from-[#244B9B] via-[#B7A5F5] to-[#55A6FF]'
                          : 'from-[#244B9B] via-[#55A6FF] to-[#B7A5F5]'
                      }`}
                    />
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${
                          isLavender
                            ? 'bg-[#111D3A] border-[#B7A5F5]/35 text-[#B7A5F5]'
                            : 'bg-[#111D3A] border-[#55A6FF]/35 text-[#55A6FF]'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {category.title}
                      </h3>
                    </div>

                    <span className="font-mono text-xs text-white/50">
                      {category.skills.length} skills
                    </span>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#55A6FF]/20 bg-[#080D1B]/75 px-3 py-1.5 text-xs sm:text-[13px] font-medium text-white/90 transition-all duration-200 hover:border-[#55A6FF]/60 hover:bg-[#244B9B]/30 hover:-translate-y-0.5"
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isLavender ? 'bg-[#B7A5F5]' : 'bg-[#55A6FF]'
                          }`}
                        />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </ZipReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
