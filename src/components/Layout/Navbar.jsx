import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { siteContent } from '../../data/content';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { logoName, links, ctaText } = siteContent.nav;

    return (
        <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b mt-5 border-slate-200 dark:border-slate-800 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-400 bg-clip-text text-transparent">
                            {logoName}
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link, index) => (
                            <a key={index} href={link.href} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-md font-medium">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4 cursor-pointer">
                        <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-sm" aria-label="Toggle Theme">
                            {isDarkMode ? <Sun className="w-5 h-5 text-amber-400 cursor-pointer" /> : <Moon className="w-5 h-5 text-slate-700 cursor-pointer" />}
                        </button>

                        <a href="#get-started" className="bg-green-600 hover:bg-green-500 text-white px-5 py-3 rounded-lg text-xl font-medium transition-all shadow-lg shadow-green-600/30">
                            {ctaText}
                        </a>
                    </div>

                    <div className="md:hidden flex items-center space-x-2 cursor-pointer">
                        <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                            {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-2">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-4 space-y-2">
                    {links.map((link, index) => (
                        <a key={index} href={link.href} onClick={() => setIsOpen(false)} className="block text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-2 text-base font-medium">
                            {link.name}
                        </a>
                    ))}
                    <a href="#get-started" onClick={() => setIsOpen(false)} className="block w-full text-center bg-green-600 text-white py-2 rounded-lg font-medium mt-2">
                        {ctaText}
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;