import React from 'react';
import { siteContent } from '../../data/content';
import TypewriterText from '../common/TypewriterText';

const Hero = () => {
  const { badge, description, primaryCta, secondaryCta } = siteContent.hero;
  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-36 bg-white dark:bg-slate-950 transition-colors">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 dark:bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-green-600 dark:text-green-400 text-xs sm:text-sm font-medium mb-8 shadow-inner animate-slide-right">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          {badge}
        </div>

        {/* Main Heading with Typewriter Effect */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-[1.15] animate-slide-left">
          <TypewriterText text="SSecure Your Domain & Launch Instantly with" speed={90} />
          <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 dark:from-green-400 dark:via-green-400 dark:to-green-500 bg-clip-text text-transparent">
            Prime Time
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#domains"
            className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-green-600/25 text-base"
          >
            {primaryCta}
          </a>
          <a
            href="#templates"
            className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 font-semibold px-8 py-3.5 rounded-xl transition-all text-base"
          >
            {secondaryCta}
          </a>
        </div>

        {/* Dashboard Mockup Banner */}
        <div className="mt-16 relative max-w-5xl mx-auto rounded-2xl p-2 bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-950 border border-slate-300 dark:border-slate-800 shadow-2xl transition-colors">
          <div className="bg-white dark:bg-slate-900/90 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 text-left">

            {/* Mock Window Header */}
            <div className="px-4 py-3 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-800">
                primetime.io/dashboard
              </div>
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">Live Deployment</div>
            </div>

            {/* Mock Dashboard Body */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800/60 shadow-sm">
                <div className="text-xs text-slate-500 mb-1 font-medium">Selected Domain</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-indigo-500 dark:text-indigo-400">🌐</span> mystartup.ai
                </div>
                <div className="mt-3 inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  DNS Configured
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800/60 shadow-sm">
                <div className="text-xs text-slate-500 mb-1 font-medium">Project Template</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-cyan-500 dark:text-cyan-400">⚡</span> Next.js SaaS Boilerplate
                </div>
                <div className="mt-3 inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                  Ready to Deploy
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800/60 shadow-sm flex flex-col justify-between">
                <div className="text-xs text-slate-500 mb-1 font-medium">Instant Status</div>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Live & Connected
                </div>
                <div className="text-[11px] text-slate-500 mt-2">Zero configuration required</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;