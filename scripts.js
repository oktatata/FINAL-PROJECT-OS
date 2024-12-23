// Data Dummy untuk Makanan dan Minuman
const makananData = [
    { nama: "Salad Buah", deskripsi: "Campuran buah segar yang kaya akan serat." },
    { nama: "Sup Ayam", deskripsi: "Sup hangat yang kaya protein dan rendah lemak." }
];

const minumanData = [
    { nama: "Jus Alpukat", manfaat: "Meningkatkan kesehatan kulit dan rambut." },
    { nama: "Teh Hijau", manfaat: "Mengandung antioksidan yang baik untuk tubuh." }
];

// Fungsi untuk Memuat Data ke Halaman
function loadContent() {
    const makananContainer = document.getElementById("makanan-container");
    const minumanContainer = document.getElementById("minuman-container");

    // Menampilkan Makanan
    makananData.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${item.nama}</h3>
            <p>${item.deskripsi}</p>
        `;
        makananContainer.appendChild(card);
    });

    // Menampilkan Minuman
    minumanData.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${item.nama}</h3>
            <p>${item.manfaat}</p>
        `;
        minumanContainer.appendChild(card);
    });
}

// Memuat Konten Ketika Halaman Selesai Dimuat
document.addEventListener("DOMContentLoaded", loadContent);
