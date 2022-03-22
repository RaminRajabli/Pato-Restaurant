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
var countDownDate = new Date("January 5, 2022 15:37:25").getTime();


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

// document.getElementById("time_").setAttribute("value", time);

// customers



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


// first slider api
let slides_container = document.querySelector(".entrance_slide");
let slides_list = [];
let slides_ = [];
// console.log(slides_)

// axios.get("https://ramin-final-default-rtdb.firebaseio.com/home/entrance.json").then(
//   response => response.data
// ).then(data=>{
//   for(let key in data){
//     slides_list.unshift(data[key]);
//   }
//   // console.log(slides_list)
// }).catch(error => {throw error})

async function getEntrance(){
  let entranceArray = []
  const response = await axios.get("https://ramin-final-default-rtdb.firebaseio.com/home/entrance.json")
  const data = await response.data
  for(let key in data){
    entranceArray.unshift(data[key])
  }
  return entranceArray
}


getEntrance().then(res=>{
  let i = 0;
  for(let element of res){
    
    if(i<3){
      let slide_ = document.createElement("div");
      slide_.classList.add("swiper-slide", "slide");
      // console.log(slide_);
      if(i==0){
        slide_.classList.add("first");
        slide_.innerHTML = `
        <div class="content">
        <h1 class="main1 animate__fadeInDown animate__animated ">
           ${element.entering}
        </h1>
        <p class="text1 animate__animated animate__fadeInUp">
           ${element.r_name}
        </p>
        <a class="button1 animate__animated animate__zoomIn" href="./assets/pages/Menu/menu.html">LOOK MENU</a>
        </div>
        <figure>
            <img src="${element.background}" alt="">
        </figure>
        `
        // console.log(i)
      }else if(i==1){
        slide_.classList.add("second");
        slide_.innerHTML = `
        <div class="content">
           <h1 class="main2 animate__animated animate__rollIn">
               ${element.entering}</h1>
           <p class="text2 animate__animated animate__lightSpeedInRight">
             ${element.r_name}
          </p>
          <a class="button2 animate__animated animate__zoomIn" href="./assets/pages/About/about.html">LOOK MENU</a>
        </div>
        <figure>
              <img src="${element.background}" alt="">
        </figure>
        `
      }else{
        slide_.classList.add("third");
        slide_.innerHTML = `
        <div class="content">
        <h1 class="main3 animate__animated animate__rotateInDownLeft"> ${element.entering}</h1>
           <p class="text3 animate__animated animate__rotateInUpRight">
           ${element.r_name}
           </p>
          <a class="button3 animate__animated animate__rotateIn" href="./assets/pages/About/about.html">LOOK MENU</a>
        </div>
        <figure>
        <img src="${element.background}" alt="">
        </figure> 
        `
      }
  
      slides_.unshift(slide_);
      // console.log(slides_);
    }
    i++
  }
  
  
  slides_.forEach((item)=>{
    // console.log(item);
    slides_container.prepend(item);
    // console.log(slides_container)
  })
}).catch(error=>console.log(error))


// setTimeout(()=>{
//   let i = 0;
//   for(let element of slides_list){
    
//     if(i<3){
//       let slide_ = document.createElement("div");
//       slide_.classList.add("swiper-slide", "slide");
//       // console.log(slide_);
//       if(i==0){
//         slide_.classList.add("first");
//         slide_.innerHTML = `
//         <div class="content">
//         <h1 class="main1 animate__fadeInDown animate__animated ">
//            ${element.entering}
//         </h1>
//         <p class="text1 animate__animated animate__fadeInUp">
//            ${element.r_name}
//         </p>
//         <a class="button1 animate__animated animate__zoomIn" href="./assets/pages/Menu/menu.html">LOOK MENU</a>
//         </div>
//         <figure>
//             <img src="${element.background}" alt="">
//         </figure>
//         `
//         // console.log(i)
//       }else if(i==1){
//         slide_.classList.add("second");
//         slide_.innerHTML = `
//         <div class="content">
//            <h1 class="main2 animate__animated animate__rollIn">
//                ${element.entering}</h1>
//            <p class="text2 animate__animated animate__lightSpeedInRight">
//              ${element.r_name}
//           </p>
//           <a class="button2 animate__animated animate__zoomIn" href="./assets/pages/About/about.html">LOOK MENU</a>
//         </div>
//         <figure>
//               <img src="${element.background}" alt="">
//         </figure>
//         `
//       }else{
//         slide_.classList.add("third");
//         slide_.innerHTML = `
//         <div class="content">
//         <h1 class="main3 animate__animated animate__rotateInDownLeft"> ${element.entering}</h1>
//            <p class="text3 animate__animated animate__rotateInUpRight">
//            ${element.r_name}
//            </p>
//           <a class="button3 animate__animated animate__rotateIn" href="./assets/pages/About/about.html">LOOK MENU</a>
//         </div>
//         <figure>
//         <img src="${element.background}" alt="">
//         </figure> 
//         `
//       }
  
//       slides_.unshift(slide_);
//       // console.log(slides_);
//     }
//     i++
//   }
  
  
//   slides_.forEach((item)=>{
//     // console.log(item);
//     slides_container.prepend(item);
//     // console.log(slides_container)
//   })
// },2000)


// comments section
let comments_container = document.querySelector(".comments_slide");
let comments_list = [];
let comments_ = [];


// axios.get("https://ramin-final-default-rtdb.firebaseio.com/comments.json").then(
//   response => response.data
// ).then(data=>{
//   for(let key in data){
//     comments_list.unshift(data[key]);
//   }
// }).catch(error => {throw error})

async function getComments(){
  let commentsArray = []
  const response = await axios.get("https://ramin-final-default-rtdb.firebaseio.com/comments.json")
  const data = await response.data
  for(let key in data){
    commentsArray.unshift(data[key])
  }
  return commentsArray
}

getComments().then(res=>{
  let i = 0;
  for(let element of res){
    
    if(i<3){
      let comment_ = document.createElement("div");
      comment_.classList.add("swiper-slide", "slide");

      let rating = document.createElement("div");
     
        for(let r = 0;r<element.rates;r++){
          rating.innerHTML += `<i class="fas fa-star checked"></i>`;
        }
        for(let g = 0; g<5-element.rates;g++){
          rating.innerHTML += `<i class="fas fa-star"></i>`;
        }
      
      console.log(rating);
     
      comment_.innerHTML = `
      <div class="customer_picture animate__animated animate__zoomIn">
      <figure>
          <img class="comment_customer" src="${element.profilePicture}" alt="">
      </figure>
  </div>
  <div class="customer-content animate__animated animate__fadeInUp">
      <ul>
          <li>
              <p>
                 “${element.customerComment}”
              </p>
          </li>
          <li class="customer_ratings">
              ${rating.innerHTML}
          </li>
          <li>
              <span>
                ${element.customerName} ˗ ${element.customerOrigin}
              </span>
          </li>
      </ul>
  </div>
        `
      
    //  console.log(comment_)
      comments_.unshift(comment_);
      // console.log(comments_);
    }

    
    i++
  }
  
  
  comments_.forEach((item)=>{
    // console.log(item);
    comments_container.prepend(item);
    // console.log(comments_container)
  })
}).catch(error=>console.log(error))
// setTimeout(()=>{
//   let i = 0;
//   for(let element of comments_list){
    
//     if(i<3){
//       let comment_ = document.createElement("div");
//       comment_.classList.add("swiper-slide", "slide");

//       let rating = document.createElement("div");
     
//         for(let r = 0;r<element.rates;r++){
//           rating.innerHTML += `<i class="fas fa-star checked"></i>`;
//         }
//         for(let g = 0; g<5-element.rates;g++){
//           rating.innerHTML += `<i class="fas fa-star"></i>`;
//         }
      
//       console.log(rating);
     
//       comment_.innerHTML = `
//       <div class="customer_picture animate__animated animate__zoomIn">
//       <figure>
//           <img class="comment_customer" src="${element.profilePicture}" alt="">
//       </figure>
//   </div>
//   <div class="customer-content animate__animated animate__fadeInUp">
//       <ul>
//           <li>
//               <p>
//                  “${element.customerComment}”
//               </p>
//           </li>
//           <li class="customer_ratings">
//               ${rating.innerHTML}
//           </li>
//           <li>
//               <span>
//                 ${element.customerName} ˗ ${element.customerOrigin}
//               </span>
//           </li>
//       </ul>
//   </div>
//         `
      
//     //  console.log(comment_)
//       comments_.unshift(comment_);
//       // console.log(comments_);
//     }

    
//     i++
//   }
  
  
//   comments_.forEach((item)=>{
//     // console.log(item);
//     comments_container.prepend(item);
//     // console.log(comments_container)
//   })
// },4000)



let card_box = document.querySelector(".container--cards");
let cards = [];

// axios.get("https://ramin-final-default-rtdb.firebaseio.com/blog.json").then(
//   response => response.data
// ).then(data=>{
//   for(let key in data){
//     cards.unshift(data[key]);
//   }
// }).catch(error => {throw error})

async function getBlog(){
  let blogArray = []
  const response = await axios.get("https://ramin-final-default-rtdb.firebaseio.com/blog.json")
  const data = await response.data
  for(let key in data){
    blogArray.unshift(data[key])
  }
  return blogArray
}

getBlog().then(res=>{
  for(let element of res){
    let card = document.createElement("div");
        card.classList.add("container--cards--card")
        card.innerHTML = `
        <div class="pic">
            <a id="${element.id}" class = "card_link" href="./assets/pages/Blog/card/card.html ">
                <figure>
                    <img class="blog_picture" src="${element.card_img}" alt="">
                </figure>
            </a>
        </div>

                <a  id="${element.id}" class = "card_link" href="./assets/pages/Blog/card/card.html ">
                    <h3>
                        ${element.headline}
                    </h3>
                </a>       

          
                 <p>
                     ${element.description}
                </p>
         
                <a  id="${element.id}" class = "card_link" href="./assets/pages/Blog/card/card.html ">
                  Continue Reading
                  <i class="fas fa-arrow-right"></i>
                </a>
        
        `
        card_box.appendChild(card);
    }

    let links = document.querySelectorAll(".card_link");

    links.forEach((link)=>{
        link.addEventListener("click",()=>{
            localStorage.setItem("card_id",link.id);
        })
    })
}).catch(error=>console.log(error))


// setTimeout(()=>{
//     for(element of cards){
//         let card = document.createElement("div");
//         card.classList.add("container--cards--card")
//         card.innerHTML = `
//         <div class="pic">
//             <a id="${element.id}" class = "card_link" href="./assets/pages/Blog/card/card.html ">
//                 <figure>
//                     <img class="blog_picture" src="${element.card_img}" alt="">
//                 </figure>
//             </a>
//         </div>

//                 <a  id="${element.id}" class = "card_link" href="./assets/pages/Blog/card/card.html ">
//                     <h3>
//                         ${element.headline}
//                     </h3>
//                 </a>       

          
//                  <p>
//                      ${element.description}
//                 </p>
         
//                 <a  id="${element.id}" class = "card_link" href="./assets/pages/Blog/card/card.html ">
//                   Continue Reading
//                   <i class="fas fa-arrow-right"></i>
//                 </a>
        
//         `
//         card_box.appendChild(card);
//     }

//     let links = document.querySelectorAll(".card_link");

//     links.forEach((link)=>{
//         link.addEventListener("click",()=>{
//             localStorage.setItem("card_id",link.id);
//         })
//     })
// },4000)

const emailSend = document.querySelector(".email-send")
const emailSendButton = document.querySelector(".email-send-button")
function sendMail(){
  fetch("https://ramin-final-default-rtdb.firebaseio.com/email.json",{
    method : "POST",
    body: JSON.stringify({id : Date.now(), email : emailSend.value})
  })
}

emailSendButton.addEventListener('click',()=>{
  sendMail()
  emailSend.value = ""
});