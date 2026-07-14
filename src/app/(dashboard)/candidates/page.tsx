import CvDropzone from "@/components/candidates/CvDropzone";
import CandidatesList from "@/components/candidates/CandidatesList";
import styles from "./page.module.scss";

export default function CandidatesPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Kandydaci</h1>
          <p className={styles.subtitle}>Baza wszystkich kandydatów i strefa wgrywania CV.</p>
        </div>
      </header>

      <div className={styles.dropzoneSection}>
        <CvDropzone />
      </div>

      <div className={styles.listSection}>
        <div className={styles.listHeader}>
          <h2>Baza Kandydatów (3)</h2>
          {/* Docelowo tutaj będzie input wyszukiwarki i filtry */}
        </div>
        <CandidatesList />
      </div>
    </div>
  );
}
