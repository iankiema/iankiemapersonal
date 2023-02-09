/*----Menu show y hidden----*/
const navMenu = document.getElementById("nav-menu"),
      toggleMenu = document.getElementById("nav-toggle"),
      closeMenu = document.getElementById('nav-close')

// ------show-----
toggleMenu.addEventListener('click',()=>{
  navMenu.classList.toggle('show')
})

//------Hide-----
closeMenu.addEventListener('click',()=>{
  navMenu.classList.remove('show')
})

//------Remove Menu-----
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
  navMenu.classList.remove('show') 
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//-----Scroll sections active link-----
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionid = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav_menu a[href*=' + sectionid +']').classList.add('active')
    }else{
      document.querySelector('.nav_menu a[href*=' + sectionid +']').classList.remove('active')
    }
  })
}

  function sendEmail(){
        
            Email.send({
            Host : "smtp.elasticemail.com",
            Username : "kiemaian.ik@gmail.com",
            Password : "C0260BEE1BCC3D2C91A9FC86B6153BCBACDB",
            To : 'kiemaian.ik@gmail.com',
            From : "kiemaian.ik@gmail.com",
            Subject : "New contact from personal website",
            Body : "Name:" + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Project: " + document.getElementById("continent").value + "<br> Message:" + document.getElementById("message").value
        }).then(
        message => alert("Your message has been sent!")
        );
        }

const activeLinks = document.querySelectorAll(".nav_link");

activeLinks.forEach((activeLink) => {
  removeActive()
  activeLink.addEventListener("click",(event) =>{
    event.target.classList.add("active");
  });
});

function removeActive(){
  activeLinks.forEach((activeLink) =>{
    activeLink.classList.remove("active")
  })
}
