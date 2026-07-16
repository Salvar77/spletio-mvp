"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor, Save, Loader2 } from "lucide-react";
import styles from "./page.module.scss";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Jan",
    lastName: "Kowalski",
    email: "jan.kowalski@spletio.pl",
  });

  // Upewniamy się, że hydracja przebiegła pomyślnie przed pokazaniem motywu
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleProfileSave = () => {
    setIsSaving(true);
    // Symulacja połączenia z API
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Ustawienia</h1>
        <p className={styles.subtitle}>Zarządzaj swoim kontem i preferencjami systemu.</p>
      </header>

      {/* PANEL PROFILU */}
      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2>Twój Profil</h2>
          <p>Te informacje będą widoczne dla Twoich współpracowników.</p>
        </div>
        <div className={styles.panelContent}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Imię</label>
              <input 
                type="text" 
                name="firstName" 
                value={profile.firstName} 
                onChange={handleProfileChange} 
              />
            </div>
            <div className={styles.formGroup}>
              <label>Nazwisko</label>
              <input 
                type="text" 
                name="lastName" 
                value={profile.lastName} 
                onChange={handleProfileChange} 
              />
            </div>
            <div className={styles.formGroup}>
              <label>Adres E-mail</label>
              <input 
                type="email" 
                name="email" 
                value={profile.email} 
                onChange={handleProfileChange} 
              />
            </div>
          </div>
        </div>
        <div className={styles.panelFooter}>
          <button 
            className={styles.saveBtn} 
            onClick={handleProfileSave}
            disabled={isSaving}
          >
            {isSaving ? <Loader2 size={16} className={styles.spinner} /> : <Save size={16} />}
            {isSaving ? "Zapisywanie..." : "Zapisz Zmiany"}
          </button>
        </div>
      </section>

      {/* PANEL WYGLĄDU (MOTYW) */}
      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2>Wygląd Aplikacji</h2>
          <p>Wybierz motyw interfejsu. Obsydian (Ciemny) jest zalecany dla oszczędzania wzroku.</p>
        </div>
        <div className={styles.panelContent}>
          {mounted && (
            <div className={styles.themeGrid}>
              <div 
                className={`${styles.themeOption} ${theme === 'dark' ? styles.active : ''}`}
                onClick={() => setTheme('dark')}
              >
                <Moon size={32} />
                <span>Obsydian (Ciemny)</span>
              </div>
              <div 
                className={`${styles.themeOption} ${theme === 'light' ? styles.active : ''}`}
                onClick={() => setTheme('light')}
              >
                <Sun size={32} />
                <span>Jasny</span>
              </div>
              <div 
                className={`${styles.themeOption} ${theme === 'system' ? styles.active : ''}`}
                onClick={() => setTheme('system')}
              >
                <Monitor size={32} />
                <span>Zgodnie z systemem</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PANEL POWIADOMIEŃ */}
      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2>Powiadomienia E-mail</h2>
          <p>Zdecyduj, o czym Spletio ma Cię informować na skrzynkę pocztową.</p>
        </div>
        <div className={styles.panelContent}>
          <div className={styles.toggleRow}>
            <div className={styles.toggleInfo}>
              <h3>Nowy kandydat</h3>
              <p>Otrzymuj e-mail, gdy kandydat zaaplikuje na Twoją ofertę.</p>
            </div>
            <label className={styles.switch}>
              <input type="checkbox" defaultChecked />
              <span className={styles.slider}></span>
            </label>
          </div>
          
          <div className={styles.toggleRow}>
            <div className={styles.toggleInfo}>
              <h3>Podsumowanie tygodnia AI</h3>
              <p>Otrzymuj raport wygenerowany przez AI podsumowujący tydzień rekrutacji.</p>
            </div>
            <label className={styles.switch}>
              <input type="checkbox" defaultChecked />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
      </section>

    </div>
  );
}
