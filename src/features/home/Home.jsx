import { useNavigate } from 'react-router-dom'
import useAppStore from '../../core/store/useAppStore'

export default function Home() {
  const navigate = useNavigate()
  const { student } = useAppStore()

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.greeting}>
          <span style={styles.avatar}>{student.avatar}</span>
          <div>
            <p style={styles.greetingSmall}>¡Hola de nuevo!</p>
            <h1 style={styles.greetingName}>{student.name}</h1>
          </div>
        </div>
        <div style={styles.coins}>
          <span style={styles.coinIcon}>🪙</span>
          <span style={styles.coinAmount}>{student.coins}</span>
        </div>
      </div>

      {/* Hero */}
      <div style={styles.hero}>
        <div style={styles.heroText}>
          <h2 style={styles.heroTitle}>Aprende economía</h2>
          <p style={styles.heroSubtitle}>Aventuras, historias y juegos para entender el dinero</p>
          <button style={styles.heroButton} onClick={() => navigate('/library')}>
            Ver biblioteca →
          </button>
        </div>
        <div style={styles.heroEmoji}>📚</div>
      </div>

      {/* Accesos rápidos */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>¿Qué quieres hacer?</h3>
        <div style={styles.cards}>
          <div style={styles.card} onClick={() => navigate('/library')}>
            <span style={styles.cardIcon}>📖</span>
            <span style={styles.cardLabel}>Biblioteca</span>
          </div>
          <div style={styles.card} onClick={() => navigate('/progress')}>
            <span style={styles.cardIcon}>⭐</span>
            <span style={styles.cardLabel}>Mi progreso</span>
          </div>
          <div style={{...styles.card, opacity: 0.5}}>
            <span style={styles.cardIcon}>🏆</span>
            <span style={styles.cardLabel}>Logros</span>
          </div>
          <div style={{...styles.card, opacity: 0.5}}>
            <span style={styles.cardIcon}>🛍️</span>
            <span style={styles.cardLabel}>Tienda</span>
          </div>
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
  },
  greeting: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  avatar: {
    fontSize: '40px',
  },
  greetingSmall: {
    fontSize: '13px',
    color: '#5a8ab0',
    margin: 0,
    fontWeight: '600',
  },
  greetingName: {
    fontSize: '20px',
    fontWeight: '900',
    color: '#1a3a5c',
    margin: 0,
  },
  coins: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: '#ffffff',
    padding: '8px 14px',
    borderRadius: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  coinIcon: {
    fontSize: '20px',
  },
  coinAmount: {
    fontSize: '18px',
    fontWeight: '900',
    color: '#f5a623',
  },
  hero: {
    background: 'linear-gradient(135deg, #4a9edd, #7b5ea7)',
    borderRadius: '24px',
    padding: '28px',
    marginBottom: '32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 8px 24px rgba(74,158,221,0.35)',
  },
  heroText: {
    flex: 1,
  },
  heroTitle: {
    fontSize: '22px',
    fontWeight: '900',
    color: '#ffffff',
    margin: '0 0 8px 0',
  },
  heroSubtitle: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.85)',
    margin: '0 0 16px 0',
    lineHeight: '1.5',
    fontWeight: '600',
  },
  heroButton: {
    background: '#f5a623',
    color: '#ffffff',
    border: 'none',
    borderRadius: '50px',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '800',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(245,166,35,0.4)',
  },
  heroEmoji: {
    fontSize: '64px',
    marginLeft: '16px',
  },
  section: {
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '15px',
    fontWeight: '800',
    color: '#5a8ab0',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  },
  card: {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
    transition: 'transform 0.2s',
  },
  cardIcon: {
    fontSize: '32px',
  },
  cardLabel: {
    fontSize: '14px',
    fontWeight: '800',
    color: '#1a3a5c',
  },
}