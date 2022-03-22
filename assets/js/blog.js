let card_box = document.querySelector(".container-left");
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
    for(element of res){
        let card = document.createElement("li");
        card.classList.add("card")
        card.innerHTML = `
        <div class="pic">
            <a id="${element.id}" class = "card_link" href="./card/card.html">
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
                <a  id="${element.id}" class = "card_link" href="./card/card.html">
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
             <a  id="${element.id}" class = "card_link" href="./card/card.html">
                  Continue Reading
                  <i class="fas fa-arrow-right"></i>
             </a>
        </div>
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
//         let card = document.createElement("li");
//         card.classList.add("card")
//         card.innerHTML = `
//         <div class="pic">
//             <a id="${element.id}" class = "card_link" href="./card/card.html">
//                 <figure>
//                     <img class="blog_picture" src="${element.card_img}" alt="">
//                 </figure>
//             </a>
//             <div class="blog_time">
//                  <span class="blog_day">${element.day}</span>
//                  <span class="blog_month_year">${element.month.slice(0,3)},${element.year}</span>
//             </div>
//         </div>
//         <div class="content">
//             <div class="name">
//                 <a  id="${element.id}" class = "card_link" href="./card/card.html">
//                     <h3>
//                         ${element.headline}
//                     </h3>
//                 </a>       
//             </div>

//             <div class="span">
//                 <p class="blog_redactor">by Admin</p>
//                 <span>|</span>
//                 <p class="blog_date">${element.day} ${element.month}, ${element.year} </p>
//                 <span>|</span>
//                 <p class="blog_type">Cooking, Food </p>
//                 <span>|</span>
//                 <p class="blog_comments">8 comments</p>
//             </div>
//             <div class="blog_content">
//                  <p>
//                      ${element.description}
//                 </p>
//              </div>
//              <a  id="${element.id}" class = "card_link" href="./card/card.html">
//                   Continue Reading
//                   <i class="fas fa-arrow-right"></i>
//              </a>
//         </div>
//         `
//         card_box.appendChild(card);
//     }

//     let links = document.querySelectorAll(".card_link");

//     links.forEach((link)=>{
//         link.addEventListener("click",()=>{
//             localStorage.setItem("card_id",link.id);
//         })
//     })
// },2000)