const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

const handleCheck = function(e) {
  let inBetween = false;
  // shiftKey down AND IS selected (not unselected)
  if (e.shiftKey && this.checked) {


    checkboxes.forEach((checkbox, i) => {

      if (checkbox === lastChecked || checkbox === this) {
        inBetween = !inBetween;
      } else if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      } else {
        if (inBetween) {
          // instead of triggering a click, you can set the checked property to true
          // avoids infinite loop of clicking > handling > clicking > handling...
          checkbox.checked = true;
        }
      }
    });
  }
  lastChecked = this;
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
