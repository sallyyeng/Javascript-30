const divs = document.querySelectorAll('.controls input');

const handleUpdate = function(value) {
  const suffix = this.dataset.sizing || '';
  console.log(this.value);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // select css var
};

divs.forEach(div => div.addEventListener('change', handleUpdate));
divs.forEach(div => div.addEventListener('mousemove', handleUpdate));

// i.e. when mouse selects input and moves, change will be invoked as well
