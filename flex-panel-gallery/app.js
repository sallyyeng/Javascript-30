const panels = document.querySelectorAll('.panel');
let lastPanel = false;

// stretches the panel
const toggleOpen = function() {
  if (lastPanel) {
    lastPanel.classList.toggle('open');
  }
  if (this !== lastPanel) { this.classList.toggle('open'); }
  lastPanel = this;
  console.log(this.classList);
};

// brings words back into the page
const toggleActive = function(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
};

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
