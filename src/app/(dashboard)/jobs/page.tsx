import { Plus, Search, Filter } from "lucide-react";
import JobsList from "@/components/jobs/JobsList";
import styles from "./page.module.scss";

export default function JobsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInfo}>
          <h1 className={styles.title}>Oferty Pracy</h1>
          <p className={styles.subtitle}>Zarządzaj swoimi rekrutacjami, do których AI dopasowuje kandydatów.</p>
        </div>
        
        <button className={styles.primaryButton}>
          <Plus size={18} />
          Dodaj Ofertę
        </button>
      </header>

      <div className={styles.toolbar}>
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />
          <input type="text" placeholder="Szukaj stanowiska lub departamentu..." className={styles.searchInput} />
        </div>
        
        <button className={styles.filterButton}>
          <Filter size={18} />
          Filtruj
        </button>
      </div>

      <div className={styles.content}>
        <JobsList />
      </div>
    </div>
  );
}
