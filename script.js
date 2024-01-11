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

//-----Work Section-----

const worksData = [
  {
    imgSrc: "images/budget app.jpg",
    link: "https://cizzla.onrender.com/",
    title: "Budget Track Website",
    code: "https://github.com/iankiema/Budget-App",
    description: "The Budget App is centered around the creation of a mobile web application designed for budget management. In this application, users can efficiently oversee their financial transactions by categorizing them. By doing so, they can gain insight into their spending patterns, allowing them to track their expenses."
  },
  {
    imgSrc: "images/online bookstore.jpg",
    link: "https://online-bookstore-module.netlify.app/",
    title: "Online Bookstore",
    code: "https://github.com/iankiema/Bookstore-Capstone",
    description: "Bookstore website is an application used to provide the user with online books that they can access,comment and like."
  },
  {
    imgSrc: "images/Harmony fest.jpg",
    link: "https://iankiema.github.io/Harmony-Fest/",
    title: "Harmony Fest Website",
    code: "https://github.com/iankiema/Harmony-Fest",
    description: "Harmony Fest is an exciting and innovative online platform that celebrates the beauty of music and brings together music enthusiasts from all around the world.This website was built with HTML, CSS and Javascript."
  },
  {
    imgSrc: "images/work3.jpg",
    link: "https://iankiema.github.io/Mbari-ya-Nderi-Weather-App/",
    title: "Weather App",
    code: "https://github.com/iankiema/Mbari-ya-Nderi-Weather-App",
    description: "'Mbari-ya-Nderi' meaning the Family of Nderi is an app I made to help my family and other users to know the exact weather condition in their regions. It was made with HTML,CSS and Javascript."
  },
  {
    imgSrc: "images/Awesome books.jpg",
    link: "https://awesomebookstores.netlify.app/",
    title: "Awesome Books",
    code: "https://github.com/iankiema/Bookstore-Capstone",
    description: "Awesome Bookstore React website is an application used to add,display and delete books."
  },
  {
    imgSrc: "images/space travelers hub.jpg",
    link: "https://space-mission-website.netlify.app/",
    title: "Space Travelers Hub",
    code: "https://github.com/iankiema/Space-X-Website",
    description: "This is a commercial website for a company called Space X. This website enables users to reserve rockets and book missions for going to space."
  },
  {
    imgSrc: "images/Country details.jpg",
    link: "https://dev--country-details-website.netlify.app/",
    title: "Country Details App",
    code: "https://github.com/iankiema/Country-Info-webapp",
    description: "Country Info Webapp is an application that allows users to access the details of various countries that have been populated on the homepage."
  },
  {
    imgSrc: "images/Math magician.jpg",
    link: "https://math-magician-calc.netlify.app",
    title: "Math Magician App",
    code: "https://github.com/iankiema/Math-Magicians",
    description: "Math Magicians Math Magicians website is an application used to display a single page application that contains home section,a calculator section and a quote section."
  },
];

function createWorkElement(work) {
  return `
      <div class="works_img card shadow  col-md-3 mb-4">
     
          <h5 class="card-title">${work.title}</h5>
          <img src="${work.imgSrc}" class="card-img-top" alt="">
          <div class="card-body">
            <p>
              ${work.description}
            </p>
            <a href="${work.link}" class="works_link" target="_blank"></i>Demo</a>
            <a href="${work.code}" class="works_link" target="_blank"></i>Code</a>
          </div>
      
      </div>
  `;
}

function appendWorksToContainer(containerId, works) {
  const container = document.getElementById(containerId);
  works.forEach((work) => {
    container.innerHTML += createWorkElement(work)
  })
}

appendWorksToContainer("works_container", worksData)
