const menu = document.querySelector('nav');
const menu_btn = document.querySelector('.menu_icon');
const links = document.getElementById('contact');
const links_btn = document.querySelector('.contact_icon');

window.addEventListener('scroll', function() {
      if (this.window.innerWidth < 800) {
            menu.style.display = 'none';
            menu_btn.classList.remove('fa-close');
            menu_btn.classList.add('fa-stream');
      }
      links.style.display = 'none';
      links_btn.classList.remove('fa-close');
      links_btn.classList.add('fa-comment');
});

function toggleMenu() {
      if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
            menu_btn.classList.remove('fa-stream');
            menu_btn.classList.add('fa-close');
      }
      else {
            menu.style.display = 'none';
            menu_btn.classList.remove('fa-close');
            menu_btn.classList.add('fa-stream');
      }
}

function contact() {
      if (links.style.display === 'none' || links.style.display === '') {
            links.style.display = 'block';
            links_btn.classList.remove('fa-comment');
            links_btn.classList.add('fa-close');
      }
      else {
            links.style.display = 'none';
            links_btn.classList.remove('fa-close');
            links_btn.classList.add('fa-comment');
      }
}

function downloadCV() {
      const cvUrl = 'static/CV.pdf';

      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Thomas Karam.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
}

const type = document.getElementById('type');

const phrases = ['MEAN Stack Developer', 'Flutter Developer'];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeEffect() {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
            currentCharIndex--;
            type.textContent = currentPhrase.substring(0, currentCharIndex);
            if (currentCharIndex === 0) {
                  isDeleting = false;
                  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            }
      } else {
            currentCharIndex++;
            type.textContent = currentPhrase.substring(0, currentCharIndex);
            if (currentCharIndex === currentPhrase.length) {
                  isDeleting = true;
            }
      }

      const delay = isDeleting ? 100 : 200;
      setTimeout(typeEffect, delay);
}

typeEffect();