function calculatePrice() {
  const rate = document.getElementById('carType').value;
  const distance = document.getElementById('distance').value;
  const result = document.getElementById('priceResult');

  if (!distance || distance <= 0) {
    result.innerText = 'Please enter valid distance';
    return;
  }

  result.innerText = `Estimated Fare: ₹${rate * distance}`;
}

function sendWhatsApp() {
  const name = document.getElementById('name').value;
  const pickup = document.getElementById('pickup').value;
  const drop = document.getElementById('drop').value;

  const msg = `Hello ShamaCab,%0AName: ${name}%0APickup: ${pickup}%0ADrop: ${drop}`;
  window.open(`https://wa.me/919989083765?text=${msg}`, '_blank');
}


function showCars(type) {
  document.querySelectorAll('.cars-grid').forEach(grid => {
    grid.classList.remove('active');
  });

  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  document.getElementById(type).classList.add('active');
  event.target.classList.add('active');
}

const navbar = document.querySelector('.navbar');
const heroHeight = document.querySelector('.hero').offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > heroHeight - 80) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});



let slideIndex = 0;

function autoSlide() {
  document.querySelectorAll('.slider.active .slides').forEach(slides => {
    const cards = slides.children.length;
    slideIndex = (slideIndex + 1) % cards;
    slides.style.transform = `translateX(-${slideIndex * 290}px)`;
  });
}

setInterval(autoSlide, 3000);

/* TAB SWITCH */
function showCars(type) {
  slideIndex = 0;

  document.querySelectorAll('.slider').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

  document.getElementById(type).classList.add('active');
  event.target.classList.add('active');

  document.querySelectorAll('.slides').forEach(slide => {
    slide.style.transform = 'translateX(0)';
  });
}
