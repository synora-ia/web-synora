"use client";

import { useState } from "react";
import { useLanguage } from "@/components/layout/LanguageContext";

export default function IsoModalBadge() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const formatDesc = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-black dark:text-white">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-zinc-900 text-black dark:text-white text-sm font-medium border border-slate-200 dark:border-white/10 shadow-sm animate-fade-in-up flex-wrap justify-center">
        <svg className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span className="flex items-center flex-wrap gap-1">
          {t("iso.badge_text")} <strong>{t("iso.badge_strong")}</strong>
          <button 
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center text-slate-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors group ml-1"
          >
            {t("iso.learn_more")}
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div 
            className="absolute inset-0" 
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="relative bg-white dark:bg-zinc-900 rounded-[2rem] max-w-2xl w-full p-8 md:p-10 shadow-2xl border border-slate-100 dark:border-white/10 animate-fade-in-up text-left overflow-y-auto max-h-[90vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-black dark:text-zinc-500 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white">{t("iso.title")}</h3>
                <p className="text-slate-500 dark:text-zinc-400">{t("iso.subtitle")}</p>
              </div>
            </div>

            <div className="space-y-6 text-slate-600 dark:text-zinc-300 leading-relaxed">
              <p>
                {formatDesc(t("iso.desc"))}
              </p>

              <div>
                <h4 className="text-lg font-bold text-black dark:text-white mb-3">{t("iso.benefits_title")}</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 mt-0.5 text-blue-600 dark:text-blue-400">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <strong className="text-black dark:text-white block">{t("iso.benefit1_title")}</strong>
                      <span>{t("iso.benefit1_desc")}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 mt-0.5 text-blue-600 dark:text-blue-400">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <strong className="text-black dark:text-white block">{t("iso.benefit2_title")}</strong>
                      <span>{t("iso.benefit2_desc")}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 mt-0.5 text-blue-600 dark:text-blue-400">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <strong className="text-black dark:text-white block">{t("iso.benefit3_title")}</strong>
                      <span>{t("iso.benefit3_desc")}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 dark:bg-white/5 p-5 rounded-2xl border border-slate-100 dark:border-white/10 text-sm mt-8">
                <p>
                  <strong>{t("iso.how_it_works")}</strong> {t("iso.how_it_works_desc")}
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
