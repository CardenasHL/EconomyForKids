import { useNavigate } from 'react-router-dom'
import useAppStore from '../../core/store/useAppStore'

export default function Progress() {
  const navigate = useNavigate()
  const { student, progress } = useAppStore()

  return (
    <div style={{ padding: 24, maxWidth: 480, margin: '0 auto' }}>
      <button
        onClick={() => navigate('/')}
        style={{ background: 'none', border: 'none', color: '#f59e0b', fontSize: 15, cursor: 'pointer', fontWeight: 'bold', marginBottom: 24 }}
      >
        ← Volver
      </button>
      <h1 style={{ color: '#fff', marginBottom: 8 }}>Mi progreso</h1>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>🪙 {student.coins} monedas acumuladas</p>
      {Object.keys(progress).length === 0
        ? <p style={{ color: '#64748b' }}>Todavía no has completado ningún capítulo.</p>
        : Object.entries(progress).map(([id, p]) => (
          <div key={id} style={{ background: '#1e293b', borderRadius: 12, padding: 16, marginBottom: 12 }}>
            <p style={{ color: '#fff', margin: 0 }}>{id}</p>
            <p style={{ color: '#94a3b8', margin: '4px 0 0 0', fontSize: 13 }}>
              Estado: {p.status} · ⭐ {p.stars}
            </p>
          </div>
        ))
      }
    </div>
  )
}