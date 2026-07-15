import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "./CandidatesList.module.scss";

const mockCandidates = [
  { id: 1, name: "Anna Nowak", role: "Frontend Developer", aiScore: 92, status: "Rozmowa" },
  { id: 2, name: "Jan Kowalski", role: "Backend Developer", aiScore: 85, status: "Nowy" },
  { id: 3, name: "Krystian P.", role: "UX Designer", aiScore: 78, status: "Odrzucony" },
];

export default function CandidatesList() {
  const router = useRouter();

  const handleRowClick = (id: number) => {
    router.push(`/candidates/${id}`);
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Kandydat</th>
            <th>Stanowisko</th>
            <th>Ocena AI</th>
            <th>Status</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {mockCandidates.map((c) => (
            <tr key={c.id} onClick={() => handleRowClick(c.id)} style={{ cursor: "pointer" }}>
              <td data-label="Kandydat" className={styles.name}>{c.name}</td>
              <td data-label="Stanowisko" className={styles.role}>{c.role}</td>
              <td data-label="Ocena AI">
                <span className={`${styles.score} ${c.aiScore >= 90 ? styles.high : c.aiScore >= 80 ? styles.medium : styles.low}`}>
                  {c.aiScore}%
                </span>
              </td>
              <td data-label="Status">
                <span className={`${styles.statusBadge} ${styles[c.status.toLowerCase()] || ""}`}>
                  {c.status}
                </span>
              </td>
              <td data-label="Akcje" className={styles.actions}>
                <button className={styles.actionButton}><MoreHorizontal size={16} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
