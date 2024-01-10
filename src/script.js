const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

function updateLocalTime() {
  const localTimeElement = document.getElementById('local-time');

  // Mendapatkan waktu lokal
  const now = new Date();
  
  // Mengambil jam, menit, detik
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Mengambil nama hari
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = days[now.getDay()].toUpperCase();

  // Format waktu
  const formattedTime = `${hours}.${minutes}.${seconds} ${day}`;

  // Memasukkan waktu ke dalam elemen HTML
  localTimeElement.innerHTML = `LOCAL TIME UTC+07.00<br />${formattedTime}`;
}

// Memanggil fungsi updateLocalTime setiap detik
setInterval(updateLocalTime, 1000);

// Memanggil fungsi updateLocalTime saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', updateLocalTime);