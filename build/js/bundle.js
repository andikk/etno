var menuBtn=document.querySelector(".js-menu-btn"),navigationList=document.querySelector(".navigation__list"),navigationLink=document.querySelector(".navigation__link");menuBtn.addEventListener("click",function(){navigationList.classList.toggle("opened"),menuBtn.classList.toggle("js-change")}),navigationLink.addEventListener("click",function(){navigationList.classList.toggle("opened"),menuBtn.classList.toggle("js-change")});