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

// events timer
let day = document.querySelectorAll(".event_days");
let hour = document.querySelectorAll(".event_hours");
let minute = document.querySelectorAll(".event_minutes");
let second = document.querySelectorAll(".event_seconds");

// Set the date we're counting down to
var countDownDate = new Date("May 5, 2022 15:37:25").getTime();


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  
  day.forEach((element)=>{
    element.innerHTML = days
  })

  hour.forEach((element)=>{
    element.innerHTML = hours
  })

  minute.forEach((element)=>{
    element.innerHTML = minutes
  })

  second.forEach((element)=>{
    element.innerHTML = seconds
  })
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    document.getElementById("demo1").innerHTML = "EXPIRED";
    document.getElementById("demo2").innerHTML = "EXPIRED";
  }
}, 1000);


// reservation
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; 
let yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("date_").setAttribute("min", today);
document.getElementById("date_").setAttribute("value", today);

// hour

let now = new Date();
let min = now.getMinutes();
if (min < 10) {
  min = '0' + min;
} 
let time = now.getHours() + ":" + min;

document.getElementById("time_").setAttribute("value", time);

// customers

let rating = document.querySelectorAll(".customer_ratings");

rating.forEach((element)=>{
  for(let i = 0;i<5;i++){
    element.innerHTML += `<i class="fas fa-star checked"></i>`
  }
})
