const mobile_menu = document.getElementById("mobile-menu");
const navbar_menu = document.querySelector(".navbar-menu");

mobile_menu.addEventListener("click", function () {
    mobile_menu.classList.toggle("is-active");
    navbar_menu.classList.toggle("active");
});


// swiper
var swiper = new Swiper(".mySwiper", {
   
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        autoplay:true,
        speed:300,
      },
  });








  