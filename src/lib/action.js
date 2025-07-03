"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addTransaction(formData) {
  // ambil data dari form
  const newTransaction = {
    type: formData.get("type"),
    description: Number(formData.get("description")),
    amount: formData.get("amount"),
  };
  console.log(newTransaction);
  try {
    const re = await fetch(process.env.API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    });

    console.log("berhasil menambahkan transaksi", re.status, re.statusText);

    if (!re.ok) {
      // Jika backend merespons dengan error, kita coba lihat body-nya
      const errorBody = await re.json();
      console.error("Error dari Backend:", errorBody);
      throw new Error("Gagal menambah transaksi, respons backend tidak OK.");
    }
  } catch (error) {
    console.log("error addTransaction", error);
    return;
  }

  revalidatePath("/");
  return redirect("/");
}
