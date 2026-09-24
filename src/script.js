export function initPage() { //for the loading timing

// h1 Name animation
const masks = ['Manami1', 'mAnami2', 'maNami3', 'manAmi4', 'manaMi5', 'manamI6', 'manamIdot', 'Naito1', 'nAito2', 'naIto3', 'naIdotto', 'naiTo4', 'naiTdoto', 'naitO5'];

 masks.forEach((mask) => {
   const path = document.querySelector(`#m-${mask}`);
   if (!path) return;
   const length = path.getTotalLength();

   path.style.strokeDasharray = length;
   path.style.strokeDashoffset = length;
 });

 // == Wheel Clay ==
// rotating
const rotationSpeed = (Math.PI * 2) / 6000; // 360deg in 6s
const startTime = performance.now();

function getRotation(){
  const t = performance.now() - startTime;
  return (t*rotationSpeed)%(Math.PI*2);
}

function getLocalAngle(mx, my){
  const dx = mx-center.x;
  const dy = my-center.y;

  const worldAngle = Math.atan2(dy, dx);
  const rotation = getRotation();

  let local = worldAngle-rotation;

  return Math.atan2(Math.sin(local), Math.cos(local)); //no skipping
}

// Clay svg 
const svg = document.getElementById("clay");
const path = document.getElementById("clayPath");
const POINTS = 40;
const RADIUS = 110;
const center = {x: 200, y: 200};

const points = [];

for(let i = 0; i < POINTS; i++){
  const angle = (i/POINTS)*Math.PI*2;

  const wave =
    Math.sin(angle*3)*6 +
    Math.sin(angle*5)*3;

  points.push({
    angle,
    base: RADIUS,
    offset: wave
  });
}

// Clay geometry
function getXY(p){
  const r = p.base+p.offset;
  return{
    x: center.x + Math.cos(p.angle)*r,
    y: center.y + Math.sin(p.angle)*r
  };
}

function buildPath(){
  let d= "";

  for(let i = 0; i<points.length; i++){
    const p1 = getXY(points[i]);
    const p2 = getXY(points[(i+1)%points.length]);

    const mx = (p1.x+p2.x)/2;
    const my = (p1.y+p2.y)/2;

    if(i === 0) d += `M ${mx} ${my}`;
    else d += `Q ${p1.x} ${p1.y} ${mx} ${my}`;
  }

  return d + " Z";
}

// clay mouseover interaction
if (svg) {
svg.addEventListener("pointermove", (e)=>{
  const rect = svg.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  const localAngle = getLocalAngle(mx, my);

  const dx = mx - center.x;
  const dy = my - center.y;
  const dist = Math.sqrt(dx * dx + dy * dy);

  const influenceRadius = 120;
  const proximity= Math.exp(-(dist * dist) /(influenceRadius*influenceRadius));

  points.forEach(p =>{
    let diff = p.angle - localAngle;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));

    const dent = Math.exp(-diff * diff * 4) * proximity;
    const expand = Math.exp(-Math.pow(Math.abs(Math.abs(diff) - Math.PI), 4) * 5) * proximity;

    const force = (-2 * dent) + (2 * expand);

    if(!isNaN(force)){
      p.offset += force;
      p.offset = Math.max(-60, Math.min(60, p.offset));
    }
  });
});
}

// Clay loop
function loop(){
  path.setAttribute("d", buildPath());
  requestAnimationFrame(loop);
}
if (path) {
  loop();
}


 // Skills hover label
const skillName = document.querySelector('.skills .skill-name');
const skillIcons = document.querySelectorAll('.skills .fold-panel img');

skillIcons.forEach((img) => {
  img.addEventListener('mouseenter', () => {
    skillName.textContent = img.alt;
  });
  img.addEventListener('mouseleave', () => {
    skillName.textContent = '';
  });
});

// Recent Projects h3 animation
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

if (words.length > 0) {
  words[currentWord].style.opacity = 1;
  for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
  }
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

if (words.length > 0) {
  changeWord();
  setInterval(changeWord, 4000);
}

// Recent Projects hover video play
document.querySelectorAll('#projects article .media video').forEach((video) => {
  const article = video.closest('article');

  article.addEventListener('mouseenter', () => {
    video.currentTime = 0;
    video.play();
  });

  article.addEventListener('mouseleave', () => {
    video.pause();
  });
});

// Project list page hover video play (Web Apps, etc.)
document.querySelectorAll('.list-project .image').forEach((imageLink) => {
  const video = imageLink.querySelector('.media video');
  if (!video) return;

  imageLink.addEventListener('mouseenter', () => {
    video.currentTime = 0;
    video.play();
  });

  imageLink.addEventListener('mouseleave', () => {
    video.pause();
  });
});

// Experiences animation scrolling trigger
function setupIntersectionObserver(target, options, onEnter) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onEnter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(target);
}

// timing for scroll 20% into the screen
const timing = {
  root: null,
  rootMargin: '0px 0px -20% 0px',
  threshold: 0,
};

// Experience h3 flip board animation
(function () {
  const board = document.querySelector('.exp-flapboard');
  const center = board && board.querySelector('.center');
  if (!board || !center) return;

  const words = [board.dataset.flapBegin, board.dataset.flapMiddle, board.dataset.flapEnd]
    .filter(Boolean)
    .map((w) => w.toUpperCase());
  if (words.length < 2) return;

  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 '.split('');
  const speed = 0.05; // each alphabet timing
  const shortPauseMs = 800; // pause in PROFESSIONAL / EDUCATIONAL
  const longPauseMs = 3000; // pause in EXPERIENCES

  const amountOfFlaps = Math.max(...words.map((w) => w.length));
  const paddedWords = words.map((w) => (w + ' '.repeat(amountOfFlaps - w.length)).split(''));
  const restWord = paddedWords[paddedWords.length - 1];

  center.innerHTML = Array.from({ length: amountOfFlaps })
    .map(() => '<div class="splitflap"><div class="top"></div><div class="bottom"></div><div class="nextHalf"></div><div class="nextFull"></div></div>')
    .join('');
  board.classList.add('is-active');

  const tops = center.querySelectorAll('.top');
  const bottoms = center.querySelectorAll('.bottom');
  const nextFulls = center.querySelectorAll('.nextFull');
  const nextHalfs = center.querySelectorAll('.nextHalf');

  bottoms.forEach((el) => { el.style.animationDuration = `${speed}s`; });
  nextHalfs.forEach((el) => { el.style.animationDuration = `${speed}s`; });

  tops.forEach((el, x) => { el.textContent = restWord[x]; });
  nextFulls.forEach((el, x) => { el.textContent = restWord[x]; });
  bottoms.forEach((el, x) => {
    el.textContent = restWord[x];
    el.style.backgroundColor = 'var(--flap-base)';
  });
  nextHalfs.forEach((el, x) => {
    el.textContent = restWord[x];
    el.style.backgroundColor = 'var(--flap-base)';
  });

  let targetIndex = 0; // indexing 0 is PROFESSIONAL 
  let endStr = paddedWords[targetIndex].slice();
  const strCount = restWord.map((ch) => CHARS.indexOf(ch));
  const flag = new Array(amountOfFlaps).fill(false);
  let flag2 = true;

  function flipIt(x) {
    const prevChar = CHARS[strCount[x] === 0 ? CHARS.length - 1 : strCount[x] - 1];
    tops[x].textContent = prevChar;
    bottoms[x].textContent = prevChar;
    nextFulls[x].textContent = CHARS[strCount[x]];
    nextHalfs[x].textContent = CHARS[strCount[x]];

    bottoms[x].classList.remove('flip1');
    void bottoms[x].offsetWidth;
    bottoms[x].classList.add('flip1');
    nextHalfs[x].classList.remove('flip2');
    void nextHalfs[x].offsetWidth;
    nextHalfs[x].classList.add('flip2');

    strCount[x] = strCount[x] > CHARS.length - 2 ? 0 : strCount[x] + 1;
  }

  function dontFlipIt(x) {
    flag[x] = true;
    bottoms[x].classList.remove('flip1');
    bottoms[x].style.backgroundColor = 'var(--flap-base)';
    nextHalfs[x].style.backgroundColor = 'var(--flap-base)';
    const prevChar = CHARS[strCount[x] === 0 ? CHARS.length - 1 : strCount[x] - 1];
    tops[x].textContent = prevChar;
    bottoms[x].textContent = prevChar;
  }

  function changeDestination() {
    const isLastWord = targetIndex === paddedWords.length - 1;
    const pauseMs = isLastWord ? longPauseMs : shortPauseMs;
    setTimeout(() => {
      flag.fill(false);
      flag2 = true;
      targetIndex = (targetIndex + 1) % paddedWords.length;
      endStr = paddedWords[targetIndex].slice();
    }, pauseMs);
  }

  function startCycling() {
    setInterval(() => {
      for (let x = 0; x < amountOfFlaps; x++) {
        if (nextFulls[x].textContent === endStr[x]) dontFlipIt(x);
        else flipIt(x);
      }
      if (flag.every(Boolean) && flag2) {
        flag2 = false;
        changeDestination();
      }
    }, speed * 1000);
  }

  setupIntersectionObserver(board, timing, startCycling);
})();


// Experience articles fade in from below when scrolling in
document.querySelectorAll('#experience article').forEach((article) => {
  setupIntersectionObserver(article, timing, (el) => el.classList.add('isActive'));
});


// ABOUT Sliders animation
const aboutSliderLoopSeconds = [40, 29, 34, 25]; //sliding speed

document.querySelectorAll('#about .slider-container').forEach((container, index) => {
  const wrapper = container.querySelector('.slide-wrapper');
  if (!wrapper) return;

  const clone = wrapper.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  container.appendChild(clone);

  const loopSeconds = aboutSliderLoopSeconds[index % aboutSliderLoopSeconds.length];
  const slowFactor = .25; // hover sliding speed
  const easeTime = .5; // blaking speed

  let position = -wrapper.getBoundingClientRect().height;
  let hovering = false;
  let currentFactor = 1;
  let lastTime = null;

  function frame(time) {
    if (lastTime === null) lastTime = time;
    const dt = (time - lastTime) / 1000;
    lastTime = time;

    const targetFactor = hovering ? slowFactor : 1;
    currentFactor += (targetFactor - currentFactor) * (1 - Math.exp(-dt / easeTime));

    const wrapHeight = wrapper.getBoundingClientRect().height;
    const speed = (wrapHeight / loopSeconds) * currentFactor;

    position += speed * dt;
    if (position >= 0) position -= wrapHeight;

    const transform = `translateY(${position}px)`;
    wrapper.style.transform = transform;
    clone.style.transform = transform;

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  container.addEventListener('mouseenter', () => { hovering = true; });
  container.addEventListener('mouseleave', () => { hovering = false; });
});


//scroll nav behavior
const wd = document.documentElement.clientWidth || window.innerWidth;
let prevScrollPos = window.scrollY; //scroll position
const headerDOM = document.getElementsByTagName("header")[0];
if (wd > 700)  {
  window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos < currentScrollPos && currentScrollPos > 50) {
        headerDOM.style.top = "-55px";
      } else {
        headerDOM.style.top = "0";
    }
    prevScrollPos = currentScrollPos;
  }
} else { 
  window.onscroll = function() {
    headerDOM.style.top = "0";
  }
}


// burger navi for mobile
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('burg');
  var blackBg = document.getElementById('burg-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });

  // Add event listener to each navigation link
  var navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      body.classList.remove('nav-open');
    });
  });
}
toggleNav();

}