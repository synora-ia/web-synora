"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

import { useLanguage } from "@/components/layout/LanguageContext";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t, language } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Skip protection for login page
    if (pathname === "/admin/login") {
      setIsAuthenticated(true);
      return;
    }

    const auth = localStorage.getItem("admin-auth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    router.push("/admin/login");
  };

  // Prevent flash of content
  if (isAuthenticated === null) return null;

  // Don't show sidebar on login page
  if (pathname === "/admin/login") return <>{children}</>;

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-black flex ${inter.className}`}>
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-slate-100 dark:border-white/5 flex flex-col fixed h-full z-30">
        <div className="p-8">
          <Link href="/" className="text-2xl font-bold text-black dark:text-white tracking-tighter">
            Synora<span className="text-slate-400">Admin</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <AdminNavLink href="/admin" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}>
            {t("admin.nav.dashboard")}
          </AdminNavLink>
          <AdminNavLink href="/admin/posts" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3v5h5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 13H8M16 17H8M10 9H8" /></svg>}>
            {t("admin.nav.posts")}
          </AdminNavLink>
          <AdminNavLink href="/admin/config" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}>
            {t("admin.nav.config")}
          </AdminNavLink>
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-white/5">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-sm font-medium text-slate-500 hover:text-black dark:hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            {t("admin.logout")}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 md:p-12">
        {children}
      </main>
    </div>
  );
}

function AdminNavLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link href={href} className="flex items-center px-4 py-3 text-sm font-medium text-slate-500 hover:text-black dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-all group">
      <span className="mr-3 text-slate-400 group-hover:text-black dark:group-hover:text-white transition-colors">
        {icon}
      </span>
      {children}
    </Link>
  );
}
