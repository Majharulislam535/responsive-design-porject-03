 
 const mobileBtn = document.getElementById('mobile-cta');
 const nav = document.querySelector('nav');
 const mobileExit = document.getElementById('exit-cta');

  mobileBtn.addEventListener('click',()=>{
       nav.classList.add('menu-btn');
  })

  mobileExit.addEventListener('click',()=>{
      nav.classList.remove('menu-btn');
  })