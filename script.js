// Sample pin data
const samplePins = [
  {
    image: 'img/rathwheels.jpeg',
    title: 'Wheels of Devotion',
    description: 'Crafting colossal wheels for timeless journeys of devotion and tradition.'
  },
  {
    image: 'img/ganesh.jpeg',
    title: 'Majestic Vinayaka Darshan',
    description: 'Sacred rituals, modaks, and chants invoke wisdom and strength.'
  },
  {
    image: 'img/tajmahal.jpeg',
    title: 'Love Etched in Stone',
    description: 'Timeless symbol of love, carved in pristine white marble beauty.'
  },
  {
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=450&fit=crop',
    title: 'Mountain Adventure',
    description: 'Breathtaking views and outdoor exploration'
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=350&fit=crop',
    title: 'DIY Plant Hangers',
    description: 'Macrame plant hangers to bring nature indoors'
  },
  {
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=400&fit=crop',
    title: 'Wedding Bouquet Ideas',
    description: 'Romantic florals for your special day'
  },
  {
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=380&fit=crop',
    title: 'Abstract Art',
    description: 'Bold colors and expressive brushstrokes'
  },
  {
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=450&fit=crop',
    title: 'Cozy Reading Nook',
    description: 'The perfect corner for book lovers'
  },
  {
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop',
    title: 'Healthy Smoothie Bowl',
    description: 'Nutritious and Instagram-worthy breakfast'
  },
  {
    image: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=300&h=500&fit=crop',
    title: 'Minimalist Bedroom',
    description: 'Serene spaces for peaceful rest'
  }
];

// Modal Functions
function openModal(type) {
  const modal = document.getElementById('authModal');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  if (type === 'login') {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  } else {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('authModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function switchToLogin() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
}

function switchToSignup() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
}

function handleLogin(event) {
  event.preventDefault();
  // Add your login logic here
  alert('Login functionality would be implemented here!');
  closeModal();
}

function handleSignup(event) {
  event.preventDefault();
  // Add your signup logic here
  alert('Signup functionality would be implemented here!');
  closeModal();
}

// Close modal when clicking outside
document.getElementById('authModal').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Generate pins
function generatePins() {
  const container = document.getElementById('pins-container');

  // Create multiple sets for better grid filling
  for (let set = 0; set < 3; set++) {
    samplePins.forEach((pin, index) => {
      const pinElement = document.createElement('div');
      pinElement.className = 'pin-card';
      pinElement.style.animationDelay = `${(set * samplePins.length + index) * 0.1}s`;

      pinElement.innerHTML = `
                        <img src="${pin.image}" alt="${pin.title}" class="pin-image" loading="lazy">
                        <div class="pin-content">
                            <h3 class="pin-title">${pin.title}</h3>
                            <p class="pin-description">${pin.description}</p>
                        </div>
                    `;

      pinElement.addEventListener('click', () => {
        pinElement.style.transform = 'scale(0.95)';
        setTimeout(() => {
          pinElement.style.transform = '';
        }, 150);
      });

      container.appendChild(pinElement);
    });
  }
}

// Create pin function
function createPin() {
  const fab = document.querySelector('.fab');
  fab.style.transform = 'scale(0.8)';
  setTimeout(() => {
    fab.style.transform = '';
    alert('Create Pin feature would open here!');
  }, 150);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Search bar interactions
const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('focus', () => {
  searchBar.parentElement.style.transform = 'scale(1.02)';
});

searchBar.addEventListener('blur', () => {
  searchBar.parentElement.style.transform = 'scale(1)';
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  generatePins();

  // Add scroll effect to navigation
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(255, 255, 255, 0.98)';
      nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
      nav.style.background = 'rgba(255, 255, 255, 0.95)';
      nav.style.boxShadow = 'none';
    }
  });
});