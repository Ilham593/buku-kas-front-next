import EditForm from "@/components/EditForm";
import { getTransactionById } from "@/lib/data";

// Pastikan komponen ini adalah 'async'
export default async function EditTransactionPage({ params }) { 
  const { id } = params; // Ini akan tetap berfungsi jika komponen
  const transaction = await getTransactionById(id);

  // Jika transaksi tidak ditemukan, tampilkan pesan
  if (!transaction) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <p className="text-white text-xl">Transaksi tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <EditForm transaction={transaction} />
    </div>
  );
}