// Basic interactivity and form handling (no backend)
// Newsletter and contact form simple handlers
document.addEventListener('DOMContentLoaded', function () {
  var newsletter = document.getElementById('newsletter-form');
  if (newsletter) {
    newsletter.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('email');
      if (email && email.checkValidity()) {
        alert('Gracias por suscribirte: ' + email.value);
        newsletter.reset();
      } else {
        email.reportValidity();
      }
    });
  }

  var contact = document.getElementById('contact-form');
  if (contact) {
    contact.addEventListener('submit', function (e) {
      if (!contact.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        contact.classList.add('was-validated');
        return;
      }
      e.preventDefault();
      alert('Mensaje enviado. Gracias por contactarnos.');
      contact.reset();
      contact.classList.remove('was-validated');
    }, false);
  }
});
