import { useNavigate, useParams } from 'react-router-dom'
import books from '../../data/books/index'
import useAppStore from '../../core/store/useAppStore'

export default function BookDetail() {
  const { bookId } = useParams()
  const navigate = useNavigate()
  const { getChapterProgress } = useAppStore()

  const book = books.find(b => b.id === bookId)

  if (!book) return (
    <div style={styles.container}>
      <p style={{ color: '#94a3b8' }}>Libro no encontrado.</p>
    </div>
  )

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <button style={styles.back} onClick={() => navigate('/library')}>← Biblioteca</button>
      </div>

      {/* Portada */}
      <div style={{ ...styles.cover, background: book.coverColor }}>
        <span style={styles.coverEmoji}>📘</span>
        <h1 style={styles.coverTitle}>{book.title}</h1>
        <p style={styles.coverDesc}>{book.description}</p>
        <div style={styles.coverTags}>
          <span style={styles.tag}>🎯 {book.economyTopic}</span>
          <span style={styles.tag}>👦 {book.ageRange} años</span>
          <span style={styles.tag}>📖 {book.totalChapters} capítulos</span>
        </div>
      </div>

      {/* Capítulos */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Capítulos</h2>
        <div style={styles.chapterList}>
          {book.chapters.map((chapter, index) => {
            const progress = getChapterProgress(chapter.id)
            const isCompleted = progress.status === 'completed'
            const isInProgress = progress.status === 'in_progress'
            const isLocked = index > 0 &&
              getChapterProgress(book.chapters[index - 1].id).status !== 'completed'

            return (
              <div
                key={chapter.id}
                style={{
                  ...styles.chapterCard,
                  opacity: isLocked ? 0.4 : 1,
                  cursor: isLocked ? 'not-allowed' : 'pointer',
                  borderColor: isCompleted ? '#22c55e' : isInProgress ? '#f59e0b' : '#334155'
                }}
                onClick={() => {
                  if (!isLocked) navigate(`/reader/${book.id}/${chapter.id}`)
                }}
              >
                <div style={styles.chapterLeft}>
                  <div style={{
                    ...styles.chapterNumber,
                    background: isCompleted ? '#22c55e' : isInProgress ? '#f59e0b' : '#334155'
                  }}>
                    {isCompleted ? '✓' : isLocked ? '🔒' : index + 1}
                  </div>
                  <div>
                    <h3 style={styles.chapterTitle}>{chapter.title}</h3>
                    <p style={styles.chapterMeta}>
                      ⏱ {chapter.estimatedMinutes} min
                      · {chapter.sections.length} secciones
                    </p>
                  </div>
                </div>
                <div style={styles.chapterRight}>
                  {isCompleted && (
                    <div style={styles.stars}>
                      {[1, 2, 3].map(s => (
                        <span key={s} style={{ opacity: s <= progress.stars ? 1 : 0.3 }}>⭐</span>
                      ))}
                    </div>
                  )}
                  {!isLocked && <span style={styles.arrow}>→</span>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    padding: '24px',
    maxWidth: '480px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '20px',
  },
  back: {
    background: 'none',
    border: 'none',
    color: '#f59e0b',
    fontSize: '15px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  cover: {
    borderRadius: '20px',
    padding: '28px',
    marginBottom: '28px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    textAlign: 'center',
  },
  coverEmoji: {
    fontSize: '56px',
  },
  coverTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#ffffff',
    margin: 0,
  },
  coverDesc: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.8)',
    margin: 0,
    lineHeight: '1.5',
  },
  coverTags: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tag: {
    background: 'rgba(0,0,0,0.2)',
    color: '#ffffff',
    fontSize: '12px',
    padding: '4px 10px',
    borderRadius: '10px',
  },
  section: {
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#94a3b8',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  chapterList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  chapterCard: {
    background: '#1e293b',
    borderRadius: '14px',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '2px solid #334155',
    transition: 'border-color 0.2s',
  },
  chapterLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  chapterNumber: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#ffffff',
    flexShrink: 0,
  },
  chapterTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#ffffff',
    margin: '0 0 4px 0',
  },
  chapterMeta: {
    fontSize: '12px',
    color: '#64748b',
    margin: 0,
  },
  chapterRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '4px',
  },
  stars: {
    fontSize: '14px',
  },
  arrow: {
    color: '#f59e0b',
    fontSize: '18px',
    fontWeight: 'bold',
  },
}