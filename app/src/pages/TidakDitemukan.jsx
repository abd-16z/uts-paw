// Buat tujuh berkas ini di src/pages/ dengan isi sementara seperti ini.
// Isinya diganti satu per satu saat mengikuti panduan setiap halaman.
import { Link } from 'react-router-dom'

export default function TidakDitemukan() {
  return (
    <section>
      <h1>404</h1>
      <p>Halaman tidak ditemukan.</p>
      <Link to="/">Kembali ke beranda</Link>
    </section>
  )
}