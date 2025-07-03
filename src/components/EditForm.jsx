"use client";

import { updateTransaction } from "@/lib/action";

export default function EditForm({ transaction }) {
  // Bind ID transaksi ke server action
  const updateTransactionWithId = updateTransaction.bind(null, transaction._id);

  return (
    <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
        Edit Transaksi
      </h1>
      <form action={updateTransactionWithId} className="space-y-6">
        {/* Input Tipe */}
        <select name="type" defaultValue={transaction.type} className="..." >
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>
        {/* Input Deskripsi */}
        <input type="text" name="description" defaultValue={transaction.description} className="..." />
        {/* Input Amount */}
        <input type="number" name="amount" defaultValue={transaction.amount} className="..." />
        {/* Tombol Simpan */}
        <button type="submit" className="...">Simpan Perubahan</button>
      </form>
    </div>
  );
}