const panels = document.querySelectorAll('.panel');
const closeBtn = document.querySelector('.close-btn');

const selectPanel = function(e) {
  // add active panel and inactive panel
  panels.forEach(panel => {
    panel.classList.add(panel === this ? 'active' : 'inactive');
  });

  closeBtn.style.display = 'initial';
};

const resetPanels = function() {
  panels.forEach(panel => {
    panel.classList.remove('active');
    panel.classList.remove('inactive');
  });

  closeBtn.style.display = 'none';
};

// panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('click', selectPanel));
closeBtn.addEventListener('click', resetPanels);

// stretches the panel
// const toggleOpen = function() {
//   // close every open panel
//   panels.forEach(panel => {
//     if (panel !== this && panel.classList.contains('open')) {
//       panel.classList.toggle('open');
//     }
//   });
//   this.classList.toggle('open');
// };

// // brings words back into the page
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
// const toggleActive = function(e) {
//   if (e.propertyName.includes('flex')) {
//     this.classList.toggle('open-active');
//   }
// };
