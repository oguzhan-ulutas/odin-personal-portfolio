// Home button functionality

const home = document.querySelector('.home');
home.addEventListener('click', () => {
  window.location.href = 'index.html';
});

// Scrolling to section

const aboutNav = document.querySelector('.about-nav');
const about = document.querySelector('.about');
aboutNav.addEventListener('click', () => {
  about.scrollIntoView();
});

const portfolioNav = document.querySelector('.portfolio-nav');
const portfolio = document.querySelector('.portfolio');
portfolioNav.addEventListener('click', () => {
  portfolio.scrollIntoView();
});

const contactNav = document.querySelector('.contact-nav');
const contact = document.querySelector('.contact');
contactNav.addEventListener('click', () => {
  contact.scrollIntoView();
});
