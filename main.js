const navbarToggle = document.getElementById('navbar-toggle');
const navbarNav = document.getElementById('navbar-nav');
const navLinks = document.querySelectorAll('.navbar-nav a');
const body = document.querySelector('body');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarNav.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbarToggle.classList.remove('active');
    navbarNav.classList.remove('active');
  });
});

body.addEventListener('click', (event) => {
  if (
    !event.target.closest('.navbar-toggle') 
  ) {
    navbarToggle.classList.remove('active');
  }
});



let map;


function initMap() {
    let barranquilla = { lat: 10.96854, lng: -74.78132 },
  map = new google.maps.Map(document.getElementById("map"), {
    center: barranquilla,
    zoom: 12.3,
  });
}

window.initMap = initMap;