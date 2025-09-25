import { index, store, destroy } from "./controller.js";
const main = () => {
  index();

  // penambahan 2 data baru
  store({ nama: "Parker", umur: 20, alamat: "Jl. Mawar 11", email: "parker11@mail.com" });
  store({ nama: "Danvers", umur: 35, alamat: "Jl. Mawar 12", email: "danvers12@mail.com" });

  // oenampilan data setelah ditambah
  console.log("\n--- Setelah tambah data ---");
  index();

  // hapus data terakhir
  destroy();

  // tampilkan data setelah dihapus
  console.log("\n--- Setelah hapus data ---");
  index();
};

main();