let icon = document.getElementById('nav-icon');
let nav = document.getElementById('nav');
let contact = document.getElementById('contact-button');
let modal = document.getElementById('content-modal');
let sendButton = document.getElementById('send-button');


icon.addEventListener('click', () => {
  icon.classList.toggle("change");
  nav.classList.toggle("icon-class");
});

// CLOSE DE MODAL
contact.addEventListener('click', () => {
  console.log(modal);
  modal.style.display = 'block';
})

// CLOSE DE MODAL
sendButton.addEventListener('click', () => {
  setTimeout(() => {
    modal.style.display = 'none';
    modal.style.transition = '2s ease-in';
  }, 1000);
})

