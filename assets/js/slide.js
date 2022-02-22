
setTimeout(()=>{
    let slides = document.querySelectorAll(".content");
    let animated = document.querySelectorAll(".animate__animated")
    var swipe = new Swiper(".mySwiper", {
        spaceBetween: 30,
        autoplay:{
            delay:7000,
            disableOnInteraction: false,
        },
        loop:true,
        speed:400,
        effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next1",
          prevEl: ".swiper-button-prev1",
        },
        pagination: {
          el: ".swiper-pagination1",
          clickable: true,
        },
    
        on:{
            slideChange:function(swiper){
                animated.forEach(element=>{
                    if(element.classList.contains("main3")){
                        setTimeout(()=>{
                            
                            element.classList.add("animate__animated","animate__rotateInDownLeft");
                            element.addEventListener('animationend',()=>{
                                // console.log("bitfi");
                                element.classList.remove("animate__animated","animate__rotateInDownLeft");
                                
                            })
                        },0)
                    }
    
                    if(element.classList.contains("text3")){
    
                        setTimeout(()=>{
                            element.classList.add("animate__animated","animate__rotateInUpRight");
                            element.addEventListener('animationend',()=>{
                                // console.log("bitfi");
                                element.classList.remove("animate__animated","animate__rotateInUpRight");
                                
                            })
                        },0)
                        
                    }
                    if(element.classList.contains("button3")){
                        setTimeout(()=>{
                            element.classList.add("animate__animated","animate__rotateIn");
                            element.addEventListener('animationend',()=>{
                                // console.log("bitfi");
                                element.classList.remove("animate__animated","animate__rotateIn");
                                
                            })
                        },0)
                    }
    
    
                    if(element.classList.contains("main1")){
                        setTimeout(()=>{
                            element.classList.add("animate__animated","animate__fadeInDown");
                            element.addEventListener('animationend',()=>{
                                // console.log("bitfi");
                                element.classList.remove("animate__animated","animate__fadeInDown");
                                
                            })
                        },0)
                    }
    
                    if(element.classList.contains("text1")){
                        setTimeout(()=>{
                            element.classList.add("animate__animated","animate__fadeInUp");
                            element.addEventListener('animationend',()=>{
                                // console.log("bitfi");
                                element.classList.remove("animate__animated","animate__fadeInUp");
                               
                            })
                        },0)
                     }
                     if(element.classList.contains("button1")){
                        setTimeout(()=>{
                            element.classList.add("animate__animated","animate__zoomIn");
                            element.addEventListener('animationend',()=>{
                                element.classList.remove("animate__animated","animate__zoomIn");
                               
                            })
                        },0)
                        //  console.log(element)
                    }
    
                     
                    if(element.classList.contains("main2")){
                        setTimeout(()=>{
                            element.classList.add("animate__animated","animate__rollIn");
                            element.addEventListener('animationend',()=>{
                                // console.log("bitfi");
                                element.classList.remove("animate__animated","animate__rollIn");
                                
                            })
                        },0)
                            
                    }
                    if(element.classList.contains("text2")){
                        setTimeout(()=>{
                            element.classList.add("animate__animated","animate__lightSpeedInRight");
                            element.addEventListener('animationend',()=>{
                                // console.log("bitfi");
                                element.classList.remove("animate__animated","animate__lightSpeedInRight");
                               
                            })
                        },0)
                    }
    
                    if(element.classList.contains("button2")){
                        console.log(element)
                        setTimeout(()=>{
                            element.classList.add("animate__animated","animate__zoomIn");
                            element.addEventListener('animationend',()=>{
                                // console.log("bitfi");
                                element.classList.remove("animate__animated","animate__zoomIn");
                                
                            })
                        },0)
                    }
                })
    
            }
        }
      });
},2000)



// second swiper

//events section cards
let card_1 = document.querySelector(".card1");
let card_2 = document.querySelector(".card2");
let card_3 = document.querySelector(".card3");


card_1.addEventListener('animationend',()=>{
    card_1.classList.remove("animate__animated","animate__zoomIn");   
      
})
card_2.addEventListener('animationend',()=>{
    card_2.classList.remove("animate__animated","animate__fadeInDown");   
        
})

card_3.addEventListener('animationend',()=>{
    card_3.classList.remove("animate__animated", "animate__rotateInUpLeft");          
})


let swiper2 = new Swiper('.mySwiper2', {
    spaceBetween: 30,
    autoplay:{
        delay:7000,
        disableOnInteraction: false,
    },
    speed:400,
    effect: "fade",
    navigation: {
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev2",
    },
    pagination: {
          el: ".swiper-pagination2",
          clickable: true,
    },

    on:{
        slideChange:function(swiper){
            if(swiper.realIndex == 0){
                card_1.classList.add("animate__animated","animate__zoomIn");
            }
            if(swiper.realIndex == 1){
                card_2.classList.add("animate__animated","animate__fadeInDown");
            }
            if(swiper.realIndex == 2){
                card_3.classList.add("animate__animated","animate__rotateInUpLeft");
            }
        }
    }
    
  });


//   customer
let customer = document.querySelectorAll(".customer_picture");
let customer_content = document.querySelectorAll(".customer-content");


customer_content.forEach((element)=>{
    element.addEventListener('animationend',()=>{
        element.classList.remove("animate__animated","animate__fadeInUp");   
    })
})

customer.forEach((element)=>{
    element.addEventListener('animationend',()=>{
        element.classList.remove("animate__animated","animate__zoomIn");   
    })
})


  let swiper3 = new Swiper('.mySwiper3', {
    spaceBetween: 30,
    slidesPerView: 1,
    autoplay:{
        delay:7000,
        disableOnInteraction: false,
    },
    speed:400,
    
    navigation: {
          nextEl: ".swiper-button-next3",
          prevEl: ".swiper-button-prev3",
    },
    pagination: {
          el: ".swiper-pagination3",
          clickable: true,
    },

    on:{
        slideChange:function(swiper){
                customer[swiper.realIndex].classList.add("animate__animated","animate__zoomIn");
                customer_content[swiper.realIndex].classList.add("animate__animated","animate__fadeInUp");
        }
    }
  });
