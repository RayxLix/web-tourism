var mySwiper = new Swiper(".swiper-container", {
  speed: 1000,
  direction: "horizontal",
  autoplay: {
    delay: 3000,
  },
  loop: true,
});

// function loadingImagesLazy(img) {
//   const url = img.getAttribute("lazy-src");
//   img.setAttribute("src", url);
// }

// function ready() {
//   if ("IntersectionObserver" in window) {
//     // support
//     var lazyImages = document.querySelectorAll("[lazy-src]");

//     let observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           loadingImagesLazy(entry.target);
//         }
//       });
//     });

//     lazyImages.forEach((img) => {
//       observer.observe(img);
//     });
//   } else {
//     //get bounding
//   }
// }
// document.addEventListener("DOMContentLoaded", ready);
