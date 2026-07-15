import { ArrowLeft, BrainCircuit, FileText, CheckCircle2, User, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.scss";

// Mockup danych, które w przyszłości zwróci OpenAI
const mockCandidate = {
  name: "Anna Nowak",
  role: "Frontend Developer",
  status: "Rozmowa",
  aiScore: 92,
  aiReasoning: "Kandydatka posiada 4 lata doświadczenia komercyjnego w React.js oraz TypeScript, co idealnie pokrywa się z głównymi wymaganiami stanowiska. Dodatkowym atutem jest znajomość wzorców projektowych na froncie i udokumentowana praca w środowisku Agile. Brak doświadczenia z AWS jest jedynym minusem, jednak do nadrobienia w 1-2 miesiące.",
  skills: {
    hard: ["React", "TypeScript", "Next.js", "Redux", "SCSS", "Figma"],
    soft: ["Komunikatywność", "Praca w zespole", "Mentoring"]
  },
  experience: [
    { title: "Mid Frontend Developer", company: "TechCorp Sp. z o.o.", years: "2022 - obecnie", description: "Tworzenie i optymalizacja aplikacji w Next.js. Praca z systemami Design Tokens." },
    { title: "Junior React Developer", company: "StartApp", years: "2020 - 2022", description: "Wdrażanie UI na podstawie projektów Figma. Praca z Reduxem." }
  ]
};

export default function CandidateProfilePage({ params }: { params: { id: string } }) {
  // W prawdziwej aplikacji użyjemy params.id do pobrania danych z MongoDB.
  
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.leftNav}>
          <Link href="/candidates" className={styles.backButton}>
            <ArrowLeft size={20} />
            Wróć do bazy
          </Link>
          <div className={styles.candidateIntro}>
            <div className={styles.avatar}>
              <User size={32} />
            </div>
            <div>
              <h1 className={styles.name}>{mockCandidate.name}</h1>
              <p className={styles.role}>{mockCandidate.role}</p>
            </div>
          </div>
        </div>
        
        <div className={styles.headerActions}>
          <span className={styles.statusBadge}>{mockCandidate.status}</span>
          <div className={styles.actionsBox}>
             <button className={styles.primaryBtn}>Przejdź dalej</button>
             <button className={styles.dangerBtn}>Odrzuć</button>
          </div>
        </div>
      </header>

      <div className={styles.gridContainer}>
        {/* LEWA KOLUMNA: ANALIZA AI */}
        <section className={styles.aiPanel}>
          <div className={styles.sectionTitle}>
            <BrainCircuit className={styles.iconAi} />
            <h2>Analiza Sztucznej Inteligencji</h2>
          </div>

          <div className={styles.scoreCard}>
            <div className={styles.scoreCircle}>
              <span className={styles.scoreValue}>{mockCandidate.aiScore}%</span>
              <span className={styles.scoreLabel}>Match</span>
            </div>
            <div className={styles.reasoning}>
              <h3>Uzasadnienie Oceny AI</h3>
              <p>{mockCandidate.aiReasoning}</p>
            </div>
          </div>

          <div className={styles.skillsSection}>
            <div className={styles.skillGroup}>
              <h3><CheckCircle2 size={16} /> Twarde Umiejętności (Wyciągnięte)</h3>
              <div className={styles.tags}>
                {mockCandidate.skills.hard.map(skill => (
                  <span key={skill} className={styles.tagHard}>{skill}</span>
                ))}
              </div>
            </div>
            <div className={styles.skillGroup}>
              <h3><CheckCircle2 size={16} /> Miękkie Umiejętności</h3>
              <div className={styles.tags}>
                {mockCandidate.skills.soft.map(skill => (
                  <span key={skill} className={styles.tagSoft}>{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.experienceSection}>
            <h3><Briefcase size={18} /> Doświadczenie z CV</h3>
            <div className={styles.timeline}>
              {mockCandidate.experience.map((exp, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <h4>{exp.title}</h4>
                    <span className={styles.company}>{exp.company} | {exp.years}</span>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRAWA KOLUMNA: PODGLĄD CV */}
        <section className={styles.cvPreviewPanel}>
          <div className={styles.sectionTitle}>
            <FileText className={styles.iconDoc} />
            <h2>Oryginalny Dokument (CV)</h2>
          </div>
          <div className={styles.pdfContainer}>
            {/* Tutaj docelowo będzie iframe / podgląd fizycznego PDF z AWS S3 */}
            <div className={styles.pdfPlaceholder}>
              <FileText size={48} className={styles.placeholderIcon} />
              <p>Podgląd pliku PDF niedostępny w fazie MVP Demo.</p>
              <span>W przyszłości system załaduje tutaj oryginalne CV kandydata z serwera AWS.</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
