
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.style.display === "flex";
    navLinks.style.display = open ? "" : "flex";
    if (!open) {
      navLinks.style.position = "absolute";
      navLinks.style.top = "78px";
      navLinks.style.right = "4%";
      navLinks.style.left = "4%";
      navLinks.style.flexDirection = "column";
      navLinks.style.background = "rgba(3,21,44,.98)";
      navLinks.style.padding = "16px 22px";
      navLinks.style.borderRadius = "14px";
    }
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 760) navLinks.removeAttribute("style");
  });
});

const langBtn = document.getElementById("langBtn");
if (langBtn) {
  langBtn.addEventListener("click", () => {
    alert("النسخة الإنجليزية ستُضاف في مرحلة الاعتماد التالية.");
  });
}
