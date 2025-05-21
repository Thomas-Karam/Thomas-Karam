function toggleMenu() {
      const menu = document.querySelector('nav');
      const button = document.querySelector('.menu_icon');
      if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
            button.classList.remove('fa-bars');
            button.classList.add('fa-close');
      }
      else {
            menu.style.display = 'none';
            button.classList.remove('fa-close');
            button.classList.add('fa-bars');
      }
}

function contact() {
      const links = document.getElementById('contact');
      const button = document.querySelector('.contact_icon');
      if (links.style.display === 'none'  || links.style.display === '') {
            links.style.display = 'block';
            button.classList.remove('fa-comment-dots');
            button.classList.add('fa-close');
      }
      else {
            links.style.display = 'none';
            button.classList.remove('fa-close');
            button.classList.add('fa-comment-dots');
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
