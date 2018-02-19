const panels = document.querySelectorAll('.panel');
let lastPanel = false;

// stretches the panel
const toggleOpen = function() {
  // close every open panel
  panels.forEach(panel => {
    if (panel !== this && panel.classList.contains('open')) {
      panel.classList.toggle('open');
    }
  });
  this.classList.toggle('open');
};

// brings words back into the page
const toggleActive = function(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
};

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
