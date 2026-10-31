export default function KategoriFilter({ kategori, setKategori, daftarKategori }) {
    return (
        <select aria-label="Kategori" value={kategori} onChange={(e) => setKategori(e.target.value)}>
          {daftarKategori.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
        ) 
    }