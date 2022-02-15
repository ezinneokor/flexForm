 //const contactUs = document.querySelector(".nav-menu>li.nav-item:nth-child(3)>a:first-child")
 const contactUs = document.querySelector(".nav-item-parent")
 const subNav = document.querySelector(".sub-nav");
 const main = document.querySelector(".main");
 const login = document.querySelector(".nav-item-login");
 const form = document.querySelector(".form")
 const btn = document.querySelector("#btn")

 contactUs.onmouseover = function(){
     subNav.style.display = 'block';
 }

 contactUs.onmouseleave = function(){
     subNav.style.display = 'none';
 }   
//here we used event capturing = true to enable click event
document.body.addEventListener("click", function(){
  subNav.style.display = 'none';
}, true)

login.onclick =function(){
    form.style.transform = "translateY(0)"
    
}

btn.onclick = function(){
    
    form.style.transform = "translateY(-170%)";
    form.style.transition = "all, 2s";
}

// login.addEventListener("click",function(){
//   form.style.display = 'block'
// }, true)