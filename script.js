// Toggle mobile nav
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// YouTube Trending Search Redirect
const youtubeSearchForm = document.getElementById('youtubeSearchForm');
const youtubeSearchInput = document.getElementById('youtubeSearchInput');

if (youtubeSearchForm && youtubeSearchInput) {
  youtubeSearchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const query = youtubeSearchInput.value.trim();
    const baseURL = 'https://www.youtube.com/feed/trending?bp=4gINGgt5dG1hX2NoYXJ0cw%3D%3D';
    const searchURL = query
      ? `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
      : baseURL;
    window.open(searchURL, '_blank');
  });
}

// Smooth scroll reveal animations
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + window.innerHeight * 0.85;
  sections.forEach((section) => {
    if (scrollY > section.offsetTop) {
      section.classList.add('visible');
    }
  });
});

// Carousel auto-scroll (album carousel)
const carousel = document.querySelector('.album-carousel');
if (carousel) {
  setInterval(() => {
    carousel.scrollBy({ left: 200, behavior: 'smooth' });
  }, 4000);
}

// Apply BhowBhow brand color to all buttons
document.querySelectorAll('button').forEach(btn => {
  btn.style.backgroundColor = '#7b2cbf';
  btn.style.color = 'white'; // For contrast
});
section {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}

section.visible {
  opacity: 1;
  transform: translateY(0);
}

button {
  background-color: #7b2cbf;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #6920a8;
}