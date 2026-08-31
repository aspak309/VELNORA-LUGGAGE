const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#navLinks');

menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#enquiryForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const phone = document.querySelector('#phone').value.trim();
  const product = document.querySelector('#product').value.trim();
  const quantity = document.querySelector('#quantity').value.trim();
  const city = document.querySelector('#city').value.trim();

  const message =
`Hello VELNORA LUGGAGE,
I want a bulk quotation.

Name: ${name}
Mobile: ${phone}
Product: ${product}
Quantity: ${quantity} pcs
Delivery City: ${city}`;

  window.open(
    'https://wa.me/919653181917?text=' + encodeURIComponent(message),
    '_blank',
    'noopener'
  );
});

document.querySelector('#year').textContent = new Date().getFullYear();
