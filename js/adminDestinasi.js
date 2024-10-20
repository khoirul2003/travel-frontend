const sidebar = document.getElementById("sidebar");
const toggleSidebar = document.getElementById("toggle-sidebar");

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// document.querySelectorAll(".btn-update").forEach((button) => {
//   button.addEventListener("click", () => {
//     alert("Update");
//   });
// });

// document.querySelectorAll(".btn-delete").forEach((button) => {
//   button.addEventListener("click", () => {
//     if (confirm("Pengen hapus tanan ta rek?")) {
//       alert("Hapus");
//     }
//   });
// });
