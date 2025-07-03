"use client"; // 1. Tandai sebagai Client Component

import { addTransaction } from "@/lib/action";
// Komponen ini TIDAK perlu async, karena tidak fetch data
export default function AddTransactionPage() {
  // Logika form dan Server Action akan kita tambahkan di sini nanti
  
  return (
    <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
        Tambah Transaksi Baru
      </h1>
      <form className="space-y-6" action={addTransaction}>
        {/* Input untuk Tipe */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-300">Tipe</label>
          <select 
            id="type"
            name="type" // 2. 'name' sangat penting untuk Server Action
            required
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
          >
            <option value="pemasukan">Pemasukan</option>
            <option value="pengeluaran">Pengeluaran</option>
          </select>
        </div>
        
        {/* Input untuk Deskripsi */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300">Deskripsi</label>
          <input 
            type="text" 
            id="description"
            name="description" // 'name' sangat penting
            required
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
          />
        </div>

        {/* Input untuk Jumlah */}
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-300">Jumlah (Rp)</label>
          <input 
            type="number" 
            id="amount" 
            name="amount" // 'name' sangat penting
            required
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
          />
        </div>

        <div>
          <button 
            type="submit" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            Simpan Transaksi
          </button>
        </div>
      </form>
    </div>
  );
}