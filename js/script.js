// Fancybox
Fancybox.bind("[data-fancybox='gallery']", {
});





// Get to the top & navbar


let toTopBtn = document.getElementById("toTopBtn");
let navbar = document.getElementById("navbar");
let sticky = 700;

window.onscroll = function() {
  scrollFunction();
  fixNavbar();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      toTopBtn.style.display = "block";
  } else {
      toTopBtn.style.display = "none";
  }
}

function fixNavbar() {
  if (window.pageYOffset >= sticky) {
      navbar.classList.add("fixed");
  } else {
      navbar.classList.remove("fixed");
  }
}

toTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
});
