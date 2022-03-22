let card_box = document.querySelector(".container-left");
let cards = [];

// axios.get("https://ramin-final-default-rtdb.firebaseio.com/blog.json").then(
//   response => response.data
// ).then(data=>{
//   for(let key in data){
//     cards.unshift(data[key]);
//   }
//   console.log(cards)
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

let ID = localStorage.getItem("card_id")

  
  
getBlog().then(res=>{
    for(element of res){
        if(element.id == ID){
            let card = document.createElement("div");
            card.classList.add("blog_card")
            card.innerHTML = `
            <div class="pic">
                <a class="${element.id}" href="#">
                    <figure>
                        <img class="blog_picture" src="${element.card_img}" alt="">
                    </figure>
                </a>
                <div class="blog_time">
                     <span class="blog_day">${element.day}</span>
                     <span class="blog_month_year">${element.month.slice(0,3)},${element.year}</span>
                </div>
            </div>
            <div class="content">
                <div class="name">
                    <a class="${element.id}" href="#">
                        <h3>
                            ${element.headline}
                        </h3>
                    </a>       
                </div>
    
                <div class="span">
                    <p class="blog_redactor">by Admin</p>
                    <span>|</span>
                    <p class="blog_date">${element.day} ${element.month}, ${element.year} </p>
                    <span>|</span>
                    <p class="blog_type">Cooking, Food </p>
                    <span>|</span>
                    <p class="blog_comments">8 comments</p>
                </div>
                <div class="blog_content">
                     <p>
                         ${element.description}
                    </p>
                 </div>
            </div>
            `
            card_box.prepend(card);
        }
    }
}).catch(error=>console.log(error))



// setTimeout(()=>{
//     for(element of cards){
//         if(element.id == ID){
//             let card = document.createElement("div");
//             card.classList.add("blog_card")
//             card.innerHTML = `
//             <div class="pic">
//                 <a class="${element.id}" href="#">
//                     <figure>
//                         <img class="blog_picture" src="${element.card_img}" alt="">
//                     </figure>
//                 </a>
//                 <div class="blog_time">
//                      <span class="blog_day">${element.day}</span>
//                      <span class="blog_month_year">${element.month.slice(0,3)},${element.year}</span>
//                 </div>
//             </div>
//             <div class="content">
//                 <div class="name">
//                     <a class="${element.id}" href="#">
//                         <h3>
//                             ${element.headline}
//                         </h3>
//                     </a>       
//                 </div>
    
//                 <div class="span">
//                     <p class="blog_redactor">by Admin</p>
//                     <span>|</span>
//                     <p class="blog_date">${element.day} ${element.month}, ${element.year} </p>
//                     <span>|</span>
//                     <p class="blog_type">Cooking, Food </p>
//                     <span>|</span>
//                     <p class="blog_comments">8 comments</p>
//                 </div>
//                 <div class="blog_content">
//                      <p>
//                          ${element.description}
//                     </p>
//                  </div>
//             </div>
//             `
//             card_box.prepend(card);
//         }
//     }
// },2000)