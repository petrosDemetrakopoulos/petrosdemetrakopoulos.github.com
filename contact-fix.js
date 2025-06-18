// Script to fix contact section layout
document.addEventListener('DOMContentLoaded', function() {
  // Wait for React to render
  setTimeout(function() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const contactGrid = contactSection.querySelector('.grid-cols-1.md\\:grid-cols-3');
      if (contactGrid) {
        contactGrid.style.display = 'flex';
        contactGrid.style.flexDirection = 'row';
        contactGrid.style.flexWrap = 'wrap';
        contactGrid.style.justifyContent = 'center';
        contactGrid.style.gap = '1rem';
        
        const contactDivs = contactGrid.querySelectorAll('div');
        contactDivs.forEach(div => {
          div.style.flex = '1';
          div.style.minWidth = '200px';
          div.style.maxWidth = '300px';
        });
      }
    }
  }, 500);
});