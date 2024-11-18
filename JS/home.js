const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);

  if (!isClickInside) {
    navLinks.classList.remove('active'); // Fecha o menu se clicar fora
  }
});