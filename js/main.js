// ==========================
// Scroll global y para cargar animaciones
// ==========================
const elements = document.querySelectorAll(
  "h1, h2, h3, p, form, .card, section img"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

elements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// ==========================
// para el sweet alert en el form
// ==========================
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    Swal.fire({
      title: "¡Mensaje enviado! 🐾",
      text: "Gracias por contactarte con Patitas Felices",
      icon: "success",
      confirmButtonColor: "#22c55e",
      background: "#f8fafc",
      timer: 2500,
      showConfirmButton: false
    });

    form.reset();
  });
}
