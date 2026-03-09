import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../features/home/Home'
import Library from '../features/library/Library'
import BookDetail from '../features/library/BookDetail'
import Reader from '../features/reader/Reader'
import Progress from '../features/progress/Progress'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<Library />} />
      <Route path="/book/:bookId" element={<BookDetail />} />
      <Route path="/reader/:bookId/:chapterId" element={<Reader />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}