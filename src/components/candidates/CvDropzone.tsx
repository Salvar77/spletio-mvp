"use client";
import { useState } from "react";
import { UploadCloud, FileType2 } from "lucide-react";
import styles from "./CvDropzone.module.scss";

export default function CvDropzone() {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...droppedFiles]);
      // Docelowo: wywołanie endpointu API z naszym AI Routerem
    }
  };

  return (
    <div className={styles.container}>
      <div 
        className={`${styles.dropzone} ${isDragging ? styles.dragging : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <UploadCloud size={48} className={styles.icon} />
        <div className={styles.textWrap}>
          <h3>Wgraj dokumenty (CV)</h3>
          <p>Przeciągnij i upuść pliki PDF tutaj, aby sztuczna inteligencja automatycznie wyciągnęła dane kandydata.</p>
        </div>
        <button className={styles.uploadButton}>
          Wybierz pliki z dysku
        </button>
      </div>

      {files.length > 0 && (
        <div className={styles.fileList}>
          <h4>Gotowe do przetworzenia przez AI:</h4>
          <ul>
            {files.map((f, idx) => (
              <li key={idx}>
                <FileType2 size={16} className={styles.fileIcon} />
                <span className={styles.fileName}>{f.name}</span>
                <span className={styles.fileStatus}>Oczekuje...</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
