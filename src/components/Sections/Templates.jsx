import React from 'react';
import { siteContent } from '../../data/content';

const Templates = () => {
  const { badge, title, description, items } = siteContent.templates;

  return (
    <section id="templates" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            {badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all group overflow-hidden flex flex-col justify-between shadow-sm dark:shadow-xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-green-600 dark:text-green-400 border border-slate-300 dark:border-slate-700">
                    {item.category}
                  </span>
                  <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    {item.badgeText}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-mono bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-8 py-4 bg-slate-100 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-sm text-slate-500 dark:text-slate-400">Instant Deploy</span>
                <button className="text-sm font-semibold text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 transition-colors flex items-center gap-1">
                  Deploy Now &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Templates;