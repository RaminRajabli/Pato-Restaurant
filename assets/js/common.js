let logo = document.getElementById("logo");
console.log(logo.src);
window.addEventListener("scroll",()=>{
    let header = document.querySelector("header");
  
    header.classList.toggle("scrolling-active",window.scrollY>0);
    if(window.scrollY > 0 ){
      document.getElementById("logo").src = "/assets/images/logo/logo2.png.webp"
    }else{
      document.getElementById("logo").src = "/assets/images/logo/logo.webp"
    }
    
})

// dropdown menu
let menu_bars = document.querySelector(".menu-bar");
let dropdown = document.querySelector(".dropdown");


menu_bars.addEventListener("click",()=>{
  dropdown.classList.add("dropdown-active");
})

let close_menu = document.querySelector(".close-menu");

close_menu.addEventListener("click",()=>{
  dropdown.classList.remove("dropdown-active");
})

document.addEventListener("click", function(event){
  if(dropdown.classList.contains("dropdown-active")){
    if(event.target.closest(".dropdown-menu") || event.target.closest(".menu-bar")){
      return;
    }else{
      dropdown.classList.remove("dropdown-active");
    }
  }
  else{
    return;
  }

})





// gallery
Fancybox.bind('[data-fancybox="gallery"]', {
  dragToClose: false,
  Toolbar: false,
  closeButton: "top",

  Image: {
    zoom: false,
  },

  on: {
    initCarousel: (fancybox) => {
      const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
        );
      },
    "Carousel.change": (fancybox, carousel, to, from) => {
      const slide = carousel.slides[to];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
  },
});

Fancybox.bind('[data-fancybox="menu_gallery"]', {
  dragToClose: false,
  Toolbar: false,
  closeButton: "top",

  Image: {
    zoom: false,
  },

  on: {
    initCarousel: (fancybox) => {
      const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
    "Carousel.change": (fancybox, carousel, to, from) => {
      const slide = carousel.slides[to];

      fancybox.$container.style.setProperty(
        "--bg-image",
        `url("${slide.$thumb.src}")`
      );
    },
  },
});

