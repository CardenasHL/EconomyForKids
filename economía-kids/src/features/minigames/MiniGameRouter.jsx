export default function MiniGameRouter({ config, onComplete }) {
  return (
    <div style={{ padding: 32, textAlign: 'center', color: '#fff' }}>
      <p>🎮 Minijuego: {config.gameType}</p>
      <button
        onClick={() => onComplete({ stars: 3, score: 100 })}
        style={{
          marginTop: 24,
          background: '#f59e0b',
          border: 'none',
          borderRadius: 12,
          padding: '12px 24px',
          fontSize: 16,
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Completar juego (temporal)
      </button>
    </div>
  )
}