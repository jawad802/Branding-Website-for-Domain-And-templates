import React from 'react';
import { siteContent } from '../../data/content';

const Pricing = () => {
  const { badge, title, description, plans } = siteContent.pricing;

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-green-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            {badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all relative ${plan.popular
                  ? 'bg-gradient-to-b from-green-50 to-white dark:from-green-950/80 dark:to-slate-900/90 border-2 border-green-500 shadow-2xl shadow-indigo-500/10'
                  : 'bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-600 text-white text-md font-bold uppercase tracking-wider rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-slate-700 dark:text-slate-300 text-sm flex items-center gap-2">
                      <span className="text-green-500 dark:text-green-400 font-bold">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3 rounded-xl font-semibold text-lg transition-all ${plan.popular
                  ? 'bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-600/30'
                  : 'bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700'
                }`}>
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;