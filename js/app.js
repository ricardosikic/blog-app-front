let icon = document.getElementById('nav-icon');
let nav = document.getElementById('nav');

icon.addEventListener('click', () => {
  icon.classList.toggle("change");
  nav.classList.toggle("icon-class");
});

