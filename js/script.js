// Dummy akun untuk validasi login
const users = [
  { email: "admin@mail.com", password: "12345" },
  { email: "user@mail.com", password: "user123" }
];

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const valid = users.find(u => u.email === email && u.password === password);

  if (valid) {
    alert("Login berhasil! Selamat datang 😊");
    window.location.href = "dashboard.html";
  } else {
    alert("Email atau password yang anda masukkan salah!");
  }
});

// Modal handler
const forgotModal = document.getElementById("forgotModal");
const registerModal = document.getElementById("registerModal");

document.getElementById("forgotBtn").onclick = () => forgotModal.style.display = "block";
document.getElementById("registerBtn").onclick = () => registerModal.style.display = "block";

document.querySelectorAll(".close").forEach(btn => {
  btn.onclick = () => {
    forgotModal.style.display = "none";
    registerModal.style.display = "none";
  };
});

window.onclick = (e) => {
  if (e.target === forgotModal || e.target === registerModal) {
    forgotModal.style.display = "none";
    registerModal.style.display = "none";
  }
};
