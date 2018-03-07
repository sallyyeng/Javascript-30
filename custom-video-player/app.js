// Get our elements: player, progress, progressBar, toggle, skipButtons, ranges
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
let progressBarClicked = false;

progressBar.style.flexBasis = '0%';

// Build out functions
const togglePlay = function() {
  let action = video.paused ? 'play' : 'pause';
  video[action]();
};

const toggleButton = function() {
  let button = video.paused ? '►' : '❚ ❚';
  toggle.innerHTML = button;
};

const skip = function(e) {
  video.currentTime += parseFloat(this.dataset.skip);
};

const handleRangeUpdate = function() {
  video[this.name] = this.value;
};

const handleKeyDownOptions = function(e) {
  e.keyCode === 32 ? togglePlay() : null; // spacebar
  e.keyCode === 39 ? player.querySelector('.forward').click() : null; // right click
  e.keyCode === 37 ? player.querySelector('.rewind').click() : null; // left click
};

const updateProgress = function(e) {
  offsetPercentage = e.offsetX / progress.offsetWidth;
  video.currentTime = offsetPercentage * video.duration;
};

const updateProgressBarVisual = function() {
  percent = video.currentTime / video.duration * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

// Hook up event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
video.addEventListener('timeupdate', updateProgressBarVisual); // update progress bar on time change

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate)); // updates range on change regardless of using mouse
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate)); // realtime updates range

// real-time updating progress bar
progress.addEventListener('mousedown', () => progressBarClicked = true );
progress.addEventListener('mouseup', () => progressBarClicked = false );

progress.addEventListener('click', updateProgress);
progress.addEventListener('mousemove', (e) => progressBarClicked && updateProgress(e) );

window.addEventListener('keydown', handleKeyDownOptions);
