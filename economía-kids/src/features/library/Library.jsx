import { useNavigate } from 'react-router-dom'
import books from '../../data/books/index'
import useAppStore from '../../core/store/useAppStore'

export default function Library() {
  const navigate = useNavigate()
  const { getChapterProgress } = useAppStore()

  const getBookProgress = (book) => {
    const total = book.chapters.length
    const completed = book.chapters.filter(ch =>
      getChapterProgress(ch.id).status === 'completed'
    ).length
    return Math.round((completed / total) * 100)
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.back} onClick={() => navigate('/')}>← Volver</button>
        <h1 style={styles.title}>Biblioteca</h1>
        <div style={{ width: 60 }} />
      </div>

      <div style={styles.list}>
        {books.map(book => {
          const progress = getBookProgress(book)
          return (
            <div key={book.id} style={styles.bookCard} onClick={() => navigate(`/book/${book.id}`)}>
              <div style={{ ...styles.bookCover, background: book.coverColor }}>
                <span style={styles.bookEmoji}>📘</span>
              </div>
              <div style={styles.bookInfo}>
                <h2 style={styles.bookTitle}>{book.title}</h2>
                <p style={styles.bookDesc}>{book.description}</p>
                <div style={styles.bookMeta}>
                  <span style={styles.tag}>🎯 {book.economyTopic}</span>
                  <span style={styles.tag}>👦 {book.ageRange} años</span>
                </div>
                <div style={styles.progressBar}>
                  <div style={{ ...styles.progressFill, width: `${progress}%` }} />
                </div>
                <p style={styles.progressText}>{progress}% completado</p>
              </div>
            </div>
          )
        })}

        {[...Array(3)].map((_, i) => (
          <div key={i} style={{ ...styles.bookCard, opacity: 0.4 }}>
            <div style={{ ...styles.bookCover, background: '#c5e0f5' }}>
              <span style={styles.bookEmoji}>🔒</span>
            </div>
            <div style={styles.bookInfo}>
              <h2 style={styles.bookTitle}>Próximamente...</h2>
              <p style={styles.bookDesc}>Nuevo libro en camino</p>
            </div>
          </div>
        ))}
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
    background: '#dbeeff',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '28px',
  },
  back: {
    background: 'none',
    border: 'none',
    color: '#4a9edd',
    fontSize: '15px',
    cursor: 'pointer',
    fontWeight: '800',
  },
  title: {
    fontSize: '20px',
    fontWeight: '900',
    color: '#1a3a5c',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  bookCard: {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '16px',
    display: 'flex',
    gap: '16px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
  },
  bookCover: {
    width: '80px',
    height: '100px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  bookEmoji: {
    fontSize: '36px',
  },
  bookInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  bookTitle: {
    fontSize: '16px',
    fontWeight: '900',
    color: '#1a3a5c',
    margin: 0,
  },
  bookDesc: {
    fontSize: '12px',
    color: '#5a8ab0',
    margin: 0,
    lineHeight: '1.4',
    fontWeight: '600',
  },
  bookMeta: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  tag: {
    background: '#dbeeff',
    color: '#4a9edd',
    fontSize: '11px',
    padding: '3px 8px',
    borderRadius: '8px',
    fontWeight: '700',
  },
  progressBar: {
    height: '6px',
    background: '#dbeeff',
    borderRadius: '3px',
    overflow: 'hidden',
    marginTop: '4px',
  },
  progressFill: {
    height: '100%',
    background: '#4a9edd',
    borderRadius: '3px',
    transition: 'width 0.3s',
  },
  progressText: {
    fontSize: '11px',
    color: '#5a8ab0',
    margin: 0,
    fontWeight: '700',
  },
}