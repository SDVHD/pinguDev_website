function MachEsSticky() {
    // Fuer Sticky Navigation
    window.onscroll = function() {myFunction()};

    // Get the navbar
    navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    sticky = navbar.offsetTop;
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// Ende sticky navigation

function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
}

var navbar,sticky;

// Wenn der DOM Bereit ist und geladen hat
ready(MachEsSticky);