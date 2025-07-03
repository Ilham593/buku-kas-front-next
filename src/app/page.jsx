import { getTransactions } from "@/lib/data";
export default async function Home() {
  const transactions = await getTransactions();
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-900">
      <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6 text-center">
          Daftar Transaksi
        </h1>
        <ul className="text-white space-y-3">
          {transactions.map((t) => (
            <li
              key={t._id}
              className="flex justify-between items-center bg-gray-700 p-3 rounded-md"
            >
              <div>
                <span className="font-semibold block">{t.description}</span>
                <span
                  className={
                    t.type === "pemasukan" ? "text-green-400" : "text-red-400"
                  }
                >
                  Rp{t.amount.toLocaleString("id-ID")}
                </span>
              </div>
              {/* Tombol Edit & Hapus akan kita tambahkan nanti */}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
