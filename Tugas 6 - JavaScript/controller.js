import users from "./data.js";
const index = () => {
  console.log("--- Daftar Nama ---");
  users.map((user, i) => {
    console.log(`${i + 1}. ${user.nama} | Umur: ${user.umur} | Alamat: ${user.alamat} | Email: ${user.email}`);
  });
};

// fungsi untuk menambah data baru
const store = (user) => {
  users.push(user); 
  console.log(` --Data "${user.nama}" berhasil ditambahkan-- `);
};

// fungsi untuk menghapus data terakhir
const destroy = () => {
  if (users.length > 0) {
    let removed = users.pop(); // penghapusan data terakhir
    console.log(` --Data "${removed.nama}" berhasil dihapus-- `);
  } else {
    console.log("Tidak ada data untuk dihapus");
  }
};

export { index, store, destroy };