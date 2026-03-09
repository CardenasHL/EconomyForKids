import { create } from 'zustand'

const useAppStore = create((set, get) => ({
  // Alumno
  student: {
    name: 'Explorador',
    avatar: '🧒',
    coins: 0,
  },

  // Progreso por capítulo: { [chapterId]: { status, stars, sectionIdx, sceneIdx } }
  progress: {},

  // Acciones
  addCoins: (amount) => set((state) => ({
    student: { ...state.student, coins: state.student.coins + amount }
  })),

  updateProgress: (chapterId, data) => set((state) => ({
    progress: {
      ...state.progress,
      [chapterId]: { ...state.progress[chapterId], ...data }
    }
  })),

  getChapterProgress: (chapterId) => {
    const p = get().progress[chapterId]
    return p || { status: 'not_started', stars: 0, sectionIdx: 0, sceneIdx: 0 }
  },

  completeChapter: (chapterId, stars) => {
    const coinsMap = { 1: 10, 2: 20, 3: 30 }
    set((state) => ({
      progress: {
        ...state.progress,
        [chapterId]: { status: 'completed', stars, sectionIdx: 0, sceneIdx: 0 }
      },
      student: {
        ...state.student,
        coins: state.student.coins + (coinsMap[stars] || 10) + 50
      }
    }))
  }
}))

export default useAppStore