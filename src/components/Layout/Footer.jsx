import React from 'react';
import { siteContent } from '../../data/content';

const Footer = () => {
  const { logoName } = siteContent.nav;

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-16 pb-12 text-slate-600 dark:text-slate-400 text-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-900">

          {/* Brand Info & Socials */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-400 bg-clip-text text-transparent">
              {logoName}
            </span>
            <p className="text-slate-500 dark:text-slate-400 text-md max-w-sm leading-relaxed">
              Transform your web development workflow with production-ready templates and instant domain deployment.
            </p>
            <div className="flex space-x-3 pt-2">
              {/* Twitter/X */}
              <a href="#" className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-indigo-600 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-800">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-indigo-600 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-800">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              {/* GitHub */}
              <a href="#" className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-indigo-600 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-800">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-3">
            <h4 className="text-md font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-slate-900 dark:hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#templates" className="hover:text-slate-900 dark:hover:text-white transition-colors">Templates</a></li>
              <li><a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-md font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h4 className="text-md font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-md text-slate-500">
          <p>© 2026 {logoName}. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">Designed for modern developers.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;