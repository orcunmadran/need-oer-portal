//User Type Control
const params = new Proxy(new URLSearchParams(window.location.search), {get: (searchParams, prop) => searchParams.get(prop),});
let value = params.userType;

var eTE = document.getElementsByClassName("trainee");
var eTR = document.getElementsByClassName("trainer");
var eSL = document.getElementsByClassName("select");

if(value=="trainer"){
  while(eTE[0]) {
    eTE[0].parentNode.removeChild(eTE[0]);
  }
}

if(value=="trainee"){
  while(eTR[0]) {
    eTR[0].parentNode.removeChild(eTR[0]);
  }
}

if(value==null){
    eTR[0].parentNode.removeChild(eTR[0]);
    eTE[0].parentNode.removeChild(eTE[0]);
} else {
    while(eSL[0]) {
        eSL[0].parentNode.removeChild(eSL[0]);
    }
}

// Mobile TOC button

document.addEventListener('DOMContentLoaded', function(){
  var toc = document.getElementById('toc');
  if (!toc) return;

  var btn = document.getElementById('mobile-toc-toggle');
  if (!btn) return;

  btn.addEventListener('click', function(e){
    e.stopPropagation();
    var isOpen = toc.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', function(e){
    if (toc.classList.contains('open') &&
        !toc.contains(e.target) &&
        e.target !== btn) {
      toc.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && toc.classList.contains('open')) {
      toc.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});


// This code creates a button to toggle the visibility of the table of contents (TOC) on mobile devices.

document.addEventListener('DOMContentLoaded', function(){
  var toc = document.getElementById('toc');
  if (!toc) return;

  // If button isn't already in the DOM, create and insert it:
  var btn = document.getElementById('mobile-toc-toggle');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'mobile-toc-toggle';
    btn.setAttribute('aria-label', 'Menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = ' ☰ ';
    // insert it just above the TOC
    toc.parentNode.insertBefore(btn, toc);
  }

  // wire up the toggle behavior
  btn.addEventListener('click', function(e){
    e.stopPropagation();
    var isOpen = toc.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  // close when clicking outside or pressing Escape
  document.addEventListener('click', function(e){
    if (toc.classList.contains('open') &&
        !toc.contains(e.target) &&
        e.target !== btn) {
      toc.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && toc.classList.contains('open')) {
      toc.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});