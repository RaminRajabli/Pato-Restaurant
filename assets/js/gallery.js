let pictures = document.querySelector(".filter-item");
let pics = [];

// axios.get("https://ramin-final-default-rtdb.firebaseio.com/gallery.json").then(
//   response => response.data
// ).then(data=>{
//   for(let key in data){
//     pics.unshift(data[key]);
//   }
//   console.log(pics[0].category);
// }).catch(error => {throw error})

async function getGallery(){
  let galleryArray = []
  const response = await axios.get("https://ramin-final-default-rtdb.firebaseio.com/gallery.json")
  const data = await response.data
  for(let key in data){
    galleryArray.unshift(data[key])
  }
  return galleryArray
}


getGallery().then(res=>{
  for(pic of res){
    let li = document.createElement("li");
    li.setAttribute("data-item",pic.category);
    li.innerHTML = `
              <a data-fancybox="main_gallery" href="${pic.picture}">
                        <i class="fa fa-search"></i>
                        <img class="rounded"  src="${pic.picture}" alt="">
              </a>
              <img class="rounded"  src="${pic.picture}" alt="">
    `
    pictures.prepend(li);
}
}).catch(error=>console.log(error))



// setTimeout(()=>{
//     for(pic of pics){
//         let li = document.createElement("li");
//         li.setAttribute("data-item",pic.category);
//         li.innerHTML = `
//                   <a data-fancybox="main_gallery" href="${pic.picture}">
//                             <i class="fa fa-search"></i>
//                             <img class="rounded"  src="${pic.picture}" alt="">
//                   </a>
//                   <img class="rounded"  src="${pic.picture}" alt="">
//         `
//         pictures.prepend(li);
//     }
// },2000)