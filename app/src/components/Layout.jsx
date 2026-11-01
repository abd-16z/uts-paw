import { Outlet } from 'react-router-dom'
import './Layout.css'
import Navigasi from './Navigasi.jsx'


export default function Layout() {
  return (
    <div className="kerangka">
      <header id="kepala-web" className="kepala">
        <strong>Nusantara Recipes</strong>
        <Navigasi />
      </header>
      <main id="isi-web" className="isi">
        <Outlet />
      </main>
      <footer id="kaki-web" className="kaki">Ujian Tengah Semester Pengembangan Aplikasi Web</footer>
    </div>
  )
}