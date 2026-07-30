
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCatalogueFilter();
  initContactForm();
});


function initMobileMenu(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initCatalogueFilter(){
  const filterButtons = document.querySelectorAll('#filters .filter-btn');
  const cards = document.querySelectorAll('#catalogue .product-card');
  const noResults = document.getElementById('noResults');
  if (!filterButtons.length || !cards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      cards.forEach(card => {
        const categories = (card.dataset.cat || '').split(' ');
        const matches = filter === 'all' || categories.includes(filter);
        card.style.display = matches ? '' : 'none';
        if (matches) visibleCount++;
      });

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  });
}


function initContactForm(){
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = document.getElementById('formStatus');

  const fields = {
    name: {
      input: document.getElementById('name'),
      errorEl: document.getElementById('errorName'),
      fieldEl: document.getElementById('fieldName'),
      validate: v => v.trim().length >= 2 ? '' : 'Merci d\'indiquer votre nom (2 caractères minimum).'
    },
    email: {
      input: document.getElementById('email'),
      errorEl: document.getElementById('errorEmail'),
      fieldEl: document.getElementById('fieldEmail'),
      validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Adresse e-mail invalide.'
    },
    subject: {
      input: document.getElementById('subject'),
      errorEl: document.getElementById('errorSubject'),
      fieldEl: document.getElementById('fieldSubject'),
      validate: v => v ? '' : 'Merci de choisir un sujet.'
    },
    message: {
      input: document.getElementById('message'),
      errorEl: document.getElementById('errorMessage'),
      fieldEl: document.getElementById('fieldMessage'),
      validate: v => v.trim().length >= 10 ? '' : 'Votre message doit contenir au moins 10 caractères.'
    }
  };

  Object.values(fields).forEach(field => {
    field.input.addEventListener('input', () => validateField(field));
    field.input.addEventListener('blur', () => validateField(field));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    Object.values(fields).forEach(field => {
      if (!validateField(field)) isValid = false;
    });

    if (!isValid) {
      showStatus('Merci de corriger les champs indiqués en rouge.', false);
      return;
    }

  
    showStatus('Message envoyé ! Nous revenons vers vous sous 48h.', true);
    form.reset();
    Object.values(fields).forEach(field => field.fieldEl.classList.remove('has-error'));
  });

  function validateField(field){
    const message = field.validate(field.input.value);
    field.errorEl.textContent = message;
    field.fieldEl.classList.toggle('has-error', Boolean(message));
    return !message;
  }

  function showStatus(message, success){
    status.textContent = message;
    status.classList.remove('success');
    if (success) status.classList.add('success');
    status.classList.add('show');
  }
}
