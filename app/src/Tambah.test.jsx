import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, expect, test, vi, afterEach } from 'vitest'
import App from './App.jsx'
const DATA = [{ id: '1', judul: 'Ayam Betutu', kategori: 'Makanan Utama', daerahAsal: 'Bali', waktuMasak: '180', tingkatKesulitan: 'Sulit' }]

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify(DATA))))
})

afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
})

function buka(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

test('menampilkan data hasil fetch di halaman koleksi', async () => {
  buka('/koleksi')
  expect(await screen.findByText('Ayam Betutu')).toBeInTheDocument()
})

test('form menolak judul kosong', async () => {
  buka('/tambah')
  await userEvent.click(screen.getByRole('button', { name: 'Simpan' }))
  expect(screen.getByRole('alert')).toHaveTextContent('Judul wajib diisi, minimal 3 karakter.')
})

test('menampilkan alert hapus saat menghapus item', async () => {
  const confirm = vi.spyOn(window, 'confirm').mockReturnValue(true)
  buka('/koleksi/1')
  await userEvent.click(await screen.findByRole('button', { name: 'Hapus' }))
  expect(confirm).toHaveBeenCalledWith('Hapus "Ayam Betutu"?')
})

test('statistik menampilkan jumlah resep per kategori', async () => {
  buka('/statistik')
  expect(await screen.findByText('Makanan Utama')).toBeInTheDocument()
})