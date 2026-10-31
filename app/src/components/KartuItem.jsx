import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, daerahAsal, waktuMasak, tingkatKesulitan } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        {kategori} | Daerah Asal : {daerahAsal} | Waktu Masak : {waktuMasak} | Tingkat Kesulitan : {tingkatKesulitan}
      </p>
    </article>
  )
}