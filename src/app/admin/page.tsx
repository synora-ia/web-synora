"use client";

import { useLanguage } from "@/components/layout/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDashboard() {
  const { t, language } = useLanguage();
  const isEs = language === "es";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="space-y-12"
      >
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl font-bold text-black dark:text-white tracking-tight">{t("admin.welcome")}</h1>
            <p className="text-slate-500 dark:text-zinc-500 mt-2">{t("admin.summary")}</p>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-2xl text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all">
              {t("admin.view_site")}
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem title={t("admin.stats.posts")} value="12" icon={<svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
          <StatItem title={t("admin.stats.drafts")} value="4" icon={<svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>} />
          <StatItem title={t("admin.stats.visits")} value="1.2k" icon={<svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>} />
        </div>

        {/* Recent Activity Section */}
        <section className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 rounded-[2.5rem] p-10">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8">{t("admin.recent_posts")}</h2>
          <div className="space-y-0">
            <PostRow 
              title={isEs ? "Cómo la IA está transformando las inmobiliarias" : "How AI is transforming real estate"} 
              date={isEs ? "hace 2 días" : "2 days ago"} 
              status={isEs ? "Publicado" : "Published"} 
            />
            <PostRow 
              title={isEs ? "5 flujos de trabajo que deberías automatizar hoy" : "5 workflows you should automate today"} 
              date={isEs ? "hace 4 días" : "4 days ago"} 
              status={isEs ? "Borrador" : "Draft"} 
            />
            <PostRow 
              title={isEs ? "Guía completa: Synora y n8n Enterprise" : "Complete guide: Synora and n8n Enterprise"} 
              date={isEs ? "hace 1 semana" : "1 week ago"} 
              status={isEs ? "Publicado" : "Published"} 
            />
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}

function StatItem({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-slate-100 dark:border-white/5 flex items-center justify-between shadow-sm">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-2">{title}</p>
        <h4 className="text-3xl font-bold text-black dark:text-white">{value}</h4>
      </div>
      <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}

function PostRow({ title, date, status }: { title: string; date: string; status: string }) {
  const isPublished = status === "Publicado" || status === "Published";
  return (
    <div className="flex items-center justify-between py-6 border-b border-slate-50 dark:border-white/5 last:border-0 hover:bg-slate-50/50 dark:hover:bg-white/5 px-4 -mx-4 rounded-2xl transition-all group">
      <div>
        <h5 className="font-bold text-black dark:text-white mb-1 group-hover:translate-x-1 transition-transform">{title}</h5>
        <p className="text-xs text-slate-400 dark:text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center space-x-6">
        <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
          isPublished 
            ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400" 
            : "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
        }`}>
          {status}
        </span>
        <button className="text-slate-300 hover:text-black dark:hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
        </button>
      </div>
    </div>
  );
}
