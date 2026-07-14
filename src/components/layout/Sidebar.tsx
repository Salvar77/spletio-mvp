"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Briefcase, 
  Users, 
  GitCompare, 
  Calendar, 
  ShieldCheck, 
  Settings, 
  LayoutDashboard,
  Plug,
  X
} from "lucide-react";
import styles from "./Sidebar.module.scss";

const menuItems = [
  {
    title: "REKRUTACJE",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Oferty pracy", href: "/jobs", icon: Briefcase },
      { name: "Kandydaci", href: "/candidates", icon: Users },
      { name: "Porównania", href: "/compare", icon: GitCompare },
      { name: "Kalendarz", href: "/calendar", icon: Calendar },
    ],
  },
  {
    title: "ZESPÓŁ",
    items: [
      { name: "Członkowie", href: "/team", icon: Users },
      { name: "Uprawnienia", href: "/roles", icon: ShieldCheck },
    ],
  },
  {
    title: "USTAWIENIA",
    items: [
      { name: "Integracje", href: "/integrations", icon: Plug },
      { name: "Ustawienia", href: "/settings", icon: Settings },
    ],
  },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.logo}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className={styles.icon}>S</div>
          <h2>Spletio</h2>
        </div>
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((section, idx) => (
          <div key={idx} className={styles.section}>
            <p className={styles.sectionTitle}>{section.title}</p>
            <ul>
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || (pathname === "/" && item.href === "/dashboard");
                return (
                  <li key={item.name}>
                    <Link href={item.href} className={`${styles.link} ${isActive ? styles.active : ""}`}>
                      <Icon className={styles.linkIcon} size={18} />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className={styles.userProfile}>
        <div className={styles.avatar}>KA</div>
        <div className={styles.userInfo}>
          <p className={styles.name}>Konrad A.</p>
          <p className={styles.role}>Admin</p>
        </div>
      </div>
    </aside>
  );
}
