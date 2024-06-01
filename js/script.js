
//scroll nav behavior
const wd = document.documentElement.clientWidth || window.innerWidth;
let prevScrollPos = window.scrollY; //scroll position
const headerDOM = document.getElementsByTagName("header")[0];
if (wd > 700)  {
  window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos < currentScrollPos && currentScrollPos > 50) {
        headerDOM.style.top = "-55px";
        console.log("triggered")
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

}
toggleNav();
