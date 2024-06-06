const header = document.querySelector("header");

window.addEventListener('scroll', function() {
    var scrollTopPosition = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTopPosition > 200){
        header.classList.add("bg-brown");
        header.classList.remove("bg-transparent");
    }else{
        header.classList.remove("bg-brown");
        header.classList.add("bg-transparent");
    }
});
