// Tombol Kembali
document.getElementById("backBtn").addEventListener("click", function() {
  window.history.back();
});

// Ubah warna box saat diklik
const boxes = document.querySelectorAll(".warna-box span");
boxes.forEach(box => {
  box.addEventListener("click", function() {
    // Ubah background ke warna HSL random
    this.style.backgroundColor = "hsl(" + Math.floor(Math.random() * 360) + ", 80%, 60%)";
  });
});
