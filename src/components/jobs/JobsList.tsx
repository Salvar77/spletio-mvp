"use client";

import { MoreHorizontal, Users, MapPin, Briefcase } from "lucide-react";
import styles from "./JobsList.module.scss";
import { useRouter } from "next/navigation";

const mockJobs = [
  { id: 1, title: "Senior React Developer", department: "Engineering", location: "Zdalnie", type: "B2B", candidates: 12, status: "Aktywna" },
  { id: 2, title: "UX/UI Designer", department: "Product", location: "Warszawa", type: "UoP", candidates: 5, status: "Aktywna" },
  { id: 3, title: "Marketing Manager", department: "Marketing", location: "Kraków", type: "B2B", candidates: 0, status: "Szkic" },
];

export default function JobsList() {
  const router = useRouter();

  const handleRowClick = (id: number) => {
    // router.push(`/jobs/${id}`); // W przyszłości tu będzie szczegół oferty
  };

  return (
    <div className={styles.grid}>
      {mockJobs.map((job) => (
        <div key={job.id} className={styles.card} onClick={() => handleRowClick(job.id)}>
          <div className={styles.header}>
            <span className={`${styles.badge} ${job.status === "Aktywna" ? styles.active : styles.draft}`}>
              {job.status}
            </span>
            <button className={styles.actionBtn}>
              <MoreHorizontal size={20} />
            </button>
          </div>
          
          <div className={styles.content}>
            <h3 className={styles.title}>{job.title}</h3>
            <p className={styles.department}>{job.department}</p>
            
            <div className={styles.details}>
              <span className={styles.detailItem}><MapPin size={14} /> {job.location}</span>
              <span className={styles.detailItem}><Briefcase size={14} /> {job.type}</span>
            </div>
          </div>
          
          <div className={styles.footer}>
            <div className={styles.candidates}>
              <Users size={16} />
              <span>{job.candidates} Kandydatów</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
