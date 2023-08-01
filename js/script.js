const search = document.querySelector(".search #search"),
    searchbtn = document.querySelector(".search label")




searchbtn.addEventListener("click", () => {
    search.style.display = search.style.display == "block" ? "none" : "block";
})

const menu = document.querySelector(".menu"),
      close = document.querySelector(".close"),
      links = document.querySelector("nav .links");


menu.addEventListener("click", () => {
        links.style.right = 0;
        
        close.addEventListener("click", () => {
            links.style.right = "-200px";
        })
})