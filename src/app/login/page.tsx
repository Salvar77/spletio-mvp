"use client";

import { useRouter } from "next/navigation";
import { Mail, Lock, BrainCircuit } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.scss";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Tutaj w przyszłości będzie logika autoryzacji (np. Firebase / NextAuth)
    // Obecnie (w MVP) po wciśnięciu "Zaloguj się", symulujemy poprawne logowanie
    // i odsyłamy użytkownika do panelu głównego.
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      {/* LEWA KOLUMNA: FORMULARZ LOGOWANIA */}
      <section className={styles.formSection}>
        <Link href="/" className={styles.logoBox}>
          <div className={styles.logoIcon}>S</div>
          <span className={styles.logoText}>Spletio</span>
        </Link>

        <div className={styles.loginBox}>
          <h1>Witaj z powrotem!</h1>
          <p>Zaloguj się, aby uzyskać dostęp do swoich ofert pracy i kandydatów.</p>

          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Adres E-mail</label>
              <div className={styles.inputWrapper}>
                <Mail className={styles.icon} size={20} />
                <input 
                  type="email" 
                  id="email" 
                  placeholder="np. jan@firma.pl" 
                  required 
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Hasło</label>
              <div className={styles.inputWrapper}>
                <Lock className={styles.icon} size={20} />
                <input 
                  type="password" 
                  id="password" 
                  placeholder="••••••••" 
                  required 
                />
              </div>
            </div>

            <div className={styles.forgotPassword}>
              <Link href="#">Zapomniałeś hasła?</Link>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Zaloguj się
            </button>
            
            <div className={styles.divider}>lub</div>
            
            <button type="button" className={styles.googleBtn} onClick={handleLogin}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Zaloguj się przez Google
            </button>
          </form>
        </div>
      </section>

      {/* PRAWA KOLUMNA: WIZUALIZACJA AI (Tylko na Desktopie) */}
      <section className={styles.visualSection}>
        <div className={styles.abstractGrid}></div>
        
        <div className={styles.aiBrain}>
          <div className={styles.brainIcon}>
            <BrainCircuit size={48} />
          </div>
          <div className={styles.brainText}>
            <h2>AI-Powered Recruitment</h2>
            <p>Spletio analizuje i dopasowuje kandydatów z niespotykaną precyzją, oszczędzając Twój czas.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
