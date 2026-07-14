"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Bell } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import BurgerMenu from "./BurgerMenu";

interface HeaderProps {
  isSidebarOpen: boolean;
  onMenuClick: () => void;
}

export default function Header({ isSidebarOpen, onMenuClick }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <BurgerMenu isOpen={isSidebarOpen} handleOpen={onMenuClick} />
        
        <div className={styles.searchContainer}>
          <p className={styles.breadcrumbs}>Dashboard / <span className={styles.current}>Overview</span></p>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.iconButton} aria-label="Powiadomienia">
          <Bell size={20} />
        </button>

        <button 
          className={styles.iconButton} 
          onClick={toggleTheme}
          aria-label="Zmień motyw"
        >
          {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}
