import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import books from '../../data/books/index'
import useAppStore from '../../core/store/useAppStore'
import SceneReader from './SceneReader'
import MiniGameRouter from '../minigames/MiniGameRouter'

export default function Reader() {
  const { bookId, chapterId } = useParams()
  const navigate = useNavigate()
  const { updateProgress, completeChapter, getChapterProgress } = useAppStore()

  const book = books.find(b => b.id === bookId)
  const chapter = book?.chapters.find(c => c.id === chapterId)

  const savedProgress = getChapterProgress(chapterId)
  const [sectionIdx, setSectionIdx] = useState(savedProgress.sectionIdx || 0)
  const [gameResult, setGameResult] = useState(null)
  const [chapterDone, setChapterDone] = useState(false)

  if (!book || !chapter) return (
    <div style={styles.container}>
      <p style={{ color: '#94a3b8' }}>Capítulo no encontrado.</p>
    </div>
  )

  const currentSection = chapter.sections[sectionIdx]
  const totalSections = chapter.sections.length
  const progress = ((sectionIdx) / totalSections) * 100

  const handleSectionComplete = (result = null) => {
    if (result) setGameResult(result)

    const nextIdx = sectionIdx + 1
    if (nextIdx >= totalSections) {
      const stars = result ? result.stars : 2
      completeChapter(chapterId, stars)
      setChapterDone(true)
    } else {
      updateProgress(chapterId, { status: 'in_progress', sectionIdx: nextIdx })
      setSectionIdx(nextIdx)
    }
  }

  if (chapterDone) return (
    <div style={styles.container}>
      <div style={styles.complete}>
        <span style={styles.completeEmoji}>🎉</span>
        <h2 style={styles.completeTitle}>¡Capítulo completado!</h2>
        <p style={styles.completeSubtitle}>{chapter.title}</p>
        {gameResult && (
          <div style={styles.resultStars}>
            {[1, 2, 3].map(s => (
              <span key={s} style={{
                fontSize: '36px',
                opacity: s <= gameResult.stars ? 1 : 0.2,
                transition: 'opacity 0.3s'
              }}>⭐</span>
            ))}
          </div>
        )}
        <div style={styles.completeButtons}>
          <button
            style={styles.btnPrimary}
            onClick={() => navigate(`/book/${bookId}`)}
          >
            Siguiente capítulo →
          </button>
          <button
            style={styles.btnSecondary}
            onClick={() => navigate('/')}
          >
            Ir al inicio
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div style={styles.container}>
      {/* Barra de progreso */}
      <div style={styles.progressBar}>
        <div style={styles.progressHeader}>
          <button style={styles.exitBtn} onClick={() => navigate(`/book/${bookId}`)}>✕</button>
          <div style={styles.progressTrack}>
            <div style={{ ...styles.progressFill, width: `${progress}%` }} />
          </div>
          <span style={styles.progressText}>{sectionIdx + 1}/{totalSections}</span>
        </div>
      </div>

      {/* Contenido de la sección */}
      <div style={styles.content}>
        {currentSection.type === 'story' && (
          <SceneReader
            scenes={currentSection.content.scenes}
            onComplete={handleSectionComplete}
          />
        )}
        {currentSection.type === 'game' && (
          <MiniGameRouter
            config={currentSection.content}
            onComplete={handleSectionComplete}
          />
        )}
      </div>
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#0f172a',
    overflow: 'hidden',
  },
  progressBar: {
    padding: '12px 16px',
    background: '#1e293b',
    flexShrink: 0,
  },
  progressHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  exitBtn: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    fontSize: '18px',
    cursor: 'pointer',
    padding: '4px',
  },
  progressTrack: {
    flex: 1,
    height: '8px',
    background: '#334155',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: '#f59e0b',
    borderRadius: '4px',
    transition: 'width 0.4s ease',
  },
  progressText: {
    fontSize: '12px',
    color: '#64748b',
    minWidth: '32px',
    textAlign: 'right',
  },
  content: {
    flex: 1,
    overflow: 'hidden',
  },
  complete: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '32px',
    gap: '16px',
    textAlign: 'center',
  },
  completeEmoji: {
    fontSize: '80px',
  },
  completeTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#ffffff',
    margin: 0,
  },
  completeSubtitle: {
    fontSize: '16px',
    color: '#94a3b8',
    margin: 0,
  },
  resultStars: {
    display: 'flex',
    gap: '8px',
    margin: '8px 0',
  },
  completeButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '100%',
    maxWidth: '280px',
    marginTop: '16px',
  },
  btnPrimary: {
    background: '#f59e0b',
    color: '#000000',
    border: 'none',
    borderRadius: '14px',
    padding: '14px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  btnSecondary: {
    background: '#1e293b',
    color: '#ffffff',
    border: 'none',
    borderRadius: '14px',
    padding: '14px 24px',
    fontSize: '16px',
    cursor: 'pointer',
  },
}