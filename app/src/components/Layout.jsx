import { Outlet } from 'react-router-dom'
import './Layout.css'
import Navigasi from './Navigasi.jsx'


export default function Layout() {
  return (
    <div className="kerangka">
      <header className="kepala">
        <strong>Nusantara Recipes</strong>
        <Navigasi />
      </header>
      <main className="isi">
        <Outlet />
      </main>
      <footer className="kaki">Ujian Tengah Semester Pengembangan Aplikasi Web</footer>
    </div>
  )
}