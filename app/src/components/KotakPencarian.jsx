export default function KotakPencarian({ nilai, onUbah }) {
  return (
    <input
      id="kotak-cari"
      type="search"
      placeholder="Cari resep..."
      aria-label="Cari resep"
      value={nilai}
      onChange={(e) => onUbah(e.target.value)}
    />
  )
}