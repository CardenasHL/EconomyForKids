import { useState, useEffect, useRef } from 'react'

const CHARACTER_COLORS = {
  'Chata':       { bg: '#E8F5E9', border: '#4CAF50', name: '#2E7D32' },
  'Tacho':       { bg: '#E3F2FD', border: '#2196F3', name: '#1565C0' },
  'Abuela Patro':{ bg: '#F3E5F5', border: '#9C27B0', name: '#6A1B9A' },
  'Quisqui':     { bg: '#FFF8E1', border: '#FF9800', name: '#E65100' },
  'Narrador':    { bg: '#F5F5F5', border: '#9E9E9E', name: '#424242' },
  'default':     { bg: '#E3F2FD', border: '#4a9edd', name: '#1a3a5c' },
}

export default function SceneReader({ scenes, onComplete }) {
  const [sceneIdx, setSceneIdx]       = useState(0)
  const [dialogueIdx, setDialogueIdx] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping]       = useState(true)
  const audioRef  = useRef(null)
  const typingRef = useRef(null)

  const currentScene    = scenes[sceneIdx]
  const currentDialogue = currentScene.dialogue[dialogueIdx]
  const isLastScene     = sceneIdx === scenes.length - 1
  const isLastDialogue  = dialogueIdx === currentScene.dialogue.length - 1
  const colors = CHARACTER_COLORS[currentDialogue.characterName] || CHARACTER_COLORS.default

  // Typewriter
  useEffect(() => {
    setDisplayedText('')
    setIsTyping(true)
    let i = 0
    clearInterval(typingRef.current)
    typingRef.current = setInterval(() => {
      if (i < currentDialogue.text.length) {
        setDisplayedText(currentDialogue.text.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingRef.current)
        setIsTyping(false)
      }
    }, 28)
    return () => clearInterval(typingRef.current)
  }, [sceneIdx, dialogueIdx])

  // Audio
  useEffect(() => {
    if (currentDialogue.audioUrl && audioRef.current) {
      audioRef.current.src = currentDialogue.audioUrl
      audioRef.current.play().catch(() => {})
    }
  }, [sceneIdx, dialogueIdx])

  const handleNext = () => {
    if (isTyping) {
      clearInterval(typingRef.current)
      setDisplayedText(currentDialogue.text)
      setIsTyping(false)
      return
    }
    if (!isLastDialogue) {
      setDialogueIdx(dialogueIdx + 1)
    } else if (!isLastScene) {
      setSceneIdx(sceneIdx + 1)
      setDialogueIdx(0)
    } else {
      onComplete()
    }
  }

  const totalDialogues = scenes.reduce((acc, s) => acc + s.dialogue.length, 0)
  const currentTotal   = scenes.slice(0, sceneIdx).reduce((acc, s) => acc + s.dialogue.length, 0) + dialogueIdx + 1
  const globalProgress = (currentTotal / totalDialogues) * 100

  return (
    <div style={styles.container} onClick={handleNext}>
      <audio ref={audioRef} />

      {/* Fondo */}
      <div style={styles.bgWrapper}>
        {currentScene.backgroundImage
          ? <img src={currentScene.backgroundImage} alt="" style={styles.bgImage} />
          : <div style={styles.bgFallback} />
        }
        {/* Overlay suave */}
        <div style={styles.bgOverlay} />
      </div>

      {/* Personaje */}
      {currentScene.character && (
        <div style={styles.charWrapper}>
          <img
            src={currentScene.character}
            alt={currentDialogue.characterName}
            style={styles.charImage}
            onError={e => { e.target.style.display = 'none' }}
          />
        </div>
      )}

      {/* Barra de progreso de escenas */}
      <div style={styles.sceneDotsBar}>
        {scenes.map((_, i) => (
          <div key={i} style={{
            ...styles.sceneDot,
            background: i < sceneIdx ? '#4CAF50' : i === sceneIdx ? '#f5a623' : 'rgba(255,255,255,0.4)',
            width: i === sceneIdx ? '20px' : '8px',
          }} />
        ))}
      </div>

      {/* Caja de diálogo */}
      <div style={{ ...styles.dialogueBox, background: colors.bg, borderTopColor: colors.border }}>

        {/* Nombre del personaje */}
        <div style={{ ...styles.charNameBadge, background: colors.border }}>
          <span style={styles.charNameText}>{currentDialogue.characterName}</span>
          <span style={styles.audioIcon}>🔊</span>
        </div>

        {/* Texto */}
        <p style={styles.dialogueText}>
          {displayedText}
          {isTyping && <span style={styles.cursor}>|</span>}
        </p>

        {/* Footer */}
        <div style={styles.dialogueFooter}>
          <span style={{ ...styles.tapHint, color: colors.name }}>
            {isTyping ? 'Toca para saltar...' : isLastScene && isLastDialogue ? '¡Toca para terminar! ✓' : 'Toca para continuar →'}
          </span>
          <div style={styles.progressMini}>
            <div style={{ ...styles.progressMiniFill, width: `${globalProgress}%`, background: colors.border }} />
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    cursor: 'pointer',
    userSelect: 'none',
    overflow: 'hidden',
  },
  bgWrapper: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  bgFallback: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, #87CEEB 0%, #C8E6C9 100%)',
  },
  bgOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '120px',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.15))',
  },
  charWrapper: {
    position: 'absolute',
    bottom: '185px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    pointerEvents: 'none',
  },
  charImage: {
    height: '210px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.25))',
  },
  sceneDotsBar: {
    position: 'absolute',
    top: '12px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
    zIndex: 10,
  },
  sceneDot: {
    height: '8px',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
  },
  dialogueBox: {
    borderTopWidth: '4px',
    borderTopStyle: 'solid',
    borderRadius: '20px 20px 0 0',
    padding: '16px 20px 20px',
    minHeight: '185px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    zIndex: 3,
    flexShrink: 0,
    boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
  },
  charNameBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '20px',
    padding: '4px 14px',
    alignSelf: 'flex-start',
  },
  charNameText: {
    fontSize: '13px',
    fontWeight: '800',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  audioIcon: {
    fontSize: '14px',
  },
  dialogueText: {
    fontSize: '17px',
    color: '#1a3a5c',
    lineHeight: '1.65',
    margin: 0,
    minHeight: '56px',
    fontWeight: '600',
  },
  cursor: {
    display: 'inline-block',
    animation: 'blink 0.7s infinite',
    color: '#4a9edd',
    fontWeight: '900',
  },
  dialogueFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
  },
  tapHint: {
    fontSize: '12px',
    fontStyle: 'italic',
    fontWeight: '700',
    flexShrink: 0,
  },
  progressMini: {
    flex: 1,
    height: '5px',
    background: 'rgba(0,0,0,0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  progressMiniFill: {
    height: '100%',
    borderRadius: '3px',
    transition: 'width 0.4s ease',
  },
}