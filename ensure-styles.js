// This script ensures CSS is loaded before React renders
document.addEventListener('DOMContentLoaded', function() {
  // Force a repaint to ensure styles are applied
  document.body.style.display = 'none';
  setTimeout(function() {
    document.body.style.display = '';
  }, 10);
});