"use client";

import { useState } from "react";
import { UserPlus, MoreHorizontal, X, Mail } from "lucide-react";
import styles from "./page.module.scss";

// Wersja MVP: Mockujemy dane zespołu
const INITIAL_TEAM = [
  {
    id: 1,
    firstName: "Jan",
    lastName: "Kowalski",
    email: "jan.kowalski@spletio.pl",
    role: "admin",
    status: "active",
  },
  {
    id: 2,
    firstName: "Anna",
    lastName: "Nowak",
    email: "anna.nowak@spletio.pl",
    role: "recruiter",
    status: "active",
  },
  {
    id: 3,
    firstName: "Michał",
    lastName: "Wiśniewski",
    email: "michal.w@spletio.pl",
    role: "reviewer",
    status: "pending",
  },
];

export default function TeamPage() {
  const [team, setTeam] = useState(INITIAL_TEAM);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Stany formularza zaproszenia
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("recruiter");

  const getInitials = (first: string, last: string) => {
    return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
  };

  const getRoleBadgeClass = (role: string) => {
    switch(role) {
      case "admin": return styles.admin;
      case "recruiter": return styles.recruiter;
      case "reviewer": return styles.reviewer;
      default: return "";
    }
  };

  const getRoleLabel = (role: string) => {
    switch(role) {
      case "admin": return "Administrator";
      case "recruiter": return "Rekruter";
      case "reviewer": return "AI Reviewer";
      default: return role;
    }
  };

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    // Dodajemy fałszywego użytkownika do listy na podstawie maila
    const namePart = inviteEmail.split("@")[0];
    const newMember = {
      id: Date.now(),
      firstName: namePart,
      lastName: "(Zaproszony)",
      email: inviteEmail,
      role: inviteRole,
      status: "pending",
    };
    
    setTeam([...team, newMember]);
    setIsModalOpen(false);
    setInviteEmail("");
    setInviteRole("recruiter");
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Zespół</h1>
          <p className={styles.subtitle}>Zarządzaj dostępem współpracowników do systemu.</p>
        </div>
        
        <button className={styles.primaryButton} onClick={() => setIsModalOpen(true)}>
          <UserPlus size={18} />
          Zaproś członka
        </button>
      </header>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Użytkownik</th>
              <th>Rola</th>
              <th>Status</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {team.map((member) => (
              <tr key={member.id}>
                <td>
                  <div className={styles.userCell}>
                    <div className={styles.avatar}>
                      {getInitials(member.firstName, member.lastName)}
                    </div>
                    <div className={styles.userInfo}>
                      <span className={styles.userName}>{member.firstName} {member.lastName}</span>
                      <span className={styles.userEmail}>{member.email}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`${styles.roleBadge} ${getRoleBadgeClass(member.role)}`}>
                    {getRoleLabel(member.role)}
                  </span>
                </td>
                <td>
                  <span className={`${styles.statusBadge} ${member.status === 'active' ? styles.active : styles.pending}`}>
                    {member.status === 'active' ? 'Aktywny' : 'Oczekujący'}
                  </span>
                </td>
                <td>
                  <button className={styles.actionBtn} aria-label="Opcje">
                    <MoreHorizontal size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL ZAPROSZENIA */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Zaproś do zespołu</h2>
              <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleInvite}>
              <div className={styles.modalBody}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Adres E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="np. marta@firma.pl" 
                    required 
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="role">Rola w systemie</label>
                  <select 
                    id="role" 
                    value={inviteRole}
                    onChange={(e) => setInviteRole(e.target.value)}
                  >
                    <option value="recruiter">Rekruter (Pełen dostęp do ofert)</option>
                    <option value="reviewer">AI Reviewer (Tylko przegląd CV)</option>
                    <option value="admin">Administrator (Dostęp do ustawień)</option>
                  </select>
                </div>
              </div>
              
              <div className={styles.modalFooter}>
                <button type="button" className={styles.cancelBtn} onClick={() => setIsModalOpen(false)}>
                  Anuluj
                </button>
                <button type="submit" className={styles.submitBtn}>
                  Wyślij Zaproszenie
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
