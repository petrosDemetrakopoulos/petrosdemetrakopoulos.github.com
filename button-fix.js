// Script to fix hero section button text color
document.addEventListener('DOMContentLoaded', function() {
  // Wait for React to render
  setTimeout(function() {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      const buttons = heroSection.querySelectorAll('.flex.flex-wrap.justify-center.gap-4.mb-12 a');
      buttons.forEach(button => {
        button.style.color = 'white';
      });
    }
  }, 500);
});