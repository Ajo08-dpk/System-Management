// ================================
// CREW PROFILE PAGE
// ================================

window.onload = () => {
  const crew = JSON.parse(localStorage.getItem("selectedCrew"));
  if (!crew) {
    alert("Data kru tidak ditemukan!");
    window.location.href = "crew.html";
    return;
  }

  document.getElementById("crew-name").textContent = crew.name;
  document.getElementById("crew-role").textContent = crew.role;
};

// tombol kembali
function goBack() {
  window.location.href = "crew.html";
}
