window.onload = (event) => {
    setTimeout(function(){
        document.querySelector(".loader").style.display="none"
        document.querySelector(".site-content").style.display = "block"
    },1000);
};