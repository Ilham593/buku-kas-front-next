export async function getTransactions() {
  try {
    const response = await fetch(process.env.API_URL, {
      cache: "no-store", //memastikan data selalu baru
    });

    if (!response.ok) {
      throw new Error("gagal mengambil data transaksi");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("error getTransactions", error);
    return [];
  }
}
