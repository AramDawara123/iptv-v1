// Frequently Asked Questions (FAQ) Section 
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentNode;
        item.classList.toggle('active');
    });
});

// Disable right-click and redirect
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    window.location.href = 'https://example.com/'; 
  });
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
      event.preventDefault();
      window.location.href = 'https://example.com/'; 
    }
  
    if ((event.ctrlKey || event.metaKey) && (event.shiftKey && event.key === 'I' || event.key === 'u')) {
      event.preventDefault();
      window.location.href = 'https://example.com/'; 
    }
  });
  
  if (window.navigator.userAgent.includes("extension")) {
    window.location.href = 'https://example.com/';
}
