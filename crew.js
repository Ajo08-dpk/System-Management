// ================================
// CREW MANAGEMENT SYSTEM
// ================================

let crews = JSON.parse(localStorage.getItem("crews")) || [];

// render daftar kru
function renderCrew() {
  const tbody = document.getElementById("crew-list");
  tbody.innerHTML = "";

  crews.forEach((crew, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${crew.name}</td>
      <td>${crew.role}</td>
      <td>
        <button onclick="editCrew(${index})">Edit</button>
        <button onclick="deleteCrew(${index})">Hapus</button>
        <button onclick="viewProfile(${index})">Profil</button>
      </td>
    `;

    tbody.appendChild(row);
  });

  localStorage.setItem("crews", JSON.stringify(crews));
}

// tambah kru baru
function addCrew() {
  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();

  if (name === "" || role === "") {
    alert("Nama dan peran harus diisi!");
    return;
  }

  crews.push({ name, role });
  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
  renderCrew();
}

// hapus kru
function deleteCrew(index) {
  if (confirm("Yakin mau hapus kru ini?")) {
    crews.splice(index, 1);
    renderCrew();
  }
}

// edit kru
function editCrew(index) {
  const newName = prompt("Ubah nama kru:", crews[index].name);
  const newRole = prompt("Ubah peran kru:", crews[index].role);

  if (newName && newRole) {
    crews[index].name = newName;
    crews[index].role = newRole;
    renderCrew();
  }
}

// lihat profil kru
function viewProfile(index) {
  const crew = crews[index];
  localStorage.setItem("selectedCrew", JSON.stringify(crew));
  window.location.href = "profile.html";
}

// render pertama kali
window.onload = renderCrew;
