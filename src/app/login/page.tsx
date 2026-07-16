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
