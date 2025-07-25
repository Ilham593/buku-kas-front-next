"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addTransaction(formData) {
  // ambil data dari form
  const newTransaction = {
    type: formData.get("type"),
    description: formData.get("description"),
    amount: Number(formData.get("amount")),
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

export async function deleteTransaction(id) {
  try {
    const re = await fetch(`${process.env.API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!re.ok) {
      throw new Error("Gagal menghapus transaksi, respons backend tidak OK.");
    }
  } catch (error) {
    console.log("error deleteTransaction", error);
    return;
  }

  revalidatePath("/");
}



export async function updateTransaction(id, formData) {
  // ambil data dari form
  const updateData = {
    type: formData.get("type"),
    description: formData.get("description"),
    amount: Number(formData.get("amount")),
  };
  try {
    const re = await fetch(`${process.env.API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    console.log("berhasil memperbarui transaksi", re.status, re.statusText);

    if (!re.ok) {
      // Jika backend merespons dengan error, kita coba lihat body-nya
      const errorBody = await re.json();
      console.error("Error dari Backend:", errorBody);
      throw new Error("Gagal memperbarui transaksi, respons backend tidak OK.");
    }
  } catch (error) {
    console.log("error updateTransaction", error);
    return;
  }

  revalidatePath("/");
  redirect("/");
}
